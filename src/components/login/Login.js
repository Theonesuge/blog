import './login.scss'
import { Link } from 'react-router-dom'
import { DownOutlined } from '@ant-design/icons'


function Login() {
    return (
        <div className='login'>
            <span>浏览记录<DownOutlined style={{ fontSize: '12px', paddingLeft: '5px' }} /></span>
            <Link to="/login">登录</Link>
        </div>
    )
}

export default Login