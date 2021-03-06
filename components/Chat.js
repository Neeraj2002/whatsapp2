import { Avatar } from "@material-ui/core";
import styled from "styled-components";

function Chat({ id, users}) {
  return (
    <Container>
        <UserAvatar/>
        <p>Recipient Email</p>
    </Container>
  );
}

export default Chat;

const Container= styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 15px;
    word-break: break-word;

    :hover{
        background-color: #e9eab;
    }
`;

const UserAvatar = styled(Avatar)`
    margin: 5px;
    margin-rigth: 15px;
`;