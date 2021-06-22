interface Fulldata {
  data: Idata[];
}

interface Idata {
  type: string;
  id: string;
  name: string;
  time: string;
  download: string;
  orders: IOrders[];
}

interface IOrders {
  id: number;
  item: string;
  img: string;
  description: string;
  quantity: number;
}
