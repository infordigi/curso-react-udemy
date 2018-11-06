import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { addTodo, setTodoText, updateTodo } from '../actions';

import Input from './Input';

class TodoForm extends React.Component {
    onChangeText(text) {
        this.props.dispatchSetTodoText(text);
    }

    onPress() {
        const { todo } = this.props;
        if(todo.id)
            return this.props.dispatchUpdateTodo(todo);

        const { text } = this.props.todo;
        this.props.dispatchAddTodo(text);
    }

    render() {
        const { text, id } = this.props.todo;
        return (
            <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <Input
                        onChangeText={text => this.onChangeText(text)}
                        value={text}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        onPress={() => this.onPress()}
                        title={ id ? "save" : "add" }
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    formContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    },
    inputContainer: {
        flex: 4
    }
});

// const mapDispatchToProps = dispatch => {
//     return {
//         dispatchAddTodo: text => dispatch(addTodo(text))
//     }
// };

const mapStateToProps = state => {
    return {
        todo: state.editingTodo
    }
}

export default connect(
    mapStateToProps,
    {
        dispatchAddTodo: addTodo,
        dispatchSetTodoText: setTodoText,
        dispatchUpdateTodo: updateTodo
    }
)(TodoForm);