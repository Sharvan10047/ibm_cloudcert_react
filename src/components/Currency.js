import React, { useContext } from "react";
import Dropdown from 'react-bootstrap/Dropdown'
import { AppContext } from "../context/AppContext";

const Currency = () => {
  const { Currency } = useContext(AppContext);
  const { dispatch } = useContext(AppContext);

  const changeCurrency = (val) => {
    dispatch({
      type: "CHG_LOCATION",
      payload: val,
    });
  };

  const currencyList = [
    {name: '$ Dollor', value: '$'},
    {name: '£ Pound', value: '£'},
    {name: '€ Euro', value: '€'},
    {name: '₹ Ruppee', value: '₹'},
  ]

  return (
    <div className="alert alert-light drop-currency text-center">
      <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
          Currency {currencyList.filter((l) => l.value === Currency)[0].name}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {currencyList.map((val, ind) => 
            <Dropdown.Item key={ind} onClick={() => changeCurrency(val.value)}>
              {val.name}
            </Dropdown.Item>
          )}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Currency;
