class OrderItem{
  constructor(public quantity : number, public menuId: string) {}
}

class Order{
  constructor(public address: string,
              public number : number,
              public optional : string,
              public paymentOption : string,
              public items : OrderItem[]) {}
}

export { OrderItem, Order }
