import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

/**
 * Preformatted text element to display in the log.
 */
const TextLogItem = styled.pre`
  font-family: monospace;
  font-size: 12px;
  color: ${props => props.color};
`;

/**
 * Illustrates the lifecycle of a component. 
 * 
 * <b>DEV NOTE</b>: Feel free to change any code while this page is open, it will
 * show you the lifecycle of the component as it updates.
 */
export const ComponentLifecycle = ({ textForStage, ...props }) => {
  const [stage, setStage] = React.useState(undefined);
  const [textLog, setTextLog] = React.useState([]);

  const logAndSetStage = (stage) => {
    setStage(stage);
    setTextLog([...textLog, textForStage[stage]]);
  };

  const getColorForText = (text) => {
    if (text === textForStage['mount']) {
      return 'green';
    } else if (text === textForStage['update']) {
      return 'blue';
    } else if (text === textForStage['unmount']) {
      return 'red';
    }
    return 'black';
  };

  const logElements = textLog.map((text, index) => 
    <TextLogItem
      key={`cl-${index}`}
      color={getColorForText(text)}
      className='text-sm leading-6 flex ligatures-none overflow-auto'
    ><code>{'>'}&nbsp;</code>{text}</TextLogItem>
  );

  React.useEffect(() => {
    logAndSetStage('mount');
  }, []);

  React.useEffect(() => {
    if (stage === 'mount') {
      logAndSetStage('update');
    }
    return () => {
      console.log(stage)
      setStage('unmount');
      if (stage === 'unmount') {
        setTextLog([...textLog, textForStage[stage]]);
        alert(textForStage[stage])
      }
    };
  }, [stage]);

  return (
    <div>
      {logElements}
    </div>
  );
};

ComponentLifecycle.propTypes = {
  /** Text to display at each point of the component lifecycle */
  textForStage: PropTypes.object,
};

ComponentLifecycle.defaultProps = {
  textForStage: {
    'mount': 'Component mounted',
    'update': 'Component updated',
    'unmount': 'Component unmounted',
  },
};
