import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
  const [user, setUser] = useState([])
  const navigate = useNavigate()

  const getUser = async () => {
    const { data } = await axios.get("http://localhost:8000/api/v1")
    console.log("Get user:", data.user)
    setUser(data.user)
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <div>
      <Link to={"/register"}>
        <Button color="primary" >Add User</Button>
      </Link>
      {
        user.map((data, index) => {
          return <div key={index}>
            <h1>{data.name}</h1>
            <img src={data.image} alt="image loading." />
          </div>
        })
      }
      <h1>Home</h1>
    </div>
  )
}

export default Home
