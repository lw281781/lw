import axios from 'axios'

const myhttp = axios.create({
  baseURL:'https://service.test.nttcc.com.cn',
  timeout:10000
})

export default myhttp