import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({setAuthenticate}) => {
    const navigate = useNavigate()

    const loginUser =(event)=>{
            // console.log("로그인 함수 이슈?", loginUser)
            event.preventDefault();
            setAuthenticate(true);
            navigate("/")
        }

    return (       

        <form className='loginComponent' onSubmit={(event)=>loginUser(event)}>
            <h1>Login</h1>
            <hr/>
            <input className='inputID' type='text' placeholder='아이디를 입력해 주세요.'></input>
            <input className='inputPW' type='text' placeholder='비밀번호 입력해 주세요' ></input>
            <button className='loginBtn' type='submit'>로그인</button>
            <p className='searchIDPW'>아이디찾기 ㅣ 비밀번호찾기</p>
        </form>
    );
};

export default Login;