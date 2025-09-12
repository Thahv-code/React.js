import { Link } from "react-router-dom";
import { products } from "./data";

export default function ProductList() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Danh sách sản phẩm</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {products.map((p) => (
          <div key={p.id} className="border rounded-lg p-4 shadow">
            <h2 className="text-lg font-semibold">{p.name}</h2>
            <p>Giá: {p.price.toLocaleString()} VND</p>
            <Link to={`/products/${p.id}`} className="text-blue-600">
              Xem chi tiết
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
