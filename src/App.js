import './App.css';
import { Routes, Route, useNavigate } from "react-router-dom"
import ProductAll from './page/ProductAll';
import Login from './page/Login'
// import DetailProduct from './page/DetailProduct';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import PrivateRoute from './route/PrivateRoute';


//1. 전체상품 / 로그인 / 상세제품
//1-1. 네비게이션바 만들기(상단메뉴) + 계속 유지
//2. 전제상품페이지에서는 전체상품이 보인다
//3. 로그인 버튼을 누르면 로그인페이지로 이동
//3. 상품을 눌렀을때 로그인이 안되어 있으면 로그인페이지로 먼저 이동
//4. 로그인이 되어있다면 상세페이지를 볼 수 있다
//5. 로그아웃 버튼 누르면 로그아웃
//5. 로그아웃 되면 상세페이지를 볼 수 없고 다시 로그인 페이지 안내
//6. 로그인/로그아웃 글씨 변경된다
//7. 상품을 검색 할 수 있다

function App() {

  // const [login,setLogin] = useState(true)  

  //  const PrivateRoute=()=>{
  //   return login === true? <Userpage /> : <Navigate to="/login"/>
  // }

  const [authenticate,setAuthenticate]=useState(false) //true는 로그인
  const navigator = useNavigate()
  
  useEffect(()=>{
    // console.log("authenticate",authenticate)
    navigator('/')  
  },[authenticate])


  return (
    <>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate}/>
      <Routes>
          
          <Route path='/login' element={<Login setAuthenticate={setAuthenticate}/>} />
          <Route path='/product/:id' element={<PrivateRoute authenticate={authenticate} />} />
          <Route path='/' element={<ProductAll />} />
      </Routes>
    </>
  );
}

export default App;
