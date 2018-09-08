export const ADD_INGREDIENTS = "ADD_INGREDIENTS"

export function addIngredients(pizza) {
    return {
      type: ADD_INGREDIENTS,
      payload: {...pizza}
    }
  }