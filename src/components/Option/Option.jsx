const Option = ({ updateFeedback }) => {
  return (
    <div>
      <button
        onClick={() => {
          updateFeedback('good')
        }}
      >
        😃 Good
      </button>
      <button
        onClick={() => {
          updateFeedback('neutral')
        }}
      >
        😐 Neutral
      </button>
      <button
        onClick={() => {
          updateFeedback('bad')
        }}
      >
        😒 Bad
      </button>
    </div>
  )
}

export default Option
