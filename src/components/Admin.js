//add and delete items in the shop page dynamically
import { useDispatch } from "react-redux";
import { addItem } from "../state/merchSlice";
import { Button, FormGroup, Label, Col } from "reactstrap";
import { Formik, Field, Form } from "formik";

const Admin = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    const newItem = {
      name: values.name,
      category: values.category,
      description: values.description,
      review: values.review,
    };
    dispatch(addItem(newItem));
   
  };

  return (
    <Formik
      initialValues={{
        name: "",
        category: "",
        description: "",
        qty: 0,
        price: 0,
        rating: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form>
        <FormGroup row>
          <Label htmlFor="name">Item Name</Label>
          <Col>
            <Field
              className="form-control"
              name="name"
              placeholder="Item Name"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor="category">Category</Label>
          <Col>
            <Field className="form-control" name="name" as="select">
              <option>Select...</option>
              <option>Weld Protection</option>
              <option>Hand Tools</option>
              <option>Welders</option>
            </Field>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor="description">Item Description</Label>
          <Field
            name="description"
            placeholder="Description"
            className="form-control"
            as="textarea"
            rows="12"
            col="6"
          />
        </FormGroup>
        <FormGroup row>
          <Label htmlFor="review">Review</Label>
          <Field
            name="review"
            placeholder="Review"
            className="form-control"
            as="textarea"
            rows="12"
            col="6"
          />
        </FormGroup>
        {/* <FormGroup row>
          <Label htmlFor="img">Image</Label>
          <Col>
            <Field
              className="form-control"
              name="img"
              placeholder="Item Image URL"
            />
          </Col>
        </FormGroup> */}
        <Button type="submit" color="primary">
          Submit
        </Button>
      </Form>
    </Formik>
  );
};

export default Admin;
