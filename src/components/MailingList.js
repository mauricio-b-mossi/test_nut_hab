import React, { useState } from 'react'
import axios from 'axios'


const MailingList = () => {
    
    const [email, setEmail] = useState(null)

    const submitEmail = (e) => {
        e.preventDefault()
        
        if (email) {
            axios
              .get(`http://localhost:5000/api/memberAdd?email=${email}`)
              .then((res) => res.json())
              .then((res) => console.log(res))
              .catch((err) => console.log(err));
        }

        
    }

    return (
      <div className="footer_dos">
        <div className="wrapper_footer">
          <div className="top_footer_div">
            <div className="logo_footer">
              {/* <h4>The nav</h4> */}
              <a href="/" style={{ padding: 0 }}>
                <img
                  src="/images/FUNUHA.png"
                  alt=""
                  className="img_logo_footer"
                />
              </a>
              <div className="title">
                <span className="title_nutriendo">Nutriendo</span>
                <span className="title_habitos">hábitos</span>
              </div>
            </div>
          </div>
          <div className="form_center">
            <form className="mailing_form" onSubmit={submitEmail}>
              <div className="mail_info">Subscribe to our news letter</div>
              <input
                className="mailing_input"
                type="email"
                name="email"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input type="submit" value="Sign Up" className="btn_primary" />
            </form>
          </div>
          <div className="info_below">
            <div className="follow_us">
              <div className='follow_us_footer'>Follow Us</div>
              <a href="https://www.instagram.com/nutriendohabitos_sv/">
                <img src="/images/insta_icon_transparent_blue.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default MailingList
