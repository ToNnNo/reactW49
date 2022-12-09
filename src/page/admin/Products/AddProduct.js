import AdminFormProduct from "../../../form/AdminFormProduct";
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { logout } from "../../../slice/userSlice";
import { useNavigate } from 'react-router-dom';

export default function AddProduct() {
  // const token = useSelector( (state) => state.user.token );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function save(data) {
    // Header HTTP authorization: Bearer token
    /*const config = { // interceptor dans App
      headers: {
        authorization: `Bearer ${token}`,
      }
    }*/

    try {
      await axios.post("http://localhost:3200/product", data); //, config
      navigate('/admin/products');
    } catch(e) {
      console.log(e.response.data.message);
      if( 401 === e.response.status ) {
        dispatch(logout());
        navigate('/signin');
      }
    }
  }

  return (
    <>
      <h2>Ajouter un nouveau produit</h2>

      <AdminFormProduct onSubmit={save} />
    </>
  )
}