import type { CartItem } from "../types/product";
import Button from "./button";

interface CartProps {
  cartItems: CartItem[];
  onIncrease: (id: number) => void;
  onDecrease: (id: number) => void;
  onRemove: (id: number) => void;
  onContinueShopping: () => void;
}

function Cart({
  cartItems,
  onIncrease,
  onDecrease,
  onRemove,
  onContinueShopping,
}: CartProps) {
  const subtotal = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  );

  const total = subtotal;

  return (
    <section className="cart-page">
      <h2>Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <h3>Your cart is empty!</h3>
          <p>Add some products to your shopping cart.</p>

          <Button
            text="Continue Shopping"
            variant="primary"
            onClick={onContinueShopping}
          />
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-products">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.product.id}>
                <img src={item.product.image} alt={item.product.name} />

                <div className="cart-item-info">
                  <h3>{item.product.name}</h3>

                  <p>₹{item.product.price.toLocaleString("en-IN")}</p>

                  <div className="quantity-controls">
                    <Button
                      text="-"
                      variant="outline"
                      onClick={() => onDecrease(item.product.id)}
                    />

                    <span>{item.quantity}</span>

                    <Button
                      text="+"
                      variant="outline"
                      onClick={() => onIncrease(item.product.id)}
                    />
                  </div>

                  <Button
                    text="Remove"
                    variant="danger"
                    onClick={() => onRemove(item.product.id)}
                  />
                </div>

                <strong>
                  ₹
                  {(item.product.price * item.quantity).toLocaleString("en-IN")}
                </strong>
              </div>
            ))}
          </div>

          <div className="order-summary">
            <h3>Order Summary</h3>

            <div className="summary-row">
              <span>Subtotal</span>
              <span>₹{subtotal.toLocaleString("en-IN")}</span>
            </div>

            <div className="summary-row">
              <span>Shipping</span>
              <span>Free</span>
            </div>

            <hr />

            <div className="summary-row total-row">
              <strong>Total</strong>
              <strong>₹{total.toLocaleString("en-IN")}</strong>
            </div>

            <Button
              text="Proceed to Checkout"
              variant="primary"
              onClick={() => alert("Checkout functionality is coming soon!")}
            />
            <Button
              text="Continue Shopping"
              variant="outline"
              onClick={onContinueShopping}
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default Cart;
