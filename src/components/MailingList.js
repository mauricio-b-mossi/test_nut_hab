import React, { useState } from 'react'
import axios from 'axios'


const MailingList = () => {
    
    const [email, setEmail] = useState(null)

    const submitEmail = (e) => {
        e.preventDefault()
        
        if (email) {
            axios.get(`http://localhost:5000/api/memberAdd?email=${email}`).then(res => res.json()).then(res=>console.log(res)).catch(err => console.log(err))
        }
        
    }

    return (
        <div>
            <form className='mailing_form' onSubmit={}>
                <input className='mailing_input' type="email" name='email' placeholder='example@gmail.com' onChange={(e) => setEmail(e.target.value)} />
                <input type="submit" value='Submit'/>
            </form>
        </div>
    )
}

export default MailingList
