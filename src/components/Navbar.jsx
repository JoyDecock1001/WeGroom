import React from "react";
import styled from "styled-components";
import { DoneAll, Search, ShoppingBasketOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { mobile } from "../responsive";



const Container = styled.div`
    height: 60px;
    ${mobile({ height: "80px" })}

`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding: "6px 2px" })}

`;
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Language = styled.span`
    cursor: pointer;
    font-size: 14px;
    ${mobile({ display: "none" })}

`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;  
  display: flex;
  align-items: center;
  padding: 5px;
  margin-left: 25px;
`;

const Input = styled.input`
    border: none;
    ${mobile({ width: "30px" })}

`;

const Center = styled.div`
    flex: 1;
    text-align: center;
`;

const Logo = styled.h1`
    font-weight: bold;
    color: #420f05;
    background-color: #fafafa;
    ${mobile({ fontSize: "20px" })}

`;



const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2.5, justifyContent: "center" })}

`;

const MenuItem = styled.div`
  font-size: 15px;  
  cursor: pointer;
  margin-left: 27px;
`;


const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input />
                        <Search style={{ color: "lightblue", fontSize:15}}/>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>elérhető
                        <DoneAll />
                    </Logo>
                </Center>
                <Right>
                    <MenuItem>Register</MenuItem>
                    <MenuItem>Sign In</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingBasketOutlined color="action" />
                        </Badge>
                    </MenuItem>

                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
