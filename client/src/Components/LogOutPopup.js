import React from 'react'

const LogOutPopup = ({handlePopupChange, handleLogOut}) => {
  return (
    <div className='popup-box'>
        <div className='box'>
            <span className="close-icon" onClick={handlePopupChange} >x</span>
            <h2><b>Are You Sure?</b></h2>
            <button onClick={handleLogOut} className='submit'>Log Out</button>
        </div>
    </div>
  )
}

export default LogOutPopup