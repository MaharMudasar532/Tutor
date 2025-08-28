import { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'

const Login = ({ navigation }) => {

    const [name , setName ] = useState("")
    const [email , setEmail ] = useState("")

    const handleLogin = () => {
        navigation.navigate("Bottom")
    }
    return (
        <View>
        

            <TextInput
                onChangeText={(e)=>setName(e) }
                style={{ height: 60, borderColor: 'gray', borderWidth: 1,width:"90%",alignSelf:'center' }}
                placeholder="Enter your name "
            />
       
            <TextInput
            onChangeText={(e)=>setEmail(e) }
                style={{ height: 60, borderColor: 'gray', borderWidth: 1,width:"90%",alignSelf:'center',marginTop:10,marginBottom:10 }}
                placeholder="Email"
            />
       

            <TouchableOpacity 
            onPress={handleLogin}
            style={{ width: '90%', height: 50, backgroundColor: "blue", borderRadius: 10, alignSelf: 'center' }}>
                <Text style={{ color: "white", textAlign: 'center', marginTop: "auto", marginBottom: 'auto', fontSize: 20 }}>
                    Go to Home 
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login