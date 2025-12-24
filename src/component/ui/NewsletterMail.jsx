import { useState } from "react";

const NewsletterMail = () => {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) return;

    // Open user's mail app
    window.location.href = `mailto:emmanuelosawe3@gmail.com?subject=New Message&body=From: ${email}`;

    // UX feedback
    setSent(true);
    setEmail("");
  };

  return (
    <section className="newsletter-area pt-130">
      <div className="container">
        <div className="newsletter-wrapper-one">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="newsletter-content-box">
                <div className="section-title text-center mb-30">
                  <h2>Send Us A Mail</h2>
                </div>

                <form className="newsletter-form" onSubmit={handleSubmit}>
                  <div className="form_group">
                    <input
                      type="text"
                      className="form_control"
                      placeholder="Send email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />

                    <button
                      className="newsletter-btn"
                      type="submit"
                      disabled={sent}
                    >
                      {sent ? "Mail Sent ✔" : "Mail Us"}
                    </button>
                  </div>

                  {sent && (
                    <p
                      style={{
                        marginTop: "10px",
                        color: "#28a745",
                        fontWeight: "600",
                        textAlign: "center",
                      }}
                    >
                      ✅ Mail sent successfully
                    </p>
                  )}
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterMail;
