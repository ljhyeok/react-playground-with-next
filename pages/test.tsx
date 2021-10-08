import React from 'react'
import { useSelector } from 'react-redux';

const test = () => {
  const { page } = useSelector<any, any>((state) => state);

  return (
    <div>
      {JSON.stringify({ page })}
    </div>
  )
}

export default test
