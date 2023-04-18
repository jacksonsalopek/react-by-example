import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components'

const StyledComponentsButton = styled.button`
  padding: 4px 12px;
  border-radius: 4px;
  ${props => props.toggled && css`
    background-color: #4CAF50; /* Green */
    color: white !important;
    border: none;
  `}
`

export const StyledComponents = ({ isToggled, ...props }) => {
  const [toggled, setToggled] = React.useState(isToggled);

  useEffect(() => {
    setToggled(isToggled);
  }, [isToggled]);

  return (
    <>
      <StyledComponentsButton onClick={() => setToggled(!toggled)} toggled={toggled}>{
        toggled ? 'Clicked!' : 'Click Me!'
      }</StyledComponentsButton>
    </>
  )
}

StyledComponents.propTypes = {
  isToggled: PropTypes.bool
}

StyledComponents.defaultProps = {
  isToggled: false
}
