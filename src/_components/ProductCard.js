import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductCard extends Component {

  render() {
    const { product } = this.props;
    return (
    <div className="thumbnail">
      <img src={`https://robohash.org/${product.id}.png`} alt="..."/>
      <div className="caption">
        <h3>{product.name}</h3>
        <p>Rs. {product.price}</p>
        <p> <Link className="productNameLink" to={`/products/${product.id}`}>View</Link></p>
      </div>
    </div>
    );
  }
}

export default ProductCard;