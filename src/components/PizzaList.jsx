import * as React from 'react'

export default function PizzaList (props){
  return(
    <div>
      <div className='pizza-list-base'>
        <h2>Bases</h2>
        <ul>
          {props.base.map(each =>
          <li key={each.id}>{each.name}, Price: {each.price}</li>)
          }
        </ul>
        <label>
          <p>Pick your base</p>
          {<select className = "base-selector" name="base" onChange={props.onChange}>
            <option id = "arrow" value=""></option>
          {props.base.map(each => 
            <option key={each.id} name={each.name} value={each.price}>{each.size}cm</option>)
          }
          </select>}
        </label>
      </div>
      <div className='pizza-list-sauce'>
        <h2>Sauces</h2>
        <ul>
          {props.sauce.map(each =>
          <li key={each.id}>{each.name}, Price: {each.price}</li>)
          }
        </ul>
        <label>
          <p>Pick your sauce</p>
          <select className = "sauce-selector" name="sauce" onChange={props.onChange}>
          <option id = "arrow" value=""></option>
          {props.sauce.map(sauce => 
            <option key={sauce.key} name={sauce.name} value={sauce.price}>{sauce.name}</option>)
          }
          </select>
        </label>
      </div>
      <div className='pizza-list-toppings'>
        <h2>All toppings are 0.50 cents. Pick up to 3!</h2>
        <ul>
          {props.toppings.map(topping =>
          <li key={topping.id}>{topping.name}</li>)
          }
        </ul>
        {props.toppings.map(topping =>
        <button key={topping.id} onClick={props.onChange} name={topping.name} value={topping.price}>{topping.name}</button>)}
      </div>
    </div>
  )
}