import { useEffect, useState } from 'react'
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
  const [feedback, setFeedback] = useState(() => {
    const stringifiedFeedback = localStorage.getItem('feedbackValues')
    const parsedFeedback = JSON.parse(stringifiedFeedback) ?? initialFeedback
    return parsedFeedback
  })

  const updateFeedback = (feedbackType) => {
    setFeedback({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 })
  }
  const totalFeedback = Object.values(feedback).reduce((acc, rcc) => {
    return acc + rcc
  }, 0)
  const positiveFeedback = Math.round(
    ((feedback.good + feedback.neutral) / totalFeedback) * 100
  )
  const visibleReset = totalFeedback > 0
  const resetFeedback = () => {
    setFeedback(initialFeedback)
  }

  useEffect(() => {
    localStorage.setItem('feedbackValues', JSON.stringify(feedback))
  }, [feedback])
  return (
    <>
      <Description />
      <Option
        visibleReset={visibleReset}
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}
    </>
  )
}

export default App
