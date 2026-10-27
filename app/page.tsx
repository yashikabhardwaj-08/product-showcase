import Greeting from "./components/Greeting";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>

      <Greeting name="Yashika" />

      <ProductCard
        title="Mechanical Keyboard"
        price={49}
        inStock={true}
      />

      <ProductCard
        title="Wireless Mouse"
        price={25}
        inStock={false}
      />

    </main>
  );
}
