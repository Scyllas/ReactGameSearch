import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";
import Card from "./components/Card";
import "./App.css";
import cardData from "./content/CardData";
import CardListGroup from "./components/CardListGroup";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  const handleSelectItem = () => {
    setAlertVisibility(true);
  };
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>
      )}
      <Button color="secondary" onClick={() => setAlertVisibility(true)}>
        My Button
      </Button>
      <br></br>
      <CardListGroup
        items={cardData}
        heading="Games"
        onSelectItem={handleSelectItem}
      ></CardListGroup>
    </div>
  );
}

export default App;
