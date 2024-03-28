import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import { Container, Row, Col } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {

    const [ productList,setProductList ] = useState([]);
    const [query,setQuery] = useSearchParams();

    const getProduct =async()=>{
        let searchQuery = query.get("q") || "";
        let url = `https://my-json-server.typicode.com/freshlove92/RedLip/products?q=${searchQuery}`
        console.log("쿼리값은?",searchQuery)

        let response = await fetch(url)
        let data = await response.json()
        // console.log(data)
        setProductList(data);
       

    }
    
    useEffect(()=>{
        getProduct()
    },[query])

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