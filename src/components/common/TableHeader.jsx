import React, { Component } from 'react';

class TableHeader extends Component {
  raiseSortChanged = path => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path) {
      sortColumn.direction = sortColumn.direction === 'asc' ? 'desc' : 'asc';
    } else {
      sortColumn.path = path;
      sortColumn.direction = 'asc';
    }
    this.props.onSort(sortColumn);
  };

  renderSortIcon = column => {
    if (column.path !== this.props.sortColumn.path) return null;
    if (this.props.sortColumn.direction === 'asc')
      return <i className='fa fa-sort-asc'></i>;
    return <i className='fa fa-sort-desc'></i>;
  };

  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map(column => (
            <th className="clickable"
              key={column.path || column.key}
              onClick={() => this.raiseSortChanged(column.path)}
            >
              {column.title} {this.renderSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
