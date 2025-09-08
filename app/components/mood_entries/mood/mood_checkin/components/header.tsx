import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View, } from "react-native";
import { vs } from "react-native-size-matters";

const router = useRouter();

export const Header = () => {
    return ( <View className="flex-row justify-between items-center" style={{ marginBottom: vs(20) }}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text className="text-lg text-[#00bfff]" style={{}}>
            Cancel
          </Text>
        </TouchableOpacity>
        <Text className="text-lg">Mood</Text>
        <View style={{ width: 50 }}></View>
      </View>
    )
}

