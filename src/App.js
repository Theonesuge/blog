import 'antd/dist/reset.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './views/home/Home'
import Login from './views/login/Login'
import Register from './views/register/Register'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        {/* 主页界面 */}
        <Route exact path="/" element={<Home />} />
        {/* 登录界面 */}
        <Route path="/login" element={<Login />} />
        {/* 注册界面 */}
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
