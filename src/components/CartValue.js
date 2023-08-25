import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CartValue = () => {
    const { CartValue, Currency } = useContext(AppContext);

    return (
        <div className='alert alert-primary'>
            <span>Spent so for: {Currency}{CartValue}</span>
        </div>
    );
};

export default CartValue;