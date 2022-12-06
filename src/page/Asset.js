import batman from '../assets/batman.jpg';
import mando from '../assets/mandalorian.jpg';

export default function Asset() {

  const img = { maxWidth: '100%' };

  return (
    <>
      <h2>Les Assets</h2>

      <div>
        <p>&lt; 10Ko</p>
        <img src={batman} alt="logo batman the dark knight" style={img} />
      </div>

      <div>
        <p>&gt; 10Ko</p>
        <img src={mando} alt="affiche de la série the mandalorian" style={img} />
      </div>
    </>
  )


}
