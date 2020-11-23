import React, { useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
// import styles
import { COLOR, FONT_SIZE } from '../../styles'
// import components
import Label from '../components/common/Label/InputLabel'
import TextInput from '../components/common/Input/TextInput'
// import selectors
import { useSelectLoginUser } from '../selectors/public/user'

const OnBoardingPage: React.FC = props => {
  const loginUser = useSelectLoginUser()
  const [tempUserName, setTempUserName] = useState(loginUser?.username || '')
  const [tempUserId, setTempUserId] = useState(loginUser?.userId || '')
  
  const handleOnChangeUserName = (value: string) => {
    setTempUserName(value)
  }

  const handleOnChangeUserId = (value: string) => {
    setTempUserId(value)
  }
  
  return (
    <Wrapper>
      <Title>フクギョウへようこそ！</Title>
      <ImageWrapper>
        <Image src="/onBoarding.png" width={200} height={180} />
      </ImageWrapper>
      <FormWrapper>
        <Label text="ユーザー名" />
        <InputWrapper>
          <TextInput value={tempUserName} defaultValue={tempUserName} placeholder="ユーザー名" onChange={handleOnChangeUserName} />
        </InputWrapper>
      </FormWrapper>
      <FormWrapper>
        <Label text="ユーザーID" />
        <InputWrapper>
          <TextInput value={tempUserId} defaultValue={tempUserId} placeholder="ユーザーID" onChange={handleOnChangeUserId} />
        </InputWrapper>
      </FormWrapper>
    </Wrapper>
  )
}

export default OnBoardingPage

const Wrapper = styled.div``

const Title = styled.h2`
  padding-bottom: 30px;
  color: ${COLOR.BASE_TEXT};
  font-size: ${FONT_SIZE.FS_22};
  text-align: center;
`

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
  margin: 20px auto;
`

const InputWrapper = styled.div`
  padding: 10px 0;
`