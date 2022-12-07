import { useCallback, useEffect, useState } from "react";

export default function FakeListUser() {

  const [users, setUsers] = useState([]);

  const loadUser = useCallback(async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users'); // avant fetch on utilisait xhr (XML HTTP Request) Ajax
    const body = await response.json();
    setUsers(body);
  }, []);

  useEffect(() => {
    // didMount / didUpdate
    console.log('Chargement des utilisateurs');
    loadUser();

    return () => {
      // didUnmount
      console.log("Clear Data");
    }
  }, [loadUser]);
  // le second paramètre (dépendance) de la fonction useEffect permet de définir si le cycle de vie (didUpdate)
  // doit se déclencher ou pas.
  // le déclenchement se produit si et seulement si, une dépendance (valeur) change

  return (
    <>
      <p>Nombre d'utilisateur: { users.length }</p>
      <table style={{width: '100%'}}>
        <thead>
          <tr style={{textAlign: 'left'}}>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map( user => (
              <tr key={user.id}>
                <td>{ user.id }</td>
                <td>{ user.name }</td>
                <td>{ user.email }</td>
                <td>{ user.phone }</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  );

}
