import { Add, Remove } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import Announcements from '../components/Announcements';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import { mobile } from '../responsive';

const Container = styled.div`
    
`;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({ padding: "10px", flexDirection:"column" })}

`;

const ImgContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
    width: 100%;
    height: 80vh;
    object-fit: cover;
    ${mobile({ height: "40vh" })}

`;

const ImgInfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({ padding: "10px" })}

`;

const Title = styled.h1`
    font-weight: 300;
`;

const Desc = styled.p`
    margin: 30px 0px;
`;

const Price = styled.span`
    font-weight: 100;
    font-size: 45px;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin: 30px 0px;
    ${mobile({ width: "100%" })}

`;

const Filter = styled.div`
    align-items: center;
    display: flex;
`;

const FilterTitle = styled.span`
    font-size: 23px;
    font-weight: 400;
    font-family: 'Fira Sans', sans-serif;

`;

const FilterFlavour = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.Flavour};
    margin: 0px 5px; 
    cursor: pointer;
`;

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`;

const FilterSizeOption = styled.option`
    
`;

const AddContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin: 30px 0px;  
    ${mobile({ width: "100%" })}

`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 500;
`;

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 12px;
    border: 1px solid lightseagreen;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 6px;
    cursor: pointer;
`;

const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: #ffffff;
    border-radius: 20px;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color: #d7f0b2
    }
`;



const Product = () => {
    return (
        <Container>
            <Navbar />
            <Announcements />
            <Wrapper>
                <ImgContainer>
                    <Image src="https://m.media-amazon.com/images/I/71ZTpFAClLL._SX569_.jpg" />
                </ImgContainer>
                <ImgInfoContainer>
                    <Title>Drools</Title>
                    <Desc>This is a very popular and most liked feed for your pets. More than million use this for
                        tehir pets. There are plenty of flavours with us.
                    </Desc>
                    <Price>$ 89.4</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Flavour</FilterTitle>
                            <FilterFlavour Flavour="green" />
                            <FilterFlavour Flavour="red" />
                            <FilterFlavour Flavour="maroon" />
                        </Filter>
                        <Filter>
                            <FilterTitle>Quantity</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>1kg</FilterSizeOption>
                                <FilterSizeOption>3kg</FilterSizeOption>
                                <FilterSizeOption>5kg</FilterSizeOption>
                                <FilterSizeOption>10kg</FilterSizeOption>
                                <FilterSizeOption>20kg</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove/>
                            <Amount>1</Amount>
                            <Add/>
                        </AmountContainer>
                        <Button>Add to Cart</Button>
                    </AddContainer>
                </ImgInfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container >
    )
}

export default Product
