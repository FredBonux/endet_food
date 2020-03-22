import React from "react";
import './SearchContainer.scss';
import { connect } from "react-redux";
import SearchResult from "../../components/SearchResult/SearchResult";

const SearchContainer = ({searchState, onProductSelect}) => {

    const onProductClick = product => {
        if(onProductSelect && typeof onProductSelect === 'function') onProductSelect(product);
    };

    const mappedResults = searchState?.results.map(product =>
        <SearchResult
            key={`product-${product.code}`}
            product={product}
            onClickEvent={() => onProductClick(product)}
        />
        );
    return (
      <div className={'SearchContainer'}>
          {searchState.success && mappedResults}
          {searchState.loading && (<span className={'loading'}>Cerco i prodotti...</span>)}
          {!searchState.loading && !searchState.success && !searchState.error ? (
              <span className={'waiting'}>Inserisci il nome del prodotto</span>
          ) : ''}
      </div>
    );
};

export default connect(
    state => ({
        searchState: state.search
    })
)(SearchContainer);
