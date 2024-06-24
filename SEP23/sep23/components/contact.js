import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

export function Contact({ contactData, navigation }) {

    const navigateToContactDetail = () => {
        navigation.navigate('ContactDetailView', { contactData: contactData });
    }
    return (
        <View style={styles.container}>
            <View style={styles.contactContainer}>
                <Text style={styles.contactCompany}>{contactData.companyName}</Text>
                <Text style={styles.contactName}>{contactData.contact}</Text>
            </View>
            <TouchableOpacity style={styles.buttonContainer} onPress={navigateToContactDetail}>
                <Text style={styles.button}>{">"}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between', // Push items to edges
        alignItems: 'center', // Center items vertically
        borderStyle: "solid",
        margin: 3,
        borderWidth: 2,
        borderColor: 'white',
        backgroundColor: 'white',
        marginHorizontal: 20,

    },
    contactCompany: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    contactContainer: {
        flexDirection: 'column',
        justifyContent: 'center', // Center vertically
    },
    contactName: {
        fontSize: 16,
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
    },
    button: {
        color: 'grey', // Corrected property name for color
        fontSize: 20,
    },
});
