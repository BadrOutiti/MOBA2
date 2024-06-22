import {Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import {getImageSource} from '../logic/imageHelper'
import {useState} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProductItem = ({productData, withFavorite}) => {
    const [isFavored, setFavorite] = useState(productData['favorite'])

    const toggleFavorite = async () => {
        try {
            let updatedData = productData
            updatedData.favorite = !isFavored
            const jsonValue = JSON.stringify(updatedData);
            await AsyncStorage.setItem(updatedData.productId, jsonValue);
            setFavorite(!isFavored)
        } catch (e) {
            // saving error
        }
    }
    return(
        <View style={styles.component}>
            <Image source={getImageSource(productData.image1)} style={styles.image} />

            <Text style={styles.productText} textBreakStrategy={"balanced"}>
                {productData.altText}
            </Text>

            <Text style={styles.productPrice}>
                {productData.price + " CHF"}
            </Text>
            {
                withFavorite &&
                <TouchableOpacity onPress={toggleFavorite} >
                    <Image source={isFavored ? require('../res/images/favorite-25-16.png') : require('../res/images/favorite-35-16.png')} style={styles.favorite} />
                </TouchableOpacity>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    component:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"center",
        marginHorizontal: 5,
        marginVertical: 5,
        borderStyle:"solid",
        borderWidth:1,
    },
    image:{
        width: 80,
        height: 80,
        margin: 10

    },
    productText:{
        flex:1,
        textAlign: "center"
    },
    productPrice:{
        marginRight: 5,
        fontWeight: "bold",
    },
    favorite:{
        marginRight: 5,
        marginLeft: 5,
        width:30,
        height:30
    }
})

export default ProductItem