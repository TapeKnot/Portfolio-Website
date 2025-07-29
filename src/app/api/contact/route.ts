import FormData from 'form-data'
import Mailgun from 'mailgun.js'

const API_KEY = process.env.MAILGUN_API_KEY || ''
const DOMAIN = process.env.MAILGUN_DOMAIN || ''

export async function POST(req: Request) {
    console.log('Contact request received')

    const mailgun = new Mailgun(FormData);
    const client = mailgun.client({username: 'api', key: API_KEY});

    const body = await req.json();
    const {name, email, subject, message} = body;
    const messageData = {
        from: 'Contact Form <contact@mailgun.benjaminlevy.dev>',
        to: 'benjaminlevy.bel@gmail.com',
        subject: subject,
        text: `New message from contact form:

        Sender: ${name} (${email})
        Subject: ${subject}

        ${message}`,
    }

    let confirmation = {submitted: false};

    try {
        const emailRes = await client.messages.create(DOMAIN, messageData)
        console.log(emailRes)
        confirmation = {submitted: true}
    }
    catch (err) {
        console.error('Error sending email', err)
    }

    return new Response(JSON.stringify(confirmation), {
        status: 200,
        headers: {'Content-Type': 'application/json'}
    });
}