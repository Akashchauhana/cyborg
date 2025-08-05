import { librarys } from "./librarys";


const Library = () => {
  return (
    <div className="bg-[#1c1c1c] text-white p-10 rounded-2xl w-[90%] mx-auto mt-20">
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-8">
        <u>Your Gaming</u>{" "}
        <span className="text-pink-500 no-underline">Library</span>
      </h2>

      {/* Game Cards */}
      {librarys.map((game, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row items-center justify-between border-b border-gray-700 py-6 gap-6"
        >
          {/* Image + Name + Genre */}
          <div className="flex items-center gap-4 w-full md:w-1/3">
            <img
              src={game.image}
              alt={game.name}
              className="w-20 h-20 object-cover rounded"
            />
            <div>
              <h3 className="text-lg font-bold">{game.name}</h3>
              <p className="text-gray-400">{game.genre}</p>
            </div>
          </div>

          {/* Date Added */}
          <div className="text-center w-full md:w-1/6">
            <p className="font-semibold">Date Added</p>
            <p className="text-gray-400">{game.date}</p>
          </div>

          {/* Hours Played */}
          <div className="text-center w-full md:w-1/6">
            <p className="font-semibold">Hours Played</p>
            <p className="text-gray-400">{game.hours}</p>
          </div>

          {/* Status */}
          <div className="text-center w-full md:w-1/6">
            <p className="font-semibold">Currently</p>
            <p className="text-gray-400">{game.status}</p>
          </div>

          {/* Download Button */}
          <div className="text-center w-full md:w-1/6">
            <button
              className={`text-sm px-4 py-1 rounded-full border transition ${
                game.status === "Downloaded"
                  ? "border-gray-500 text-white cursor-not-allowed"
                  : "border-pink-500 text-pink-500 hover:bg-white hover:text-pink-500"
              }`}
              disabled={game.status === "Downloaded"}
            >
              {game.status === "Downloaded" ? "Downloaded" : "Download"}
            </button>
          </div>
        </div>
      ))}

      {/* View Library Button */}
      <div className="text-center mt-10">
     <button
  className="absolute  left-1/2 -translate-x-1/2 transform 
             w-[200px] h-[45px] rounded-3xl 
             bg-[rgb(255,136,202)] text-black font-semibold 
             hover:bg-white hover:text-pink-400 
             transition duration-300 ease-in-out"
>
          View Your Library
        </button>
      </div>
    </div>
  );
};

export default Library;
