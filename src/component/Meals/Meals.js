import { useMeals } from "../../contexts/AmountContext";
import Meal from "./Meal";
import classes from "./Meals.module.css"
function Meals(){
    const{meals}=useMeals();
    return(
        <div className={classes.meals}>
            {meals.map(meal=>{
                return<Meal key={Math.random()} meal={meal}/>
            })}
        </div>
    );
}
export default Meals;