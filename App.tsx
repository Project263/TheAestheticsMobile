import { SafeAreaView, ScrollView, Text } from "react-native";
import { palette, primary } from "src/constants/colors";

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={{ color: primary[0] }}>text</Text>
        <Text style={{ color: primary[50] }}>text</Text>
        <Text style={{ color: palette.primary }}>text</Text>
        {/* {Object.entries(colorMap).map(([key, value]) => (
          <Text style={{ color: value }}>text</Text>
        ))} */}
      </ScrollView>
    </SafeAreaView>
  );
}
