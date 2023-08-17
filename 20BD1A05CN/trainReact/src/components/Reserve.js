import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Reserve.css';

function Reserve() {
  const [from, setFrom] = useState('Delhi'); 
  const [to, setTo] = useState('Hyderabad');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [numPeople, setNumPeople] = useState(1);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/results/${from}/${to}/${date}/${numPeople}`);
  };
  const handleFromChange = (e) => {
    setFrom(e.target.value);
  };

  const handleToChange = (e) => {
    setTo(e.target.value);
  };

  return (
    <div className="container mt-5 reservation-form">
      <h2 className="mb-4">Fake IRCTC</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="from" className="form-label">
            From:
            <select
              id="from"
              className="form-control"
              value={from}
              onChange={handleFromChange}
            >
              <option value="Delhi">Delhi</option>
              <option value="Hyderabad">Hyderabad</option>
            </select>
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="to" className="form-label">
            To:
            <select
              id="to"
              className="form-control"
              value={to}
              onChange={handleToChange}
            >
              <option value="Hyderabad">Hyderabad</option>
              <option value="Delhi">Delhi</option>
            </select>
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">
            Date:
            <input
              type="date"
              className="form-control"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="numPeople" className="form-label">
            Number of People:
            <input
              type="number"
              className="form-control"
              id="numPeople"
              value={numPeople}
              onChange={(e) => setNumPeople(e.target.value)}
              min="1"
            />
          </label>
        </div>
        <button type="submit" className="btn btn-primary">Search Trains</button>
      </form>
    </div>
  );
}

export default Reserve;
