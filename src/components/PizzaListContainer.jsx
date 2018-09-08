import * as React from 'react'
import PizzaList from './PizzaList'
import {connect} from 'react-redux';
import { base, sauce, toppings } from '../lib/pizzaIngredients'

class PizzaListContainer extends React.PureComponent {
  onChange = (event) => {
    const value = event.target.value
    const name = event.target.name
    
    this.setState(
      {[name]: value})
    }

  render() {
    return(
      <div className="pizza-list-container">
        <PizzaList base={base} 
        toppings={toppings} 
        sauce={sauce} 
        onChange={this.onChange} />
      </div>
  )}
}

export default PizzaListContainer