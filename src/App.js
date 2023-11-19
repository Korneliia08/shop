import './App.css';
import data from "./data";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Subscribe from "./components/Subscribe/Subscribe";
import Contacts from "./components/Contacts/Contacts";
import AboutUs from "./components/AboutUs/AboutUs";
import Novelty from "./components/Novelty/Novelty";
import SocialMedias from "./components/socialMedia/SocialMedias";

function App() {
    return (
        <div className="App">
            <Header dataHeader={data.header}></Header>
            <Novelty/>
            <AboutUs/>
            <Contacts></Contacts>
            <Subscribe dataSubcribe={data.subscribe}></Subscribe>
            <Footer dataFooter={data.footer}></Footer>

            <SocialMedias/>
        </div>
    );
}

export default App;
