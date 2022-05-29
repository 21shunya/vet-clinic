import React, { useState } from 'react';
import { TableRow } from './TableRow';
import { UpdateModal } from './UpdateModal';

interface TableProps {
  keys: string[],
  tableData: object[]
  tableName: string
}

export const Table: React.FC<TableProps> = (props) => {
  const {keys, tableData} = {...props};

  return ( 
    <div className='table-wrapper'>
      <TableRow keys={keys} document={document} header={true} tableName={props.tableName} />
      {tableData.map((document, _id) => {
        return <TableRow key={_id} document={document} keys={keys} header={false} tableName={props.tableName} />;
      })}
    </div>
  );
};