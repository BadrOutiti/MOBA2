import {View, Text, FlatList, StyleSheet} from 'react-native'
import ResultItem from "./resultItem";

const StatisticsComponent = ({username, medium}) => {

    const loadStatistics = async () => {
        const endpoint = `https://api.jikan.moe/v4/users/${username}/statistics`
        const response = await fetch(endpoint)
        const json = await response.json()
        return json['data'][medium]
    }

    const fillStatsDictionary = async () => {
        const statisticsData = await loadStatistics()
        for (const key in statisticsData) {
            statsDictionary.push({statistic: key, result: statisticsData[key]})
        }
    }
    let statsDictionary = []
    fillStatsDictionary()

    return (
        <View style={styles.component}>
            <View style={styles.title}>
                <Text style={styles.titleText}>
                    {username + "'s " + medium + " statistics"}
                </Text>
            </View>
            <View style={styles.tableHeader}>
                <Text style={styles.headerText}>Statistic</Text>
                <Text style={styles.headerText}>Result</Text>
            </View>
            <View style={styles.row}>
                <FlatList
                    data={statsDictionary}
                    renderItem={({item}) =>
                        <View style={styles.tableRows}>
                            <Text style={styles.rowTitle}>
                                {item.statistic}
                            </Text>
                            <Text style={styles.rowText}>
                                {item.result}
                            </Text>
                        </View>
                    }>
                </FlatList>
            </View>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        component: {
            flex:1,
            padding: 16,
        },
        title: {
            marginBottom: 16,
        },
        titleText:{
            fontWeight: "bold",
            fontSize: 30,
        },
        tableHeader: {
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 8,
        },
        headerText: {
            fontWeight: "bold",
        },
        row: {
            flex:1
        },
        tableRows: {
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 4,
            padding: 8,
            backgroundColor: "grey",
        },
        rowTitle: {
            fontSize: 16,
            fontWeight: "bold",
        },
        rowText: {
            fontSize: 16
        }
    }
)

export default StatisticsComponent;