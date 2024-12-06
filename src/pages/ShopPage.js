import { useState } from "react";
import { useSelector } from "react-redux";
import { Col, Row } from "reactstrap";
import Admin from "../components/Admin";
import ShopList from "../components/ShopList";
import Navigation from "../components/Navigation";

const ShopPage = () => {
  const itemsList = useSelector((state) => state.items.items);

  return (
    <>
      <Navigation current='/shop' />
      <h1>Shop</h1>
        <ShopList itemsList={itemsList} />
      <Row>
        <Admin />
      </Row>
    </>
  );
};

export default ShopPage;
