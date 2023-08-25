import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
    const { TotalBudget, CartValue, Currency } = useContext(AppContext);
    const totalExpenses = TotalBudget - CartValue;

    return (
        <div className='alert alert-secondary'>
            <span>Remaining: {Currency}{totalExpenses}</span>
        </div>
    );
};

export default Remaining;