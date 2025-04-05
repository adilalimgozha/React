'use client';

import { useEffect, useState } from 'react';
import { fetchProducts} from '../api/get';

type Product = {
  id: string;
  name: string;
  actualPrice: number;
  discountPrice: number;
  image: string;
};

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        setError('Не удалось загрузить данные');
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded-lg shadow">
        {product.actualPrice > product.discountPrice && <p className='bg-green-700 mr-47'>NEW</p>}
          <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded" />
          <h3 className="text-lg font-bold mt-2">{product.name}</h3>
          <p className="text-gray-600">${product.actualPrice}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
