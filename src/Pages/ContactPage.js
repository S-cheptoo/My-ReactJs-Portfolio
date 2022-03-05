import React from 'react'
import ContactItem from '../components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import Title from '../components/Title';

function ContactPage() {
    return (
        <div>
            <div className="title">
                <Title title={'About Me'} span={'About Me'} />
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.871473986695!2d36.78028961434484!3d-1.2482725359369673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f17807bdbb753%3A0x4da4d9fdfe8b481c!2sSpringette%20office%20park!5e0!3m2!1sen!2ske!4v1646403826832!5m2!1sen!2ske" width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'+254 745030497'} text2={'+254 753881725'} title={'Phone'}/>
                    <ContactItem icon={email} text1={'cheptoosandra.t@gmail.com'} text2={'cheptoosandra46@gmail.com'} title={'Email'}/>
                    <ContactItem icon={location} text1={'167, Springette, Spring Valley'} text2={'Nairobi'} title={'Address'}/>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;