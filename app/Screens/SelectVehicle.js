import { ScrollView, Text, View } from "react-native";

const SelectVehicle = () => {
    return (
        <ScrollView style={{ height: "100%" }}>
            <View>
                <Text>SelectVehicle</Text>

                <View
                    style={{
                        // width: "90%",
                        height: 200,
                        // backgroundColor: "red",
                        // alignSelf: "center",
                        borderRadius: 10,
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-around",
                        // alignItems: "center",
                    }}
                >

                    <View style={{ width: "30%", backgroundColor: "red" }}>

                    </View>
                    <View style={{ width: "40%", backgroundColor: "green" }}>

                    </View>
                    <View style={{ width: "30%", backgroundColor: "red" }}>
                        <View style={{ marginTop: "auto", marginBottom: "auto" }}>

                            <Text style={{ textAlign: "center" }}>hello</Text>
                            <Text>hello</Text>
                            <Text>hello</Text>
                        </View>
                    </View>


                </View>
            </View>
        </ScrollView>
    );
};

export default SelectVehicle;
