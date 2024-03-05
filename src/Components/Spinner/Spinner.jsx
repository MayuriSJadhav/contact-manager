import React from 'react'
import spinnerImg from '../../Assets/Image/spinner1.gif'
const Spinner = () => {
  return (
    <div>
      <img src={spinnerImg} alt="Spinner is not found" className='d-block m-auto' style={{width:"200px"}}  />
    </div>
  )
}

export default Spinner
