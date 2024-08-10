import React, { useRef, useEffect } from "react";


export default function ContactForm() {

  const scriptURL = 'https://script.google.com/macros/s/AKfycbzks4jFjaFkVQEuvAHol0hJmw86jni2yFubSw-wmSZtgIViK-Kb7VwTFXWA0bfBXng/exec';
  const formRef = useRef(null);
  const alertRef = useRef(null);

  useEffect(() => {
    const form = formRef.current;
    const alert = alertRef.current;
    const submitBtn = form.querySelector('#send-msg');
    
    const handleSubmit = (e) => {
      e.preventDefault();
      submitBtn.disabled = true;
      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
          alert.innerHTML = 'Message Sent Successfully!';
          setTimeout(() => {
            alert.innerHTML = '';
          }, 5000);
          form.reset();
          submitBtn.disabled = false;
        })
        .catch(error => console.error('Error!', error.message));
    };

    form.addEventListener('submit', handleSubmit);

    // Cleanup the event listener on component unmount
    return () => {
      form.removeEventListener('submit', handleSubmit);
    };
  }, []);

  return (
    <div className="contact-form">
      <form ref={formRef} action={scriptURL} method="POST" className="contact-form-f" name="submit-to-google-sheet">
        <div className="form-group">
          <input type="text" id="name" name="name" placeholder="Name" className="form-control" required />
        </div>
        <div className="form-group">
          <input type="email" id="email" name="email" required placeholder="Email" className="form-control" />
        </div>
        <div className="form-group">
          <textarea id="message" name="message" required placeholder="Enter your message" className="form-control"></textarea>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-dark" id="send-msg">Send Message</button>
        </div>
        <div id="alert" ref={alertRef}></div>
      </form>
    </div>
  );
}