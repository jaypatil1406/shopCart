
import { useState } from "react";
import productsData from "./data/product.json";

import type { Product, CartItem } from "./types/product";

import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";

const products = productsData as Product[];

function App() {
  const [selectedProduct, setSelectedProduct] =
    useState<Product | null>(null);

  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const [showCart, setShowCart] = useState(false);

  // Add product to cart
  function handleAddToCart(product: Product) {
    const existingItem = cartItems.find(
      (item) => item.product.id === product.id
    );

    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([
        ...cartItems,
        {
          product: product,
          quantity: 1
        }
      ]);
    }

    setSelectedProduct(null);
    setShowCart(true);
  }

  // Increase product quantity
  function increaseQuantity(id: number) {
    setCartItems(
      cartItems.map((item) =>
        item.product.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  // Decrease product quantity
  function decreaseQuantity(id: number) {
    setCartItems(
      cartItems.map((item) =>
        item.product.id === id
          ? {
              ...item,
              quantity: Math.max(0, item.quantity - 1)
            }
          : item
      )
    );
  }

  // Remove product from cart
  function removeProduct(id: number) {
    setCartItems(
      cartItems.filter(
        (item) => item.product.id !== id
      )
    );
  }

  // Calculate total quantity
  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  function goToProducts() {
    setShowCart(false);
    setSelectedProduct(null);
  }

  return (
    <div className="app">

      <header className="topbar">

        <button className="brand" onClick={goToProducts}>
          ShopCart<span>.</span>
        </button>

        <nav>
          <button onClick={goToProducts}>
            Products
          </button>

          <button
            onClick={() => {
              setSelectedProduct(null);
              setShowCart(true);
            }}
          >
            Cart ({cartCount})
          </button>
        </nav>

      </header>

      <main className="main-content">

        {showCart ? (
          <Cart
            cartItems={cartItems}
            onIncrease={increaseQuantity}
            onDecrease={decreaseQuantity}
            onRemove={removeProduct}
            onContinueShopping={goToProducts}
          />
        ) : selectedProduct ? (
          <ProductDetails
            product={selectedProduct}
            onBack={() => setSelectedProduct(null)}
            onAddToCart={handleAddToCart}
          />
        ) : (
          <ProductList
            products={products}
            onSelectProduct={setSelectedProduct}
          />
        )}

      </main>

      <footer>
        ShopCart : Your Choice : OurService
      </footer>

    </div>
  );
}

export default App;
