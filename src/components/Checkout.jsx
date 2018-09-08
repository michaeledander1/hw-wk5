import * as React from 'react'

export default function Checkout (props){
  if (props.userPizza.base) {
  return(
      <div>
        <div>
          <h2>Thanks for placing an order!</h2>
        </div>
        <p>You have ordered a {props.userPizza.base} with {props.userPizza.sauce} and <br/> 
        {props.userPizza.toppingOne}<br/> {props.userPizza.toppingTwo} <br/>{props.userPizza.toppingThree}
        <br/> and it will cost {props.userPizza.totalCost} </p>
        <p>For 10% more, would you like super fast drone delivery?</p>
        <button onClick={props.turboDroneCost}>Turbo Drone</button>
        <p>Subtotal: {props.displayTurboDroneCost()}</p>
        <p></p>
      </div>
  )} else {
      return null
  }
}