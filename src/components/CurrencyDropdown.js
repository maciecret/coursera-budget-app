import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext'

const CurrencyDropdown = () => {
  const { dispatch, currency } = useContext(AppContext);

  const handleCurrencyChange = (newCurrency) => {
    dispatch({ type: 'CHG_CURRENCY', payload: newCurrency });
  };

  return (
    <div style={{ backgroundColor: 'lightgreen', padding: '10px' }}>
      <label>Select Currency: </label>
      <select style={{ backgroundColor: 'lightgreen' }} value={currency} onChange={(e) => handleCurrencyChange(e.target.value)}>
        <option value="$">Dollar ($)</option>
        <option value="£">Pound (£)</option>
        <option value="€">Euro (€)</option>
        <option value="₹">Ruppee (₹)</option>
      </select>
    </div>
  );
};

export default CurrencyDropdown;
