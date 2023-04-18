import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'

const CommonHooksButton = styled.button`
  background-color: ${props => props.color ?? '#4CAF50'}; /* Green */
  border: none;
  color: white !important;
  padding: 4px 12px;
  border-radius: 4px;
  display: inline-block;
  margin: 4px 2px;
`

function reducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    case 'REMOVE':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };
    default:
      throw new Error();
  }
}

export const CommonHooks = ({ initialItems, ...props }) => {
  const [state, dispatch] = React.useReducer(reducer, { items: initialItems });

  const itemTotal = React.useMemo(() => {
    return state.items.reduce((acc, item) => acc + item.quantity, 0);
  }, [state.items]);

  function handleAddItem() {
    const newItem = { id: Date.now(), name: 'New Item', quantity: 1 };
    dispatch({ type: 'ADD', payload: newItem });
  }

  function handleRemoveItem(id) {
    dispatch({ type: 'REMOVE', payload: id });
  }

  return (
    <div data-testid="common-hooks">
      <div>Item Total: {itemTotal}</div>
      <CommonHooksButton onClick={handleAddItem}>Add Item</CommonHooksButton>
      <ul>
        {state.items.map(item => (
          <li key={item.id}>
            {item.name} - {item.quantity}
            <CommonHooksButton onClick={() => handleRemoveItem(item.id)} color={'red'}>Remove</CommonHooksButton>
          </li>
        ))}
      </ul>
    </div>
  );
}

CommonHooks.propTypes = {
  initialItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired
    })
  )
};

CommonHooks.defaultProps = {
  initialItems: [
    { id: 1, name: 'Item 1', quantity: 1 },
    { id: 2, name: 'Item 2', quantity: 2 },
  ]
};
