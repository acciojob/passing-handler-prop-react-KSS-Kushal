
import React, { useState } from 'react'

const Selection = ({applyColor}) => {
    const [bg, setBg] = useState('');
    const updateSelectionStyle = (nextBackground) => {
        setBg(nextBackground);
    }
  return (
    <div className='fix-box' style={{backgroundColor: bg}} onClick={()=>{applyColor(updateSelectionStyle)}}>
        <h3 className="subheading">Selection</h3>
    </div>
  )
}

export default Selection