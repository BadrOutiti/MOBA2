import {View, StyleSheet} from 'react-native'
import StatisticsComponent from '../components/statisticsComponent'
import ProfileComponent from '../components/profileComponent'

const DetailsScreen = ({route}) => {

    const {type, username} = route.params

    const getCorrectDetailsComponent = () => {
        switch(type){
            case "profile":
                return <ProfileComponent/>
                break;
            case "friends":
                break;
            case "favorites":
                break;
            case "animeStats":
                return <StatisticsComponent username={username} medium={"anime"}/>
                break;
            case "mangaStats":
                return <StatisticsComponent username={username} medium={"manga"}/>
                break;
            default:
                //TODO Fehlermeldung
        }
    }

    return(
        <View style={styles.component}>
            {getCorrectDetailsComponent()}
        </View>
    )
}
const styles = StyleSheet.create({
    component:{
        flex:1,
    }
})

export default DetailsScreen;