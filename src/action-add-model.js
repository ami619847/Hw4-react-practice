export const ADD_MODEL = 'ADD_MODEL'

export const updateSelection = (model) => {
  return {
    type:'ADD_MODEL',
    payload: {
      name: model.name,
      manufacturer: model.manufacturer,
      year: model.year,
      origin: model.origin
    }
  }
}
