import { useState } from "react";
import { useSelector } from "react-redux";
import { Col, Row } from "reactstrap";
import ItemCard from "./ItemCard";
import { selectAllItems, selectItemById } from "../state/merchSlice";
import ItemDetailPage from "../pages/ItemDetailPage";
import { Link } from "react-router-dom";

const ShopList = () => {
    const shopItems = useSelector(selectAllItems);
    const itemId = useSelector(selectItemById)
 
  return (
    <>
      <Row>
        {shopItems.map((item) => {
          return (
            
            <Col key={item.id}>
              <ItemCard item={item}  />
            </Col>
            
          );
        })}
      </Row>
      <Row></Row>
    </>
  );
}

export default ShopList
