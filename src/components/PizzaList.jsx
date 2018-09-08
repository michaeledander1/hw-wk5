import * as React from 'react'

export default function PizzaList (props){
  return(
    <div>
      <form onSubmit={props.onSubmit}>
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
            <option key={each.id} value={each.name}>{each.size}cm</option>)
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
            <option key={sauce.id} value={sauce.name}>{sauce.name}</option>)
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
        {/* {props.toppings.map(topping =>
        <button key={topping.id} onClick={props.onChange} name={topping.name} value={topping.price}>{topping.name}</button>)} */}
        <label>
          <p>Pick your toppings</p>
          <select className = "topping-selector1" name="toppingOne" onChange={props.onChange}>
          <option id = "arrow" value=""></option>
          {props.toppings.map(topping => 
            <option key={topping.id} value={topping.name}>{topping.name}</option>)
          }
          </select>
        </label>
        <label>
          <select className = "topping-selector2" name="toppingTwo" onChange={props.onChange}>
          <option id = "arrow" value=""></option>
          {props.toppings.map(topping => 
            <option key={topping.id} value={topping.name}>{topping.name}</option>)
          }
          </select>
        </label>
        <label>
          <select className = "topping-selector2" name="toppingThree" onChange={props.onChange}>
          <option id = "arrow" value=""></option>
          {props.toppings.map(topping => 
            <option key={topping.id} value={topping.name}>{topping.name}</option>)
          }
          </select>
        </label>
        <input className = "submit-button" type="submit" value="Submit" />
      </div>
    </form>
    </div>
  )
}