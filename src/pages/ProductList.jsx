import styled from "styled-components";
import Navbar from '../components/Navbar';
import Announcements from '../components/Announcements';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { mobile } from "../responsive";


const Container = styled.div`
    
`;

const Title = styled.h1`
    margin: 23px;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    margin: 20px;
    ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}

`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 500;  
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}

`;

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
`;

const Option = styled.option`
    
`;

const ProductList = () => {
    return (
        <Container>
            <Navbar />
            <Announcements />
            <Title>Pet Feeds</Title>
            <FilterContainer>
                <Filter><FilterText>Filter Products:</FilterText>
                    <Select>
                        <Option disabled selected>
                            Brand
                        </Option>
                        <Option>Pedigree</Option>
                        <Option>Royal Canin</Option>
                        <Option>Canidae</Option>
                        <Option>Advance</Option>
                        <Option>IAMS</Option>
                        <Option>Ultra Dog</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>
                            Quantity
                        </Option>
                        <Option>1kg</Option>
                        <Option>3kg</Option>
                        <Option>5kg</Option>
                        <Option>10kg</Option>
                        <Option>20kg</Option>
                    </Select>
                </Filter>
                <Filter><FilterText>Sort Products:</FilterText>
                    <Select>
                        <Option selected>Popular</Option>
                        <Option>Price (asc)</Option>
                        <Option>Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products />
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductList
