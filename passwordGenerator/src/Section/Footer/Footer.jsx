import React from 'react'
import { Flex, Text } from '@chakra-ui/react'

export const Footer = () => {
  return (
    <Flex position='relative' align='center' justify='center' fontSize='30px' fontWeight='bold' color='#fff' bottom='0' h='10vh' bgColor='#2B4365' w='100%'>
      <Text> @ Feito por Marcelo Bracet @</Text>
    </Flex>
  )
}
