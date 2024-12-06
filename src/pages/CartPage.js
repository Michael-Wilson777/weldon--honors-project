import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../state/cartSlice";
import { Col, Row, Button } from "reactstrap";

const CartPage = () => {
  const cartList = useSelector((state) => state.cart.cartItems);
  const total = useSelector((state) => state.cart.totalPrice)
  const dispatch = useDispatch();
  const removeItem = (item) => dispatch(removeFromCart(item));
  // let total = cartList.reduce((previousValue, currentValue) => {
  //   return previousValue + currentValue.price;
  // }, 0);
  const submit = () => dispatch(clearCart());

  return (
    <>
      <h1>Your Cart</h1>

      {cartList.map((item, index) => {
        const { name, price, img, qty,id } = item;


        return (
         
            <Row key={index}>
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
