import "./App.css";
import { Activejob } from "./components/Activejobs";
import { AppliedJobs } from "./components/Appliedjobs";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ApplicationRecieved } from "./components/tra";

function App() {
  return (
    <div className="App">
      <Header />
      <AppliedJobs />
      <div className="mt-[8%]">
        <ApplicationRecieved />
      </div>
      <Activejob />
      <Footer />
    </div>
  );
}

export default App;
