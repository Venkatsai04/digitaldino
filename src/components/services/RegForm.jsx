<<<<<<< HEAD
import React from 'react'

const RegForm = ({ service }) => {
    return (

        <>
            <div class="flex justify-center items-center w-screen h-full bg-yellow-300">

                <div class="container mx-auto my-4 px-4 lg:px-20">
                    <form action="">
                        <div class="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
                            <div class="flex flex-col">
                                <h1 class="font-bold uppercase text-3xl">Register</h1>
                                <h1 class="  text-lg">Seleted Service : <span className='font-semibold'>{service}</span></h1>
                            </div>
                            <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                                <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    type="text" placeholder="First Name*"  required/>
                                <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    type="text" placeholder="Last Name*"  required/>
                                <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    type="text" placeholder="Business Name*"  required/>
                                <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    type="text" placeholder="Business Type*" />
                                <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    type="email" placeholder="Email*" required/>
                                <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    type="mobile" placeholder="Phone*"  required/>
                            </div>
                            <div class="my-4">
                                <textarea placeholder="Message*" class="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" required></textarea>
                            </div>
                            <div class="my-2 w-1/2 lg:w-1/4">
                                <button class="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                        focus:outline-none focus:shadow-outline" type='submit' onSubmit={(e)=>{e.preventDefault()}}>
                                    Send Message
                                </button>
                            </div>
                        </div></form>

                    <div
                        class="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-blue-900 rounded-2xl">
                        <div class="flex flex-col text-white">
                            <h1 class="font-bold uppercase text-3xl my-4">Drop in our office</h1>
                            <p class="text-gray-400">If you have any query before registration , contact us
                            </p>

                            <div class="flex my-4 w-2/3 lg:w-1/2">
                                <div class="flex flex-col">
                                    <i class="fas fa-phone-alt pt-2 pr-2" />
                                </div>
                                <div class="flex flex-col">
                                    <h2 class="text-2xl">Call Us</h2>
                                    <p class="text-gray-400">Tel: +919505772881</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}

export default RegForm
=======
import React, { useState } from 'react';

const RegForm = ({ service }) => {
    // State for form fields
    const apiKey = process.env.REACT_APP_SENDINBLUE_KEY;
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        businessName: '',
        businessType: '',
        email: '',
        phone: '',
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
                        <h2>New Registration for ${service}</h2>
                        <div class="info-item"><span class="label">First Name:</span> ${formData.firstName}</div>
                        <div class="info-item"><span class="label">Last Name:</span> ${formData.lastName}</div>
                        <div class="info-item"><span class="label">Business Name:</span> ${formData.businessName}</div>
                        <div class="info-item"><span class="label">Business Type:</span> ${formData.businessType}</div>
                        <div class="info-item"><span class="label">Email:</span> ${formData.email}</div>
                        <div class="info-item"><span class="label">Phone:</span> ${formData.phone}</div>
                        <div class="info-item"><span class="label">Message:</span> ${formData.message}</div>
                    </div>
                </body>
                </html>
            `;
            
            // Prepare the request payload for Brevo API
            const payload = {
                sender: {
                    name: "Digital Services Registration",
                    email: "noreply@digitaldino.com" // Replace with your sender email
                },
                to: [
                    {
                        email: "saik87630@gmail.com", // Replace with your actual email
                        name: "Admin"
                    }
                ],
                subject: `New Registration for ${service}`,
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
                    firstName: '',
                    lastName: '',
                    businessName: '',
                    businessType: '',
                    email: '',
                    phone: '',
                    message: ''
                });
                console.log("don");
                
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
        <div className="flex justify-center items-center w-screen h-full bg-yellow-300">
            <div className="container mx-auto my-4 px-4 lg:px-20">
                <form onSubmit={handleSubmit}>
                    <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
                        <div className="flex flex-col">
                            <h1 className="font-bold uppercase text-3xl">Register</h1>
                            <h1 className="text-lg">Selected Service: <span className="font-semibold">{service}</span></h1>
                        </div>
                        
                        {submitStatus === 'success' && (
                            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mt-4 mb-4">
                                Registration submitted successfully! We'll get back to you soon.
                            </div>
                        )}
                        
                        {submitStatus === 'error' && (
                            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mt-4 mb-4">
                                There was an error submitting your registration. Please try again later.
                            </div>
                        )}
                        
                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                            <input 
                                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                type="text" 
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder="First Name*" 
                                required
                            />
                            <input 
                                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                type="text" 
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder="Last Name*" 
                                required
                            />
                            <input 
                                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                type="text" 
                                name="businessName"
                                value={formData.businessName}
                                onChange={handleChange}
                                placeholder="Business Name*" 
                                required
                            />
                            <input 
                                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                type="text" 
                                name="businessType"
                                value={formData.businessType}
                                onChange={handleChange}
                                placeholder="Business Type*" 
                                required
                            />
                            <input 
                                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                type="email" 
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email*" 
                                required
                            />
                            <input 
                                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                type="tel" 
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Phone*" 
                                required
                            />
                        </div>
                        <div className="my-4">
                            <textarea 
                                className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Message*" 
                                required
                            ></textarea>
                        </div>
                        <div className="my-2 w-1/2 lg:w-1/4">
                            <button 
                                className={`uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                                focus:outline-none focus:shadow-outline ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                                type="submit"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </div>
                    </div>
                </form>
                
                <div className="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-blue-900 rounded-2xl">
                    <div className="flex flex-col text-white">
                        <h1 className="font-bold uppercase text-3xl my-4">Drop in our office</h1>
                        <p className="text-gray-400">If you have any query before registration, contact us</p>

                        <div className="flex my-4 w-2/3 lg:w-1/2">
                            <div className="flex flex-col">
                                <i className="fas fa-phone-alt pt-2 pr-2" />
                            </div>
                            <div className="flex flex-col">
                                <h2 className="text-2xl">Call Us</h2>
                                <p className="text-gray-400">Tel: +919505772881</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegForm;
>>>>>>> 1e9fc4e (Initial clean commit (without secrets))
