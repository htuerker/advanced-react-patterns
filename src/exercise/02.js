// Compound Components
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'
import {Switch} from '../switch'

function Toggle({children}) {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)
  const allowedTypes = [ToggleOn, ToggleOff, ToggleButton]

  return React.Children.map(children, child =>
    allowedTypes.includes(child.type)
      ? React.cloneElement(child, {
          on,
          toggle,
        })
      : child,
  )
}

const ToggleOn = ({on, children}) => on && children

const ToggleOff = ({on, children}) => !on && children

const ToggleButton = ({on, toggle}) => <Switch on={on} onClick={toggle} />

const CustomToggleOn = ({on}) => on && "Hey, it's on!"
const CustomToggleOff = ({on}) => !on && "Hey, it's off!"

function App() {
  return (
    <div>
      <Toggle>
        <ToggleOn>The button is on</ToggleOn>
        <ToggleOff>The button is off</ToggleOff>
        <span>Hello</span>
        <ToggleButton />
        <CustomToggleOn />
        <CustomToggleOff />
      </Toggle>
    </div>
  )
}

export default App

/*
eslint
  no-unused-vars: "off",
*/
