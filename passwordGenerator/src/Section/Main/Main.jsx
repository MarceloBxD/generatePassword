import React, {useState} from 'react'
import { Flex, Text, Box, ButtonGroup, Button, Input } from '@chakra-ui/react'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
} from '@chakra-ui/react'

export const Main = () => {

  const [password, setPassword] = useState('');
  const [numDigits, setNumDigits] = useState(1);
  const [isOpen, setIsOpen] = useState(false)
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  const createPassword = (length) => {
    let result = '';
    const resultLength = characters.length;
    for (let i = 1; i <= length; i++){
      result += characters.charAt(Math.floor(Math.random() * resultLength));
    }
    setPassword(result);
  }

  const handleClick = () => {
  
    if (!isOpen) {
      createPassword(numDigits)
    }

    setIsOpen(!isOpen)
  }

  const handleInput = (e) => {
    const numMax = e.target.value
    setNumDigits(numMax)
  }

  const copyPassword = () => {
    const input = document.querySelector('#inputPassword');
    input.select();
    navigator.clipboard.writeText(input.value);
    alert("Senha Copiada com sucesso: " + input.value)
  }

  return (
    <Flex h='80vh' onClick={isOpen ? handleClick : null}>
    <Flex flexDir='column' m='0 auto'>
      <Input mt='10px' placeholder='Numeros' maxLength='5' max='20' onChange={handleInput} value={numDigits} type='range'/>
      <Text align='center' mt='10px'>Digits: {numDigits}</Text>  
      <Popover
      isOpen={isOpen && password}
      placement='bottom'
      autoFocus
      closeOnBlur={true}
    >
      <PopoverTrigger>
        <Button onClick={handleClick} mt='10px'>Generate Password</Button>
      </PopoverTrigger>
      <PopoverContent color='white' bg='blue.800' borderColor='blue.800'>
        <PopoverHeader alignSelf='center' pt={4} fontWeight='bold' border='0'>
          Generated Password:
        </PopoverHeader>
        <PopoverArrow />
        <PopoverCloseButton onClick={handleClick}/>
        <PopoverBody alignSelf='center'>
              <Input id='inputPassword' defaultValue={ password } />
            </PopoverBody>
        <PopoverFooter
          border='0'
          display='flex'
          alignItems='center'
          justifyContent='space-between'
          pb={4}
            >
          <ButtonGroup m='0 auto' justifySelf='flex-end' size='sm'>
              <Button colorScheme='green' onClick={copyPassword}>Copy</Button>
            <Button onClick={handleClick} colorScheme='blue'>
              Close
            </Button>
          </ButtonGroup>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
    </Flex>
    </Flex>
  )
}