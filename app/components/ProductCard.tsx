// TODO 1: Declare a props type with:
//           title: string; price: number; inStock: boolean;
// TODO 2: Give this component a typed, destructured parameter:
//           ({ title, price, inStock }: Props)
// TODO 3: Render the props inside the JSX with curly braces.
//         Tip: reuse your <PriceTag /> for the price, and show
//         "In stock" / "Sold out" based on inStock.

type Props = {
  title: string;
  price: number;
  inStock: boolean;
};

export default function ProductCard({
  title,
  price,
  inStock
}: Props) {

  return (
    <div>
      <h3>{title}</h3>

      <p>Price: ${price}</p>

      <p>
        {inStock ? "Available" : "Out of Stock"}
      </p>
    </div>
  );
}
