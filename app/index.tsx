import { useRouter } from "expo-router";
import React, { useEffect } from "react";

const Index = () => {

  const router = useRouter();
  useEffect(() => {
    router.push("/(tabs)");
  }, []);
  return (
    <>  
    {/* <SplashScreen /> */}
    </>
  )
};

export default Index;
