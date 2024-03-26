import Button from "./components/Button";
import Image from "./components/Image";
import InfoBox from "./components/InfoBox";
import Price from "./components/Price";

function App() {
  return (
    <div className="bg-orange-100 flex justify-center  items-center w-full h-screen">
      <div className=" bg-white md:max-w-[600px] max-w-[400px] my-10 mx-1 rounded-lg  grid grid-cols-1 md:grid-cols-2 ">
        <div className="">
          <Image 
          src="/xbox-desktop.jpg"
          srcSet="/xbox-desktop.jpg 1x, /xbox-mobile.jpg 2x" />
        </div>
        <div className="p-9">
          <InfoBox
            title="Xbox One X"
            description="Xbox Series X Console 1TB Black "
            category="C O N S O L E"
          />
          <Price newPrice={539.99} oldPrice={599.99} />
          <Button />
        </div>
      </div>
    </div>
  );
}

export default App;
