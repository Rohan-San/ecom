import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material"
import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: coral;
    position: relative;
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #ecdcd7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    cursor: pointer;
    opacity: 0.6;
`

const Wrapper = styled.div`
    height: 100%;
`

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;


const Slider = () => {
  return (
    <Container>
        <Arrow direction="left">
            <KeyboardArrowLeft/>
        </Arrow>
        <Wrapper>
            <Slide>
                <ImgContainer>
                    <Image src="http://tinyurl.com/42cs7vkt"/>
                </ImgContainer>
                <InfoContainer>

                </InfoContainer>
            </Slide>
        </Wrapper>
        <Arrow direction="right">
            <KeyboardArrowRight/>
        </Arrow>
    </Container>
  )
}

export default Slider