export interface Review {
  id: number;
  customerName: string;
  rating: number;
  comment: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  rating: number;
  reviews: Review[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}