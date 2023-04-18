import React from 'react'
import styled from 'styled-components'

const EventHandlingButton = styled.button`
  background-color: #4CAF50; /* Green */
  border: none;
  color: white !important;
  padding: 4px 12px;
  border-radius: 4px;
`

export const EventHandling = ({ ...props }) => {
  const [count, setCount] = React.useState(0)
  const [eventLog, setEventLog] = React.useState([])

  const handleClick = (event) => {
    setCount(count + 1)
    setEventLog([...eventLog, event])
  }

  const eventLogElements = eventLog.map((event, index) => <div key={`click-${index}`}>
    <code>
      [{`${index}`}] Click event: {event.target.tagName} {event.target.innerText}
    </code>
  </div>)

  return (
    <>
      <div className="flex text-sm">
        <div>
          You clicked {count} times.
          <br />
          {eventLogElements}
        </div>
      </div>
      <br />
      <EventHandlingButton onClick={handleClick}>Click Me!</EventHandlingButton>
    </>
  )
}

EventHandling.propTypes = {};

EventHandling.defaultProps = {};
