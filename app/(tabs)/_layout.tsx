import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const TabIcon = ({ focused, icon, title }: any) => {
  if (focused) {
    return (
      <View className="flex flex-col w-full flex-1 min-w-[112px] min-h-16 mt-4 justify-center text-[#00bfff] items-center rounded-full overflow-hidden">
        {/* <Image source={icon} tintColor="#151312" className="size-5" />*/}
        <Ionicons name={icon} size={20} color="#00bfff" />
        <Text className="text-secondary text-base font-semibold ml-2 text-[#00bfff]">
          {title}
        </Text>
        <View
          className="border border-[#00bfff] "
          style={{
            width: 60,
            marginLeft: 7,
          }}
        ></View>
      </View>
    );
  }
  return (
    <View className="flex flex-col w-full flex-1 min-w-[112px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden ">
      {/* <Image source={icon} tintColor="#A8B5DB" className="size-5" /> */}
      <Ionicons name={icon} size={20} color="#000" />
      <Text>{title}</Text>
    </View>
  );
};
const _layout = () => {
  return (
    // hiding index screen from the header
    <SafeAreaProvider>
      <Tabs 
        screenOptions={{
          tabBarShowLabel: false,
          tabBarItemStyle: {
            marginTop: 10,
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          },
          tabBarStyle: {
            // backgroundColor: "#",
            // borderRadius: 50,
            height: 100,
            position: "absolute",
            overflow: "hidden",
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} icon="home" title="Home" />
            ),
          }}
        />
        <Tabs.Screen
          name="journal"
          options={{
            title: "Journal",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} icon="journal" title="Journal" />
            ),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: "Settings",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} icon="settings" title="Settings" />
            ),
          }}
        />
      </Tabs>
    </SafeAreaProvider>
  );
};

export default _layout;

// import { Tabs } from "expo-router";
// import React from "react";
// import { Image, Platform, Text, View } from "react-native";

// const TabIcon = ({ focused, icon, title }: any) => {
//   if (focused) {
//     return (
//       <View className="flex flex-row items-center justify-center mt-4">
//         <Image source={icon} className="size-5" />
//         <Text className="ml-2 text-base font-semibold">
//           {title}
//         </Text>
//       </View>
//     );
//   }
//   return (
//     <View className="items-center justify-center mt-4">
//       {/* <Image source={icon} className="size-5" /> */}
//       <ionicons name={icon} size={24} color="#000" />
//       <Text>{title}</Text>
//     </View>
//   );
// };

// const TabLayout = () => {
//   return (
//     <Tabs
//       screenOptions={{
//         tabBarShowLabel: false,
//         headerShown: false,
//         tabBarStyle: {
//           backgroundColor: "#0f0d23",
//           borderRadius: Platform.OS === 'ios' ? 25 : 50,
//           marginHorizontal: 20,
//           marginBottom: Platform.OS === 'ios' ? 20 : 36,
//           height: 52,
//           position: 'absolute',
//           borderWidth: 1,
//           borderColor: "#0f0d23",
//         },
//       }}
//     >
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: "Home",
//           tabBarIcon: ({ focused }) => (
//             <TabIcon
//               focused={focused}
//               // icon={<Ionicons name="home" size={24} color="#000" />}
//               title="Home"
//             />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="journal"
//         options={{
//           title: "Journal",
//           tabBarIcon: ({ focused }) => (
//             <TabIcon
//               focused={focused}
//               // icon={<Ionicons name="journal" size={24} color="#000" />}
//               title="Journal"
//             />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="settings"
//         options={{
//           title: "Settings",
//           tabBarIcon: ({ focused }) => (
//             <TabIcon
//               focused={focused}
//               // icon={<Ionicons name="settings" size={24} color="#000" />}
//               title="Settings"
//             />
//           ),
//         }}
//       />
//     </Tabs>
//   );
// };

// export default TabLayout;
