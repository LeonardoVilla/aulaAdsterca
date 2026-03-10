import { View, StyleSheet} from 'react-native';

import  Login from '@/components/login';

export default function Auth(){
    return(
        <View style={styles.container}>
            <Login></Login>
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
})