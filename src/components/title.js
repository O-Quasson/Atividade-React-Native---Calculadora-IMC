//importa as tags que vão ser utilizadas no código (tag pra texto e pro css)
import { Text, StyleSheet } from 'react-native';

//arrow function que retorna uma tag ""html"" - styles.title só serve para "dar um id" que será utilizado no css
const Title = () => {
    return (
        <Text style={styles.title}>Calculadora de IMC</Text>
    );
};

//css da tag text (com id title) armazenado em uma variável 
const styles = StyleSheet.create({
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 24,
    },
});

//exporta a função title
export default Title;
