import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Center, NativeBaseProvider } from 'native-base';

import Home from './Home';
import { fontSize } from 'styled-system';

function Cart() {
    return (
        <Text style={styles.container}>Cart Screen</Text>
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
          <Cart/>
      </NativeBaseProvider>
    );
}