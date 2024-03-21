import Button from "./components/Button";
import Image from "./components/Image";
import InfoBox from "./components/InfoBox";
import Price from "./components/Price";

function App() {
  return (
    <div className="bg-orange-100 flex justify-center  items-center w-full h-screen">
      <div className=" bg-white md:max-w-[600px] my-10 mx-1 md:rounded-l-lg max-sm:rounded-t-lg md:flex justify-center md: items-center">
        <div className="md:w-1/2">
          <Image src="/xbox.jpg" />
        </div>
        <div className="px-8 md:w-1/2">
          <InfoBox
            title="Xbox One X"
            description="Xbox Series X Console 1TB Black"
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
