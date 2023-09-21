import classes from "./Intro.module.css";
function Intro(){
    return(
        <div className={classes.intro}>
            <h2>Delicious Food, Delivered To You</h2>
            <p>Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.
                <br/>
                <span>All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!</span>
            </p>
        </div>
    );
}
export default Intro;