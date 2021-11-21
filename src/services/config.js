import axios from 'axios'

export const http = axios.create({
  baseURL: 'http://localhost:8080/api/v1',
  timeout: 1000,
  headers:  {
    "Access-Control-Allow-Origin": "true"
    },  
})