import styleNovelty from "./Novelty.module.css";
import imageBag from "../../assets/images/bagImage.jpg"

const Novelty = () => {
    return (
        <div className={styleNovelty.blockForNovelty}>
            <div className={styleNovelty.blockForTitle}>
                <h2 className={styleNovelty.title}>Novelty</h2>
                <a href="#" className={styleNovelty.navigateToShop}>In shop</a>
            </div>
            <img src={imageBag} alt="image 'Bag'" className={styleNovelty.imgBag}/>
        </div>
    )
}
export default Novelty;
