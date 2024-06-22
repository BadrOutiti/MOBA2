import { View, Text, StyleSheet } from 'react-native';

export function PriceCalculator({ productArray }) {
    const calculatePrice = () => {
        let calculatedPrice = 0;

        if (productArray.length === 0) return 0; // Check for empty array

        for (const product of productArray) { // Use 'for...of' to iterate over array elements
            console.log(product); // This will log each product object
            calculatedPrice += parseFloat(product.price); // Use 'parseFloat' for prices with decimals
        }
        return calculatedPrice;
    };

    return (
        <View style={styles.component}>
            <Text style={styles.text}>Total</Text>
            <Text style={styles.text}>{calculatePrice() + ' CHF'}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    component: {
        justifyContent: 'space-between',
        flexDirection:"row"
    },
    text:{
        fontSize:20,
        fontWeight:"bold",
        marginHorizontal:10,
        marginVertical:10
    }
});
