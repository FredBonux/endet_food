import moment from "moment";

class _PantryLocalStorageService {
    static EXPIRING_DAYS = 7;
    _pantry = null;

    get lsKey() {
        return "endet_pantry";
    }

    getPantry() {
        if(this._pantry) return this._pantry;

        const lsResult = localStorage.getItem(this.lsKey);
        const jsonResult = JSON.parse(lsResult);
        if(!jsonResult) return [];

        this._pantry = jsonResult;
        return jsonResult;
    }

    getExpiring() {
        let pantry = this.getPantry();
        return pantry.map(p => {
                p.dateDiff = -moment(new Date()).diff(p.expiryDate, "days");
                return p;
            }).filter(p => p.dateDiff <= _PantryLocalStorageService.EXPIRING_DAYS)
            .sort((a, b) => a.dateDiff - b.dateDiff);
    }

    setPantry(newPantry) {
        const lsString = JSON.stringify(newPantry);
        if(!lsString) return;
        localStorage.setItem(this.lsKey, lsString);
        this._pantry = newPantry;
    }

    insertIntoPantry(product) {
        let pantry = this.getPantry();
        let index = pantry.findIndex(p => p.code === product.code);
        if(index < 0) return this._addToPantry(product);
        pantry[index] = product;
        this.setPantry(pantry);
    }

    _addToPantry(product) {
        let pantry = this.getPantry();
        pantry.push(product);
        this.setPantry(pantry);
    }

    getProduct(code) {
        let pantry = this.getPantry();
        return pantry.find(p => p.code === code);
    }
}

const PantryService = new _PantryLocalStorageService();
export default PantryService;
