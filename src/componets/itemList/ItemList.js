import React from 'react';

const ItemList = (props) => {

  const {data, onItemSeceted, children: renderLabel} = props;

  const items = data.map(item => {
    const { id } = item;
    const label = renderLabel(item);

    return (
      <li className = "items-list-item" key = { id } onClick = { () => onItemSeceted(id) }>
          { label }
      </li>
    );
  });

  return (
    <ul className="items-list">
        {items}
    </ul>
  );  
}

export default ItemList;