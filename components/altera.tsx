import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import { useState, useEffect } from "react";
import Toast from 'react-native-toast-message';
import { supabase } from '@/lib/supabase';
import { useIsFocused } from "@react-navigation/native";
import { useLocalSearchParams } from "expo-router";

export default function Altera() {

    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState("");
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false)

    const isFocused = useIsFocused();

    useEffect(() => {
        if(isFocused){
            carregarAlunos();
        }
    }, [isFocused]);

    const { id } = useLocalSearchParams();

    async function carregarAlunos(){
        const { data, error } = await supabase
            .from('tb_alunos')
            .select()
            .eq('id', id)
            .single()
        
        if(error){
            Toast.show({
                type: 'error',
                text1: 'Erro! ' + id,
                text2: 'Erro ao carregar aluno.'
            })
        }else{
            setNome(data.nome ?? "");
            setIdade(data.idade ?? "");
            setEmail(data.email ?? "");
        }
    }

    async function alterarAluno() {
        setLoading(true)

        const { data, error } = await supabase
            .from('tb_alunos')
            .insert([
                { nome: nome, idade: idade, email: email },
            ])
            .select()

        if (error) {
            Toast.show({
                type: 'error',
                text1: 'Erro!',
                text2: 'Erro ao cadastrar aluno.'+ error.message
                
            })
            console.log(error.message);
        } else {
            Toast.show({
                type: 'success',
                text1: 'Sucesso!',
                text2: 'Aluno cadastrado com sucesso. ' + data[0].nome
            })
        }
        setLoading(false)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Alterar Aluno</Text>

            <TextInput
                style={styles.input}
                value={nome}
                onChangeText={setNome}
                placeholder='Nome do aluno'
            />

            <TextInput
                style={styles.input}
                value={idade}
                onChangeText={setIdade}
                placeholder='Idade do aluno'
            />

            <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder='Email do aluno'
            />

            <TouchableOpacity style={[styles.botao, loading && styles.desabilitado]} onPress={alterarAluno}>
                <Text style={styles.titulo}>Alterar</Text>
            </TouchableOpacity>

            <Toast />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    titulo: {
        fontFamily: 'verdana',
        marginBottom: 20,
        fontSize: 24,
        color: '#ffffff',
        fontWeight: 'bold',
    },
    input: {
        width: '100%',
        height: 45,
        backgroundColor: '#ffffff',
        padding: 10,
        borderRadius: 10,
        marginBottom: 20,
    },
    botao: {
        width: '100%',
        height: 45,
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center'
    },
    desabilitado: {
        opacity: 0.5,
    }
})