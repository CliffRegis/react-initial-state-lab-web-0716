import React from 'react';

class Bomb extends React.Component{
 
	constructor(props){
		super();
		this.state = {
          secondsLeft: props.initialCount
		}
	}


// 			Its initial state should have a property secondsLeft.
// The initial value of secondsLeft is set by passing in a initialCount prop to the Bomb component.
// It should render the text '<SECONDS_LEFT> seconds left before I go boom!', where <SECONDS_LEFT> is the value of secondsLeft.
// If the secondsLeft is set to 0, it should render 'Boom!' instead.

		
   render(){
  
		if (this.state.secondsLeft > 0) { 
		  return <div>{this.state.secondsLeft} seconds left before I go boom!</div>
     	} else {
     	  return <div>Boom!</div>
     	}
    }
}

module.exports = Bomb;

//in render function "return" returns html on the screen