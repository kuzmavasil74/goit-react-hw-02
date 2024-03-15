import { useState } from 'react'
import Description from './components/Description/Description'
import Feedback from './components/Feedback/Feedback'
import Option from './components/Option/Option'
import Notification from './components/Notification/Notification'

const initialFeedback = {
  good: 0,
  neutral: 0,
  bad: 0,
}

function App() {
  const [feedback, setFeedback] = useState(initialFeedback)

  const updateFeedback = (feedbackType) => {
    setFeedback({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 })
  }
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad

  return (
    <>
      <Description />
      <Option updateFeedback={updateFeedback} />
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback feedback={feedback} />
      )}
    </>
  )
}

export default App
