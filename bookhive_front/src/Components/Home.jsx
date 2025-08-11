import React, { useEffect } from 'react';
import styles from "../Styles/Home.module.css";
import imageMap from '../assets/imageMap';
import Arrow_drop_down from './arrow_drop_down';
import api from '../api';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { Link } from 'react-router-dom';

function Home() {

    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [launch, setLaunch] = useState([]);
    const [error, setError] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [launchIndex, setLaunchIndex] = useState(0);

    useEffect(() => {
        fetchCategories();
        fetchProducts();
        fetchLaunchProducts();
    }, []);


    const fetchCategories = async () => {
        setError("");
        try {
            const response = await api.get('products/categories/');
            setCategories(response.data);
        } catch (error) {
            setError(error.message)
        }
    };

    const fetchLaunchProducts = async () => {
        setError("")

        try {
            const response = await api.get('products/new-launch/');
            console.log('new launch products', response.data)
            setLaunch(response.data);
        } catch (error) {
            setError(error.message);
        }
    };

    useEffect(() => {
        if (launch.length === 0) return;

        const interval = setInterval(() => {
            setLaunchIndex((prevIndex) => (prevIndex + 1) % launch.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [launch]);

    const fetchProducts = async () => {
        setError("");

        try {
            const response = await api.get('products/products/');
            setProducts(response.data);
        } catch (error) {
            setError(error)
        }
    };

    const filteredProducts = products
        .filter((product) => product.category === 1)
        .slice(0, 10);

    useEffect(() => {
        if (filteredProducts.length === 0) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredProducts.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [filteredProducts]);

    if (filteredProducts.length === 0) return null;

    const product = filteredProducts[currentIndex];


    return (
        <>
            <div className={styles.MacBookAir1_MacBookAir1}>
                <div class={styles.hero}>
                    <img src={imageMap('hero.png')} alt="hero image" />
                </div>
                <span className={styles.ExploreCategories}>Explore Categories</span>
                {categories.map((category, index) => {
                    const itemsPerRow = 7;
                    const row = Math.floor(index / itemsPerRow);
                    const col = index % itemsPerRow;

                    const left = 133 + col * 170;
                    const topEllipse = 656.53 + row * 180;
                    const topImage = 686.53 + row * 180;
                    const topText = 780.04 + row * 180;

                    return (
                        <React.Fragment key={index}>
                            <div
                                className={styles.Ellipse1}
                                style={{ left: `${left}px`, top: `${topEllipse}px` }}
                            />
                            <Link to='/view-products'><img
                                className={styles.tempImage5YJpnc1}
                                src={category.image}
                                alt={category.name}
                                style={{ left: `${left + 10}px`, top: `${topImage}px` }}
                            /></Link>
                            <span
                                className={styles.CoconutWater}
                                style={{ left: `${left}px`, top: `${topText}px` }}
                            >
                                {category.name}
                            </span>
                        </React.Fragment>
                    );
                })}



                <div className={styles.Group8}>
                    <div className={styles.Rectangle2} />
                    <span className={styles.NewLaunches}>New Launches</span>

                    {launch.length > 0 ? (
                        Array.from({ length: 7 }).map((_, i) => {
                            const index = (launchIndex + i) % launch.length;
                            const newlaunch = launch[index];
                            const xOffset = i * 240;

                            return (
                                <div
                                    key={index}
                                    className={styles.slideContainer}
                                    style={{ transform: `translateX(${xOffset}px)` }}
                                >
                                    <div className={styles.Rectangle3} />
                                    <img
                                        className={styles.tempImage5YJpnc2}
                                        src={newlaunch.image}
                                        alt={newlaunch.name}
                                    />
                                    <span className={styles.titleofproduct}>{newlaunch.name}</span>
                                    <span className={styles.gm}>{newlaunch.weight}gm</span>
                                    <span className={styles.Price}>₹ {newlaunch.price}</span>
                                </div>
                            );
                        })
                    ) : (
                        <p>No new launches available.</p>
                    )}
                </div>

                <span className={styles.FreshFruitsandVegetables}>Fresh Fruits and Vegetables</span>

                <div className={styles.Group9}>
                    <div className={styles.Rectangle4} />
                    <span className={styles.ProductName}>Product Name</span>
                    <span className={styles.Description}>Description</span>
                    <img className={styles.tempImage5YJpnc3} src={imageMap('MacBookAir1_tempImage5YJpnc1.png')} alt="temp3" />
                </div>

                <span className={styles.MilkProductsCountrySpecials}>Milk Products & Country Specials</span>
                <div className={styles.Group10}>
                    <div className={styles.Rectangle5} />
                    <span className={styles.ProductName_1}>{product.name}</span>
                    <span className={styles.Description_1}>{product.description}</span>
                </div>
                {product.image && (
                    <img
                        className={styles.tempImage5YJpnc4}
                        src={product.image}
                        alt={product.name}
                    />
                )}
                <span className={styles.Howwemakeitforyou}>How we make it for you</span>

                <div className={styles.Group11}>
                    <div className={styles.Rectangle6} />
                    <img className={styles.Line1} src={imageMap('MacBookAir1_Line1.png')} alt="line" />
                    <img className={styles.tempImageVbt7UN1} src={imageMap('MacBookAir1_tempImageVbt7UN1.png')} alt="image" />
                    <span className={styles.WesourceMilkGroceriesFruitsYogurtsEggsVegetablesandallotheressentialsfreshfromthebestfarmsinIndiaAfterqualitytestingatfarmsandtheninourlabswedeliverallyourdailyneedswithoutpreservativesormixingOrderyourfreshmilkandgroceriesandhavethemdelivereddailyItseasyandconvenientsavingyoutimeandeffortEnjoyfreshessentialsrightatyourdoorstepeverydaySetupasubscriptionplanformilkandgroceriestosuityourdailyneedsChoosehowoftenyouwantyouritemsdeliveredandenjoytheconvenienceofregularhasslefreedeliveriesrighttoyourdoorstepActivatevacationmodetopausemilkandgrocerydeliverieswhenyoureawayThiswayyoucanskipdeliveriesuntilyourebackhomeandreadytoreceivethemagainTakeadvantageofexcitingofferstosavebigonmilkgroceriesfruitsvegetablesandotheressentialsDontmissoutonourspecialdiscountsthathelpstretchyourbudgetfurther}>
                        We source Milk, Groceries, Fruits, Yogurts, Eggs, Vegetables and all other essentials fresh from the best farms in India. After quality testing at farms and then in our labs, we deliver all your daily needs without preservatives or mixing.
                        Order your fresh milk and groceries and have them delivered daily. It's easy and convenient, saving you time and effort. Enjoy fresh essentials right at your doorstep every day.
                        Set up a subscription plan for milk and groceries to suit your daily needs. Choose how often you want your items delivered and enjoy the convenience of regular, hassle-free deliveries right to your doorstep.
                        Activate vacation mode to pause milk and grocery deliveries when you're away. This way, you can skip deliveries until you're back home and ready to receive them again.
                        Take advantage of exciting offers to save big on milk, groceries, fruits, vegetables, and other essentials. Don't miss out on our special discounts that help stretch your budget further.
                    </span>
                    <span className={styles.ModifyandOrderYourMilkgroceriestill12midnightfornextdayearlymorning7amdelivery}>
                        Modify and Order Your Milk & groceries till 12 midnight for next day early morning 7am delivery
                    </span>
                </div>

                <span className={styles.FarmtoHomeEveryDayOnlineMilkGroceriesDelivery}>
                    Farm to Home, Every Day Online Milk & Groceries Delivery
                </span>

                <div className={styles.Group12}>
                    <div className={styles.Ellipse3} />
                    <div className={styles.Ellipse4} />
                    <div className={styles.Ellipse5} />
                    <img className={styles.tempImageN1uU5r1} src={imageMap('MacBookAir1_tempImageN1uU5r1.png')} alt="img" />
                    <img className={styles.tempImageTnQ41I1} src={imageMap('MacBookAir1_tempImageTnQ41I1.png')} alt="img" />
                    <img className={styles.tempImagesr52Sn1} src={imageMap('MacBookAir1_tempImagesr52Sn1.png')} alt="img" />
                    <span className={styles.Milkcollectionfromhealthycattle}>Milk collection from healthy cattle</span>
                    <span className={styles.Qualitytestedfor100commonadulterants}>Quality tested for 100+ common adulterants</span>
                    <span className={styles.Homedeliveryby7am}>Home delivery by 7 am</span>
                </div>

                <div className={styles.Group1}>
                    <div className={styles.Frame1}>
                        <div className={styles.Group2}>
                            <Link to='/products' className={styles.Products}>Products</Link>
                            <span className={styles.Reviews}>Reviews</span>
                            <span className={styles.MilkTestingKit}>Milk Testing Kit</span>
                        </div>
                        <img className={styles.tempImageuGqPcm1} src={imageMap('MacBookAir1_tempImageuGqPcm1.png')} alt="icon" />
                        <span className={styles.DeliverIn}>Deliver In<br /></span>
                        <div className={styles.Group7}>
                            <span className={styles.Pune}>Pune</span>
                        </div>
                        <Arrow_drop_down className={styles.arrow_drop_down} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;


