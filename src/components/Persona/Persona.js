import React from "react";

export default function Persona({ name, email, address, company }) {
  return (
    <div className="persona">
      <div> {name}</div>
      <div>
        {" "}
        <b>Email: </b>
        {email}
      </div>
      <div>
        <b>Ciudad: </b>
        {address}
      </div>
      <hr />
      <div>
        {" "}
        <b>Compañia:</b>
        {company.name}
      </div>
      <div>
        <b>Compañia:</b>
        {company.catchPhrase}
      </div>
    </div>
  );
}
