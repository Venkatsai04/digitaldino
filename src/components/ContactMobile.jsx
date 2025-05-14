<<<<<<< HEAD
import React from 'react'

const ContactMobile = ({mode}) => {

 const isLightMode = mode == "light"

  return (
    <div id='contact'  className={`m-auto w-[95%] h-[99%] ${mode == 'light' ? 'bg-sky-400 text-black' : 'bg-[#11022a] text-white'} rounded-xl my-3  overflow-hidden`}>
=======
import React, { useState } from 'react';

const ContactMobile = ({ mode }) => {
  const isLightMode = mode === "light";
  const apiKey = process.env.REACT_APP_SENDINBLUE_KEY;
  // State for form field
  const [formData, setFormData] = useState({
    businessName: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  // State for form submission status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Prepare the email content with form data
      const htmlContent = `
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            h2 { color: #003366; }
            .info-item { margin-bottom: 10px; }
            .label { font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="container">
            <h2>New Contact Form Submission</h2>
            <div class="info-item"><span class="label">Business Name:</span> ${formData.businessName}</div>
            <div class="info-item"><span class="label">Phone:</span> ${formData.phone}</div>
            <div class="info-item"><span class="label">Email:</span> ${formData.email}</div>
            <div class="info-item"><span class="label">Service:</span> ${formData.service}</div>
            <div class="info-item"><span class="label">Message:</span> ${formData.message}</div>
          </div>
        </body>
        </html>
      `;

      // Prepare the request payload for Brevo API
      const payload = {
        sender: {
          name: "Website Contact Form",
          email: "noreply@digitaldino.com" // Replace with your sender email
        },
        to: [
          {
            email: "saik87630@gmail.com", // Replace with your actual email
            name: "Admin"
          }
        ],
        subject: "New Contact Form Submission",
        htmlContent: htmlContent
      };

      // Make API call to Brevo
      const response = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'api-key': apiKey,
          'content-type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form on successful submission
        setFormData({
          businessName: '',
          phone: '',
          email: '',
          service: '',
          message: ''
        });
      } else {
        const errorData = await response.json();
        console.error('Email submission failed:', errorData);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id='contact' className={`m-auto w-[95%] h-[99%] ${mode === 'light' ? 'bg-sky-400 text-black' : 'bg-[#11022a] text-white'} rounded-xl my-3 overflow-hidden`}>
>>>>>>> 1e9fc4e (Initial clean commit (without secrets))
      <div className="relative w-full h-[800px] overflow-hidden text-left text-[17.88px] text-black font-porter-sans-block">
        <div className="absolute top-[39px] left-[34px] w-[292.5px] h-[79.5px]">
          <img
            className="absolute top-[0px] left-[140.2px] w-[79.5px] h-[79.5px]"
            alt=""
            src="/ellipse-13.svg"
          />
          <div className="absolute top-[31.3px] left-[0px] inline-block w-[292.5px] h-[17.8px] [backdrop-filter:blur(1.62px)]">
<<<<<<< HEAD
          <span className={isLightMode ? 'text-black' : 'text-white'}>{`contact  `}</span>
            <span className="text-yellow-400">us.</span>
          </div>
        </div>
=======
            <span className={isLightMode ? 'text-black' : 'text-white'}>{`contact  `}</span>
            <span className="text-yellow-400">us.</span>
          </div>
        </div>

>>>>>>> 1e9fc4e (Initial clean commit (without secrets))
        <div className="absolute top-[128px] left-[34px] w-[142px] h-[143px] flex flex-col items-start justify-start gap-[31.35px] text-[32.85px] text-darkslategray font-poiret-one">
          <div className="flex flex-col items-start justify-start">
            <div className="flex flex-col items-start justify-start">
              <div className="relative tracking-[-0.02em] [-webkit-text-stroke:0.7px_#000]">
<<<<<<< HEAD
              <p className={`m-0 ${isLightMode ? 'text-black [-webkit-text-stroke:1.3px_#000]' : 'text-white [-webkit-text-stroke:1.3px_white]'}`}>{`Get in Touch `}</p>
=======
                <p className={`m-0 ${isLightMode ? 'text-black [-webkit-text-stroke:1.3px_#000]' : 'text-white [-webkit-text-stroke:1.3px_white]'}`}>{`Get in Touch `}</p>
>>>>>>> 1e9fc4e (Initial clean commit (without secrets))
                <p className={`m-0 ${isLightMode ? 'text-black [-webkit-text-stroke:1.3px_#000]' : 'text-white [-webkit-text-stroke:1.3px_white]'} `}>with Us!</p>
              </div>
            </div>
          </div>
<<<<<<< HEAD
=======

>>>>>>> 1e9fc4e (Initial clean commit (without secrets))
          <div className="flex flex-col items-start justify-start py-0 pr-0 pl-[7.465296745300293px] gap-[7.47px] text-[11.94px] font-aladin">
            <div className="flex flex-row items-start justify-start gap-[10.45px]">
              <img
                className="relative w-[23.9px] h-[23.9px] overflow-hidden shrink-0"
                alt=""
                src="/icoutlinehomerepairservice.svg"
              />
              <div className="flex flex-col items-start justify-start gap-[2.24px]">
<<<<<<< HEAD
              <div className={`relative tracking-[-0.01em] ${isLightMode ? 'text-black' : 'text-yellow-400'}`}>Phone</div>
=======
                <div className={`relative tracking-[-0.01em] ${isLightMode ? 'text-black' : 'text-yellow-400'}`}>Phone</div>
>>>>>>> 1e9fc4e (Initial clean commit (without secrets))
                <div className="relative text-[8.96px] font-abel text-gray-100">
                  +919705772881
                </div>
              </div>
            </div>
<<<<<<< HEAD
            <div className="flex flex-row items-start justify-start gap-[10.45px]">
              <img
                className="relative w-[23.9px] h-[23.9px] overflow-hidden shrink-0"
                alt=""
                src="/icoutlinemessage.svg"
              />
              <div className="flex flex-col items-start justify-start gap-[2.24px]">
              <div className={`relative tracking-[-0.01em] ${isLightMode ? 'text-black' : 'text-yellow-400'}`}>Email</div>
                <div className="relative text-[8.96px] font-abel text-gray-100">
                  hi@website.com
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[45%] w-[100%] h-[50%] flex  items-center justify-center text-[11.94px] text-yellow-400 font-poiret-one">
          <div className="relative rounded-[17.88px] bg-black w-[80%] h-[97%] z-[0] flex flex-col justify-center items-center gap-y-5 text-yellow-400-400" >
            <input
              type="text"
              id="name"
              name="Name or Business Name"
              placeholder="Business Name"
              class="outline-none w-[80%] h-[8%] bg-transparent border-white border rounded-md px-5 text-[20px]"
            />

            <input
              type="Phone"
              id="Phone"
              name="Phone or Business Phone"
              placeholder="Business Phone no"
              class="outline-none w-[80%] h-[8%] bg-transparent border-white border rounded-md px-5 text-[20px]"
            />
            <input
              type="Email"
              id="Email"
              name="Email or Business Email"
              placeholder="Business Email"
              class="outline-none w-[80%] h-[8%] bg-transparent border-white border rounded-md px-5 text-[20px]"
            />
            <input
              type="text"
              id="Service"
              name="Service or Business Service"
              placeholder="Business Service"
              class="outline-none w-[80%] h-[8%] bg-transparent border-white border rounded-md px-5 text-[20px]"
            />
      
            <textarea type="textarea"
              id="Message"
              placeholder="Business Message"
              class="outline-none w-[80%] h-[18%] bg-transparent border-white border rounded-md px-5 py-1 text-[20px]"
              name="postContent" rows={4} cols={40} />

            <div className="rounded-[45.84px] bg-yellow-400 w-[156.4px] overflow-hidden flex flex-row items-center justify-center  box-border text-[17.98px] text-black font-poiret-one cursor-pointer px-4 py-4">
              <div className="relative [-webkit-text-stroke:1px_#000]">
                <button type='submit'>Submit Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactMobile
=======

          </div>
        </div>

        <div className="absolute top-[45%] w-[100%] h-[50%] flex items-center justify-center text-[11.94px] text-yellow-400 font-poiret-one">
          <form onSubmit={handleSubmit} className="relative rounded-[17.88px] bg-black w-[80%] h-[97%] z-[0] flex flex-col justify-center items-center gap-y-5 text-yellow-400-400">
            {submitStatus === 'success' && (
              <div className="absolute top-0 left-0 w-full px-4 py-3 bg-green-500 text-white text-center">
                Message sent successfully!
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="absolute top-0 left-0 w-full px-4 py-3 bg-red-500 text-white text-center">
                Failed to send message. Please try again.
              </div>
            )}

            <input
              type="text"
              id="businessName"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              placeholder="Business Name"
              className="outline-none w-[80%] h-[8%] bg-transparent border-white border rounded-md px-5 text-[20px] text-white"
              required
            />

            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Business Phone no"
              className="outline-none w-[80%] h-[8%] bg-transparent border-white border rounded-md px-5 text-[20px] text-white"
              required
            />

            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Business Email"
              className="outline-none w-[80%] h-[8%] bg-transparent border-white border rounded-md px-5 text-[20px] text-white"
              required
            />

            <input
              type="text"
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              placeholder="Business Service"
              className="outline-none w-[80%] h-[8%] bg-transparent border-white border rounded-md px-5 text-[20px] text-white"
              required
            />

            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Business Message"
              className="outline-none w-[80%] h-[18%] bg-transparent border-white border rounded-md px-5 py-1 text-[20px] text-white"
              rows={4}
              cols={40}
              required
            />

            <div className="rounded-[45.84px] bg-yellow-400 w-[156.4px] overflow-hidden flex flex-row items-center justify-center box-border text-[17.98px] text-black font-poiret-one">
              <button
                type="submit"
                className="relative [-webkit-text-stroke:1px_#000] px-4 py-4 w-full cursor-pointer disabled:opacity-50"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Submit Now'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMobile;
>>>>>>> 1e9fc4e (Initial clean commit (without secrets))
