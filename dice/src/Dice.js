import React from 'react'
import './Dice.css'

function Dice(props) {
    return (
        <div className='dice-design'>
            {props.value}
        </div>
    )

}

export default Dice
