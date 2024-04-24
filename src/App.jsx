import "./App.css";
import Navbar from "./components/Fragments/Navbar";
import Container from "./components/Layouts/Container";
import GroupTaskCard from "./components/Fragments/GroupTaskCard";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <GroupTaskCard />
      </Container>
    </>
  );
}

export default App;
