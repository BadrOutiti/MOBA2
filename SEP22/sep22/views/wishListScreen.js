import React, { useState, useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { TabView } from '../components/tabView';
import ProductItem from '../components/productItem';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PriceCalculator } from '../components/priceCalculator';

export function WishListScreen({ navigation }) {
    const [sneakerToShow, setSneakerToShow] = useState([]);

    const getSneakers = async () => {
        try {
            const keys = await AsyncStorage.getAllKeys();
            const result = await AsyncStorage.multiGet(keys);

            const sneakers = result.map(([key, value]) => JSON.parse(value));
            const favoriteSneakers = sneakers.filter(sneaker => sneaker.favorite);
            setSneakerToShow(favoriteSneakers);
        } catch (e) {
            console.error('Error reading data', e);
        }
    };

    useEffect(() => {
        getSneakers();
    }, []);

    return (
        <>
            <FlatList
                data={sneakerToShow}
                renderItem={({ item }) => <ProductItem productData={item} withFavorite={false} />}
                keyExtractor={(item) => item.productId.toString()}
            />
            <PriceCalculator productArray={sneakerToShow} />
            <TabView navigation={navigation} />
        </>
    );
}
