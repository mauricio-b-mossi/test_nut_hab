import React from 'react'

const Footer = () => {
    return (
      <div className="footer">
        <div className="contact_us">
          <div>Contáctanos</div>
          <div>
            <span className="contact_field">Teléfono: </span>
            <span className="contact_info">+503-77490974</span>
          </div>
          <div>
            <span className="contact_field">Email: </span>
            <span className="contact_info">nutriendohabitos@gmail.com</span>
          </div>
        </div>
        <div className="follow_us">
          <div>Síguenos</div>
          <a href="https://www.instagram.com/nutriendohabitos_sv/">
            <img src="/images/insta_icon_transparent.png" alt="" />
          </a>
        </div>
        <div className="boring_stuff">
          {/* <div>Boring Stuff</div> */}
          <div>Afiliados</div>
          <a href="https://www.facebook.com/combatamosladiabetesconeducacion/">
            <img
              src="/images/asadihex.png"
              alt="Asadi logo"
              className="asadi_logo"
            />
          </a>
          {/* <p>App made using the MERN stack.</p> */}
          {/* <p>Mauricio Mossi ©</p> */}
        </div>
      </div>
    );
}

export default Footer
