import { useDispatch } from "react-redux";
import { deleteItem } from "../state/merchSlice";
import { addToCart } from "../state/cartSlice";
import { Card, CardImg, CardTitle, Button } from "reactstrap";
import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {

  let isAdmin = true;

  const dispatch = useDispatch();

  const { name, qty, img, price, review, description, id } = item;

  const removeItem = (item) => {
    dispatch(deleteItem(item));
  };

  const addItemToCart = (item) => {
      dispatch(addToCart(item))
  }


  return (
    <Card>
      <Link to={`/shop/${id}`}>
      <CardImg width="25%" src={img} alt={name} />

      <CardTitle>{name}</CardTitle>
      <p>${price}</p>
      <p>qty:{qty}</p>
      </Link>
      <Button onClick={() => addItemToCart(item)}>Add to Cart</Button>
      {isAdmin && (
        <Button onClick={() => removeItem(item.id)}>Delete Item</Button>
      )}
    </Card>
    
  );
};

export default ItemCard;
