import React from 'react'
import { clearError } from '../../actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

export function Error({ clearError }) {
  return (
    <section className="error">
      <h1 className="error-msg">Something has gone terribly wrong.</h1>
      <Link to='/' onClick={clearError}>
        <button>Return to Site</button>
      </Link>
    </section>
  )
}

export const mapDispatchToProps = (dispatch) => ({
  clearError: () => dispatch(clearError())
})

export default connect(null, mapDispatchToProps)(Error)
