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

    useEffect(() => {
        const errors = new Array();
        if(name.length <= 0) {
          errors.push('Please enter your Name');
        }
        if(!email.includes('@')) {
          errors.push('Please provide a valid Email');
        }
        if(phone.length > 0) {
            if(phone.length !== 10) {
                errors.push('Phone number should be properly formatted');
            }
            if(!phoneType.length) {
                errors.push('Phone type should be selected');
            }
        }
        if(bio.length > 280) {
            errors.push('Bio is too long');
        }
        setValidationErrors(errors)
    }, [name, email, phone, phoneType, bio])

    function onSubmit(e) {
        e.preventDefault();
        const summitedOn = new Date()
        console.log({ name, email, phone, phoneType, staff, bio, notifications, summitedOn });
    }

    return (
        <div>
            {
                validationErrors.length > 0 && (
                <div style={{color: 'red'}}>
                    The following errors were found:
                    <ul>
                    {validationErrors.map(error => (
                        <li key={error}>{error}</li>
                    ))}
                    </ul>
                </div>
                )
            }
            <form onSubmit={onSubmit}>
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
                        placeholder='1234567890'
                        onChange={e => setPhone(e.target.value)}
                        value={phone}
                    />
                    <select
                        id='phoneType'
                        name='phoneType'
                        onChange={e => setPhoneType(e.target.value)}
                        value={phoneType}
                        disabled={phone.length === 0}
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
                    <input type="radio" value="Instructor" name="staff" onChange={e => setStaff(e.target.value)} /> Instructor
                    <input type="radio" value="Student" name="staff" onChange={e => setStaff(e.target.value)} /> Student
                </div>
                <div>
                    <label>
                        Bio
                    </label>
                    <textarea
                        id='bio'
                        name='bio'
                        onChange={e => setBio(e.target.value)}
                        value={bio}
                    />
                </div>
                <div>
                    <label>
                        Sign up for email notifications
                    </label>
                    <input type='checkbox' name='notifications' onChange={e => setNotifications(!notifications)}/>
                </div>
                <button disabled={validationErrors.length > 0}>Sign Up</button>
            </form>
        </div>
    )
}

export default Signup
