import HeroSlider from "./components/Swiper";
import Countdown from "./components/CountDown";
import Card from "./components/Card"

export default function Home() {
  return (
    
    

    

    <div className="mr-50 ml-50">
      <HeroSlider></HeroSlider>
      <br />
      <hr />
      <br />

      <div className="bg-gray-800 text-white h-100 flex items-center justify-center">
            <div className="text-center">
              <a href="#" className="text-blue-400 underline mt-2 inline-block">Categories</a>
              <h2 className="text-2xl font-bold">Enhance Your Experience</h2>
              <Countdown targetTime={1000}></Countdown>
              <button className="bg-green-700 hover:bg-green-800
                   font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">Buy Now</button>
            </div>
          </div>

      <Card></Card>
      <br />


      <div className="grid grid-cols-2 gap-4">
  <div className="bg-black text-white h-100 flex items-center justify-center row-span-2">
    <div className="text-center">
      <h2 className="text-2xl font-bold">iPhone 14 Series</h2>
      <p className="text-lg">Up to 10% off Voucher</p>
      <a href="#" className="text-blue-400 underline mt-2 inline-block">Shop Now →</a>
    </div>
  </div>

  <div className="grid grid-cols-1 grid-rows-2 gap-4">
    <div className="bg-black text-white h-100 flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold">iPhone 14 Series</h2>
        <p className="text-lg">Up to 10% off Voucher</p>
        <a href="#" className="text-blue-400 underline mt-2 inline-block">Shop Now →</a>
      </div>
    </div>
    
  </div>
</div>


      
      <br />
    </div>

    

  );
}
