import { useState } from 'react'
import './App.css'
import Description from './components/Description/Description'
import Feedback from './components/Feedback/Feedback'
import Option from './components/Option/Option'

const initialResponse = {
  good: 0,
  neutral: 0,
  bad: 0,
}

function App() {
  const [response, setResponse] = useState(initialResponse)

  const handleResponse = (responseName) => {
    setResponse({ ...response, [responseName]: response[responseName] + 1 })
  }
  return (
    <>
      <Description />
      <Option handleResponse={handleResponse} />
      <Feedback respond={response} />
    </>
  )
}

export default App
