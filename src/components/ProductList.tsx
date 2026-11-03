import type { Product } from "../types/product";

interface ProductListProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

function ProductList({ products, onSelectProduct }: ProductListProps) {
  return (
    <section>
      <div className="section-heading">
        <p className="eyebrow">OUR COLLECTION</p>
        <h2>Available Products</h2>
        <p className="muted">Choose a product to see its details and customer reviews.</p>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <article className="product-card" key={product.id}>
            <button
              className="image-button"
              onClick={() => onSelectProduct(product)}
              aria-label={`View ${product.name} details`}
            >
              <img src={product.image} alt={product.name} />
            </button>
            <div className="product-info">
              <div>
                <h3>{product.name}</h3>
                <p className="price">₹{product.price.toLocaleString("en-IN")}</p>
                <p className="rating">★ {product.rating} / 5</p>
              </div>
              <button className="secondary-button" onClick={() => onSelectProduct(product)}>
                View details
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProductList;