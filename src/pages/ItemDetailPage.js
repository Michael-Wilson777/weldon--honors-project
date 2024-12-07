import { useState } from "react";
import { useSelector } from "react-redux";
import { Container, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import { selectItemById } from "../state/merchSlice";
import ItemDetail from "../components/ItemDetail"; 
import Navigation from "../components/Navigation";


const ItemDetailPage = () => {

 const {id} = useParams();
 const item = useSelector((state) => selectItemById(id)(state));

 return (

    <Container>
        {item && <Navigation current={`/shop/${id}`}  />}
        <Row>
            <ItemDetail item={item} id={id} />
            {/* <ShopList id={id} /> */}
        </Row>
    </Container>
 )
}

export default ItemDetailPage
