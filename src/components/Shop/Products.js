import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PODUCTS = [
  { id: "p1", price: 6, title: "My First Book", description: "Hola amigo" },
  { id: "p2", price: 6, title: "My Second Book", description: "Hola amigo" },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
