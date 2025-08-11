import React, { useEffect, useState } from 'react';
import styles from '../Styles/ViewProducts.module.css';
import imageMap from '../assets/imageMap';
import api from '../api';

export default function MacBookAir3() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [error, setError] = useState(false);

    const handleProducts = async () => {
        setError('');
        try {
            const response = await api.get('products/products/');
            setProducts(response.data);
        } catch (error) {
            setError(error.message);
        }
    };

    const handleCategory = async () => {
        setError('');
        try {
            const response = await api.get('products/categories/');
            setCategories(response.data);
        } catch (error) {
            setError(error.message);
        }
    };

    const handleCategoryClick = (categoryId) => {
        setSelectedCategory(categoryId);
    };

    useEffect(() => {
        handleCategory();
        handleProducts();
    }, []);

    return (
        <div className={styles.MacBookAir3_MacBookAir3}>
            {/* Category Section */}
            <div className={styles.categorysection}>
                <img
                    className={styles.Rectangle8}
                    src={imageMap('MacBookAir3_Rectangle8.png')}
                    alt="Category BG"
                />
                {categories.map((category, index) => (
                    <div
                        key={category.id}
                        className={styles.Rectangle9}
                        // style={{ top: `${31.64 + index * 100}px`, cursor: 'pointer' }}
                        onClick={() => handleCategoryClick(category.id)}
                    >
                        <img
                            className={styles.tempImagenAailM2}
                            src={category.image}
                            alt={category.name}
                            // style={{ top: `${39.55 + index * 100}px` }}
                        />
                        <span
                            className={styles.MilkCoconutWater}
                            // style={{ top: `${61.02 + index * 100}px` }}
                        >
                            {category.name}
                        </span>
                    </div>
                ))}
            </div>

            {/* Product Section */}
            <div className={styles.Rectangle10} />
           {products
	.filter((product) =>
		selectedCategory ? product.category === selectedCategory : true
	)
	.map((product, index) => {
		const row = Math.floor(index / 2);
		const col = index % 2;

		const baseTop = 320;
		const baseLeft = 180;
		const xSpacing = 600;
		const ySpacing = 300;

		const left = baseLeft + col * xSpacing;
		const top = baseTop + row * ySpacing;

		return (
			<React.Fragment key={product.id}>
				<div
					className={styles.Rectangle11}
					style={{ top: `${top}px`, left: `${left}px`, position: 'absolute' }}
				/>
				<img
					className={styles.tempImageD0nv371}
					src={product.image}
					alt={product.name}
					style={{ top: `${top + 5}px`, left: `${left + 20}px`, position: 'absolute' }}
				/>
				<span
					className={styles.Banana}
					style={{ top: `${top + 25}px`, left: `${left + 180}px`, position: 'absolute' }}
				>
					{product.name}
				</span>
				<span
					className={styles.weight}
					style={{ top: `${top + 42}px`, left: `${left + 180}px`, position: 'absolute' }}
				>
					{product.weight}
				</span>
				<span
					className={styles.price}
					style={{ top: `${top + 59}px`, left: `${left + 180}px`, position: 'absolute' }}
				>
					₹{product.price}
				</span>
				<img
					className={styles.Line2}
					src={imageMap('MacBookAir3_Line2.png')}
					alt="Line2"
					style={{ top: `${top + 109}px`, left: `${left}px`, position: 'absolute' }}
				/>
				<img
					className={styles.tempImagemWMytC1}
					src={imageMap('MacBookAir3_tempImagemWMytC1.png')}
					alt="Line bg"
					style={{ top: `${top + 124}px`, left: `${left}px`, position: 'absolute' }}
				/>
				<span
					className={styles.OrderPremiumQualityBananasOnline}
					style={{ top: `${top + 223}px`, left: `${left}px`, position: 'absolute' }}
				>
					{product.description}
				</span>
				<img
					className={styles.tempImageyCP47u1}
					src={imageMap('MacBookAir3_tempImageyCP47u1.png')}
					alt="Bar"
					style={{ top: `${top + 79}px`, left: `${left + 90}px`, position: 'absolute' }}
				/>
				<img
					className={styles.Line3}
					src={imageMap('MacBookAir3_Line3.png')}
					alt="Line3"
					style={{ top: `${top + 212}px`, left: `${left}px`, position: 'absolute' }}
				/>
			</React.Fragment>
		);
	})}

        </div>
    );
}
