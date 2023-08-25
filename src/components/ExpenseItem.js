import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaPlusCircle, FaMinusCircle, FaTimesCircle } from 'react-icons/fa';

const ExpenseItem = (props) => {
    const { dispatch, Currency} = useContext(AppContext);

    const handleDeleteItem = (flType) => {
      const item = {
        id: props.id,
      };
      if (flType === "increase") {
        dispatch({
          type: "INCREASE_ITEM",
          payload: item,
        });
      }
      if (flType === "decrease") {
        dispatch({
          type: "DECREASE_ITEM",
          payload: item,
        });
      }
      if (flType === "delete") {
        dispatch({
          type: "DELETE_ITEM",
          payload: item,
        });
      }
    };


    return (
        <tr>
        <td>{props.department}</td>
        <td>{Currency}{parseInt(props.budget)}</td>
        <td><FaPlusCircle className='like-btn' size='2.2em' color="green" onClick={() => handleDeleteItem('increase')}></FaPlusCircle></td>
        <td><FaMinusCircle className='like-btn' size='2.2em' color="red" onClick={() => handleDeleteItem('decrease')}></FaMinusCircle></td>
        <td><FaTimesCircle className='like-btn' size='2.2em' color="black" onClick={() => handleDeleteItem('delete')}></FaTimesCircle></td>
        </tr>
    );
};

export default ExpenseItem;