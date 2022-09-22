import React from 'react'
import { useLocation } from 'react-router-dom'

const Extension = () => {
    const accessLocation = useLocation();
    console.log(accessLocation);
  return (
    <div className='extensionPage'>
        <div className='extensionTitle'>
            <h1>{accessLocation.state.titleHead}</h1>
        </div>
        <div className='extensionImage'>
            <img src={accessLocation.state.imageDisplay} alt="" />
        </div>
        <div className='extensionDes'>
            <p>{accessLocation.state.descriptionContent}</p>
        </div>
    </div>
  )
}

export default Extension