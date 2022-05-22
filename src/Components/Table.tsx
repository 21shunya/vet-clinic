import React from 'react';
import { TableRow } from './TableRow';

interface TableProps {
  keys: string[],
  tableData: object[]
}

export const Table: React.FC<TableProps> = (props) => {
  const {keys, tableData} = {...props};

  return ( 
    <div className='table-wrapper'>
      <TableRow keys={keys} document={document} header={true}/>
      {tableData.map((document, _id) => {
        return <TableRow key={_id} document={document} keys={keys} header={false}/>;
      })}
    </div>
  );
};