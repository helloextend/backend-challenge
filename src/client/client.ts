import orders from "./data/orders.json";
import products from "./data/products.json";

export enum OrderStatus {
  PENDING = "PENDING",
  PROCESSING = "PROCESSING",
  SHIPPED = "SHIPPED",
  DELIVERED = "DELIVERED",
}

interface FetchOrderProduct {
  id: number;
  purchasePrice: string;
}

interface FetchedOrder {
  id: number;
  status: OrderStatus;
  customerName: string;
  products: FetchOrderProduct[];
}

interface FetchedProduct {
  id: number;
  name: string;
  cost: string;
  sku: string;
  components: FetchedProduct[];
}

export function fetchOrders(): Promise<FetchedOrder[]> {
  return new Promise((resolve, reject) => {
    // Simulate a delay to mimic the network request (like fetch)
    setTimeout(() => {
      resolve(orders as FetchedOrder[]);
    }, 1000);
  });
}

export function fetchOrderById(id: number | string): Promise<FetchedOrder> {
  return new Promise((resolve, reject) => {
    const orderId = typeof id === "number" ? id : parseInt(id);
    // Simulate a delay to mimic the network request (like fetch)
    setTimeout(() => {
      const order = orders.find((o) => o.id === orderId);
      if (order) {
        resolve(order as FetchedOrder);
      } else {
        reject(new Error("404 Not Found"));
      }
    }, 200);
  });
}

export function fetchProductById(id: number | string): Promise<FetchedProduct> {
  return new Promise((resolve, reject) => {
    const productId = typeof id === "number" ? id : parseInt(id);
    // Simulate a delay to mimic the network request (like fetch)
    setTimeout(() => {
      const product = products.find((p) => p.id === productId);
      if (product) {
        resolve(product as FetchedProduct);
      } else {
        reject(new Error("404 Not Found"));
      }
    }, 50);
  });
}
