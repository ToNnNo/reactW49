import { useState, useEffect, useCallback } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function DetailUser() {
  const params = useParams()
  const [user, setUser] = useState({});

  const loadUser = useCallback(async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const body = await response.json();
    setUser(body);
  }, []);

  useEffect( () => {
    console.log('Load user');
    loadUser(params.id);
  }, [loadUser, params.id]);

  const textLeft = { textAlign: 'left' };

  return (
    <>
      <h2>Détail user</h2>
      <p>
        <Link to="/hook">Retour à la liste</Link>
      </p>

      <table>
        <tbody>
        <tr>
          <th style={textLeft}>ID</th>
          <td>{ user.id }</td>
        </tr>
        <tr>
          <th style={textLeft}>Name</th>
          <td>{ user.name }</td>
        </tr>
        <tr>
          <th style={textLeft}>Username</th>
          <td>{ user.username }</td>
        </tr>
        </tbody>
      </table>
    </>
  )
}