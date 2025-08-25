import { Text, TouchableOpacity, View } from 'react-native'

const Login = ({ navigation }) => {


    const handleLogin = () => {
        navigation.navigate("Bottom")
    }
    return (
        <View>
            <Text>Login</Text>

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