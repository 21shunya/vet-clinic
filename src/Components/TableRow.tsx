import React from 'react';
import { TableButtons } from './TableButtons';
import { TableCell } from './TableCell';

interface DocumentProps {
  document: object,
  keys: string[],
  header: boolean
}

export const TableRow: React.FC<DocumentProps> = (props) => {

  return props.header ?  (
    <div className='table-row-wrapper'>
      {props.keys?.map((item, index) => {
        return (<TableCell key={index} item={item} />);
      })} 
    </div> )
    :  (
      <div className='table-row-wrapper'>
        {props.keys?.map((_key, index) => {
          return ( <TableCell key={index} item={JSON.stringify(props.document[_key as keyof object])}/>);
        })}
        <TableButtons />
      </div>
    );
};