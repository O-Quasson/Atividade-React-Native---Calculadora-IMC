//importa essas tags 
import React from 'react';
import { Text, StyleSheet } from 'react-native';


const ResultClassif = ({ classificacao }) => {
    return (
        <Text style={styles.Result}>Sua classificação de IMC é: {classificacao}</Text>
    );
};

const styles = StyleSheet.create({
    result: {
        marginTop: 20,
        fontSize: 24,
        textAlign: 'center',
        color: '#333',
    },
});

export default ResultClassif;