import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import NavBar from "./components/NavBar";
import Button from "./components/Button";
import ImageFrame from "./components/ImageFrame";
import CountUpAndDown from "./components/CountUpAndDown";
import Conditionals from "./components/Conditionals";
import { images } from "./lib/images";

function App() {
  const items = ["Item 1", "Item 2", "Item 3"];

  return (
    <>
      <Header />
      <NavBar />
      <Button />
      <CountUpAndDown />

      {images.map((image) => (
        <ImageFrame
          key={image.id}
          src={image.src}
          alt={image.alt}
          caption={image.caption}
        />
      ))}

      {/* <ImageFrame
        src="https://images.unsplash.com/photo-1589656966895-2f33e7653819"
        alt="a polar bear waves at the photographer"
        caption="This polar bear says hello!"
      />
      <ImageFrame
        src="https://images.unsplash.com/photo-1564349683136-77e08dba1ef7"
        alt="a panda eats bamboo"
        caption="This panda is too busy to say hello."
      /> */}

      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <Conditionals />
      <Footer />
    </>
  );
}

export default App;
