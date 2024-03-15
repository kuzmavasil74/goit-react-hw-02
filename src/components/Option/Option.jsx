const Option = ({ handleResponse }) => {
  return (
    <div>
      <button
        onClick={() => {
          handleResponse('good')
        }}
      >
        😃 Good
      </button>
      <button
        onClick={() => {
          handleResponse('neutral')
        }}
      >
        😐 Neutral
      </button>
      <button
        onClick={() => {
          handleResponse('bad')
        }}
      >
        😒 Bad
      </button>
    </div>
  )
}

export default Option
