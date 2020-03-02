import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp';
import useRestaurants from '../hooks/useRestaurants';
import RestaurantsList from '../components/RestaurantsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, restaurants, errorMessage] = useRestaurants();
    //restaurants.length > 1 && console.log(restaurants[0].sys.contentType);
    
    const filterRestaurantsByPrice = (price) => {
        // price === '$' || '$$' || '$$$'
        return restaurants.filter(restaurant => {
            return restaurant.price === price;
        });
    };

    return (
        <>
            <SearchBar 
                term={term} 
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}    
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <RestaurantsList 
                    restaurants={filterRestaurantsByPrice('$')}
                    title="Cost Efective" 
                />
                <RestaurantsList
                    restaurants={filterRestaurantsByPrice('$$')}
                    title="Bit Pricier" 
                />
                <RestaurantsList
                    restaurants={filterRestaurantsByPrice('$$$')}
                    title="Big Spender"
                />
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;