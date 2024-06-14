import { StyleSheet, View } from 'react-native';
import SearchBar from '../components/searchBar';


const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <SearchBar/>
        </View>
    );
}

const styles = StyleSheet.create(
    {
        container:{
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }
    }
)

export default HomeScreen