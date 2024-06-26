import { GetServerSideProps } from 'next';
import axios from 'axios';

interface Product {
  id: number;
  name: string;
  // Otros campos relevantes
}

interface IndexProps {
  products: Product[];
}

const IndexPage: React.FC<IndexProps> = ({ products }) => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
    {/* Título de la aplicación */}
    <h1 className="text-3xl font-bold mb-8">Spoiless</h1>

    {/* Submenú "Libros" */}
    <div className="w-full max-w-screen-xl mx-auto mt-8">
      <h2 className="text-xl font-semibold mb-4">Libros</h2>
      <div className="flex space-x-4 overflow-x-auto">
        {/* Ejemplo de elemento del carrusel */}
        <div className="w-64 bg-white rounded-lg shadow p-4 hover:shadow-lg transition duration-300">
          <img src="/book1.jpg" alt="Libro 1" className="w-full h-40 object-cover rounded-md mb-2" />
          <p className="text-gray-600">Título del libro 1</p>
        </div>
        {/* Agrega más elementos aquí */}
      </div>
    </div>

    {/* Submenú "Series TV" */}
    <div className="w-full max-w-screen-xl mx-auto mt-8">
      <h2 className="text-xl font-semibold mb-4">Series TV</h2>
      <div className="flex space-x-4 overflow-x-auto">
        {/* Ejemplo de elemento del carrusel */}
        <div>
      {/* Renderiza los productos aquí */}
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          {/* Otros detalles del producto */}
        </div>
      ))}
    </div>
        <div className="w-64 bg-white rounded-lg shadow p-4 hover:shadow-lg transition duration-300">
          <img src="/tvshow1.jpg" alt="Serie TV 1" className="w-full h-40 object-cover rounded-md mb-2" />
          <p className="text-gray-600">Título de la serie TV 1</p>
        </div>
        {/* Agrega más elementos aquí */}
      </div>
    </div>
  </div>

  
  );
};

export const getServerSideProps: GetServerSideProps<IndexProps> = async () => {
  try {
    const response = await axios.get(`${process.env.BASE_URL}/api/products`);
    const products = response.data;
    return { props: { products } };
  } catch (error) {
    console.error('Error fetching products:', error);
    return { props: { products: [] } };
  }
};

export default IndexPage;