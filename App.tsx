import { Header } from "@Components/Header";
import { Layout } from "@Components/Layout";
import { user } from "@Constants/index";

export default function App() {
  return (
    <Layout>
      <Header username={user.username} userLvl={user.userLvl} />
    </Layout>
  );
}
