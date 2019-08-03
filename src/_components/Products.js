import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


//presentation components
import ProductCard from '../_components/ProductCard';

class Products extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      showAddProduct: false,
      products:[{
        id: 1,
        name: 'product1',
        price: 100
      },
      {
        id: 2,
        name: 'product2',
        price: 200
      },
      {
        id: 3,
        name: 'product3',
        price: 300
      }],
      name: '',
      price: '',
      submitted: false
  };

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.showAddProduct = this.showAddProduct.bind(this);
  }
  

  componentDidMount() {
  }

  showAddProduct(){
    this.setState({showAddProduct: !this.state.showAddProduct})
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
}

handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const {products, name, price} = this.state;
    products.push({
      id: Math.floor(Math.random(100,100000)),
      name: name,
      price: price
    })
    this.setState({products, showAddProduct: !this.state.showAddProduct, name: '',
      price: ''})
}

  render() {
    let {loggingIn} = this.props;
    const {products, name, price, submitted, showAddProduct } = this.state;
    return (
      <div className="container">
        <div className="page-header">
        <Link to="/" className="btn btn-link">go back</Link>
        <h1>Products List</h1>
          <button onClick={this.showAddProduct}>+ Add Product</button>
        </div>

        {showAddProduct==true &&  
        <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !name ? ' has-error' : '')}>
                        <label htmlFor="name">Product Name</label>
                        <input type="text" className="form-control" name="name" value={name} onChange={this.handleChange} />
                        {submitted && !name &&
                            <div className="help-block">Name is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !price ? ' has-error' : '')}>
                        <label htmlFor="name">Product price</label>
                        <input type="text" className="form-control" name="price" value={price} onChange={this.handleChange} />
                        {submitted && !price &&
                            <div className="help-block">price is required</div>
                        }
                    </div>
                    
                    <div className="form-group">
                        <button className="btn btn-primary">Add Product</button>
                        {loggingIn &&
                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        }
                    </div>
                </form>
        }
        <div className="row">
          {products.map((_product, i) => {
            return (
              <div className="col-md-3 ">
                <ProductCard
                  i={i}
                  key={_product.id}
                  product={_product}
                />
              </div>
            );
          })}
        </div>

      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    products: state.products
  };
}


const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);