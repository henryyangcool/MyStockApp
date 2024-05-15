import React, {useEffect, useState} from 'react'
import {View, StyleSheet, TouchableOpacity, Alert, FlatList, SafeAreaView} from 'react-native'
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

export default function ShowStockScreen({ navigation }) {
    const [data, setData] = useState([])

    useEffect(() => {
        stockData();
    }, []);

    const stockData = async () => {
        try {
            const response = await axios.get('http://124.218.119.213:8001/api/v1/stock');
            setData(response.data);  // 假设 API 直接返回数据数组
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const stocks = ({ item }) => (
        <View style={styles.itemContainer}>
            <Text style={styles.itemText}>ID: {item.id}</Text>
            <Text style={styles.itemText}>Name: {item.name}</Text>
        </View>
    );


    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={data}
                renderItem={stocks}
                keyExtractor={item => item.id.toString()}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: theme.colors.primary,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    container: {
        flex: 1,
        marginTop: 30,
    },
    itemText: {
        fontSize: 16,
    }
})