import Typography from "@Components/Typography";
import { SafeAreaView } from "react-native";

const { Text, Title } = Typography;

export default function App() {
  return (
    <SafeAreaView>
      <Title>Title 1</Title>
      <Typography.Title size="large">Title 2</Typography.Title>
      <Typography.Title size="small">Title 3</Typography.Title>
      <Text>blablab</Text>
      <Typography.Text size="large">bla bla</Typography.Text>
      <Typography.Text size="small">bla bla</Typography.Text>
    </SafeAreaView>
  );
}
