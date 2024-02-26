import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        if(newBudget > 20000) {
            alert("The value cannot exceed remaining funds.");
            setNewBudget(2000);
        }
        else if(newBudget < 960) {
            alert("You cannot reduce the budger value lower than the spending.");
            setNewBudget(2000);
        }
        else{
            setNewBudget(event.target.value);
        }
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;

//In the above code snippet we are using the useState hook to create a state variable called newBudget and initialize it with the current value of budget. We are also defining a function called handleBudgetChange that updates the value of newBudget when the user changes the value of the input field.
//We are then setting the value attribute of the input field to newBudget and adding an onChange event listener that calls handleBudgetChange when the user changes the value of the input field.
//Here, you are using the Bootstrap Alert classes to give a nice gray background by adding some text and hard coding a value.
