import React, { useState } from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Modal, ModalHeader, ModalBody, ModalFooter
  } from 'reactstrap';

const PictureCard = props => {

const [modal, setModal] = useState(false);

const toggle = () => setModal(!modal);

    return <div key={props.index}>
                <Card style={{maxWidth:'1000px', margin:'0 auto', fontFamily:'Montserrat', color:'#464159'}}>
                    <CardImg top width="100%" src={props.url} alt="Card image cap" />
                    <CardBody>
                        <CardSubtitle>{props.title}</CardSubtitle>
                        <CardText></CardText>
                        <Button onClick={toggle} style={{backgroundColor:'#6c7b95'}}>Description</Button>
                        <Modal isOpen={modal} toggle={toggle} style={{fontFamily:'Montserrat'}}>
                            <ModalHeader toggle={toggle}>Description</ModalHeader>
                            <ModalBody>
                            {props.explanation}
                            </ModalBody>
                            <ModalFooter>
                            </ModalFooter>
                        </Modal>
                    </CardBody>
                </Card>
            </div>
    
}

export default PictureCard; 


{/* <Card>
    <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
    <CardBody>
        <CardTitle>Card title</CardTitle>
        <CardSubtitle>Card subtitle</CardSubtitle>
        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
        <Button>Button</Button>
    </CardBody>
</Card> */}


// <h3>Image of the day: {props.title}</h3>
// <img als={props.title} src={props.url}/>
// <div>Photo taken at: {props.date}</div>
// <h3>Description</h3>
// <p>{props.explanation}</p>