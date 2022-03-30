import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { useNavigation } from '@react-navigation/native';

import { Appbar } from 'react-native-paper';
import Menu from './Menu';


function Home() {
    const navigation = useNavigation();
    return (
        <Appbar style={styles.bottom}>
            <Appbar.Action
                icon="home"
                onPress={() => navigation.navigate("Menu")}
                />
                <Appbar.Action icon="mail" onPress={() => navigation.navigate("Mail")} />
                <Appbar.Action icon="wallet" onPress={() => console.log('Pressed wallet')} />
                <Appbar.Action
                icon="cart"
                onPress={() => console.log('Pressed cart')}
                />
        </Appbar>
    )
}

export default () => {
    return (
      <NativeBaseProvider>
          <Home/>
      </NativeBaseProvider>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})