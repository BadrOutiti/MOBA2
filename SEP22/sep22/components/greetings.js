import {View, Text, StyleSheet} from "react-native";
import {useState} from 'react'

const Greetings = () => {
    const [username, setUsername] = useState("Peter Muster")

    return(
        <Text style={styles.text}>{"Guten Tag " + username}</Text>
        )
}

const styles = StyleSheet.create(
    {
        text:{
            fontWeight: "bold",
            fontSize: 30,
            textAlign:"center",
            marginVertical:30
        }
    }
)

export default Greetings