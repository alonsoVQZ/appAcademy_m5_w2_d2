import {useState, useEffect} from 'react'

function Signup(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [phoneType, setPhoneType] = useState('')
    const [staff, setStaff] = useState('')
    const [bio, setBio] = useState('')
    const [notifications, setNotifications] = useState(false)
    const [validationErrors, setValidationErrors] = useState([])


    return (
        <div>
            <form>
                <div>
                    <label>
                        Name
                    </label>
                    <input
                        id='name'
                        type='text'
                        name='name'
                        onChange={e => setName(e.target.value)}
                        value={name}
                    />
                </div>
                <div>
                    <label>
                        Email
                    </label>
                    <input
                        id='email'
                        type='text'
                        name='email'
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                    />
                </div>
                <div>
                    <label>
                        Phone Number
                    </label>
                    <input
                        id='phone'
                        type='text'
                        name='phone'
                        onChange={e => setPhone(e.target.value)}
                        value={phone}
                    />
                    <select
                        name='phoneType'
                        onChange={e => setPhoneType(e.target.value)}
                        value={phoneType}
                    >
                        <option disabled value=''>Choose a phone type</option>
                        <option>Home</option>
                        <option>Work</option>
                        <option>Mobile</option>
                    </select>
                </div>
                <div>
                    <label>
                        Staff
                    </label>
                    <input type="radio" value="Instructor" name="staff" /> Instructor
                    <input type="radio" value="Student" name="staff" /> Student
                </div>
                <div>
                    <label>
                        Bio
                    </label>
                    <textarea />
                </div>
                <div>
                    <label>
                        Sign up for email notifications
                    </label>
                    <input type='checkbox' />
                </div>
            </form>
        </div>
    )
}

export default Signup
