const nodemailer = require('nodemailer');

// Create a transporter object using SMTP transport
let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'your_email@gmail.com', // Your Gmail email address
        pass: 'your_password' // Your Gmail password or app-specific password
    }
});

// Function to send the email
const sendEmail = (feedbackText) => {
    // Email content
    const mailOptions = {
        from: 'your_email@gmail.com', // Sender email address
        to: 'josephcraig.cyber.secure@gmail.com', // Receiver email address
        subject: 'Feedback from GitHub SQL Injection Webpage',
        text: `Message: ${feedbackText}\n\nDatetime: ${new Date()}`
    };

    // Send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error occurred while sending email:', error.message);
        } else {
            console.log('Email sent:', info.response);
        }
    });
};

module.exports = sendEmail;
