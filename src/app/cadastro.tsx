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

            <Text style={styles.text}>CONFIRMAR SENHA</Text>
            <TextInput placeholder='Insira sua Senha novamente' style={styles.input} />
           
        </View>
            <View style={styles.formBtn}>
                <Link href={'login'} style={styles.btn}>Cadastrar</Link>
            </View>
        </View>
   );
}