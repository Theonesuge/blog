import './search.scss'
import {
    Input,
    Select,
} from 'antd';


function Search() {

    const { Option } = Select;

    return (
        <div className='search'>
            <Input.Group compact>
                <Select defaultValue="article">
                    <Option value="article">文章</Option>
                </Select>
                <Input.Search
                    placeholder='搜索文章'
                    allowClear
                    style={{
                        width: '320px',
                    }}
                    enterButton="搜索"
                    defaultValue=""
                />
            </Input.Group>
        </div>
    )
}

export default Search