//importa as tags que v�o ser utilizadas no c�digo (tag pra texto e pro css)
import { Text, StyleSheet } from 'react-native';

//arrow function que retorna uma tag ""html"" - styles.title s� serve para "dar um id" que ser� utilizado no css
const Title = () => {
    return (
        <Text style={styles.title}>Calculadora de IMC</Text>
    );
};

//css da tag text (com id title) armazenado em uma vari�vel 
const styles = StyleSheet.create({
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 24,
    },
});

//exporta a fun��o title
export default Title;