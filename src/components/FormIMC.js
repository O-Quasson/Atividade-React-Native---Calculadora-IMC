//importa as tags que vão ser usadas
import { View, TextInput, Button, StyleSheet } from 'react-native';
import Result from './Result';
import { useState } from 'react';
import Classification from './Classification';
import AlturaIdeal from './IdealWeight';

//arrow function que vai calcurar o imc da pessoa com base nos valores recebidos nos campos/inputs
const FormIMC = () => {
    const [peso, setpeso] = useState(null);
    const [altura, setaltura] = useState(null);
    const [imc, setimc] = useState(null);
    const [altmetros,setaltmetros] = useState('');

    //cálculo do imc
    const calcularIMC = () => {
        if(peso && altura){
            if ((isNaN(peso))||(isNaN(altura))){
                alert("Um dos dados inseridos está errado. Use apenas números!");
            }else{
                const alturametros = parseFloat(altura)/100;
                const imccalculado = (parseFloat(peso)/(alturametros * alturametros)).toFixed(2);
                setimc(imccalculado);
                setaltmetros(alturametros);
            }
        }
    };


    //retorna essas tags na tela - construção do "app"
    return (
        <View style={styles.formContainer}>
            <TextInput
                style={styles.input}
                placeholder='Peso (kg)'
                keyboardType='numeric'
                value={peso}
                onChangeText={setpeso}
            />

            <TextInput
                style={styles.input}
                placeholder='Altura (cm)'
                keyboardType='numeric'
                value={altura}
                onChangeText={setaltura}
            />

            <Button title="Calcular IMC" onPress={calcularIMC}/>
            {imc && <Result imc={imc} />}

            <Classification imc={imc}/>

            <AlturaIdeal altmetros={altmetros}/>
        </View>
    );
};


//css das tags
const styles = StyleSheet.create({
    formContainer: {
        backgroundColor: "#f0f0f0",
        padding: 16,
        borderRadius: 10,
    },

    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
        borderRadius: 5,
    },
});

//exporta a function para ser usada como tag em outro arquivo
export {
    FormIMC
};

