import { useState } from "react";
import productsData from "./data/product.json";
import type { Product } from "./types/product";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";

const products = productsData as Product[];

function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showCart, setShowCart] = useState(false);

  function handleAddToCart(product: Product) {
    
    alert(`${product.name} selected. Cart functionality is coming in Phase 2.`);
  }

  function goToProducts() {
    setShowCart(false);
    setSelectedProduct(null);
  }

  return (
    <div className="app">
      <header className="topbar">
        <button className="brand" onClick={goToProducts}>ShopCart<span>.</span></button>
        <nav>
          <button onClick={goToProducts}>Products</button>
          <button onClick={() => { setSelectedProduct(null); setShowCart(true); }}>Cart</button>
        </nav>
      </header>

      <main className="main-content">
        {showCart ? (
          <Cart />
        ) : selectedProduct ? (
          <ProductDetails
            product={selectedProduct}
            onBack={() => setSelectedProduct(null)}
            onAddToCart={handleAddToCart}
          />
        ) : (
          <ProductList products={products} onSelectProduct={setSelectedProduct} />
        )}
      </main>

      <footer>ShopCart · Your Choice · OurService </footer>
    </div>
  );
}

export default App;