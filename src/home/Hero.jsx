
const Hero = () => {
    return (
      <section className="w-[90%] h-96 xl:ml-16 m-5 rounded-3xl overflow-hidden bg-[url('home\image\banner-bg.jpg')] bg-cover bg-center bg-no-repeat flex items-center">
  <div className="ml-10 text-left text-white max-w-[500px]">
    <p className="text-lg mb-2">Welcome To Cyborg</p>
    <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
      <span className="text-pink-400">BROWSE</span> OUR POPULAR <br /> GAMES HERE
    </h1>
    <button className="mt-6 px-6 py-2 bg-pink-500 text-white rounded-full text-sm font-semibold hover:bg-white hover:text-pink-400 transition">
      Browse Now
    </button>
  </div>
</section>


    );
}
export default Hero;