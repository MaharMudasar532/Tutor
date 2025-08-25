
import { SafeAreaView, ScrollView, Text, TouchableOpacity } from 'react-native';

function Setting() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "green" }}>
            <ScrollView style={{ height: "100%" }}>

                <View style={{display:"flex", flexDirection:"row",alignItems:"center",height:300, backgroundColor:"black",justifyContent:"space-between"}}>



                    <View style={{ height: 100, width: 300, backgroundColor: "red",display:"flex", flexDirection:"row", justifyContent:"space-around", alignItems:"center" }}>
                        <View style={{backgroundColor:"blue",width:100, height:100, borderRadius:50, alignItems:"center", justifyContent:"center"}}>

                        </View>

                        <View>

                        </View>

                    </View>
                    <View style={{ height: 100, width: 100, backgroundColor: "red", }}>


                    </View>
                </View>

                <TouchableOpacity style={{width:'90%',height:50, backgroundColor:"blue",borderRadius:10,alignSelf:'center'}}>
                    <Text style={{color:"white", textAlign:'center',marginTop:"auto",marginBottom:'auto', fontSize:20}}>
                        Go to Login
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Setting