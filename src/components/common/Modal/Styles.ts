import styled from 'styled-components'
import { COLOR } from '../../../../styles'

export const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1501;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: rgba(255, 255, 255, 0.85);
`

export const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  border-radius: 8px;
  padding: 30px;
  background: ${COLOR.WHITE_COLOR};
  box-shadow: rgba(0, 22, 103, 0.2) 0px 3px 10px;
`

export const Overlay = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`