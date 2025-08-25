import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Image, View } from "react-native";

function Home() {
  return (
    <View>

      <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center", height: 300, backgroundColor: "black" }}>


        <View style={{ width: 200, height: 100, backgroundColor: 'red' }}>
          <View style={{ alignSelf: "center", marginTop: 'auto', marginBottom: 'auto' }}>

            <MaterialIcons name="bike-scooter" size={54} color="black" />
          </View>
        </View>
        <View style={{ width: 100, height: 100, backgroundColor: 'green' }}>
          <Image
            style={{ height: 100, width: 100, borderRadius: 50, alignSelf: 'center' }}
            source={require("../../assets/images/icon.png")}
          />
        </View>
      </View>
    </View >
  )
}


export default Home;


