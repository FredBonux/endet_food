import React, {Component} from 'react';
import Quagga from 'quagga';

export default class Scanner extends Component {

    render() {
        return (
            <div id="interactive" className="viewport"/>
        );
    }

    componentWillUnmount() {
        Quagga.offDetected(this._onDetected);
    }

    _onDetected(result) {
        this.props.onDetected(result);
    }

    stop() {
        Quagga.stop();
    }

    componentDidMount() {
        Quagga.init({
            inputStream: {
                type: "LiveStream",
                constraints: {
                    width: window.innerWidth,
                    height: window.innerHeight - 72,
                    facingMode: "environment"
                }
            },
            locator: {
                patchSize: "medium",
                halfSample: true
            },
            numOfWorkers: 2,
            decoder: {
                readers: [
                    "code_128_reader",
                    "ean_reader",
                    "upc_reader"
                ]
            },
            multiple: false,
            locate: true
        }, function (err) {
            if (err) {
                return console.log(err);
            }
            Quagga.start();
        });
        Quagga.onDetected(this._onDetected.bind(this));
    }
};
