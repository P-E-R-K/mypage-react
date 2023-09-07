import React, { useState }  from "react";
import styles from './my-style.module.css'; 

class Car extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        brand: "Ford",
        model: "Mustang",
        color: "Red",
        year: 1964,
        font: styles.bigred,
      };
      
    }

    changeColor = () => {
      var isRed = this.state.color;
      if (isRed === 'Red') {
        this.setState({color: "Blue", font: styles.bigblue});
      } else {
        this.setState({color: "Red", font: styles.bigred});
      }
    }

    changeCar = (event) => {
      this.setState({model:event.target.value});
    }
    
    render() {
      
      return (
        <>
        <div>
          <h1 className={this.state.font}>This is my {this.state.color} {this.state.model}</h1>
          <p>
            It is a {this.state.color} {this.state.model} from {this.state.year}.
          </p>
          <button
            type="button"
            onClick={this.changeColor}
          >Change color</button>
          <form>
            <select value={this.state.model} onChange={this.changeCar}>
              <option value="Ford">Ford</option>
              <option value="Volvo">Volvo</option>
              <option value="Fiat">Fiat</option>
            </select>
          </form>       

          <form>
          <label>Enter your name:
            <input
              type="text" 
              value={this.state.model}
              onChange={this.changeCar}
            />
          </label>
        </form>
        </div>
        </>
        
      );  
    }
  }
  
  export default Car;