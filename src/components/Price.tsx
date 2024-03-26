interface Props {
  oldPrice: number;
  newPrice: number;
}

function Price(props: Props) {
  return (
    <div className="flex flex-row justify-start my-5">
      <p className="text-3xl text-priceColor">${props.newPrice}</p>
      <p className="text-xl line-through  text-slate-400 align-middle flex items-center">
        ${props.oldPrice}
      </p>
    </div>
  );
}

export default Price;
