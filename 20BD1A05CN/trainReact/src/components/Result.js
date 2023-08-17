import React from 'react';
import { useParams } from 'react-router-dom';

function Result() {
  const { from, to } = useParams(); 

  const SearchFake = [];

  if (from === 'Delhi' && to === 'Hyderabad') {
    SearchFake.push(
      { trainName: 'Hyderabad also door hai Express', departureTime: '21:00', price: 'RS.1880' ,ArrivalTime: '23:00+1day' }
    );
  } else if (from === 'Hyderabad' && to === 'Delhi') {
    SearchFake.push(
      { trainName: 'Delhi Door Hai Express', departureTime: '13:00', price: 'RS.2000', ArrivalTime: '14:00+1day'}
    );
  }

  return (
    <div className="container mt-5">
      <h2>Search Results for {from} to {to}</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Train Name</th>
            <th>Departure Time</th>
            <th>Arrival Time</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {SearchFake.map((result, index) => (
            <tr key={index}>
              <td>{result.trainName}</td>
              <td>{result.departureTime}</td>
              <td>{result.ArrivalTime}</td>
              <td>{result.price}</td>
              <td><button className='btn btn-primary' id='book'>Book Now</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Result;
