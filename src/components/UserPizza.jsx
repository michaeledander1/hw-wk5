import * as React from 'react'

export default function UserPizza (props){
  if (props.base) {
  return(
      <div>
        <div>
          <p>Your total cost is {props.calculateTotalCost()}</p>
        </div>
      </div>
  )} else {
      return null
  }
}