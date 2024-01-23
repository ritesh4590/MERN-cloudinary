import React, { useState } from 'react'
import { Form, Button, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [name, setName] = useState('')
  const [image, setImage] = useState('')

  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append("photo", image),
      formData.append("name", name)

    const config = {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }

    const response = await axios.post("http://localhost:8000/api/v1/register", formData, config)
    console.log("Response:", response)

    if (response.status === 200) {
      navigate('/')
    }

  }

  return (
    <div>
      <Form>
        <FormGroup>
          <Label for="exampleName">
            Name
          </Label>
          <Input
            id="exampleName"
            name="name"
            placeholder="with a placeholder"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">
            Image
          </Label>
          <Input
            id="exampleFile"
            name="file"
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <FormText>
            This is some placeholder block-level help text for the above input. It‘s a bit lighter and easily wraps to a new line.
          </FormText>
        </FormGroup>
        <Button color="primary" onClick={submitHandler}>Upload</Button>
      </Form>
    </div>
  )
}

export default Register
