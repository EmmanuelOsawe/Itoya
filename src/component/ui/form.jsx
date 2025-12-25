import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    const whatsappMessage = `
Hello, I have a request.

Name: ${name}
Email: ${email}
Message: ${message}
    `;

    const whatsappURL = `https://wa.me/2348164286161?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    // Open WhatsApp
    window.open(whatsappURL, "_blank");

    // ✅ CLEAR INPUTS AFTER CLICK
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit}>
        <div className="row">

          <div className="col-lg-6">
            <div className="form_group">
              <input
                type="text"
                name="name"
                className="form_control"
                placeholder="Name"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="form_group">
              <input
                type="email"
                name="email"
                className="form_control"
                placeholder="Email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="col-lg-12">
            <div className="form_group">
              <textarea
                name="message"
                className="form_control"
                placeholder="What do you want"
                required
                value={formData.message}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="col-lg-12">
            <button type="submit" className="main-btn">
              Send via WhatsApp
            </button>
          </div>

        </div>
      </form>
    </div>
  );
};

export default ContactForm;
