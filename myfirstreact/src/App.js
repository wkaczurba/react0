import React from 'react';
import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//       <div className="App">
//         <h1>Just a first React test.</h1>
//       </div>
//   );
//
// }

class Car extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      brand: "Horse",
      model: "Mustang",
      color: "red",
      year: 1964
    };
  }


  // static getDerivedStateFromProps(props, state) {
  //   return {color: "magenta"}
  // }

  changeColor = () => {
    this.setState({color : "blue"})
  };

  event2 = (a,b) => {
    console.log(b);
    alert(b.type);
  }

  render() {
    return (
        <div>
          <h1>Hi, I am a {this.state.brand} {this.state.model}</h1>
          <h2>It is a {this.state.color} {this.state.model} from {this.state.year}</h2>
          <button onClick={this.changeColor}>Cjhange to blue</button>
          <button onClick={(ev) => this.event2("Whatever", ev)}>Event</button>
        </div>
    )
  }

  componentDidMount() {
    setTimeout(() => {
      this.changeColor()
    }, 1000)
  }

  componentDidUpdate() {
    setTimeout(() => {
      this.setState( { color : 'pink' })
    }, 1000)
  }

}

class Garage extends React.Component {
  render(){
    const carinfo =  {name: "Ford", model: "Mustang"}
    return <div>
      <h1>Who lives in my Garage?</h1>
      <Car />
    </div>
  }
}

export default Garage;
//export default App;
