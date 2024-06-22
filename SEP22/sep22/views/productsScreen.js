import {StyleSheet, FlatList, } from "react-native";
import Greetings from "../components/greetings";
import {getSneakerInformation} from '../logic/readJson'
import ProductItem from '../components/productItem'
import {TabView} from "../components/tabView";
import AsyncStorage from '@react-native-async-storage/async-storage';


const ProductsScreen = ({navigation}) => {
    const sneakerInformation = getSneakerInformation();

    async function persistData() {
        for (const object of sneakerInformation) {
            // Add favorite property if it doesn't exist
            if (!object.hasOwnProperty('favorite')) {
                object.favorite = false;
            }

            try {
                // Persist the updated object to AsyncStorage
                await AsyncStorage.setItem(
                    object.productId,
                    JSON.stringify(object),
                );
            } catch (error) {
                console.error('Error saving data', error);
            }
        }
    }

    persistData();


    return(
        <>
            <Greetings/>
            <FlatList
                data={sneakerInformation}
                renderItem={({item}) => <ProductItem productData={item} withFavorite={true}/>}
                />
            <TabView navigation={navigation}/>
        </>
        )
}

const styles = StyleSheet.create(
    {
        greeting:{
            flex:1
        }
    }
)
export default ProductsScreen;