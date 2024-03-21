interface Props {
  src: string;
}

function Image(props: Props) {
  return <img className="w-full md:rounded-l-lg max-sm:rounded-t-lg" src={props.src} alt="main" />;
}

export default Image;
