import {View, Text, FlatList, Image, StyleSheet} from 'react-native'
import {useState} from "react";



const ProfileComponent = ({username}) => {
    const [imageUrl, setImageUrl] = useState("")
    const loadProfileInformation = async () => {
        const endpoint = `https://api.jikan.moe/v4/users/${username}`
        const response = await fetch(endpoint)
        const json = await response.json()
        return json['data']
    }

    const fillItemList = async () => {
        const profileInformation = await loadProfileInformation()
        for (const key in profileInformation) {
            if(key === "images"){
                setImageUrl(profileInformation[key]['jpg']['image_url'])
            }
            else{
                itemDictionary.push({key: key, value: profileInformation[key]})
            }

        }
    }
    fillItemList()
    let itemDictionary = []

    return(
        <View style={styles.component}>
            <View style={styles.titleView}>
                <Text style={styles.titleText}>
                    {username + "'s Profile"}
                </Text>
            </View>
            <View style={styles.tableHeaderView}>
                <Text style={styles.tableHeaderText}>Title</Text>
                <Text style={styles.tableHeaderText}>Result</Text>
            </View>
            <View>
                <FlatList
                    data={itemDictionary}
                    renderItem={({item}) =>
                        <View style={styles.tableItemsView}>
                            <Text style={styles.tableItemsText}>
                                {item.key}
                            </Text>
                            <Text style={styles.tableItemsText}>
                                {item.value}
                            </Text>
                        </View>
                    }
                />
            </View>
            <View style={styles.imageView}>
                <Image style={styles.image} src={imageUrl}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    component:{
        flex:1,
        padding: 16,
    },
    titleView:{
        padding: 18,
    },
    titleText:{
        fontWeight: "bold",
        fontSize: 30,
    },
    tableHeaderView:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 8,

    },
    tableHeaderText:{
        fontWeight: "bold",
    },
    tableItemsView:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 4,
        padding: 8,
        backgroundColor: "grey",
    },
    tableItemsText:{
        fontSize: 16
    },
    imageView:{
        margin:"auto"
    },
    image:{
        width: 200,
        height: 200
    }
})

export default ProfileComponent