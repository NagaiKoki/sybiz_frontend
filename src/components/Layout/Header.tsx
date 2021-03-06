import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
// import styles
import { COLOR } from '../../../styles'
// import components
import Button from '../../components/common/Button'
// import dispatchers
import { useUiDispatchers } from '../../dispatchers/ui'

const Header: React.FC = () => {
  const { toggleAuthModalOpen } = useUiDispatchers()

  return (
    <Wrapper>
      <TitleWrapper>
        <Link href="/">
          <a>
            <Title>Title</Title>
          </a>
        </Link>
        <Button text="登録する" size="small" onClick={toggleAuthModalOpen} />
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
  width: 600px;
  padding: 0 20px;
`

const Title = styled.h1`
  cursor: pointer;
`