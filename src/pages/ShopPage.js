import { useState } from "react";
import { useSelector } from "react-redux";
import { Col, Row } from "reactstrap";
import ItemCard from "../components/ItemCard";
import Admin from "../components/Admin";


const ShopPage = () => {
    const itemsList = useSelector((state) => state.items.items);
   

    return (
        <>
        <h1>Shop</h1>
        <Row>
            {itemsList.map((item) => {
                return (
                    <Col>
                        <ItemCard item={item} key={item.id} />
                    </Col>
                )
            })}
        </Row>
        <Row>
            <Admin />
        </Row>
        </>
    )
};

export default ShopPage;
