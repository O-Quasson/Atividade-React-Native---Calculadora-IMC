//importa essas tags 
import React from 'react';
import { Text, StyleSheet } from 'react-native';

const IWClassif = ({pesmin,pesmax}) => {
    return (
        <Text style={styles.Result}>O peso ideal para sua altura seria entre {pesmin} e {pesmax}</Text>
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

export {
    IWClassif
};