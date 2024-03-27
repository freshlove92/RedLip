import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    
    const menubar = ['회원전용ZONE','EDITION','BEST', 'LIP','EYE', 'FACE','SET', 'ALL']
    const navigator = useNavigate()
    const gotoLogin =()=>{
        navigator('/login')
    }

    return (
        <div>
            <div className='login'onClick={gotoLogin}>
               <FontAwesomeIcon icon={faCircleUser} />
                <Link to='/login' className='margin' >로그인</Link>
            </div>

            <div className='logo'>
                <img width={150} src='https://image.brandi.me/seller/mphankang_profile_1546504272.jpg' />
            </div>

            <div className='menu'>
                <div className='menubar'>
                    {menubar.map((meun)=>(<li>{meun}</li>))}
                </div>
                <div className='searchbox'>
                    <input className='input'></input>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;