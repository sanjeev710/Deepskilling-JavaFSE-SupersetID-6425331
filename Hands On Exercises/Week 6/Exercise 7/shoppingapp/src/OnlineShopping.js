import React from 'react';
import Cart from './Cart';
import './OnlineShopping.css';

class OnlineShopping extends React.Component {
  render() {
    const items = [
      { Itemname: 'Shoes', Price: 1500 },
      { Itemname: 'Bag', Price: 800 },
      { Itemname: 'Watch', Price: 2500 },
      { Itemname: 'Shirt', Price: 1200 },
      { Itemname: 'Book', Price: 500 }
    ];

    return (
      <div className='table-container'>
        <h2>Online Shopping Cart</h2>
        <table className='shopping-table'>
          <thead>
            <th>
              Item Name:
            </th>
            <th>
              Price:(₹)
            </th>
          </thead>
          <tbody>
            {items.map((items, index) => (
              <tr key={index}>
                <td>{items.Itemname}</td>
                <td>{items.Price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default OnlineShopping;
