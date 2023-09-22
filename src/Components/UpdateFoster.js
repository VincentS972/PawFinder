import {useState, useEffect }from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function UpdateFoster () {
    const navigate = useNavigate()

    const [profileInput, setProfileInput] = useState(null)

    const { id } = useParams()
    const URL = `${process.env.REACT_APP_BACKEND_URI}/foster/${id}`

    useEffect(() => {
        const fetchData = async () => {
            const responce = await fetch(URL)
            const data = await responce.json()
            setProfileInput(data)
        }
        fetchData()
    }, [id, URL])

    const handleChange = (e) => {
        const value = e.target.value
        setProfileInput({
            ...profileInput,
            [e.target.name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch(URL, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(profileInput)
        })
        if (response.status !== 204) console.log('error!') // add error handling later
        navigate(`/foster/${id}`)
    }

    const display = profileInput && (
        <form onSubmit={handleSubmit}>
            <input required onChange={handleChange} value={profileInput.userName} name='Username' placeholder='Username' />
            <input required onChange={handleChange} value={profileInput.firstName} name='firstName' placeholder='Fist Name' />
            <input required onChange={handleChange} value={profileInput.lastName} name='lastName' placeholder='Last name' />
            <input required onChange={handleChange} value={profileInput.emailAddress} name='emailAddress' placeholder='New Email' />
            <input required onChange={handleChange} value={profileInput.profilePicture} name='profilePicture' placeholder='New image' />
            <input required onChange={handleChange} value={profileInput.password} name='Username' placeholder='New password' />
            <input type='submit'/>
        </form>
    )
  return (
    <div>
      {display}
    </div>
  )
}

export default UpdateFoster;