import Car from "./Car";

function Garage(props) {
    return (
      <>
        <Car color={props.color}/>
        <h1>Who lives in my Garage?</h1>
      </>
    );
  }

  export default Garage;