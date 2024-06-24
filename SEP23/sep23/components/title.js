import {View, Text, StyleSheet} from "react-native";

export function Title() {
  return (
      <Text style={styles.titleText}>Contacts</Text>
  );
}

const styles = StyleSheet.create({
    titleText:{
        fontSize: 40,
        fontWeight: 'bold',
        marginHorizontal: 10,
        marginTop: 20,
    },
});
