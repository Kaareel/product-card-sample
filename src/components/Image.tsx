interface Props {
  src: string;
  srcSet: string;
}

function Image(props: Props) {
  return (
    <img
      className=" w-full h-auto md:h-full md:rounded-l-lg md:rounded-tr-none rounded-t-lg"
      src={props.src}
      srcSet={props.srcSet}
      alt="main"
    />
  );
}

export default Image;
