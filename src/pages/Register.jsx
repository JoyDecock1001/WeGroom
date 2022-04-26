import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ), url("https://agriculture.ny.gov/sites/g/files/oee1031/files/media/2019/04/commercial-feed-hero.jpg") center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    ${mobile({ width: "75%" })}

`;

const Title = styled.h1`
    font-size: 28px;
    font-weight: 300;
`;

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 12px;
`;

const Agreement = styled.span`
    font-size: 13 px;
    margin: 20px 0px;
`;

const Button = styled.button`
     width: 30%;
     border: none;
     padding: 15px 15px;
     background-color: #238a04;
     color: white;
     cursor: pointer;
`;

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>NEW?? CREATE ONE..</Title>
                <Form>
                    <Input placeholder="First Name"/>
                    <Input placeholder="Last Name"/>
                    <Input placeholder="UserName"/>
                    <Input placeholder="Email"/>
                    <Input placeholder="Password"/>
                    <Input placeholder="Re-Enter Password"/>
                    <Agreement>
                        I here by specify I will be responsible for the data that is mentioned here. <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button>CREATE</Button>

                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register
