import React from 'react'
import Header from './Header'
function MasterLayout(props) {
  return (
    <>
    <Header/>
    <div className='main'>{props.children}</div>
    </>
  )
}

export default MasterLayout