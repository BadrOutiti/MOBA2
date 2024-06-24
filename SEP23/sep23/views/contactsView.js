import {FlatList, View, StyleSheet} from 'react-native';
import {Title} from '../components/title';
import {Contact} from '../components/contact';
import {getContacts} from "../logic/readJson";
import {useState} from "react";

export function ContactsView({navigation}) {
    const contacts = getContacts();


    return (
      <View style={styles.container}>
        <Title/>
        <FlatList style={styles.list}
          data={contacts}
          renderItem={({item}) => <Contact contactData={item} navigation={navigation}/>}
        />
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F5F5F5',
    },
});