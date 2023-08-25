import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const ItemSelected = (props) => {
  const { companies, Currency, dispatch } = useContext(AppContext);

  const [name, setName] = useState("");
  const [budget, setBudget] = useState(null);
  const [action, setAction] = useState("");

  const submitEvent = () => {
    const item = {
      id: name,
      budget: parseInt(budget),
    };

    if (action === "Reduce") {
      dispatch({
        type: "RED_QUANTITY",
        payload: item,
      });
    } else {
      dispatch({
        type: "ADD_QUANTITY",
        payload: item,
      });
    }
  };

  return (
    <div>
      <div className="row">
        <div className="input-group mb-3" style={{ marginLeft: "2rem" }}>
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="inputGroupSelect01">
              Department
            </label>
          </div>
          <select
            className="custom-select"
            id="inputGroupSelect01"
            onChange={(event) => setName(event.target.value)}
          >
            <option defaultValue>Choose...</option>
            {companies.map((v, i) => (
              <option value={v.id} name={v.id} key={v.id + "-" + i}>
                {v.department}{" "}
              </option>
            ))}
          </select>
          <div className="input-group-prepend" style={{ marginLeft: "2rem" }}>
            <label className="input-group-text" htmlFor="inputGroupSelect02">
              Allocation
            </label>
          </div>
          <select
            className="custom-select"
            id="inputGroupSelect02"
            onChange={(event) => setAction(event.target.value)}
          >
            <option defaultValue value="Add" name="Add">
              Add
            </option>
            <option value="Reduce" name="Reduce">
              Reduce
            </option>
          </select>
          <span
            className="eco"
            style={{ marginLeft: "2rem", marginRight: "8px" }}
          ></span>
          <div className="input-group-prepend" style={{ marginLeft: "0rem" }}>
            <label className="input-group-text" htmlFor="inputGroupSelect02">
            {Currency}
            </label>
          </div>
          <input
            required="required"
            type="number"
            id="cost"
            value={budget}
            style={{ size: 10 }}
            onChange={(event) => setBudget(event.target.value)}
          ></input>
          <button
            className="btn btn-primary"
            onClick={submitEvent}
            style={{ marginLeft: "2rem" }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemSelected;
