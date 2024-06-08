import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

const ResultList = ({resultItems}) => {
    return(
        <ScrollView style={styles.container}>
            {resultItems.map((item, index) => (
                React.cloneElement(item, { key: index }) // Ensures each item has a unique key
            ))}
        </ScrollView>
    )
};
const styles = StyleSheet.create(
    {
        container:{
            marginTop: 30,
            flexDirection: "column",
        }
    }
)

export default ResultList;