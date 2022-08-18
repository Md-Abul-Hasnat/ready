import React from "react";
import "./client.css";
import client1 from "../../img/client1.png";
import client2 from "../../img/client2.png";
import client3 from "../../img/client3.png";
import client4 from "../../img/client4.png";
import client5 from "../../img/client5.png";

const Client = () => {
  return (
    <section className="client">
      <h1>OUR CLIENTS</h1>
      <p>Partners We Works With</p>
      <div className="client-main">
        <img src={client1} alt="client" />
        <img src={client2} alt="client" />
        <img src={client3} alt="client" />
        <img src={client4} alt="client" />
        <img src={client5} alt="client" />
        <img src={client1} alt="client" />
      </div>
    </section>
  );
};

export default Client;
