import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget, expenses, dispatch } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);
  console.log(budget)

  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);

  const handleBudgetChange = (event) => {

    if (budget < totalExpenses) {
      alert("You cannot reduce the budget value lower than the spending");
    } else {
      setNewBudget(event.target.value);
      dispatch({
        type: "SET_BUDGET",
        payload: newBudget
      })
    }
  };

  return (
    <div className="alert alert-secondary">
      <span>Budget: £</span>
      <input
        type="number"
        step="10"
        value={newBudget}
        onChange={handleBudgetChange}
      ></input>
    </div>
  );
};
export default Budget;
