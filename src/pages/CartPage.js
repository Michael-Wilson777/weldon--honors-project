import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../state/cartSlice";
import { Col, Row, Button, Container } from "reactstrap";
import Navigation from "../components/Navigation";


const CartPage = () => {
  const cartList = useSelector((state) => state.cart.cartItems);
  const total = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();
  const removeItem = (item) => dispatch(removeFromCart(item));
  const submit = () => dispatch(clearCart());

  return (
    <>
    <Navigation current='/cart' />
      <h1>Your Cart</h1>

      {cartList.map((item) => {
        const { name, price, img, qty, id } = item;

        return (
          
          
          <Container>
          <Row key={id}>
            <Col>
              <img src={img} alt={name} />
            </Col>
            <Col>{name}</Col>
            <Col>{qty}</Col>
            <Col>${price}</Col>
            <Col>
              <Button onClick={() => removeItem(item)}>Remove</Button>
            </Col>
          </Row>
          </Container>
          
        );
      })}

      <Row>
        <h4>Total: ${total}</h4>
      </Row>

      <Button
        type="submit"
        onClick={() => {
          submit();
        }}
      >
        Submit Payment
      </Button>
    </>
  );
};

export default CartPage;
