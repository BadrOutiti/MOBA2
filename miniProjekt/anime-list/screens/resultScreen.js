import {View, Text, FlatList, StyleSheet} from "react-native";
import  {useState, useEffect} from "react";
import useFetch from '../fetchData'
import ResultItem from "../components/resultItem";



const ResultScreen = ({route}) => {
    const { username } = route.params;

    const resultItems = [
        {title: "Profile", text: "The profile information of " + username},
        {title: "Friends", text: "The friends of " + username},
        {title: "Favorites", text: "The favorites of " + username},
        {title: "Anime Statistics", text: "The anime statistics of " + username},
        {title: "Manga Statistics", text: "The manga statistics of " + username},

    ]

    return(
        <FlatList
            style={styles.container}
            data={resultItems}
            renderItem={({ item }) => <ResultItem title={item.title} text={item.text} />}
        />
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
})
export default ResultScreen