import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { s, vs } from "react-native-size-matters";
import CustomButton from "./components/authentication/buttons/authenticationButton";
import SectionDivider from "./components/authentication/divider/SectionDivider";
import GoogleAppleLogin from "./components/authentication/google-apple-login/googleAppleLogin";
import CustomTextInput from "./components/text-inputs/textInputs";

const Login = () => {

  const router = useRouter()
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#0F3262" }}>
      <View
        className="flex-col items-start"
        style={{
          paddingTop: vs(40),
          paddingBottom: vs(50),
          paddingHorizontal: s(20),
        }}
      >

        {/* header */}
        <Text className="font-normal text-3xl text-white">Welcome to</Text>
        <Text style={{ marginBottom: vs(5), marginTop: vs(3) }} className="font-bold text-4xl text-white">
          CTRL
        </Text>
        <Text className="font-bold text-xl text-white">Clarity in your pocket.</Text>
      </View>
      <View
        style={{ paddingHorizontal: s(25), paddingVertical: vs(30) }}
        className="flex-col border-black rounded-t-3xl h-full bg-white z-1"
      >

        {/* login text */}
        <Text className="font-bold text-2xl" style={{ marginBottom: vs(20) }}>
          Login
        </Text>

        {/* email text input */}
        <View style={{ marginBottom: vs(7) }}>
          <CustomTextInput
            name={"EMAIL"}
            inputPlaceholder="johndoe@gmail.com"
          />
        </View>

        {/* password text input */}
        <View style={{ marginBottom: vs(7) }}>
          <CustomTextInput name={"PASSWORD"} inputPlaceholder="**********" />
        </View>

        {/* forgot password button */}
        <View style={{marginBottom: vs(20)}} className="flex-col justify-end items-end">
          <Text className="font-bold" style={{color: '#3789E6'}}>Forgot Password?</Text>
        </View>

        {/* login button */}
        <View style={{marginBottom: vs(20)}}>
          <CustomButton buttonName="Login"/>
        </View>

        {/* divider */}
        <View style={{marginBottom: vs(20)}}>
          <SectionDivider label="or login with"/>
        </View>

        {/* google apple sign up button */}
        <View>
          <GoogleAppleLogin />
        </View>

        {/* temporary sign up button */}
        <View >
          <TouchableOpacity onPress={() => router.push('/signup')}>
            <Text>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
