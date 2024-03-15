import './App.css'
import Description from './components/Description/Description'
import Feedback from './components/Feedback/Feedback'
import Option from './components/Option/Option'

const respond = {
  good: 0,
  neutral: 0,
  bad: 0,
}

function App() {
  return (
    <>
      <Description />
      <Option />
      <Feedback respond={respond} />
    </>
  )
}

export default App
