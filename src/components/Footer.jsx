import { Facebook, Instagram, LocationOn, Mail, Phone, Twitter } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}

`;

const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`;

const Logo = styled.h1`

`;

const Desc = styled.p`
margin: 20px 0px;
`;

const SocialContainer = styled.div`
display: flex;
`;

const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: #3a3838;
display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
`;

const Center = styled.div`
flex: 1;
padding: 20px;
${mobile({ display: "none" })}

`;

const Title = styled.h3`
    margin-bottom: 30px;
    font-size: 20px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Right = styled.div`
flex: 1;
padding: 20px;
${mobile({ backgroundColor: "#fff8f8" })}


`;

const ContactItem = styled.div`
margin-bottom: 20px;
   display: flex;
   align-items: center;
`;


const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>
                elérhető
                </Logo>
                <Desc>
                    This is the best place to get food for your pets. There are several Varities and Brands that are 
                    available here. We deliver the best and keep up our standards all the time. There are sevrela other services that we 
                    are part of, please follow us on SocialMedia, get to know and let others know.
                </Desc>
                <SocialContainer>
                    <SocialIcon>
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon>
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon>
                        <Twitter/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Go-to..</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Account</ListItem>
                    <ListItem>Dogs</ListItem>
                    <ListItem>Cats</ListItem>
                    <ListItem>My Orders</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>TnC</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Phone style={{marginRight: "10px"}}/>
                    +91 9001001001
                </ContactItem>
                <ContactItem>
                    <Mail style={{marginRight: "10px"}}/>
                elérhető@dono.com
                </ContactItem>  
                 <ContactItem>
                     <LocationOn style={{marginRight: "10px"}}/>
                   916, south wale street, LA.
                </ContactItem>
            </Right>
        </Container>
    )
}

export default Footer
