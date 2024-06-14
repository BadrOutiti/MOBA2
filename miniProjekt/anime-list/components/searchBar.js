import {StyleSheet, View, TextInput, Button, ToastAndroid} from 'react-native';
import { useNavigation} from '@react-navigation/native'
import React from 'react';


const SearchBar =  () => {
    const [text, setText] = React.useState("")

    const navigation = useNavigation()

    const handleSearch = async () => {
        const userExists = await checkIfUserExists()
        if(userExists){
            // Navigate to the desired screen, passing the search text as a parameter
            navigation.navigate('ResultScreen', {username: text});
        }
        else{
            ToastAndroid.show("User does not exist, please write the username of a valid user!", )
        }
    };

    const checkIfUserExists = async () => {
        const endpoint = `https://api.jikan.moe/v4/users/${text}`
        const response = await fetch(endpoint)
        const json = await response.json()
        return !json['error']
    }

    return(
        <View>
            <View style={styles.searchbar}>
                <TextInput
                    placeholder={"User"}
                    onChangeText={(changedText) => setText(changedText)
                }/>
            </View>
            <View style={styles.button}>
                <Button title={"Search"} onPress={handleSearch}>
                </Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        searchbar:{
            borderColor: "black",
            borderWidth: 1,
            width: 200,
            alignItems: "center",
            borderRadius: 80,
        },
        button:{
            marginTop: 30,
            width: 200,
            alignItems: "center",
        }
    }
)

export default SearchBar;

