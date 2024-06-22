import {Button, View, StyleSheet} from "react-native";

export function TabView({navigation}){
    return(
        <View style={styles.component}>
            <View style={styles.button}>
                <Button title={"Produkte"} onPress={() => {
                    navigation.navigate('Products')
                }}/>
            </View>
            <View style={styles.button}>
                <Button title={"Wunschliste"} onPress={() => {
                    navigation.navigate('WishList')
                }}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    component:{
        borderStyle:"solid",
        flexDirection:"row",
        justifyContent: "space-between",
        margin:2,
        borderWidth:2
    },
    button:{
        flex:1,
        margin: 1
    }
})