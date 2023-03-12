import styled from "styled-components";
const UserBoard = styled.section`
  width: 70%;
  margin: auto;
  padding: 1.2rem;
  background: white;
  color: black;
  border-radius: 0.8rem;
  -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  -moz-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  @media (max-width: 767px) {
    & {
      width: 100%;
      margin: 0;
      padding-inline: 0;
    }
  }
`;
export default UserBoard;
