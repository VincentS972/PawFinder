import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
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

const deleteProfile = async () => {
  const URL = `${process.env.REACT_APP_BACKEND_URI}/pets/${id}`
  const response = await fetch(URL, {
      method: 'DELETE'
  })
  navigate('/');
  if (response.status !==204) console.log('error')   
}

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
        navigate(`/pet`)
}


// Update Pet Form

const display = petInput && (
<div className = "container-lg font-nice">
      <Form className='p-3' onSubmit={handleSubmit} style={{backgroundColor:'#B5EB8D', color:"#217605"}} >
        <Row className='mb-3'>
          <Form.Group as={Col} style={{textAlign:'center'}}>
            <Form.Label>
                Please input the URL for an image of the pet: 
            </Form.Label>
            <Form.Control type="text" name="profilePicture" placeholder="Pet image URL" value={petInput.profilePicture} onChange={handleChange} style={{textAlign:'center'}}/>
          </Form.Group>

          <Form.Group as={Col} style={{textAlign:'center'}}>
            <Form.Label>
                Please input the pet's name:
            </Form.Label>
            <Form.Control type="text" name="petName" placeholder="Pet name" value={petInput.petName} maxLength={15} onChange={handleChange} required style={{textAlign:'center'}}/>
          </Form.Group>

          <Form.Group as={Col} style={{textAlign:'center'}}>
            <Form.Label>
                Please input the foster's name:
            </Form.Label>
            <Form.Control type="text" name="fosterName" placeholder="Foster name" value={petInput.fosterName} maxLength={15} onChange={handleChange} required style={{textAlign:'center'}}/>
          </Form.Group>

          <Row className='mb-3'>
          <Form.Group as={Col} style={{textAlign:'center'}}>
            <Form.Label>
              Please select the pet's gender:
            </Form.Label>
            <Form.Select name="petGender" value={petInput.petGender} onChange={handleChange} required style={{textAlign:'center'}}>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} style={{textAlign:'center'}}>
            <Form.Label>
              Please select the pet's species:
            </Form.Label>
            <Form.Select name="petType" value={petInput.petType} onChange={handleChange} required style={{textAlign:'center'}}> 
                <option value="">Select Pet Type</option>
                <option value="Dog">Dog</option>
                <option value="Cat">Cat</option>
            </Form.Select>
          </Form.Group>
        </Row>

          <Form.Group as={Col} style={{textAlign:'center'}}>
            <Form.Label>
                Please select the pet's age: 
            </Form.Label>
            <Form.Select name="petAge" value={petInput.petAge} onChange={handleChange} required style={{textAlign:'center'}}>
              <option value="">Select Age</option>
              <option value="0-6 weeks">0-6 weeks</option>
              <option value="6-8 weeks">6-8 weeks</option>
              <option value="10-12 weeks">10-12 weeks</option>
              <option value="16-18 weeks">16-18 weeks</option>
              <option value="Under a year">under a year</option>
              <option value="1 year">1 year</option>
              <option value="2 years">2 years</option>
              <option value="3 years">3 years</option>
              <option value="4 years">4 years</option>
              <option value="5 years">5 years</option>
              <option value="6 years">6 years</option>
              <option value="7 years">7 years</option>
              <option value="8 years">8 years</option>
              <option value="9 years">9 years</option>
              <option value="10 years">10 years</option>
              <option value="11 years">11 years</option>
              <option value="12 years">12 years</option>
              <option value="13 years">13 years</option>
              <option value="14 years">14 years</option>
              <option value="15 years">15 years</option>
              <option value="Senior over 16 years">Senior over 16 years</option>
              </Form.Select>
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} sm={8} style={{textAlign:'center'}}>
            <Form.Label>
                Please add a pet bio: 
            </Form.Label>
            <Form.Control as='textarea' name="petBio" placeholder="Pet bio" maxLength={180} value={petInput.petBio} onChange={handleChange} required style={{textAlign:'center'}}/>
          </Form.Group>
        </Row>

        <Form.Group className='mb-3 mx-auto w-50' style={{textAlign: 'center'}}>
          <p>All fields are required.</p>
          <Button type='submit' variant='success'>Submit</Button>
          <Button variant='danger' onClick={deleteProfile}>Delete Profile</Button>
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

export default UpdatePet 


