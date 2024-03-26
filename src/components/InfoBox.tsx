interface Props {
  title: string,
  description: string,
  category: string;
}

function InfoBox(props: Props) {
  return (
    <div className="w-full">
      <p className="text-slate-400 ">{props.category}</p>
      <h1 className="text-4xl font-bold italic my-2.5">{props.title}</h1>
      <p className="text-sm my-3.5">{props.description}</p>
    </div>
  );
}

export default InfoBox;
