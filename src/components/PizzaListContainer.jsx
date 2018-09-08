import * as React from 'react'
import PizzaList from './PizzaList'
import {connect} from 'react-redux';
import { base, sauce, toppings } from '../lib/pizzaIngredients'
import { addIngredients } from '../actions/userPizza'
import UserPizza from './UserPizza';

class PizzaListContainer extends React.PureComponent {
  state = {
    base: '',
    sauce: '',
    toppingOne: '',
    toppingTwo: '',
    toppingThree: '',
    totalCost: 0
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      totalCost: this.calculateTotalCost()
    })
  }    
    


  onSubmit = (event) => {
    event.preventDefault()
    event.target.reset()

    const pizza = {...this.state}
    
    this.props.addIngredients(pizza)
  }

  calculateBasePrice = (stateBase) => {
      if (stateBase) {
        const basePrice = base.filter(each => each.name === stateBase)
        const price = basePrice[0]
        return (price.price)
      }
  }

  calculateSaucePrice = (stateSauce) => {
    if (stateSauce) {
      const saucePrice = sauce.filter(each => each.name === stateSauce)
      const price = saucePrice[0]
      if (price.price === "Free!") {
        return 0
      } else {
          return price.price
      }
    } else {
      return 0
    }
  }

  calculateToppingOneCost = (toppingOne) => {
      if(toppingOne) {return .5}
      else {return 0}
  }

  calculateToppingTwoCost = (toppingTwo) => {
      if(toppingTwo) {return .5}
      else {return 0}
  }

  calculateToppingThreeCost = (toppingThree) => {
      if(toppingThree) {return .5}
      else {return 0}
  }

  calculateTotalCost = () => {
      const base = this.calculateBasePrice(this.state.base, this.props.base)
      const sauce = this.calculateSaucePrice(this.state.sauce, this.props.sauce)
      const top1 = this.calculateToppingOneCost(this.state.toppingOne)
      const top2 = this.calculateToppingTwoCost(this.state.toppingTwo)
      const top3 = this.calculateToppingThreeCost(this.state.toppingThree)
      return base+sauce+top1+top2+top3
  }

  turboDroneCost = () => {
      const subTotal =this.calculateTotalCost()
      return subTotal * 1.1
  }

  render() {
    return(
      <div className="pizza-list-container">
        <PizzaList base={base} 
        toppings={toppings} 
        sauce={sauce} 
        onChange={this.onChange} 
        onSubmit={this.onSubmit}
        state={this.state}/>
        <UserPizza calculateTotalCost={this.calculateTotalCost}
        base={this.state.base}
        userPizza={this.props.userPizza} />
      </div>
  )}
}

const mapStateToProps = state => ({
    userPizza: state.userPizza
  })

export default connect(mapStateToProps, {addIngredients})(PizzaListContainer)