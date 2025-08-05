import React from 'react';

function OfficeList() {
  const offices = [
    {
      name: "Tech Park A",
      rent: 45000,
      address: "Koramangala, Bangalore",
      image: "/office1.jpeg"
    },
    {
      name: "Corporate Hub B",
      rent: 75000,
      address: "Gachibowli, Hyderabad",
      image: "/office2.jpg"
    },
    {
      name: "StartUp Zone C",
      rent: 60000,
      address: "Baner, Pune",
      image: "/office3.jpg"
    }
  ];

  const headingStyle = {
    textAlign: "center",
    fontSize: "28px",
    margin: "20px 0",
    color: "#333"
  };

  return (
    <div>
      <h1 style={headingStyle}>Office Space Rentals</h1>

      {offices.map((office, index) => {
        const rentStyle = {
          color: office.rent > 60000 ? 'green' : office.rent < 60000 ? 'red' : 'orange',
          fontWeight: 'bold'
        };

        return (
          <div key={index} style={{ margin: '20px', border: '1px solid #ccc', padding: '15px' }}>
            <img src={office.image} alt={office.name} style={{ width: '300px', height: '150px' }} />
            <h2>{office.name}</h2>
            <p><span style={rentStyle}>Rent: ₹{office.rent}</span></p>
            <p>Address: {office.address}</p>
          </div>
        );
      })}
    </div>
  );
}

export default OfficeList;
