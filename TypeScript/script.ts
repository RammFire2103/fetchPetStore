type Order = {
  id: number;
  petId: number;
  quantity: number;
  shipDate: string;
  status: string;
  complete: boolean;
};
type FetchParam = {
  method: string;
  headers: Record<string, string>;
};

const getData = async (url: string, param: FetchParam): Promise<Order> =>
  await fetch(url, param)
    .then((data: Response): Promise<Order> => data.json())
    .then((data) => console.log(data))
    .catch((err) => err.message);

getData("https://petstore3.swagger.io/api/v3/store/order/10", {
  method: "GET",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
});
