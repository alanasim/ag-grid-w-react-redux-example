import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateGridRow, updateGrid } from './gridActions'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-enterprise'
import 'ag-grid/dist/styles/ag-grid.css'
import 'ag-grid/dist/styles/theme-fresh.css'

class App extends Component {
  constructor() {
    super()

    this.state = {
      columnDefs: this.createColumnDefs()
    }

    this.onGridReady = this.onGridReady.bind(this)
    this.handleCellChanged = this.handleCellChanged.bind(this)
    this.createColumnDefs = this.createColumnDefs.bind(this)
  }

  onGridReady(params) {
    this.gridApi = params.api
    this.columnApi = params.columnApi

    this.gridApi.sizeColumnsToFit()
  }

  handleCellChanged(params) {
    const { rowIndex, data } = params.node
    this.props.updateGridRow(data, rowIndex)
  }

  createColumnDefs() {
    const _this = this
    return [
      {headerName: 'Company', field: 'name'},
      {headerName: 'Q1', field: 'Q1', editable: true, onCellValueChanged: this.handleCellChanged.bind(_this) },
      {headerName: 'Q2', field: 'Q2', editable: true, onCellValueChanged: this.handleCellChanged.bind(_this) },
      {headerName: 'Q3', field: 'Q3', editable: true, onCellValueChanged: this.handleCellChanged.bind(_this) },
      {headerName: 'Q4', field: 'Q4', editable: true, onCellValueChanged: this.handleCellChanged.bind(_this) },
      {headerName: 'Year Total', colId: 'total', editable: false,
        valueGetter: (params) => {
          const qtrs = ['Q1', 'Q2', 'Q3', 'Q4']
          const vals = qtrs.map(q => parseInt(params.data[q], 10))
          return vals.reduce((p,v) => {return p + v}, 0)
        } }
    ]
  }

  render() {
    const { rowData } = this.props
    const { columnDefs } = this.state

    return (
      <div className="App">
        <div className="ag-fresh" style={{height: '700px', width: '700px', margin: '0 auto'}}>
          <AgGridReact
            columnDefs={columnDefs}
            rowData={rowData}
            onGridReady={this.onGridReady}
            getRowNodeId={(data) => data.id}
            enableRangeSelection={true}
          />
        </div>
      </div>
    );
  }
}

App.defaultProps = {
  rowData: []
}

const mapStateToProps = (state) => {
  return {
    rowData: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateGridRow: bindActionCreators(updateGridRow, dispatch),
    updateGrid: bindActionCreators(updateGrid, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
