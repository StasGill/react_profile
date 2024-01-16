import "./App.scss";
import { LeftPanel } from "./components/leftPanel/LeftPanel";
import ContactSection from "./components/rightPanel/ContactSection";
import HeaderSection from "./components/rightPanel/HeaderSection";
import { RightPanel } from "./components/rightPanel/RightPanel";

function App() {
  return (
    <div className="App">
      <HeaderSection />
      <LeftPanel />
      {/* <div className="rounded_border"></div> */}
      <div className="test">
        <div className="test_content">
          <RightPanel />
        </div>
      </div>
      <ContactSection />
    </div>
  );
}

export default App;
