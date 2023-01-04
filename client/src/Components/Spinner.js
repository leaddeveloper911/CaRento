import React from 'react'
import { Spin } from 'antd'
import "../index.css"
const Spinner = () => {
  //spinner
  return (
    <div className='spinner'>
        <Spin size='large'/>
    </div>
  )
}

export default Spinner
