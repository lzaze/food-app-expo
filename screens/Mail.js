import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph, List } from 'react-native-paper';
import { NativeBaseProvider } from 'native-base';

import Home from './Home';

function Mail() {
    return (
        <List.Item
            title="First Item"
            description="Item description"
            left={props => <List.Icon {...props} icon="mail" />}
  />
    )
}

export default () => {
    return (
      <NativeBaseProvider>
          <Home/>
          <Mail/>
      </NativeBaseProvider>
    );
}