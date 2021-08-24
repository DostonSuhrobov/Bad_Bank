import React from 'react';
import img from './bank.svg'
import * as ReactBootstrap from 'react-bootstrap';




function Home() {
  return (

<ReactBootstrap.Card className="bg-dark text-white">
  <ReactBootstrap.Card.Img src={img} alt="Card image" />
  <ReactBootstrap.Card.ImgOverlay>
    <ReactBootstrap.Card.Title>Welcome</ReactBootstrap.Card.Title>
    <ReactBootstrap.Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </ReactBootstrap.Card.Text>
    <ReactBootstrap.Card.Text>Last updated 3 mins ago</ReactBootstrap.Card.Text>
  </ReactBootstrap.Card.ImgOverlay>
</ReactBootstrap.Card>

  );
}

export default Home;
