import React from 'react';
import {
    View,
    StyleSheet,
    TextInput,
    Text,
    Button,
    ActivityIndicator,
    Alert
} from 'react-native';
import firebase from 'firebase';
import { connect } from 'react-redux';

import { tryLogin } from '../actions';

import FormRow from '../components/FormRow';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
            email: '',
            password: '',
            isLoading: false,
            message: ''
        }
    }

    componentDidMount() {
        const config = {
            apiKey: "AIzaSyAaUP6wK5iIinaWPRasQSYv-r-QPvT-NPg",
            authDomain: "series-3da94.firebaseapp.com",
            databaseURL: "https://series-3da94.firebaseio.com",
            projectId: "series-3da94",
            storageBucket: "series-3da94.appspot.com",
            messagingSenderId: "77537155240"
        };
        firebase.initializeApp(config);
    }

    onChangeHandler(field, value) {
        // const newState = {};
        // newState[field] = value;
        // this.setState(newState);

        this.setState({
            [field]: value
        });
    }

    tryLogin() {
        this.setState({ isLoading: true, message: '' });
        const { email, password } = this.state;

        this.props.tryLogin({ email, password })
            .then(user => {
                if(user) {
                    return this.props.navigation.replace('Main');
                }
                this.setState({
                    isLoading: false,
                    message: ''
                });
            })
            .catch(error => {
                this.setState({
                    isLoading: true,
                    message: this.getMessageByErrorCode(error.code)
                });
            })
    }

    getMessageByErrorCode(errorCode) {
        switch (errorCode) {
            case 'auth/wrong-password':
                return 'Senha incorreta';
            case 'auth/user-not-found':
                return 'Usuário não encontrado';
            case 'auth/invalid-email':
                return 'E-mail inválido';
            default:
                return 'Erro desconhecido';
        }
    }

    renderButton() {
        if(this.isLoading){
            return <ActivityIndicator />;
        }
        return (
            <Button
                title={"Entrar"}
                onPress={() => this.tryLogin()}
            />
        );
    }

    renderMessage() {
        const { message } = this.state;
        if(!message){
            return null;
        }
        return (
            <View>
                <Text>{ message }</Text>
            </View>
        );
    }

    render() {
        return (
            <View style={ styles.container }>
                <FormRow first>
                    <TextInput
                        style = { styles.input }
                        placeholder='user@email.com'
                        value={ this.state.email }
                        onChangeText={ value => this.onChangeHandler('email', value) }
                    />
                </FormRow>
                <FormRow last>
                    <TextInput
                        style = { styles.input }
                        placeholder='******'
                        secureTextEntry = { true }
                        value={ this.state.password }
                        onChangeText={ value => this.onChangeHandler('password', value) }
                    />
                </FormRow>
                { this.renderButton() }
                { this.renderMessage() }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 10,
        paddingRight: 10
    },
    input: {
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 5
    }
});

export default connect(null, { tryLogin })(LoginPage);