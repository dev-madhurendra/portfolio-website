import React from 'react'
import { myname } from '../../../services/mocks/mocks'
import { FlexDiv } from '../../../utils/styled'
import './style.css'


const AnimatedName = () => {
  return (
    <FlexDiv>
        <div>I'm</div>
        <div className='name'>
            &lt;
            {myname.split('').map((ch, index) =>
                <span className={`name-${index}`} key={index}>{ch}</span>)}
            {'/'}
            &gt;
        </div>
    </FlexDiv>
  )
}

export default AnimatedName