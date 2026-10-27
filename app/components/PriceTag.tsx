// TODO 1: Declare a props type with an `amount: number` field.
// TODO 2: Give this component a typed, destructured parameter: ({ amount }: Props)
// TODO 3: Render the amount inside the JSX with curly braces, e.g. ${amount}

type Props = {
  amount: number;
};

export default function PriceTag({ amount }: Props) {
  return (
    <p>Price: ${amount}</p>
  );
}
