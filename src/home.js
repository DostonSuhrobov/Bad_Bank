import React from 'react';
import img from './bank.svg'
import logo from './logo.svg'
import * as ReactBootstrap from 'react-bootstrap';




function Home() {
  return (
    <>


<ReactBootstrap.Card className="bg-dark text-white">
  <ReactBootstrap.Card.Img src={img} alt="Card image" />
  <ReactBootstrap.Card.ImgOverlay>
    <ReactBootstrap.Card.Title><h1><img src={logo} width="50" height="40" ></img> Good Bank</h1></ReactBootstrap.Card.Title>
    <br/>
    <ReactBootstrap.Card.Text>
     <h5>Welcome to Good Bank, I am happy to see you here, we glad you chose us. </h5>
    </ReactBootstrap.Card.Text>
    <ReactBootstrap.Card.Text><sub>Dostonjon Suhrobov</sub></ReactBootstrap.Card.Text>
  </ReactBootstrap.Card.ImgOverlay>
</ReactBootstrap.Card>
</>
  );
}

export default Home;
