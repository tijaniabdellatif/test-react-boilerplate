import React from 'react'
import {tempMovieData} from '../../utils/constantes';

const Result = () => {
    console.log(tempMovieData.length)
  return (
    <p className='num-results'>
      <strong>{tempMovieData.length} </strong>found
    </p>
  )
}

export default Result
