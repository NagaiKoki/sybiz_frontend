import { useEffect } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import Image from 'next/image'
// import styles
import { COLOR, FONT_SIZE } from '../../styles'
// import components
import Button from '../components/common/Button'
// import dispatchers
import { useUiDispatchers } from '../dispatchers/ui'

const Index: React.FC = props => { 
  const { toggleAuthModalOpen } = useUiDispatchers()
  
  return (
    <Wrapper>
      <MainWrapper>
        <Title>
          副業を募集しよう
        </Title>
        <ImageWrapper>
          <Image src={'/top_image.png'} width={250} height={200} />
        </ImageWrapper>
        <ButtonWrapper>
          <Button text="募集する" size="medium" onClick={toggleAuthModalOpen} />
        </ButtonWrapper>
      </MainWrapper>
      <DescriptionWrapper>
        <SubTitle>
          説明説明説明
        </SubTitle>
        <Paragraph>
          ほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげ
        </Paragraph>
      </DescriptionWrapper>
      <DescriptionWrapper>
        <SubTitle>
          説明説明説明
        </SubTitle>
        <Paragraph>
          ほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげ
        </Paragraph>
      </DescriptionWrapper>
      <DescriptionWrapper>
        <SubTitle>
          説明説明説明
        </SubTitle>
        <Paragraph>
          ほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげ
        </Paragraph>
      </DescriptionWrapper>
    </Wrapper>
  )
}

export default Index

const Wrapper = styled.div`
`

const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const Title = styled.h2`
  padding-bottom: 20px;
  color: ${COLOR.BASE_TEXT};
  font-size: ${FONT_SIZE.FS_30};
  text-align: center;
`

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`

const DescriptionWrapper = styled.div`
  margin: 30px 0;
  padding: 30px;
`

const SubTitle = styled.h3`
  color: ${COLOR.BASE_TEXT};
  font-size: ${FONT_SIZE.FS_20};
`

const Paragraph = styled.p`
  color: ${COLOR.BASE_TEXT};
  font-size: ${FONT_SIZE.BASE_TEXT_SIZE};
`