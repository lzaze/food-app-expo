import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NativeBaseProvider } from 'native-base';

import Home from './Home';

function Mail() {
    return (
        <Text style={styles.container}>Mail Screen</Text>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 100,
    }
})

export default () => {
    return (
      <NativeBaseProvider>
          <Home/>
          <Mail/>
      </NativeBaseProvider>
    );
}