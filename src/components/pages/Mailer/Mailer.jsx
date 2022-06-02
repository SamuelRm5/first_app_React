import emailjs from 'emailjs-com';

export const Mailer = () => {

    const sendEmail = ( e ) => {

        e.preventDefault();
        emailjs.sendForm('service_kagt37a','')
    }

  return (
    <div className="container mt-5">
        <h1>Mailer</h1>
        <form>
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
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}
