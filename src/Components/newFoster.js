import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';


function NewFoster() {
  const navigate = useNavigate()

  const [fosterInput, setFosterInput] = useState({
    profilePicture: "",
    userName: "",
    firstName: "",
    lastName: "",
    emailAddress: "",
  });

  const cancelButton = async () => {
    const URL = `${process.env.REACT_APP_BACKEND_URI}/foster`
    const response = await fetch(URL, {
        method: 'GET'
    })
    navigate(`/foster`);
    if (response.status !==204) console.log('error')
  }

  const handleChange = (e) => {
    const value = e.target.value;
    setFosterInput({
      ...fosterInput,
      [e.target.name]: value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const URL = `${process.env.REACT_APP_BACKEND_URI}/foster`
    console.log('foster input', fosterInput)
    const response = await fetch(URL, {
      method: 'POST', 
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(fosterInput)
    })
    const data = await response.json()
    console.log('response', data)
    navigate('/foster')
  }

  //New Foster Form  
  return (
    <div className = "container-lg font-nice">
      <Form className='p-3' onSubmit={handleSubmit} style={{backgroundColor:'#8abcdd', color:"white"}} >
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
          <Form.Group as={Col} style={{textAlign:'center'}}>
            <Form.Label>
                Please input the foster's password:
            </Form.Label>
            <Form.Control type="text" name="password" placeholder="Foster's Password" value={fosterInput.password} maxLength={20} onChange={handleChange} required style={{textAlign:'center'}}/>
          </Form.Group>
        </Row>
        <Form.Group className='mb-3 mx-auto w-50' style={{textAlign: 'center'}}>
          <p>All fields are required.</p>
          <Button type='submit' variant='primary'>Submit</Button>
          <Button variant='secondary' onClick={cancelButton}>Cancel</Button>
        </Form.Group>
      </Form>
    </div>
  );
}

export default NewFoster
