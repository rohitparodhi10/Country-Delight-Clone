import React, { useEffect, useState } from 'react';
import styles from '../Styles/Products.module.css';
import imageMap from '../assets/imageMap';
import api from '../api';
import { Link } from 'react-router-dom';

function Products() {
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(false);

    const handleCategories = async () => {
        setError("");

        try {
            const response = await api.get('products/categories/');
            setCategories(response.data);
        } catch (error) {
            setError(error);
        }
    };

    useEffect(() => {
        handleCategories();
    }, []);


    return (
        <div className={styles.MacBookAir2_MacBookAir2}>
            {categories.map((category, index) => {
                const row = Math.floor(index / 2);
                const col = index % 2;

                // base top and left offsets
                const baseTop = 200;  // starting top position
                const baseLeft = 180; // left for col 0
                const xSpacing = 600; // horizontal space between columns
                const ySpacing = 250; // vertical space between rows

                const left = baseLeft + col * xSpacing;
                const top = baseTop + row * ySpacing;

                return (
                    <React.Fragment key={index}>
                        <div className={styles.Rectangle7} style={{ top: `${top}px`, left: `${left}px` }} />
                        <span className={styles.MilkCoconutWater} style={{ top: `${top + 20}px`, left: `${left + 200}px` }}>
                            {category.name}
                        </span>
                        <span
                            className={styles.BuyMilkOnlineCountryDelightpromisespurequalityonlinemilkdeliverydailyatyourdoorstep}
                            style={{ top: `${top + 55}px`, left: `${left + 200}px` }}
                        >
                            Buy Milk Online - Country Delight promises pure quality online delivery daily at your doorstep
                        </span>
                        <Link to='/view-products' className={styles.helloButton}
                            style={{
                                top: `${top + 130}px`,
                                left: `${left + 200}px`,
                            }}>View Products</Link>
                        <div className={styles.Ellipse6} style={{ top: `${top + 30}px`, left: `${left + 20}px` }} />
                        <img
                            className={styles.tempImagenAailM1}
                            style={{ top: `${top + 31}px`, left: `${left + 20}px` }}
                            src={category.image}
                            alt={`${category.name} product`}
                        />
                    </React.Fragment>
                );
            })}
            
            <span className={styles.Exploreourrange}>Explore our range</span>
            <span className={styles.ChoosefromourwiderangeofstaplesdairyproductsandfreshharvestGet100naturalessentialshomedeliveredeveryday}>
                Choose from our wide range of staples, dairy products, and fresh harvest. Get 100% natural essentials home delivered every day.
            </span>
            <img
                className={styles.tempImageHKqTM81}
                src={imageMap('MacBookAir2_tempImageHKqTM81.png')}
                alt="Product range"
            />
        </div>
    )
}

export default Products;