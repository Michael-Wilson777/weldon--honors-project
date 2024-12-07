import { useDispatch } from "react-redux";
import { Button, FormGroup, Label } from "reactstrap";
import { Formik, Field, Form } from "formik";
import Navigation from "../components/Navigation";
import { addMessage } from "../state/messageSlice";
import MessageBoard from "../components/messageBoard";


const MessagePage = () => {

  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    const newMessage = {
        message: values.message,
    };
    dispatch(addMessage(newMessage));
    
    return values.message = '';
  }

  return (
    <>

      <Navigation current="/message-board" />
      <MessageBoard />
      <Formik
        initialValues={{
          message: "",
        }}
        onSubmit={handleSubmit}
        
      >
        <Form>
        <FormGroup row>
          <Label htmlFor="message">Question/Comment</Label>
          <Field
            name="message"
            placeholder="What would you like to add?"
            className="form-control"
            as="textarea"
            rows="4"
            col="6"
            
          />
        </FormGroup>
        <Button type='submit' color='primary'>Submit</Button>
        </Form>
      </Formik>
    </>
  );
};

export default MessagePage;
