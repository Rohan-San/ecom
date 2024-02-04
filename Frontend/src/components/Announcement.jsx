import styled from "@emotion/styled"

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-style: 14px;
    font-weight: 500;
`;

const Announcement = () => {
  return (
    <Container>
        Flash Offer! Flat 50% off on all purchases above Rs. 500!
    </Container>
  )
}

export default Announcement