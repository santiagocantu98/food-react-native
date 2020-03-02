import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import RestaurantsDetail from './RestaurantsDetail';
import { withNavigation } from 'react-navigation';

const RestaurantsList = ({ title, restaurants, navigation }) => {
    return (
        <View style={style.container}>
            <Text style={style.titleStyle}>{title}</Text>
            <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                data={restaurants}
                keyExtractor={(restaurant) => restaurant.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('RestaurantsShow', { id: item.id })}>
                            <RestaurantsDetail restaurant={item}/>
                        </TouchableOpacity>
                    )
                }}
            />
            <Text>Restaurants: {restaurants.length}</Text>
        </View>
    );
};

const style = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    container: {
        marginBottom: 10
    }
});

export default withNavigation(RestaurantsList);