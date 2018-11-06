import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
// import Header from '../components/Header';
import PeopleList from '../components/PeopleList';
import axios from 'axios';

export default class PeoplePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            peoples: [],
            loading: false,
            error: false
        };
    }

    componentDidMount() {
        this.setState({ loading: true });
        axios
            .get('https://randomuser.me/api/?nat=br&results=150')
            .then(response => {
                const { results } = response.data;
                this.setState({
                    peoples: results,
                    loading: false
                });
            }).catch(error => {
                this.setState({
                    error: true,
                    loading: false
                })
        })
    }

    // renderLoading() {
    //     if(this.state.loading) {
    //         return (<ActivityIndicator size='large' color='#6ca2f7'/>);
    //     }
    //     return null;
    // }

    render() {
        /* this.props.navigation.navigate(chave da página, state) */
        // this.props.navigation.navigate('PeopleDetail');
        return (
            <View style = { styles.container }>
                { /*this.renderLoading()*/ }
                {
                    this.state.loading
                        ? <ActivityIndicator size='large' color='#6ca2f7'/>
                        : this.state.error
                            ? <Text style={ styles.error }>Ops... Algo deu errado =(</Text>
                            : <PeopleList
                                peoples = { this.state.peoples }
                                onPressItem = {pageParams => {
                                    this.props.navigation.navigate('PeopleDetail', pageParams);
                                }}
                            />
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    error: {
        alignSelf: 'center',
        fontSize: 26,
        fontWeight: 'bold',
        color: 'red'
    }
});
