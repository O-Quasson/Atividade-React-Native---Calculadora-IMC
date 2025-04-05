import { useState } from "react";
import { View, Button, StyleSheet } from 'react-native';
import { IWClassif } from "./AlturaIdealClassif";

const AlturaIdeal = ({altmetros}) => {
    const altura = altmetros;
    const [pesmin,setpesmin] = useState('');
    const [pesmax, setpesmax] = useState('');
    const altmet = altura*altura;

    const calculapeso = () => {
        if (altura) {
            const pesomin = 18.5*altmet;
            const pesomax = 24.9*altmet; 
            setpesmin(pesomin);
            setpesmax(pesomax);
        }
    };

    return (
        <View style={estilo.aaaa}>
            <Button title="Peso ideal para sua altura" onPress={calculapeso}/>
            {pesmin && pesmax && <IWClassif pesmin={pesmin} pesmax={pesmax}/>}
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
