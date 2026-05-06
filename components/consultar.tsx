import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from "react-native";

import Toast from 'react-native-toast-message';
import { router } from "expo-router";

export default function Consultar(){
    const [alunos, setAlunos] = useState<any[]>([]);
    const isFocused = useIsFocused();

    useEffect(() => {
        if(isFocused){
            carregarAlunos();
        }
    }, [isFocused]);
    
    // Função para carregar os alunos do banco de dados
    async function carregarAlunos(){
        const {data, error } = await supabase
        .from('alunos')
        .select('*');

        setAlunos(data || []);
    }
    // 05 de Maio de 2026
    async function excluirAluno(id: number){
        Toast.show({
            type: 'error',
            text1: 'Erro!',
            text2: 'Aluno excluído com sucesso.'
        });
    }

    async function alterarAluno(id: number){
        router.push(`/(tabs)/cadastrar`);
    }

    return(
        <View style={styles.container}>
            <Text>Consultar Alunos</Text>
            <FlatList
                data={alunos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) =>(
                    <View>
                        <Text>{item.nome}</Text>
                        <Text>{item.idade}</Text>
                        <Text>{item.email}</Text>

                        <TouchableOpacity onPress={() => alterarAluno(item.id)}>
                            <Text>Alterar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => excluirAluno(item.id)}>
                            <Text>Excluir</Text>
                        </TouchableOpacity>
                        
                    </View>
                    
                )}
            />
            <Toast />
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        color: '#000',
    }
})
