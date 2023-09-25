import image from "../assets/meals.jpg";
function Background(){
    return (
        <div style={{height:"210px",}}>
            <img style={{height:"100%", width:"100%"}} src={image} alt="background"/>
        </div>
    );
}
export default Background;