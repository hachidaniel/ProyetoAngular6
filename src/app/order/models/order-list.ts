export class OrderList {
      orderId: number;
      orderDate: string;
      orderNumber: number;
      customerId: number;
      customer: string;
      totalAmount: number;
      totalRecords: number;
      orderDetails: OrderItemList[];
}

export class OrderItemList {
     id: number;
     prderId: number;
     productId: number;
     productName: string;
     unitPrice: number;
     quantity: number;
}
