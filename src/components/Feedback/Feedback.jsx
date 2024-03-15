const Feedback = ({ respond }) => {
  return (
    <div>
      <ul>
        <li>Good: {respond.good}</li>
        <li>Neutral: {respond.neutral}</li>
        <li>Bad: {respond.bad}</li>
      </ul>
    </div>
  )
}

export default Feedback
