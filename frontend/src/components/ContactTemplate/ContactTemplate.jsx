import './ContactTemplate.scss';
import EmailLogo from './../../assets/icons/correo.svg';
import InstagramLogo from './../../assets/icons/instagram.svg';
import WhatsappLogo from './../../assets/icons/whatsapp.svg';
import LocationLogo from './../../assets/icons/location.svg';

const Contact = () => {
    return (
        <div className="contact">
            <div className='contact__image'>
                <h2 className='contact__image__title'>También puedes ubicarnos en...</h2>
                <p className='contact__image__address'>La Floresta, avenida San Carlos.
                    Al lado del colegio Santiago de León de Caracas. Municipio Chacao.</p>
                <div className='contact__image__location'>
                    <a href="https://www.google.com/maps/place/10%C2%B029'42.1%22N+66%C2%B050'40.0%22W/@10.4950185,-66.8470176,17z/data=!3m1!4b1!4m4!3m3!8m2!3d10.4950185!4d-66.8444427?entry=ttu" 
                       target='_blank' rel='noreferrer noopener'>
                        <img src={LocationLogo} alt="Location button" width={45} />
                    </a>
                    <h3>Ubícanos</h3>
                </div>
            </div>
            <div className='contact__info'>
                <h1 className='contact__info__title'>CONTÁCTANOS</h1>
                <h2 className='contact__info__subtitle'>Intervenciones Urbanas</h2>
                <p className='contact__info__paragraph'>
                    <b>Visítanos</b> en cualquiera de nuestras <b>redes sociales</b>  y  contáctanos por la 
                    que prefieras. <b>Ubícanos</b> o envíanos un mensaje por <b>Whatsapp</b> haciendo click.
                </p>
                <div className='contact__info__logos'>
                    <a href="" target='_blank' rel='noopener noreferrer'>
                        <img width={40} src={WhatsappLogo} alt="WhatsappLogo" />
                    </a>
                    <a href="" target='_blank' rel='noopener noreferrer'>
                        <img width={40} src={InstagramLogo} alt="InstagramLogo" />
                    </a>
                    <a href="" target='_blank' rel='noopener noreferrer'>
                        <img width={40} src={EmailLogo} alt="EmailLogo" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contact;