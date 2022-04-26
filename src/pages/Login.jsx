import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ), url("https://cdn.wallpapersafari.com/75/82/1gucqW.png") center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    ${mobile({ width: "75%" })}

`;

const Title = styled.h1`
    font-size: 28px;
    font-weight: 300;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px ;
    padding: 12px;
`;


const Button = styled.button`
     width: 30%;
     border: none;
     padding: 15px 15px;
     background-color: #238a04;
     color: white;
     cursor: pointer;
     margin-bottom: 10px;
`;

const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`;

const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>LOG IN</Title>
                <Form>
                    <Input placeholder="User Name"/>
                    <Input placeholder="Password"/>                    
                    <Button>LOG IN</Button>
                    <Link>Forgot Password??</Link>
                    <Link>Create New Account</Link>

                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login
