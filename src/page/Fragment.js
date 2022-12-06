import DataList from "../component/DataList/DataList";

export default function Fragment() {

  const data = [
    { id: 1, title: 'HTML', description: "HyperText Markup Language" },
    { id: 2, title: 'CSS', description: "Cascading Style Sheets" },
    { id: 3, title: 'JS', description: "JavaScript" },
    { id: 4, title: 'ES', description: "EcmaScript" },
  ];

  const heading = {
    color: 'red',
    fontVariant: 'small-caps'
  }

  return (
    <> {/* ouverture d'un fragment react présenter sous sa forme concise */}
      <h2 style={heading}>les fragments</h2>

      <DataList items={data} />

      <p style={{ color: 'orchid', fontWeight: 'bold', fontStyle: 'italic' }}>Exemple de data list HTML</p>
      <dl>
        <dt>title 1</dt>
        <dd>description 1</dd>
        <dt>title 2</dt>
        <dd>description 2</dd>
      </dl>

    {/* fermeture du fragment */}
    </>
  )
}
