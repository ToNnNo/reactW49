import { useState } from 'react';

export default function UserForm() {
  const [success, setSuccess] = useState(false);
  const [user, setUser] = useState({ name: 'John Doe', username: '', phone: '', email: '' });

  function changeData(e) {
    const target = e.target;
    // user = object
    user[target.name] = target.value;

    setUser({ ...user });
  }

  async function submit(e) {
    e.preventDefault();

    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST', // PUT; PATCH; DELETE
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    });

    if(response.ok) {
      const savedUser = await response.json();
      console.log(savedUser);
      setSuccess(true);
    }
  }

  return (
    <>
      { success && <p>L'utilisateur a bien été enregistré</p> }

      <form onSubmit={submit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={ user.name } onChange={changeData} />
        </div>
        <div>
          <label>Username:</label>
          <input type="text" name="username" value={ user.username } onChange={changeData} />
        </div>
        <div>
          <label>Email:</label>
          <input type="text" name="email" value={ user.email } onChange={changeData} />
        </div>
        <div>
          <label>Phone:</label>
          <input type="text" name="phone" value={ user.phone } onChange={changeData} />
        </div>
        
        <button>Ajouter</button>
      </form>
    </>
  )
}