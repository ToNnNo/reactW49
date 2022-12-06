import Welcome from '../component/Welcome';
import { NumberFormatter } from '../formatter/Number';
import Hello from '../component/Hello';
import Notification from '../component/Notification';
import UselessButton from '../component/UselessButton';

export default function Introduction() {

    const name = "Stéphane";
    const html = "<script>alert('attack')</script>";
    const safeHtml = "Bonjour <b>John Doe</b>";

    const numbers = [1, 2];
    const [a, b] = numbers;
    console.log(a, b);

    const user = { username: "John Doe", email: "john.doe@gmail.com", password: "P4ssW0rd" };
    const { username, email, password, role = "user" } = user;

    const messages = []; //['Formation', 'React', 'Dawan'];

    const fruits = ["Pomme", "Poire", "Cerise", "Orange"];

    function handleClick() {
        const message = 'Merci de confiance :)';
        alert(message);
    }

    // ( ... ) = grappe (React): permet de faire un affichage sur plusieurs lignes
    return (
<div style={ {"textAlign": "left"}}>
    <Welcome />
    
    <h3>Les expressions JSX</h3>
    <p>1 + 2 = { 1 + 2 }</p>
    <p>Hello { name }</p>
    <p>NumberFormatter: { NumberFormatter(12345678.99) }</p>

    <h3>Attaque XSS</h3>
    <p>{html}</p>

    <p dangerouslySetInnerHTML={ { __html: safeHtml } }></p>

    <h3>Destructuration</h3>
    <dl>
        <dt>Username</dt>
        <dd>{username}</dd>
        <dt>Email</dt>
        <dd>{email}</dd>
        <dt>Password</dt>
        <dd>{password}</dd>
        <dt>Role</dt>
        <dd>{role}</dd>
    </dl>

    <h3>Les Props</h3>
    <Hello />
    <Hello name="Kevin" />
    <Hello name={name} />

    <h3>Conditions</h3>
    <p>{ true && true }</p>
    <p>{ true ? true : false }</p>
    
    {
        messages.length > 0 ?
        <p>Vous avez { messages.length } nouveaux messages</p> :
        <p>Aucun nouveau message</p>
    }

    <Notification />

    <h3>Boucles</h3>

    <p>{ fruits.join(", ") }</p>

    <ul>
        {
            fruits.map((fruit, index) => {
                return <li key={index}>{fruit}</li>
            })
        }
    </ul>

    <h3>Les Evènements</h3>

    <div>
        <button onClick={handleClick}>Déclencher un évènement</button>
        
        { /* Ne fonctionne pas, fait appel directement à la fonction alert()*/}
        { /* <button onClick={alert('Coucou')}>
            Déclencher la fonction alert()</button> */ }

        <button onClick={ () => { alert('Coucou') } }>
            Déclencher la fonction alert()</button>

        <button data-name="John" onDoubleClick={ 
            (event) => { 
                console.log(event);
                const target = event.target;
                const name = target.dataset.name;

                alert(`Hello ${name}`);
            } 
        }>Affiche le detail de l'évènement</button>
    </div>
    <div>
        <p>Avec un répertoire défini</p>
        <UselessButton directory="FormationReact" />
    </div>
    <div>
        <p>Sans répertoire défini</p>
        <UselessButton />
    </div>
</div>
    ); 
}