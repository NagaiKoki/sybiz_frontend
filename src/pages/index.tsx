import styled from 'styled-components'
import Image from 'next/image'
// import styles
import { COLOR, FONT_SIZE } from '../../styles'
// import components
import Button from '../components/common/Button'

const Index: React.FC = props => {
  return (
    <Wrapper>
      <MainWrapper>
        <Title>
          副業を募集しよう
        </Title>
        <Image src={'/top_image.png'} width={250} height={200} />
        <ButtonWrapper>
          <Button text="募集する" size="medium" onClick={() => {}} />
        </ButtonWrapper>
      </MainWrapper>
    </Wrapper>
  )
}

export default Index

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`

const MainWrapper = styled.div`
  padding: 30px;
`

const Title = styled.h2`
  color: ${COLOR.BASE_TEXT};
  font-size: ${FONT_SIZE.FS_30};
  padding-bottom: 20px;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`