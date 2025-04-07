//importa essas tags 
import React from 'react';
import { Text, StyleSheet } from 'react-native';

//arrow function/ tag que exibe o imc calculado anteriormente na tela
const Result = ({ imc }) => {
    return (
        <Text style={styles.result}>Seu IMC é: {imc}</Text>
    );
};

//css da tag
const styles = StyleSheet.create({
    result: {
        marginTop: 20,
        marginBottom: 20,
        fontSize: 24,
        textAlign: 'center',
        color: '#333',
    },
});

export default Result;
