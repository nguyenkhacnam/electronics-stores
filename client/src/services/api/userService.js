import axios from "axios"

export const userLogin = async (data) => {
  const headers = {
    "Content-Type": "application/json"
  }

  const res = await axios.post(`${process.env.REACT_APP_API_URL}/user/login`, data, headers)

  return res.data
}


export const userRegister = async (data) => {
  const headers = {
    "Content-Type": "application/json"
  }
  
  const res = await axios.post(`${process.env.REACT_APP_API_URL}/user/register`, data, headers)

  return res.data
}