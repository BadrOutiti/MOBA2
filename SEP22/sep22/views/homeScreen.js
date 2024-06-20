import {View, Text, StyleSheet, FlatList} from "react-native";
import Greetings from "../components/greetings";
import {getSneakerInformation} from '../logic/readJson'
import ProductItem from '../components/productItem'


const HomeScreen = () => {
    const sneakerInformation = getSneakerInformation();

    return(
        <>
            <Greetings/>
            <FlatList
                data={sneakerInformation}
                renderItem={({item}) => <ProductItem imagePath={item['image1']} productText={item['altText']} productPrice={item['price']}/>}
                />
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
export default HomeScreen;