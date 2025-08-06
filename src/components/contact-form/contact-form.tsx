"use client"
import './contact-form.css'
import React, { useEffect, FormEvent, useState } from 'react'
import { usePathname } from 'next/navigation'

export const ContactForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false);

    const pathname = usePathname();
    useEffect(() => {   // Reset form state on page change
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
        setSubmitted(false);
    }, [pathname]);

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault();
        
        try {
            const request = new Request('/api/contact', {
                method: 'POST',
                body: JSON.stringify({
                    name, email, subject, message,
                }),
                headers: {
                    'content-type': 'application/json',
                },
            });

            const res = await fetch(request);
            const body = await res.json();
            setSubmitted(body.submitted);
        }
        catch(err) {
            console.error('Error', err)
        }
    }

    return (
        <div>
            {submitted
                ? <div className="foreground-section">
                    <h3 className="text-align-center">Message sent! I will get back to you as soon as I can.</h3>
                </div>
                : <form onSubmit={onSubmit}>
                    <h2 className="text-align-center">Contact Me</h2>
                    <hr/>
                    <p className="text-align-center">Want to get in touch? Send me a message here!</p>
                    <div className="input-box">
                        <label>Full Name</label><br/>
                        <input 
                            value={name} 
                            className="field" 
                            type="text" 
                            name="name" 
                            placeholder="Name" 
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-box">
                        <label>Email Address</label><br/>
                        <input 
                            value={email}
                            className="field" 
                            type="email" 
                            name="email" 
                            placeholder="Email" 
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-box">
                        <label>Subject</label><br/>
                        <input 
                            value={subject}
                            className="field" 
                            type="text" 
                            name="subject" 
                            placeholder="Subject" 
                            onChange={(e) => setSubject(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-box">
                        <label>Message</label><br/>
                        <textarea 
                            value={message}
                            className="field message" 
                            name="message" 
                            placeholder="Start typing here..." 
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex-div justify-content-center">
                        <button type="submit">Send</button>
                    </div>
                </form>
            }
        </div>
    )
}