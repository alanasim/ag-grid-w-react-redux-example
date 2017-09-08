import { createStore } from 'redux'

let gridDataReducer = (state = {rowData: []}, action) => {
  switch (action.type) {
    case 'ROW_DATA_CHANGED':
      return {
        ...state,
        rowData: action.rowData
      }
    default:
      return state
  }
}

export default createStore(gridDataReducer)
