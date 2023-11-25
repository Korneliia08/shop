import data from "../../data";
import Novelty from "../Novelty/Novelty";
import ChooseCategory from "../ChooseCategory/ChooseCategory";
import AboutUs from "../AboutUs/AboutUs";
import Contacts from "../Contacts/Contacts";
import Subscribe from "../Subscribe/Subscribe";
import SocialMedias from "../SocialMedia/SocialMedias";

const DefaultComponents = ()=>{
    return(
        <>
            <Novelty/>
            <ChooseCategory dataCategory={data.chooseCategory}/>
            <AboutUs/>
            <Contacts></Contacts>
            <Subscribe dataSubcribe={data.subscribe}></Subscribe>
            <SocialMedias/>

        </>
    )
}
export default DefaultComponents;
