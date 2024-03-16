import css from './Option.module.css'

const Option = ({ updateFeedback, resetFeedback, visibleReset }) => {
  return (
    <div className={css.optionButtonDiv}>
      <button
        className={css.optionButton}
        onClick={() => {
          updateFeedback('good')
        }}
      >
        😊 Good
      </button>
      <button
        className={css.optionButton}
        onClick={() => {
          updateFeedback('neutral')
        }}
      >
        😐 Neutral
      </button>
      <button
        className={css.optionButton}
        onClick={() => {
          updateFeedback('bad')
        }}
      >
        👎 Bad
      </button>
      {visibleReset && (
        <button className={css.optionButton} onClick={resetFeedback}>
          🎚️ Reset
        </button>
      )}
    </div>
  )
}

export default Option
