// your Bomb code here!
import React from 'react';
import ImageSlider from './ImageSlider';
export default class Bomb extends React.Component {
    
    constructor(props) {
        super()
        this.state = {
          secondsLeft: props.initialCount
        }
    }
    
    render() {
        if (this.state.secondsLeft === 0){
            return (
                <div>Boom!</div>
            )
        }else {
            return (
                <div>
                    {this.state.secondsLeft} seconds left before I go boom!
                </div>
            )
        }
        
    }
}
