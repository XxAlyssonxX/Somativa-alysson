import {View, Image, TextInput, Text, TouchableOpacity} from 'react-native';
import { styles } from '../css/style';
import { Link } from 'expo-router';

export default function Login(){
    return(
        <View style={styles.imageBody}>
        <Image style={styles.images} source={require('../../assets/sesi-senai.webp')} />
        <Text style={styles.text}>Esqueci minha senha</Text>
        <View style={styles.form}>
        
            <Text style={styles.text}>CPF:</Text>
            <TextInput placeholder='Insira o CPF da conta ' style={styles.input} />

        </View>
            <View style={styles.formBtn}>
                <Link href={'login'} style={styles.btn}>Enviar Email</Link>
            </View>
        </View>
   );
}