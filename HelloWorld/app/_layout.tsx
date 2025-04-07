import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack
    screenOptions={{
      //Disabling the header of the screen in this stack
      headerShown: false,
    }}
  />;
}
