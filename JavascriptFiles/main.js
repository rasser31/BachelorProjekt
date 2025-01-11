require('dotenv').config();

const sgMail = require('@sendgrid/mail')

const API_KEY = process.env.SENDGRID_API_KEY;

sgMail.setApiKey(API_KEY)

const message = {
    to: 'pedersenstudie@gmail.com', // Mail has to be inserted here
    from: 'pedersenstudie@gmail.com',
    subject: 'Sendgrid Tester Mail',
    text: 'Hello from Sendgrid',
    html: '<h1>Hello from Sendgrid</h1>',
};

sgMail
    .send(message)
    .then((response) => console.log('Email has been sent'))
    .catch((error) => console.log(error.message));
        