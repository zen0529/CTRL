import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import CustomButton from "./components/authentication/buttons/authenticationButton";
import SectionDivider from "./components/authentication/divider/SectionDivider";
import GoogleAppleLogin from "./components/authentication/google-apple-login/googleAppleLogin";
import CustomTextInput from "./components/text-inputs/textInputs";

const Signup = () => {
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
        <Text
          style={{ marginBottom: vs(5), marginTop: vs(3) }}
          className="font-bold text-4xl text-white"
        >
          CTRL
        </Text>
        <Text className="font-bold text-xl text-white">
          Clarity in your pocket.
        </Text>
      </View>
      <View
        style={{ paddingHorizontal: s(25), paddingVertical: vs(30) }}
        className="flex-col border-black rounded-t-3xl h-full bg-white z-1"
      >
        {/* Signup text */}
        <Text className="font-bold text-2xl" style={{ marginBottom: vs(20) }}>
          Sign up
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

        {/* confirm password text input */}
        <View style={{ marginBottom: vs(7) }}>
          <CustomTextInput
            name={"CONFIRM PASSWORD"}
            inputPlaceholder="**********"
          />
        </View>

        <View style={{marginBottom: vs(20), marginTop: vs(10) }} className="flex-row items-center justify-center">
          <Text className="text-[12px]">{'By Clicking Sign Up, you agree with our\t'}</Text>
          <Text className="color-blue-400 text-[12px]"> Terms and Conditions</Text>
        </View>

        {/* login button */}
        <View style={{ marginBottom: vs(20) }}>
          <CustomButton buttonName="Login" />
        </View>

        {/* divider */}
        <View style={{ marginBottom: vs(20) }}>
          <SectionDivider label="or sign up with" />
        </View>

        {/* google apple sign up button */}
        <View>
          <GoogleAppleLogin />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Signup;
