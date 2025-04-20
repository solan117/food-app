import Search from "./Components/Search.jsx";
import { useState } from "react";
import FoodList from "./Components/FoodList.jsx";
import Nav from "./Components/Nav.jsx";
import styles from "./CSS/app.module.css";
import Container from "./Components/Container.jsx";
import InnerContainer from "./Components/InnerContainer.jsx";
import FoodDetail from "./Components/FoodDetail.jsx";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("");

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
            <FoodList
              foodData={foodData}
              setFoodData={setFoodData}
              setFoodId={setFoodId}
            ></FoodList>
          </InnerContainer>
          <InnerContainer>
            <FoodDetail foodId={foodId} />
          </InnerContainer>
        </Container>
      </section>
    </div>
  );
}

export default App;
