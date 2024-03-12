
import { ExerciseCard } from "@Components/ExerciseCard";
import { Header } from "@Components/Header";
import { Layout } from "@Components/Layout";
import { user } from "@Constants/index";

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
        timeToComplete="15 минут"
        name="Трицепс"
        difficulty={5}
        date={new Date(2024, 6, 5)}
      />
    </Layout>
  );
}
