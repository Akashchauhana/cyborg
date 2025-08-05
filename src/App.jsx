import Footer from "./home/Footer";
import Frist from "./home/Frist";
import Navbar from "./home/Navbar";

function App() {
  return (
    <section className="flex flex-col w-full   items-center justify-center min-h-screen bg-[rgb(26,27,28)]">
      <Navbar />
      <Frist />
      <Footer />
    </section>
  )
}
export default App;