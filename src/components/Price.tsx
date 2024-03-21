interface Props {
  oldPrice: number;
  newPrice: number;
}

function Price(props: Props) {
  return (
    <div className="flex flex-row justify-start pb-4">
      <p className="text-3xl text-priceColor">${props.newPrice}</p>
      <p className="text-xl line-through px-5 text-stone-200 align-middle flex items-center">
        ${props.oldPrice}
      </p>
    </div>
  );
}

export default Price;
