import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');
    const goalInputHandler = (enteredText) => { setEnteredGoal(enteredText) };
    return(
        <View style={styles.InputContainer}>
        <TextInput placeholder="Course Goal" style={styles.input} onChangeText={goalInputHandler} value={enteredGoal} />
        <Button title="ADD" onPress={props.onAddGoal} />
      </View>
    );
};

const styles = StyleSheet.create({
    InputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      },
      Input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10
      },
});

export default GoalInput;