import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native'

const ResultItem = ({title, text, type, username}) =>  {

    const navigation = useNavigation()

    const handleSearch = () => {
        // Navigate to the desired screen, passing the search text as a parameter
        navigation.navigate('DetailsScreen', {type: type, username: username});
    };

    return(
        <View style={styles.component}>
            <TouchableOpacity onPress={handleSearch} >
                <Text style={styles.title}>
                    {title}
                </Text>

                <Text style={styles.text}>
                    {text}
                </Text>
            </TouchableOpacity>
        </View>
    )


}

const styles = StyleSheet.create(
    {
        component:{
            flex:1,
            margin: 1,
            borderWidth: 1,

        },
        title:{
            marginLeft:10,
            fontSize: 30,
            fontWeight: "bold",
            marginTop: 10,

        },
        text:{
            marginLeft: 30,
            fontSize: 20,
            marginBottom: 10,
            marginTop: 10,

        },
    }
)

export default ResultItem;