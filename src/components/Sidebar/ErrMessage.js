import styled from "styled-components";

const Err = styled.p`
    background-image:linear-gradient(120deg, #f6d465 0%, #fda085 100%);
    padding: .25rem 1rem;
    color:white;
    position:absolute;
    left:50%;
    top:50%;
    font-size:12px;
    text-align:center;
    transform:translate(-50%, -50%);
    z-index:100;
    border-radius:5rem;
    box-shadow:0px 5px 15px rgba(0,0,0,0.075);
`;

const ErrMessage = () => {
  return (
      <Err>Something went wrong!</Err>
  );
};

export default ErrMessage;