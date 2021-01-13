import React, {useState} from 'react'

const ToggleForWaterManag = () => {
    const [toggle, SetToggle] = useState(true)    
    return (
        <div className="toogleForWaterManag" style={toggle? (null) : ({justifyContent:'flex-end'})} onClick={() => { SetToggle(!toggle) }}>
            <div className="toogleForWaterManagCircle"></div>
        </div>
    )
}

export default ToggleForWaterManag;
