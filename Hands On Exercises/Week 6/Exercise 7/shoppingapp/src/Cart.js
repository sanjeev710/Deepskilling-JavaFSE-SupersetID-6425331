import React from 'react';

class Cart extends React.Component {
  render() {
    return (
      <div className="cart">
        <h3>{this.props.Itemname}</h3>
        <p>Price: ₹{this.props.Price}</p>
      </div>
    );
  }
}

export default Cart;
