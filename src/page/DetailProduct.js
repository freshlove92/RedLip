import { useEffect, useState } from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const DetailProduct = () => {

    let {id} = useParams()
    const [ product, setProduct ] = useState(null)
    const getProductDetail=async()=>{
            let url = `https://my-json-server.typicode.com/freshlove92/RedLip/products/${id}`
            let response = await fetch(url);
            let data = await response.json();
            console.log("와야해", response)
            setProduct(data)
        }

    useEffect(()=>{
        getProductDetail()

    },[])

    return (
        <Container> 
            <Row>
                <Col className='detailimg'>
                    <img width={400} src={product?.img}></img>
                </Col>
                <Col>
                <div className='detailBox'>
                    <div className='detai-title' >{product?.title}</div>
                     <div>
                     <span className='card-sale'>{product?.sale}</span>
                     <span >{product?.price}</span>
                     <span className='card-smallprice'>{product?.smallprice}</span>
                     <div></div>
                     <div >{product?.choice && <span className='mdpic'>MD's pick!</span>}</div>
                     <div >{product?.new && <span className='card-new'>NEW!</span>}</div>
                     </div>
                     
                     <div className='justText'>
                     <div>적립금　　5%</div>
                     <div>브랜드　　릴리바이레드 </div>
                     <div>배송비　　2,500원(15,000원 이상 구매 시 무료) </div>
                     </div>

                     <div class="dropdown">
                        <button class="dropbtn">옵션선택　　　　　　　　　　　　　　　　　▼</button>
                        <div class="dropdown-content">
                            <a href="#">{product?.color[0]}</a>
                            <a href="#">{product?.color[1]}</a>
                            <a href="#">{product?.color[2]}</a>
                        </div>
                        <div>
                        <button className='bagu'>바로구매하기</button>
                        </div>
                        </div>
                    </div>
                </Col>
                </Row>           
        </Container>
    );
};

export default DetailProduct;