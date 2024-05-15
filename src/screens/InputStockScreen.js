import React, { useState } from 'react'
import {View, StyleSheet, TouchableOpacity, Alert} from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { blankValidator } from '../helpers/blankValidator'
import axios from "axios";

export default function InputStockScreen({ navigation }) {
    const [stockId, setStockId] = useState({ value: '', error: '' })
    const [stockName, setStockName] = useState({ value: '', error: '' })

    const onInputStock = async () => {
        const stockIdError = blankValidator(stockId.value)
        const stockNameError = blankValidator(stockName.value)
        if (stockNameError || stockIdError) {
            setStockId({ ...stockId, error: stockIdError })
            setStockName({ ...stockName, error: stockNameError })
            return
        }

        const registerData = {
            id: stockId.value,
            name: stockName.value
        }
        try {
            const response = await axios.post('http://124.218.119.213:8001/api/v1/stock', registerData);
            Alert.alert("Success", "Stock has been registered successfully.", [
                { text: "OK" }
            ]);
            console.log('Success:', response.data);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Background>
            <BackButton goBack={navigation.goBack} />
            <Logo />
            <Header>Input Stock</Header>
            <TextInput
                label="股票代號"
                returnKeyType="next"
                value={stockId.value}
                onChangeText={(text) => setStockId({ value: text, error: '' })}
                error={!!stockId.error}
                errorText={stockId.error}
            />
            <TextInput
                label="股票名稱"
                returnKeyType="next"
                value={stockName.value}
                onChangeText={(text) => setStockName({ value: text, error: '' })}
                error={!!stockName.error}
                errorText={stockName.error}
            />
            <Button
                mode="contained"
                onPress={onInputStock}
                style={{ marginTop: 24 }}
            >
                存檔
            </Button>
        </Background>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        marginTop: 4,
    },
    link: {
        fontWeight: 'bold',
        color: theme.colors.primary,
    },
})