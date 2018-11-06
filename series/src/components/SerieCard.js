import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image
} from 'react-native';

const SerieCard = ({ serie }) => (
    <View style={ styles.container }>
        <View style={ styles.card }>
            <Image
                source={{
                    uri: serie.img
                }}
                aspectRatio={1}
                resizeMode="stretch"
            />
            {/*<View style={ styles.cardTitleWrapper }>*/}
                {/*<Text style={ styles.cardTitle }>{ serie.title }</Text>*/}
            {/*</View>*/}
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        height: Dimensions.get('window').width / 2
    },
    card: {
        flex: 1,
        width: 185,
        borderWidth: 1,
        borderColor: 'transparent'
    },
    cardTitle:{
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
        paddingTop: 10
    },
    cardTitleWrapper: {
        backgroundColor: 'black',
        height: 50,
        position: 'absolute',
        bottom: 0,
        opacity: .6,
        width: '100%',
        alignItems: 'center'
    }
});

export default SerieCard;