import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Alert } from 'react-native';

import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {

  const [items, setItems] = useState([
    { id: 1, text: 'Milk' },
    { id: 2, text: 'Eggs' },
    { id: 3, text: 'Bread' },
    { id: 4, text: 'Juice' },
  ]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(i => i.id !== id);
    });
  }
  
  const addItem = (item) => {
    if(!item) {
      Alert.alert('Error', 'Please enter an item', { text: 'Ok'});
      return;
    }
    setItems(prevItems => {
      return [{id: (prevItems.length + 1), text: item}, ...prevItems];
    });
  }

  return (
    <View style={styles.container}>
      <Header title="Shopping List"/>
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => <ListItem item={item} deleteItem={deleteItem} />}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  }
})

export default App;