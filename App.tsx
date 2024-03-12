
import { ExerciseCard } from "@Components/ExerciseCard";
import { Header } from "@Components/Header";
import { Layout } from "@Components/Layout";
import { user } from "@Constants/index";
import { Button } from "@Components/Button";

export default function App() {
  return (
    <Layout>
      <Header username={user.username} userLvl={user.userLvl} />
      <ExerciseCard
        timeToComplete="15 минут"
        name="Трицепс"
        difficulty={5}
        date={new Date()}
      />
      <ExerciseCard
        timeToComplete="45 минут"
        name="Спина"
        difficulty={2}
        date={new Date(2024, 6, 5)}
      />
      <Button>Default</Button>
      <Button type="outlined">Outlined</Button>
      <Button type="text">Text</Button>
    </Layout>
  );
}
