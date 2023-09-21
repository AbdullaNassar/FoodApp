import { useState } from "react";
import Modal from "../UI/Modal";
import classes from "./Header.module.css";
import ModalContect from "../ModalContent";
import { useMeals } from "../../contexts/AmountContext";
function Header(){
    const[isOpen,setIsOpen]=useState(false);
    const{bills}=useMeals();
    let totalPrice=0;
    let totalAmount=0;
    for(let i=0;i<bills.length;i++){
        totalPrice+=bills[i].price* bills[i].amount;
        if(bills)totalAmount+=bills[i].amount;
    }
    return(
        <div className={classes.header} >
            {isOpen&&
            <Modal>
                <div>
                    {bills.map(bill=><ModalContect key={Math.random()} meal={bill}/>)}
                    <div className={classes.modalAmount}>
                        <h2>Total Amount</h2>
                        <h2>${totalPrice.toFixed(2)}</h2>
                    </div>
                    <div className={classes.modalButton}>
                        {!totalAmount?null:<button onClick={()=>{
                           alert("order added succusfully");
                            setIsOpen(false);
                        }}>Order</button>}
                        <button onClick={()=>setIsOpen(false)}>Close</button>
                        
                    </div>
                </div>
                
            </Modal>}
            <h1>ReactMeals</h1>
            <div className={classes.info} onClick={()=>setIsOpen(true)}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaYA340di9woWIBsFoLF8zQep3aLzdKCyoeA&usqp=CAU"/>
                <div>Your Cart </div>
                <div className={classes.count}>
                    <label>{totalAmount}</label>
                </div>
            </div>
        </div>
    )
}
export default Header;