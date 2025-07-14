import React, { useState , useRef  } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
    const form = useRef();

  const [formData, setFormData] = useState({ //useState	Holds the form fields (name, email, message)
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
        
    emailjs
    .sendForm(
        'service_abxqimq',      // ✅ Your actual service ID
        'template_cehrndl',     // ✅ Your actual template ID
        form.current,
        'pvU77C_EJAOQ5TKw5'     // ✅ Your actual public key
    )
    .then(
      (result) => {
        console.log(result.text);
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Reset state
        form.current.reset(); // Reset form
      },
      (error) => {
        console.log(error.text);
        alert('Failed to send message.');
      }
    );
};

  return ( //onChange	Updates state live as user types
            //onSubmit	Prevents page reload and handles form logic
    <section className="contact"> 
      
      <form ref={form} onSubmit={handleSubmit}>

      
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}  
          required
        />
        
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
