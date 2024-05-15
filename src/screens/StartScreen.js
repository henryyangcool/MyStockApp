import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>股票記帳</Header>
        <Paragraph>
          股票成長之路
        </Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Log in
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Create an account
      </Button>
        <Button mode="outlined"
                onPress={() => navigation.navigate('InputStockScreen')}>
        Input Stock
        </Button>
        <Button mode="outlined"
                onPress={() => navigation.navigate('ShowStockScreen')}>
            Show Stock
        </Button>
    </Background>
  )
}