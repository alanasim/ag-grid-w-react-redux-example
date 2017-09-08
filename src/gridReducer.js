import { createStore } from 'redux'

const createInitialRows = () => {
  let arr = Array.apply(null, {length: 30}).map(Number.call, Number)
  return arr.map((x, i) => {
    return {
      id: i + 1,
      name: `Company ${i + 1}`,
      Q1: Math.ceil(Math.random()*1000),
      Q2: Math.ceil(Math.random()*1000),
      Q3: Math.ceil(Math.random()*1000),
      Q4: Math.ceil(Math.random()*1000)
    }
  })
}

let rowDataReducer = (state = createInitialRows(), action) => {
  switch (action.type) {
    case 'UPDATE_GRID_ROW':
      return Object.assign(state.slice(), action.idx, action.payload)
    default:
      return state
  }
}

export default createStore(rowDataReducer)
