import { createContext, useContext, useEffect, useState } from "react";

const AmountContext=createContext();

const initialMeals=[
    {
        name:"Sushi",
        ingerdiants:"Finest fish and veggies",
        price:22.99,
        amount:0,
    },
    {
        name:"Schnitzel",
        ingerdiants:"A german specialty!",
        price:16.50,
        amount:0,
    },
    {
        name:"Barbecue Burger",
        ingerdiants:"American, raw, meaty",
        price:12.99,
        amount:0,
    },
    {
        name:"Green Bowl",
        ingerdiants:"Healthy...and green...",
        price:18.99,
        amount:0,
    }
]

function AmountProvider({children}){

    const[meals,setMeals]=useState(initialMeals);

    const[bills,setBills]=useState([1,2]);
    useEffect(function(){
        setBills(()=>{
            return meals.filter(meal=>meal.amount);
        })
    },[meals])

    function addMeals(name,amount){
        // console.log(name,amount)
        setMeals((meals)=> meals.map(meal=>meal.name!==name?meal:{...meal,amount: meal.amount+amount})
        )
    }
    
    function decreaseMeals(name){
        setMeals((meals)=>meals.map(meal=>meal.name!==name?meal:{...meal,amount:meal.amount-1}))
    }
    // console.log("display");
    // console.log(bills);
    // console.log(meals) 
    // console.log(typeof(meals));
    return (
        <AmountContext.Provider value={{
            meals,
            addMeals,
            bills,
            decreaseMeals
        }}>
            {children}
        </AmountContext.Provider>
    );
}
function useMeals(){
    const context =useContext(AmountContext);
    if(context===undefined) throw new Error("trying using Amount context outside provider");
    return context;
}
export {AmountProvider,useMeals};