import styled from "styled-components";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { sliderItems } from "../data";
import { useState } from "react";
import { mobile } from "../responsive";


const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({ display: "none" })}

`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Arrow = styled.div`
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background-color: #f3f1f1;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${(props)=> props.direction === "left" && "10px"};
    right: ${(props)=> props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.6;
    z-index: 2;

`;
    
const Slide = styled.div`
  display: flex;  
  width: 100vw;
  height: 100vh;
  align-items: center;
  background-color: #${props=>props.bg};
`;

const ImgContainer = styled.div`
    flex: 1;
    height: 100%; 
`;

const Image = styled.img`
    height: 80%;
`;

const InfoContainer = styled.div`
   flex: 1;
   padding: 45px;
`;

const Title = styled.h1`
    font-size: 68px;
    color: #231f35;

`;

const Desc = styled.p`
    margin: 45px 0px;
    font-size: 30px;
    font-weight: 500;
    letter-spacing: 1px;
    color: #070707;
    font-family: 'Open Sans', sans-serif;

`;

const Button = styled.button`
    padding: 7px;
    color: #0e0e4e;
    font-size: 14px;
    background-color: transparent;
    cursor: pointer;

`;


const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick =(direction) => {
        if(direction==="left") {
            setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2 );
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0);
        }

    }
    return (
        <Container>
            <Arrow direction="left" onClick={()=>handleClick("left")}>
               <ArrowLeftOutlined/>
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) => (
                <Slide bg={item.bg} key={item.id}>
                <ImgContainer>
                <Image src={item.img}/>
                </ImgContainer>
                <InfoContainer>
                    <Title>{item.title}</Title>
                    <Desc>{item.desc}</Desc>
                    <Button>Buy Now</Button>
                </InfoContainer>
                </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={()=>handleClick("right")}>
               <ArrowRightOutlined/>
            </Arrow>
        </Container>
    )
}

export default Slider
