//importa as tags que v�o ser usadas
import { View, TextInput, Button, StyleSheet } from 'react-native';
import Result from './Result';
import { useState } from 'react';
import Classification from './Classification';
import AlturaIdeal from './IdealWeight';

//arrow function que vai calcurar o imc da pessoa com base nos valores recebidos nos campos/inputs
const FormIMC = () => {
    const [peso, setpeso] = useState('');
    const [altura, setaltura] = useState('');
    const [imc, setimc] = useState(null);

    //c�lculo do imc
    const calcularIMC = () => {
        if(peso && altura){
            const alturametros = parseFloat(altura)/100;
            const imccalculado = (parseFloat(peso)/(alturametros * alturametros)).toFixed(2);
            setimc(imccalculado);
        }
    };


    //retorna essas tags na tela - constru��o do "app"
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

            <Classification imc={imc} />

            <AlturaIdeal altura={parseFloat(altura)/100} />

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

export {
    FormIMC,
};

