import type { Product } from "../types/product";
import Button from "./button";

interface ProductDetailsProps {
  product: Product;
  onBack: () => void;
  onAddToCart: (product: Product) => void;
}

function ProductDetails({ product, onBack, onAddToCart }: ProductDetailsProps) {
  return (
    <section className="details-page">
      <Button text="Back to products" variant="outline" onClick={onBack} />

      <div className="details-card">
        <img className="details-image" src={product.image} alt={product.name} />

        <div className="details-content">
          <p className="eyebrow">PRODUCT DETAILS</p>
          <h2>{product.name}</h2>
          <p className="details-rating">★ {product.rating} / 5</p>
          <p className="details-price">
            ₹{product.price.toLocaleString("en-IN")}
          </p>
          <p className="description">{product.description}</p>
          <Button
            text="Add to Cart"
            variant="primary"
            onClick={() => onAddToCart(product)}
          />
        </div>
      </div>

      <div className="reviews">
        <h2>Customer Reviews</h2>
        {product.reviews.map((review) => (
          <article className="review-card" key={review.id}>
            <div className="review-top">
              <strong>{review.customerName}</strong>
              <span className="rating">★ {review.rating} / 5</span>
            </div>
            <p>{review.comment}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProductDetails;
