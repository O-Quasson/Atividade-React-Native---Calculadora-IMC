//importa essas tags
import { View, Button, StyleSheet } from 'react-native';
import { useState } from 'react';
import ResultClassif from './ResultClassif';

//arrow function/ tag que classifica o imc calculado anteriormente
const Classification = ({imc}) => {
    const iimc = imc;
    const [classificacao,setclass] = useState('');
    const calcclassif = () => {

        if(iimc<18.5){
            setclass("Abaixo do peso");
        }else if((iimc >18.5)&&(iimc <=24.9)){
            setclass("Peso normal");
        }else if((iimc>=25)&&(iimc<=29.9)){
            setclass("Sobrepeso");
        }else if((iimc>=30)&&(iimc<=34.9)){
            setclass("Obesidade grau 1");
        }else if((iimc>=35)&&(iimc<=39.9)){
            setclass("Obesidade grau 2");
        }else{
            setclass("Obesidade grau 3 (obesidade mórbida)");
        }
    }

    return (
        <View style={estilo.aaaaaaaaaa}>
            <Button title="Classificação de IMC" onPress={calcclassif}/>
            {classificacao && <ResultClassif classificacao={classificacao} />}
        </View>
    );

};

//css da tag
const estilo = StyleSheet.create({
    aaaaaaaaaa: {
        backgroundColor: "#f0f0f0",
        borderRadius: 10,
    }
});

export default Classification;
