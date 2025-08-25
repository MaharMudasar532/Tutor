// import React from "react";
// import {
//     ScrollView,
//     Text,
//     View
// } from "react-native";
// import DatePicker from 'react-native-date-picker';
// const Date = ({ navigation }) => {
//   const [date, setDate] = React.useState(new Date());
//   const [show, setShow] = React.useState(false);
//   const goToDate = () => {
//     navigation.navigate("Date");
//   };

//   return (
//     <ScrollView style={{ Height: "100%" }}>
//       <DatePicker
//         date={date}
//         mode="date" // or "time" | "datetime"
//         onDateChange={setDate}
//         style={{ alignSelf: "center" }}
//       />
//       <View>
//         <Text
//           style={{
//             flex: 1,
//             fontSize: 20,
//             color: "black",
//             textAlign: "center",
//             paddingTop: 10,
//           }}>
        
//           Schedule a pickupTime:
//         </Text>
//         {/* <View><DatePicker
//         date={date}
//         mode="date" // or "time" | "datetime"
//         onDateChange={setDate}
//         style={{ alignSelf: "center" }}
//       /></View> */}
//       </View>
//     </ScrollView>
//   );
// };

// export default DateN;