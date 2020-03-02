import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RestaurantsShowScreen = ({ navigation }) => {
    const id = navigation.getParam('id');
    console.log(id);
    return (
        <View>
            <Text>Restaurants Show</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default RestaurantsShowScreen;
                                                                                                                                                                                    