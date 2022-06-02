import emailjs from '@emailjs/browser';
import {ButtonUI} from '../../UI/ButtonUI/ButtonUI'

export const Mailer = () => {

    const sendEmail = ( e ) => {
        e.preventDefault();

        emailjs.sendForm('service_kagt37a','template_4f77v7z',e.target,'akQoWyMBUDzn4jOoB')
        .then( response => console.log( response ))
        .catch( err => console.log( err ));
    }

  return (
    <div className="container mt-5">
        <h1>Mailer</h1>
        <form onSubmit={ sendEmail }>
            <div className="mb-3">

                <label for="exampleInputEmail1" className="form-label">Name</label>
                <input name='user_name' type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

            </div>
            <div class="mb-3">

                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input name='user_email' type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

            </div>
            <div class="mb-3">

                <label for="exampleInputEmail1" class="form-label">Message</label>
                <input name='user_message' type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                
            </div>
            <ButtonUI 
                styles='buttonGreen'
                text='Send'
            />
        </form>
    </div>
  )
}
