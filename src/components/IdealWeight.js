import { useState } from "react";
import { View, Button, StyleSheet } from 'react-native';
import {IWClassif} from "./AlturaIdealClassif";

const AlturaIdeal = ({alt}) => {
    const altura = alt;
    const [pesmin,setpesmin] = useState(0);
    const [pesmax, setpesmax] = useState(0);

    const calculapeso = () => {
        
        if (altura) {
            const pesomin = 18.5*(altura*altura);
            const pesomax = 24.9*(altura*altura); 
            setpesmin(pesomin);
            setpesmax(pesomax);

        };
    };

    return (
        <View style={estilo.aaaa} >
            <Button title="Peso ideal para sua altura" onPress={calculapeso}/>
            {pesmin && pesmax && <IWClassif pesmin={pesmin} pesmax={pesmax} />}
        </View>
    );
    
};

const estilo = StyleSheet.create({
    aaaa: {
        backgroundColor: "#f0f0f0",
        borderRadius: 10,
    }
});

export default AlturaIdeal;