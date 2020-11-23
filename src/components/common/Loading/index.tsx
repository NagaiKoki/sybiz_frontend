import React from 'react'
import Image from 'next/image'

type Props = {
  width?: number
  height?: number
}

const Loading: React.FC<Props> = props => {
  const { width, height } = props

  return (
    <Image src="/loading.svg" width={width || 30} height={height || 30} />
  )
}

export default Loading