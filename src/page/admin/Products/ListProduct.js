import { useCallback, useEffect, useState } from "react"
import { Link } from 'react-router-dom';
import axios from "axios";
import { CurrencyFormatter } from "../../../formatter/Number";

export default function ListProduct() {
  const [products, setProducts] = useState([]);

  const getAllProducts = useCallback(async () => {
    const result = await axios.get("http://localhost:3200/product");
    setProducts(result.data);
  }, []);

  useEffect(() => {
    getAllProducts();

  }, [getAllProducts]);

  return (
    <>
      <h2>Liste des produits</h2>

      <p>
        <Link to="/admin/products/add">Ajouter un nouveau produit</Link>
      </p>

      <table style={{width: '100%'}}>
        <thead>
          <tr style={{textAlign: 'Left'}}>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          { products.map((product) => (
            <tr>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{CurrencyFormatter(product.price)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}