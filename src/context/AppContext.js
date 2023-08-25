import React, { createContext, useReducer } from "react";

// 5. The reducer - this is used to update the state, based on the action
export const AppReducer = (state, action) => {
  let new_company = [];
  switch (action.type) {
    case "ADD_QUANTITY":
    //   let updatedqty = false;
      state.companies.map((val) => {
        if (val.id === action.payload.id) {
          val.budget = val.budget + action.payload.budget;
        //   updatedqty = true;
        }
        new_company.push(val);
        return true;
      });
      state.companies = new_company;
      action.type = "DONE";
      return {
        ...state,
      };

    case "RED_QUANTITY":
      state.companies.map((val) => {
        if (val.id === action.payload.id) {
          val.budget = val.budget - action.payload.budget;
        }
        val.budget = val.budget < 0 ? 0 : val.budget;
        new_company.push(val);
        return true;
      });
      state.companies = new_company;
      action.type = "DONE";
      return {
        ...state,
      };

    case "INCREASE_ITEM":
      state.companies.map((val) => {
        if (val.id === action.payload.id) {
          val.budget = val.budget + 10;
        }
        new_company.push(val);
        return true;
      });
      state.companies = new_company;
      action.type = "DONE";
      return {
        ...state,
      };
      
    case "DECREASE_ITEM":
      state.companies.map((val) => {
        if (val.id === action.payload.id) {
          val.budget = val.budget - 10;
        }
        new_company.push(val);
        return true;
      });
      state.companies = new_company;
      action.type = "DONE";
      return {
        ...state,
      };

    case "DELETE_ITEM":
      state.companies.map((val) => {
        if (val.id === action.payload.id) {
          val.budget = 0;
        }
        new_company.push(val);
        return true;
      });
      state.companies = new_company;
      action.type = "DONE";
      return {
        ...state,
      };

    case "CHG_LOCATION":
      action.type = "DONE";
      state.Currency = action.payload;
      return {
        ...state,
      };

    case "CHG_BUDGET":
      action.type = "DONE";
      state.TotalBudget = action.payload;
      return {
        ...state,
      };

    default:
      return state;
  }
};

// 1. Sets the initial state when the app loads
const initialState = {
  companies: [
    { id: "Marketing", department: "Marketing", budget: 50, },
    { id: "Finance", department: "Finance", budget: 300, },
    { id: "Sales", department: "Sales", budget: 70, },
    { id: "Human Resource", department: "Human Resource", budget: 40, },
    { id: "IT", department: "IT", budget: 500, },
  ],
  TotalBudget: 2000, 
  Currency: "£",
};

// 2. Creates the context this is the thing our components import and use to get the state
export const AppContext = createContext();

// 3. Provider component - wraps the components we want to give access to the state
// Accepts the children, which are the nested(wrapped) components
export const AppProvider = (props) => {
  // 4. Sets up the app state. takes a reducer, and an initial state
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const totalExpenses = state.companies.reduce((total, item) => {
    return (total = total + item.budget);
  }, 0);
  state.CartValue = totalExpenses;

  return (
    <AppContext.Provider
      value={{
        companies: state.companies,
        CartValue: state.CartValue,
        dispatch,
        TotalBudget: state.TotalBudget,
        Currency: state.Currency,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
