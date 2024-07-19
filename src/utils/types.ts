export type Product = {
  costumerId: string;
  proImageUrl: string;
  proName: string;
  price: {
    smalll: number;
    medium: number;
    large: number;
  };
  proDesc: string;
  categoryId: string;
  size: "small" | "medium" | "large";
};

export type Category = {
  categoryId: string;
  categoryName: string;
};

export type Costumer = {
  fullName: string;
  email: string;
  password: string;
  avatar: string;
  address: string;
  paymentInfo: {
    cardHolder: string;
    cardNumber: string;
    expirationDate: string;
    cvv: string;
  };
  favorates: string[]; // product id hadgalnaa
};

export type Order = {
  orderId: string;
  products: {
    productId: string;
    size: "small" | "medium" | "large";
    quantity: number;
  }[];
  costumerId: string;
  date: Date;
  statusType: "placed" | "in progress" | "on your way" | "delivered";
  milkAmount: number; //1-10
  promotionCode: string | null;
};
