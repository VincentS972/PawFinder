import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import NavBar from './NavBar';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function UpdatePet() {
    const navigate = useNavigate()

    const [petInput, setPetInput] = useState({})

    const { id } = useParams()
    const URL = `${process.env.REACT_APP_BACKEND_URI}/pets/${id}`

useEffect(() => {
    const fetchData = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    setPetInput(data)
}

fetchData()
}, [id, URL])

const handleChange = (e) => {
    const value = e.target.value;
      setPetInput({
      ...petInput,
      [e.target.name]: value
      });
}

const handleSubmit = async (e) => {
    e.preventDefault()
const response = await fetch(URL, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(petInput)
})
    if (response.status !== 204) console.log('error!') // add error handling later
        navigate(`/pets/${id}`)
}


// Update Pet Form

const display = petInput && (
    <div className = "container-lg font-nice">
    {<NavigationBar/>}
    <Form className='p-3' onSubmit={handleSubmit} style={{backgroundColor:'#B5EB8D', color:"#217605"}} >
      <Row className='mb-3'>
        <Form.Group as={Col} style={{textAlign:'center'}}>
          <Form.Label>
              Please input the URL for the image of the foster: 
          </Form.Label>
          <Form.Control type="text" name="profilePicture" placeholder="Foster image URL" value={fosterInput.profilePicture} onChange={handleChange} style={{textAlign:'center'}}/>
        </Form.Group>

        <Form.Group as={Col} style={{textAlign:'center'}}>
          <Form.Label>
              Please input the foster's user name:
          </Form.Label>
          <Form.Control type="text" name="userName" placeholder="Foster name" value={fosterInput.userName} maxLength={15} onChange={handleChange} required style={{textAlign:'center'}}/>
        </Form.Group>

        <Form.Group as={Col} style={{textAlign:'center'}}>
          <Form.Label>
              Please input the foster's first name:
          </Form.Label>
          <Form.Control type="text" name="firstName" placeholder="First Name" value={fosterInput.firstName} maxLength={20} onChange={handleChange} required style={{textAlign:'center'}}/>
        </Form.Group>

        <Form.Group as={Col} style={{textAlign:'center'}}>
          <Form.Label>
              Please input the foster's last name:
          </Form.Label>
          <Form.Control type="text" name="lastName" placeholder="Last Name" value={fosterInput.lastName} maxLength={20} onChange={handleChange} required style={{textAlign:'center'}}/>
        </Form.Group>

        <Form.Group as={Col} style={{textAlign:'center'}}>
          <Form.Label>
              Please input the foster's email address:
          </Form.Label>
          <Form.Control type="text" name="emailAddress" placeholder="Foster's Email Address" value={fosterInput.emailAddress} maxLength={20} onChange={handleChange} required style={{textAlign:'center'}}/>
        </Form.Group>
      </Row>
      <Form.Group className='mb-3 mx-auto w-50' style={{textAlign: 'center'}}>
        <p>All fields are required.</p>
        <Button type='submit' variant='success'>Submit</Button>
      </Form.Group>
    </Form>
  </div>
);

return (
    <div>
        {display}
    </div>
)
}

export default UpdateFoster
