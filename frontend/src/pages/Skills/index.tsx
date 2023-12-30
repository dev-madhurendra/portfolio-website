import React from 'react'
import SkillsTag from '../../components/organisms/SkillsTag'
import styled from '@emotion/styled'


export const SkillDiv = styled('div')({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  width: "100%",
  height:"100vh"
})

const SkillSection = () => {
  return (
    <SkillDiv>
        <SkillsTag/>
    </SkillDiv>
  )
}

export default SkillSection