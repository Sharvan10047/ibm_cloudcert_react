import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { TotalBudget, Currency } = useContext(AppContext);
    const { dispatch } = useContext(AppContext);
  
    const changeBudget = (val) => {
      dispatch({
        type: "CHG_BUDGET",
        payload: val,
      });
    };
    
    return (
      <div className="alert alert-danger drop-budget">
        <span>
          Budget: {Currency}
          <input
            required="required"
            type="number"
            id="budget"
            value={TotalBudget}
            style={{ size: 10 }}
            onChange={(event) => changeBudget(event.target.value)}
          />
        </span>
      </div>
    );
};

export default Budget;