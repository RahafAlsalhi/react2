import { render } from "@testing-library/react";
import React from "react";
import './car.css'
class Car extends React.Component{
  
render()
{
    return (
        <div style={{borderColor:this.props.color, borderWidth:'5px', borderStyle:'solid'}}>
            <img class="img" src= {this.props.img} />
            <div>
            <h3> brand is :{this.props.brand}</h3>
            <h3> Model is: {this.props.model}</h3>
            <h3> color is: {this.props.color}</h3>
            <h3> Discription : {this.props.disc}</h3>
            </div>
        </div>
    )
}
}
export default Car;