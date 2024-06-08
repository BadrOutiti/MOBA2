import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Result = ({heading, text}) => {
    return(
    <View style={styles.resultBox}>
     <Text style={styles.resultHeading}>
         {heading}
     </Text>
        <Text style={styles.resultText}>
            {text}
        </Text>
    </View>
    )
};

const styles = StyleSheet.create(
    {
        resultBox:{
            flex: 1,
            flexDirection: "column",
            borderColor: "black",
            borderWidth: 2,
            overflow: "hidden"
        },
        resultHeading:{
            fontStyle: "bold",
            marginLeft: 20,
            fontSize: 60
        },
        resultText:{
            marginLeft: 10,
            fontSize: 30,
        }
    }
)
export default Result;