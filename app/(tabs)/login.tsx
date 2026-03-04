import {
    View, 
    Text, 
    TextInput, 
    TouchableOpacity,
    StyleSheet
} from 'react-native';

export default function Login(){
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Área Restrita</Text>
            <TextInput style={styles.input} />
            <TextInput style={styles.input} secureTextEntry={true} />
            <TouchableOpacity style={styles.botao}>
                <Text style={styles.titulo}>Fazer Login</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    titulo:{
        fontFamily: 'verdana',
        marginBottom: 20,
        fontSize: 24,
        color: '#ffffff',
        fontWeight: 'bold',
    },
    input:{
        width: '100%',
        height: 45,
        backgroundColor: '#ffffff',
        padding: 10,
        borderRadius: 10,
        marginBottom: 20,
    },
    botao:{
        width: '100%',
        height: 45,
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center'
    }
})