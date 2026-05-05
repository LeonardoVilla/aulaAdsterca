import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import { View, Text, FlatList, StyleSheet } from "react-native";

interface Aluno{
    id: number;
    nome: string;
    idade: number;
    email: string;
}

export default function Consultar(){
    const [alunos, setAlunos] = useState<Aluno[]>([]);
    const isFocused = useIsFocused();

    useEffect(() => {
        if(isFocused){
            carregarAlunos();
        }
    }, [isFocused]);
    
    async function carregarAlunos(){
        const {data, error } = await supabase
        .from('alunos')
        .select('*');

        setAlunos(data || []);
    }
    // 05 de Maio de 2026
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
                    </View>
                )}
            />
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
