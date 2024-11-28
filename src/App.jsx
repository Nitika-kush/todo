import { useState } from 'react'
import './App.css'
import TodoWrappers from './components/TodoWrappers'

function App() {
  const [count, setCount] = useState(0)

  return (
<div className='App'>
  <TodoWrappers/>
</div>
  )
}

export default App
