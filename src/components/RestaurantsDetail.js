import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const RestaurantsDetail = ({ restaurant }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.imageStyle} ource={{ uri: "images.ctfassets.net/o9fy17dex6yg/1SIkzzpE4N9LOo817CMnK1/84a50f6185d6944055913d53329ff020/Contactos.png"}}/>
            <Text style={styles.name}>{restaurant.name}</Text>
            <Text>
                {restaurant.rating} Stars, {restaurant.review_count}
                </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 15
    },
    imageStyle: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5
    },
    name: {
        fontWeight: 'bold',
    }
});

export default RestaurantsDetail;