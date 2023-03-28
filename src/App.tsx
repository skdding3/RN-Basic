import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export type Props = {
  name: string;
};

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>클라이밍 하고싶다 !!!</Text>
      <Button title="상세" onPress={() => navigation.navigate("Details")} />
    </View>
  );
}

function Detail({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>클라이밍!!!!!!!🧗🧗🧗🧗</Text>
      <Button title="뒤로가기" onPress={() => navigation.navigate("Main")} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Home}
          options={{ title: "메인" }}
        />
        <Stack.Screen
          name="Details"
          component={Detail}
          options={{ title: "클친자" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
