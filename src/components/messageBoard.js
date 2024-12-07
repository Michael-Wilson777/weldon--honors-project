import { useSelector } from "react-redux"
import { selectAllMessages } from "../state/messageSlice"
import { Row } from "reactstrap"

const MessageBoard = () => {
    let messages = useSelector(selectAllMessages)
  return (
    <>
      {messages.map((message, index) => {
        return(
            <Row key={index}>
                <p>{message.message}</p>
            </Row>
        )
      })}
    </>
  )
}

export default MessageBoard
