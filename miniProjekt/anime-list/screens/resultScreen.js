import {View, Text, FlatList, StyleSheet} from "react-native";
import  {useState, useEffect} from "react";
import useFetch from '../fetchData'
import ResultItem from "../components/resultItem";

const ResultScreen = ({route}) => {
    const { username } = route.params;

    const resultItems = [
        {title: "Profile", text: "The profile information of " + username, type: "profile"},
        {title: "Friends", text: "The friends of " + username, type: "friends"},
        {title: "Favorites", text: "The favorites of " + username, type: "favorites"},
        {title: "Anime Statistics", text: "The anime statistics of " + username, type: "animeStats"},
        {title: "Manga Statistics", text: "The manga statistics of " + username, type:"mangaStats"},

    ]

    return(
        <FlatList
            style={styles.container}
            data={resultItems}
            renderItem={({ item }) => <ResultItem title={item.title} text={item.text} type={item.type} username={username}/>}
        />
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
})
export default ResultScreen