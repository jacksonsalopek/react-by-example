import React from 'react';

export const ComponentRefs = ({ ...props }) => {
  const childRef = React.useRef(null);
  const otherChildRef = React.useRef(null);
  const setRef = (element) => {
    childRef.current = element;
  }

  React.useEffect(() => {
    childRef.current.innerText = 'I was mutated by a ref callback!';
    otherChildRef.current.innerText = 'I was also mutated, but by a ref const!';
  }, [])

  return (
    <>
      <div ref={setRef} />
      <div ref={otherChildRef} />
    </>
  )
};

ComponentRefs.propTypes = {};

ComponentRefs.defaultProps = {};
