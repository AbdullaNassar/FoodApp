import { useMeals } from "../contexts/AmountContext";
import classes from "./ModalContent.module.css";
function ModalContect({meal}){
    const{addMeals,decreaseMeals}=useMeals();
    return(
        <div>
            <div className={classes.meal}>
                <div className={classes.info}> 
                    <h2>{meal.name}</h2>
                    <div className={classes.dollar}>
                        <p className={classes.one} >${meal.price}</p>
                        <p className={classes.two}>X{meal.amount}</p>

                    </div>
                </div>
                <div className={classes.amount}>
                    <button onClick={()=>{
                        decreaseMeals(meal.name);
                    }}>-</button>
                    <button onClick={()=>{
                        addMeals(meal.name,1);
                    }}>+</button>
                </div>
            </div>
            <hr style={{background:"#8A2B06", height:"1px"}}/>
        </div>
    );
}
export default ModalContect;