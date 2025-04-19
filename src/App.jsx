import Search from "./Components/Search.jsx";
import { useState } from "react";
import FoodList from "./Components/FoodList.jsx";
import Nav from "./Components/Nav.jsx";
import styles from "./CSS/app.module.css";
import Container from "./Components/Container.jsx";
import InnerContainer from "./Components/InnerContainer.jsx";

function App() {
  const [foodData, setFoodData] = useState([]);

  return (
    <div className={styles.container}>
      <header>
        <Nav />
      </header>

      <section>
        <Search foodData={foodData} setFoodData={setFoodData} />
      </section>

      <section>
        <Container>
          <InnerContainer>
            <FoodList foodData={foodData} setFoodData={setFoodData} />
          </InnerContainer>
        </Container>
      </section>
    </div>
  );
}

export default App;
