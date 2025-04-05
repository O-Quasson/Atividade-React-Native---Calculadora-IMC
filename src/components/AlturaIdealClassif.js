//importa essas tags 
import React from 'react';
import { Text, StyleSheet } from 'react-native';

const IWClassifMin = ({ pesmin }) => {
    return (
        <Text style={styles.result}>{pesmin}</Text>
    );
};

const IWClassifMax = ({ pesmax }) => {
    return (
        <Text style={styles.result}>{pesmax}</Text>
    );
};

const styles = StyleSheet.create({
    result: {
        marginTop: 20,
        marginBottom: 20,
        fontSize: 24,
        textAlign: 'center',
        color: '#333',
    },
});

export {
    IWClassifMin, IWClassifMax
};  
