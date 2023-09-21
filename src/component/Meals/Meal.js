import { useState } from "react";
import classes from "./Meal.module.css";
import { useMeals } from "../../contexts/AmountContext";
function Meal({meal}){
    const[amount,setAmount]=useState(1);
    const{addMeals}=useMeals();
    return(
        <div>
            <div className={classes.meal}>
                <div className={classes.info}> 
                    <h3>{meal.name}</h3>
                    <p>{meal.ingerdiants}</p>
                    <p className={classes.dollar}>${meal.price}</p>
                </div>
                <div className={classes.amount}>
                    <div className={classes.input}>
                        <label htmlFor="amount">Amount</label>
                        <input value={amount} onChange={(e)=>setAmount(+e.target.value)}
                         id="amount" type="number"/>
                    </div>
                    <button onClick={(e)=>{
                        addMeals(meal.name, amount);
                        // console.log(meal.name, amount);
                    }}>+Add</button>
                </div>
            </div>
            <hr/>
        </div>
    );
}
export default Meal;