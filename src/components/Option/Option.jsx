const Option = ({ updateFeedback, resetFeedback, visibleReset }) => {
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
      {visibleReset && <button onClick={resetFeedback}>🎚️ Reset</button>}
    </div>
  )
}

export default Option
