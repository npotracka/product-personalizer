import styles from './Product.module.scss';
import { useState } from 'react';
import ProductOptions from '../ProductOptions/ProductOptions';
import ProductImage from '../ProductImage/ProductImage'; 

  const Product = props => {
  const [currentSize, setSize] = useState(`${props.sizes[0].name}`);
  const [currentColor, setColor] = useState(`${props.colors[0]}`);

  const getPrice = () => {
    const size = props.sizes.find((size) => size.name === currentSize);
    return props.basePrice + size.additionalPrice;
  }; 

  const addToShoppingCart = (e) => {
    e.preventDefault();
    props.action({ id: props.id, title: props.title, size: currentSize, color: currentColor, price: getPrice })
  }

  return (
    <article className={styles.product}>
      <ProductImage title={props.title} name={props.name} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <ProductOptions 
          setSize={setSize}
          setColor={setColor}
          onSize={props.sizes}
          onColor={props.colors}
          currentColor={currentColor}
          currentSize={currentSize}
          action={addToShoppingCart}
        />
      </div>
    </article>
  )
  };

export default Product;