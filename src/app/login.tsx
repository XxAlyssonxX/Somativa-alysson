import {View, Image, TextInput, Text, TouchableOpacity} from 'react-native';
import { styles } from '../css/style';
import { Link } from 'expo-router';

export default function Login(){
    return(
        <View style={styles.imageBody}>
        <Image style={styles.images} source={require('../../assets/sesi-senai.webp')} />
        <View style={styles.form}>

            <Text style={styles.text}>LOGIN</Text>
            <TextInput placeholder='Insira seu CPF' style={styles.input} />

            <Text style={styles.text}>SENHA</Text>
            <TextInput placeholder='Insira sua Senha' style={styles.input} />

            <View style={styles.subBtn}>
                <TouchableOpacity><Link href={'cadastro'} style={styles.subBtn1}>cadastrar</Link></TouchableOpacity>
                <TouchableOpacity><Link href={'esqueci'} style={styles.subBtn1}>esqueci a senha</Link></TouchableOpacity>
            </View>
        </View>
            <View style={styles.formBtn}>
                <Link href={'home'} style={styles.btn}>Entrar</Link>
            </View>
        </View>
   );
}