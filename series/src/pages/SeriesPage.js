import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import SerieCard from '../components/SerieCard';

import series from '../../series.json';

const SeriesPage = props => (
    <View>
        <FlatList
            data={ series }
            renderItem={({ item }) => (
                <View>
                    <SerieCard serie={ item }/>
                </View>
            )}
            keyExtractor={item => item.id}
            numColumns={2}
        />
    </View>
);

const styles = StyleSheet.create({

});

export default SeriesPage;