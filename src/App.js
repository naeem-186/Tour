import ChooseUs from './Components/ChooseUs';
import MainContent from './Components/Main-content';
import Navbar from './Components/Navbar';
import { NeedPackages } from './Components/NeedPackages';
import { OurPackages1 } from './Components/Our-Packages';
import { OurBlog } from './Components/OurBlog';
import SearchBar from './Components/Search-Bar';


function App() {
  return (
    <>
      <Navbar />
      <MainContent />
      <SearchBar />
      <ChooseUs />
      <OurPackages1/>
      <OurBlog/>
      <NeedPackages/>
    </>
  );
}

export default App;
