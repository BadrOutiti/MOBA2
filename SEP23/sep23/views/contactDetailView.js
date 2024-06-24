import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { saveLastAccess, getLastAccess } from '../logic/persistence'; // Adjust the import path accordingly

export function ContactDetailView({ navigation, route }) {
    const { contactData } = route.params;
    const [lastAccess, setLastAccess] = useState(null);

    useEffect(() => {
        const fetchLastAccess = async () => {
            const timestamp = await getLastAccess(contactData.id);
            setLastAccess(timestamp);
            await saveLastAccess(contactData.id);
        };

        fetchLastAccess();
    }, [contactData.id]);

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{
                    uri: 'https://picsum.photos/300/300',
                }}
            />
            <Text style={styles.companyName}>
                {contactData.companyName}
            </Text>
            <Text style={styles.contactName}>
                {contactData.contact}
            </Text>
            <Text style={styles.address}>
                {contactData.address}
            </Text>
            <Text style={styles.phone}>
                {contactData.phones[0].type + " " + contactData.phones[0].number}
            </Text>
            {contactData.phones[1] && (
                <Text style={styles.phone}>
                    {contactData.phones[1].type + " " + contactData.phones[1].number}
                </Text>
            )}
            {lastAccess && (
                <Text style={styles.lastAccess}>
                    Letzter Zugriff: {new Date(lastAccess).toLocaleString()}
                </Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 16,
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 16,
    },
    companyName: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 8,
    },
    contactName: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 8,
    },
    address: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 16,
    },
    phone: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 8,
    },
    lastAccess: {
        fontSize: 14,
        fontStyle: 'italic',
        color: 'grey',
        textAlign: 'center',
        marginTop: 16,
    },
});
