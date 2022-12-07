import { useParams } from "react-router-dom";
import Hello from "../../component/Hello";
import capitalize from "../../formatter/Capitalize";

export default function Params() {
  const params = useParams();

  return (
    <>
      <h3>Paramètre d'url</h3>

      <Hello name={capitalize(params.name)} />
    </>
  );

}