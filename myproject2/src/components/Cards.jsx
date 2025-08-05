import { card } from './card.jsx';
import { FaStar, FaDownload } from "react-icons/fa";

const Cards = () => {
  return (
    <div className="relative w-[90%] p-10 mx-auto bg-[rgb(26,27,28)] rounded-3xl">
      <h2 className="text-4xl font-bold text-left mb-6">
        <span className="text-white underline decoration-white">Most Popular</span>{' '}
        <span className="text-pink-500">Right Now</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {card.map((val, index) => (
          <div key={index} className="bg-[rgb(38,39,41)] rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="flex justify-center items-center mt-2">
              <img
                src={val.photo}
                alt={val.name}
                className="w-30 h-48 object-cover rounded-3xl mt-4"
              />
            </div>
            <div className="p-4">
              <h1 className="text-lg font-semibold text-white flex items-center">
                {val.name}
                <FaStar className="ml-auto text-yellow-300" />
                <h5 className="ml-1">4.8</h5>
              </h1>
              <p className="text-gray-400 flex items-center">
                {val.ulocation}
                <FaDownload className="ml-auto text-[#ff5e99]" />
                <h5 className="ml-1 text-white">2.3m</h5>
              </p>
            </div>
          </div>
        ))}
      </div>
      <button className="absolute bottom-[-25px] left-1/2 transform -translate-x-1/2 rounded-3xl bg-[rgb(255,136,202)] w-[200px] h-[45px] text-black font-semibold hover:bg-white hover:text-pink-400 transition">
        Discover Popular
      </button>
    </div>
  );
};

export default Cards;
