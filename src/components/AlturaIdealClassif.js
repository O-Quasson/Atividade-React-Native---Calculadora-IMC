//importa essas tags 
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

//arrow function/ tag que vai exibir o peso ideal na tela
const IWClassif = ({ pesmin,pesmax }) => {
    const peso1 = pesmin.toFixed(2);
    const peso2 = pesmax.toFixed(2);
    return (
        <View>
            <Text style={styles.result}>O peso ideal para alguém da sua altura seria entre {peso1}kg e {peso2}kg</Text>
        </View>
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

//exporta a tag para ser usada em outro arquivo
export {
    IWClassif
};  
