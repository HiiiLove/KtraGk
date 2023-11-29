import React, { useState ,useEffect} from 'react';
import { View, StyleSheet,Text, Alert } from 'react-native';
import { TextInput,Button } from 'react-native-paper';
import { useMyContextController, login } from '../provider'



function Login({navigation}) {
    const [isShow,setIsShow] = useState(true)
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    // // function login
    // const handleLoginPress = () => {
    //     auth().signInWithEmailAndPassword(email, password)
    //     .then(() => {
    //         console.log('Login success')
    //         navigation.navigate('Home')
    //     }
    //     )
    //     .catch(() => {
    //         Alert.alert('Thông báo', 'Đăng nhập thất bại')
    //         console.log('Login failure')
    //     });

    // }
    // Use the context hook to get the login function
    const [controller, dispatch] = useMyContextController();
    const {userLogin} = controller;
    useEffect(() => {
        console.log("useEffect triggered");
        if (userLogin !== null)
        { navigation.navigate("Home")
    };
      }, [userLogin]);
    const handleLoginPress =()=>{
        login(dispatch,email,password);
    }
    return (

        <View style={styles.container} >
            <Text style={styles.txt}>LOGIN</Text>
            <TextInput
            style={styles.txtInput}
            label='Email'
            value={email}
            onChangeText={(email) => setEmail(email)}
            left={<TextInput.Icon icon='email'/>}
            />
            <TextInput
            style={styles.txtInput}
            label='Password'
            value={password}
            secureTextEntry ={isShow}
            onChangeText={(password) => setPassword(password)}
            left={<TextInput.Icon icon='key'/>}
            right={<TextInput.Icon icon='eye'r
            onPress={()=>setIsShow(!isShow)}/>}
            />

            <Button mode='contained' style={styles.btn} onPress={handleLoginPress}>Login</Button>
        </View>
      );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    txt:{
        fontSize:60,
        fontWeight: 'bold',
        alignSelf:'center',
        paddingTop:200,
        paddingBottom:50,
        color:'#00CD66',
    },
    txtInput:{
        marginBottom:20,
        marginLeft:10,
        marginRight:10
    },
    btn:{
        borderRadius:10,
        backgroundColor:'#e06464',
        marginLeft:10,
        marginRight:10,
        marginTop:10
    }
})

export default Login;