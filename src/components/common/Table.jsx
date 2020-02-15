import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

const Table = ({ columns, sortColumn, onSort, data }) => (
  <table className='table m-2'>
    <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
    <TableBody data={data} columns={columns} />
  </table>
);

export default Table;
