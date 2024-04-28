
import React, { useState } from 'react'
import '../styles/Child.css'

const Selection = ({applyColor}) => {
    const [bg, setBg] = useState('');
    const updateSelectionStyle = (nextBackground) => {
        setBg(nextBackground.background);
    }
  return (
    <div className='fix-box' style={{backgroundColor: bg}} onClick={()=>{applyColor(updateSelectionStyle)}}>
        <h3 className="subheading">Selection</h3>
    </div>
  )
}

export default Selection