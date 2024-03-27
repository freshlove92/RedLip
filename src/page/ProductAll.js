import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import { Container, Row, Col } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

const ProductAll = () => {

    const [ productList,setProductList ] = useState([]);

    const getProduct =async()=>{
        let url = 'http://localhost:5000/products'
        let response = await fetch(url)
        let data = await response.json()
        // console.log(data)
        setProductList(data);
    }
    
    useEffect(()=>{
        getProduct()
    },[])

    return (
        <div>
            <Container>
                <Row>
                    {productList.map((item)=>(
                    <Col lg={3}><Card item={item}/></Col>
                    ))}
                </Row>   
            </Container>
            {/* <Card /> */}
            <a href="#" className="page-top">↑</a>
        </div>
    );
};

export default ProductAll;