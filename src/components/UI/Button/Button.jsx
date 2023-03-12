import styled from "styled-components";

const Button = styled.button`
  background: #4f005f;
  color: white;
  font-weight: bold;
  padding: 1rem 2rem;
  border: 1px solid #4f005f;
  cursor: pointer;
};
@media (max-width: 767px) {
  & {
    width: 100%;
  };
};
&:hover,
&:active {
  background: #741188;
  border-color: #741188;
}
&:focus {
  outline: none;
}
`;

export default Button;
