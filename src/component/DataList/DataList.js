import React from "react";
import './DataList.css';

export default function DataList({ items = [] }) {

  return (
    <dl className="list-horizontal">
      {items.map( item => (
        <React.Fragment key={item.id}> {/* Fragment explicite */}
          <dt>{ item.title }</dt>
          <dd>{ item.description }</dd>
        </React.Fragment>
      ) )}
    </dl>
  )

}
