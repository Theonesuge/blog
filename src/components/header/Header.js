import { Link } from 'react-router-dom'
import Login from '../login/Login'
import Search from '../search/Search'
import './header.scss'

function Header() {
    return (
        <div className='header'>
            <div className='container'>
                <div className='logo'>
                    <Link to="/">知识的海洋BLOG</Link>
                </div>
                {/* 搜索组件 */}
                <div className='search'>
                    <Search></Search>
                </div>
                {/* 登录组件 */}
                <div className='login'>
                    <Login></Login>
                </div>
            </div>
        </div>
    )
}

export default Header