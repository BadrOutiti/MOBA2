import {Image, Text, View, StyleSheet} from 'react-native'
import {getImageSource} from '../logic/imageHelper'
const ProductItem = ({imagePath, productText, productPrice}) => {

    return(
        <View style={styles.component}>
            <Image source={getImageSource(imagePath)} style={styles.image} />

            <Text style={styles.productText} textBreakStrategy={"balanced"}>
                {productText}
            </Text>

            <Text style={styles.productPrice}>
                {productPrice + " CHF"}
            </Text>
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
    }
})

export default ProductItem