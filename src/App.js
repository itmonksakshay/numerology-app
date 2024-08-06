import "./App.css";
import Layout from "./components/layout";
import InfoCard from "./components/molecules/InfoCard";
function App() {
  return (
    <Layout>
      <InfoCard title={"Title 1"}>
        <h2>level</h2>
      </InfoCard>
    </Layout>
  );
}

export default App;
