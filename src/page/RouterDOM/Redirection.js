import { useNavigate } from "react-router-dom";

export default function Redirection() {
  const navigate = useNavigate();

  function saveAndQuit() {
    console.log('Enregistrer sur une API nos données ...');
    navigate('/router');
  }

  return (
    <>
      <h3>Redirection</h3>

      <p>[Un formulaire ...]</p>
      
      <button type="button" onClick={saveAndQuit}>
        Sauvegarder et quitter
      </button>
    </>
  );
}