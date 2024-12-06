import {
  Card,
  CardImg,
  CardText,
  CardBody,
  Col,
  CardFooter,
  Button,
} from "reactstrap";
import { addToCart } from "../state/cartSlice";
import { useDispatch } from "react-redux";

const ItemDetail = ({ item }) => {
  const { img, name, description, review, price } = item;
  const dispatch = useDispatch();

  const addItemToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <>
      <Col md="5" className="m-1">
        <Card>
          <CardImg top src={img} alt={name} />
          <CardBody>
            <CardText>{description}</CardText>
            <CardText>{name}</CardText>
            <CardText>${price}</CardText>
            <CardText>{review}</CardText>
          </CardBody>
          <CardFooter>
            <Button onClick={() => addItemToCart(item)}>Add To Cart</Button>
          </CardFooter>
        </Card>
      </Col>
    </>
  );
};

export default ItemDetail;
