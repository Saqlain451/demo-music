import React from 'react'
import { useGlobalHook } from './Hooks/Context'
import Home from './Pages/Home/Home'

const App = () => {
  const name = useGlobalHook()
  return (
    <Home />
  )
}

export default App