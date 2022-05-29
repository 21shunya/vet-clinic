import React, { useState } from 'react';
import DataService from '../API/DataService';
import ModalCtx from '../ModalCtx';
import { TableButtons } from './TableButtons';
import { TableCell } from './TableCell';
import { UpdateModal } from './UpdateModal';

interface DocumentProps {
  document: object,
  keys: string[],
  header: boolean
  tableName: string
}

export const TableRow: React.FC<DocumentProps> = (props) => {
  async function onRemove() {
    await DataService.deleteOne(props.tableName, props.document['_id' as keyof object]);
  }

  async function onUpdate(newDoc: object) {
    console.log('update');
    await DataService.updateDocument(
      props.tableName, 
      props.document['_id' as keyof object], 
      newDoc
    );
    changeVisibility();
  }

  const [visible, setVisible] = useState<boolean>(false);

  function changeVisibility() {
    visible ? setVisible(false) : setVisible(true);
  }

  return props.header ?  (
    <div className='table-row-wrapper'>
      {props.keys?.map((item, index) => {
        return (<TableCell key={index} item={item} />);
      })} 
    </div> )
    :  (
      <ModalCtx.Provider value={{ changeVisibility, visible}}>
        <div className='table-row-wrapper'>
          {props.keys?.map((_key, index) => {
            return ( <TableCell key={index} item={JSON.stringify(props.document[_key as keyof object])}/>);
          })}
          <TableButtons onRemove={onRemove} />
          { visible ? <UpdateModal keys={props.keys} document={props.document} onUpdate={onUpdate}/> : null}
        </div>
      </ModalCtx.Provider>
    );
};