import React from 'react'
import { Flex } from '@chakra-ui/react'
import { Header, Main, Footer } from './Section'

export const App = () => {
  return (
    <Flex flexDir='column'>
      <Header />
      <Main />
      <Footer/>
    </Flex>
  )
}