
export const updateGridRow = (data, rowIdx) => {
  console.log('update grid action')
  return {
    type: 'UPDATE_GRID_ROW',
    payload: data,
    idx: rowIdx
  }
}

export const updateGrid = (rowData) => {
  return {
    type: 'UPDATE_ROW_DATA',
    payload: rowData
  }
}
