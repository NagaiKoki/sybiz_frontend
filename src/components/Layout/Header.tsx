import React from 'react'
import styled from 'styled-components'
// import styles
import { COLOR } from '../../../styles'
// import components
import Button from '../../components/common/Button'

const Header: React.FC = () => {
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>Title</Title>
        <Button text="登録する" size="small" onClick={() => {}} />
      </TitleWrapper>
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  height: 60px;
  box-shadow: ${COLOR.BOX_SHADOW_UNDER};
`

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: 50%;
`

const Title = styled.h1`
`