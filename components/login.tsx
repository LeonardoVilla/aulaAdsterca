import {
    View, 
    Text, 
    TextInput, 
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import { useState } from "react";
import Toast from 'react-native-toast-message';
//npm install react-native-toast-message

export default function Login(){

    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");

    const validaLogin = () =>{
        if(usuario == "admin" && senha == "admin"){
            alert("Sucesso!");
            Toast.show({
                type: 'success',
                text1: 'Sucesso!',
                text2: 'Campeão Vencedor!'
            });
        }else{
            alert("Usuário ou senha inválidos!")
            Toast.show({
                type: 'error',
                text1: 'Erro!',
                text2: 'Usuário ou senha inválidos.'
            })
        }
    }

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Área Restrita</Text>
            
            <TextInput 
                style={styles.input} 
                value={usuario}
                onChangeText={setUsuario}
            />

            <TextInput 
                style={styles.input} 
                secureTextEntry={true} 
                value={senha}
                onChangeText={setSenha}
            />
            
            <TouchableOpacity style={styles.botao} onPress={validaLogin}>
                <Text style={styles.titulo}>Fazer Login</Text>
            </TouchableOpacity>

            <Toast />
            
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