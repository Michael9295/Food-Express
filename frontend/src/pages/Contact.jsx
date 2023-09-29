import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNomChange = (e) => {
    setNom(e.target.value);
  };

  const handlePrenomChange = (e) => {
    setPrenom(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Message envoyé :", { nom, prenom, email, message });
    toast.success(
      "Votre message a bien été envoyé! A bientot sur Food Express",
      {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 5000,
        className: "toast-success",
      }
    );

    setNom("");
    setPrenom("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center">
      <div className="contact-form max-w-xl mx-auto p-6 bg-white rounded-lg shadow-xl">
        <h2 className="text-2xl text-center text-gray-800 mb-6">
          Contactez-nous
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nom" className="text-gray-800">
              Nom :
            </label>
            <input
              type="text"
              id="nom"
              name="nom"
              value={nom}
              onChange={handleNomChange}
              placeholder="Entrez votre nom"
              required
              className="w-full p-3 rounded border border-gray-400"
            />
          </div>
          <div className="form-group">
            <label htmlFor="prenom" className="text-gray-800">
              Prénom :
            </label>
            <input
              type="text"
              id="prenom"
              name="prenom"
              value={prenom}
              onChange={handlePrenomChange}
              placeholder="Entrez votre prénom"
              required
              className="w-full p-3 rounded border border-gray-400"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="text-gray-800">
              Adresse mail :
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Entrez votre adresse mail"
              required
              className="w-full p-3 rounded border border-gray-400"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="text-gray-800">
              Message :
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={handleMessageChange}
              placeholder="Entrez votre message..."
              rows="6"
              required
              className="w-full p-3 rounded border border-gray-400"
            />
          </div>
          <button
            type="submit"
            className="envoyer-button bg-orange-500 text-white p-3 rounded mt-4 w-full"
          >
            Envoyer
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Contact;
