import React, { useState } from "react";
import emailjs from 'emailjs-com';
import './contactezNous.css';
import {NavLink} from 'react-router-dom';

import { Container, ContactForm, FormH2, FormContent, FormInput, FormTextArea, EmailContent, FormLabel, FormMessage, InputButton} from './ElementsContact'
const Contact = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");


  const isEmail = () => {
    let mail = document.getElementById('not-mail');
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (email.match(regex)) {
      mail.style.display = 'none';
      return true;
    } else {
      mail.style.display = 'block';
      mail.style.animation = 'dongle is';
      setTimeout(() => {
        mail.style.animation = 'none';
        mail.style.display = 'none';
      }, 1000);
      return false;
    }
  }


  const erreurMessage = (Message) => {
    let FormMess = document.querySelector('.form-message');
    FormMess.innerHTML = Message;
    FormMess.style.opacity = '1';
    FormMess.style.background = 'rgb(253,87,87)';

    document.getElementById('name').classList.add('error');
    document.getElementById('email').classList.add('error');
    document.getElementById('message').classList.add('error');

    setTimeout(() => {
      FormMess.style.opacity = '0';
      if (!isEmail) {
        setEmail("");
      } else if (!name) {
        setName("");
      } else if (!message) {
        setMessage("");
      }
    }, 3000);

  }

  const successMessage = () => {
    let FormMess = document.querySelector('.form-message');
    FormMess.innerHTML = "Message envoyé , nous vous recontacterons des que possible !";
    FormMess.style.opacity = '1';
    FormMess.style.background = '#00c1ec';

    setTimeout(() => {
      FormMess.style.opacity = '0';
    }, 3000);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && isEmail() && message) {
      sendFeedback("template_99yp1nj", {
        name,
        company,
        phone,
        email,
        message,
      });
    } else {
      erreurMessage("Merci de remplir correctement les champs requis *")
    }
  };

  const sendFeedback = (templateId, variables) => {

    emailjs
      .send("service_6lr0xko", templateId, variables, "user_ckXjGcWnfoMbLlZoOZkLl")
      .then((res) => {
        successMessage();
        setName("");
        setCompany("");
        setPhone("");
        setEmail("");
        setMessage("");
      })
      .catch(
        (err) => {
          erreurMessage("une erreur s'est produite veuillez reéssayer");
        });
  };

  return (
    <Container className="home">
      <div className="navigation">
        <ul>
          <NavLink to="/" exact className="hover"
            activeClassName="nav-active">
            <li className="titre">Acceuill</li>
          </NavLink>
        </ul>
      </div>
      <ContactForm className="contact-form">
        <FormH2>Contactez-nous</FormH2>
        <FormContent className="form-content">
          <FormInput
            type="text"
            id="name"
            name="name"
            onChange={(e) => setName(e.target.value)}
            placeholder="nom *"
            value={name}
            autoComplete="off"
          />
          <FormInput
            type="text"
            id="company"
            name="company"
            onChange={(e) => setCompany(e.target.value)}
            placeholder="société"
            value={company}
            autoComplete="off"
          />
          <FormInput
            type="text"
            id="phone"
            name="phone"
            onChange={(e) => setPhone(e.target.value)}
            placeholder="téléphone"
            value={phone}
            autoComplete="off"
          />
          <EmailContent className="email-content">
            <FormLabel id="not-mail">Email non valide</FormLabel>
            <FormInput
              type="mail"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email *"
              value={email}
              autoComplete="off"
            />
          </EmailContent>
          <FormTextArea
            id="message"
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            placeholder="message *"
            value={message}
          />
        </FormContent>
        <InputButton
          className="button"
          type="button"
          value="Envoyer"
          onClick={handleSubmit}
        />
        <FormMessage className="form-message"></FormMessage>
      </ContactForm>
    </Container>
  );
};

export default Contact;
