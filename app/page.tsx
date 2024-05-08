import Down from "@/components/downSection/Down";
import Hero from "@/components/hero/Hero";
import MostSearched from "@/components/mostSearched/MostSearched";
import Navbar from "@/components/navbar/Navbar"
import People from "@/components/people/People";
const App = () => {
  return ( 
    <>
    <Navbar/>
    <Hero/>
    <People/>
    <MostSearched/>
    <Down/>
    </>
   );
}
 
export default App;