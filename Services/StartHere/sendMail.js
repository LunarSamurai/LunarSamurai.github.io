const nodemailer = require('nodemailer');
const { google } = require('googleapis');

// Create an OAuth2 client with the credentials
const oAuth2Client = new google.auth.OAuth2(
    '996730462967-ccou21ebqr9r6mrga33u96ql01dnv9kt.apps.googleusercontent.com',
    '996730462967-ccou21ebqr9r6mrga33u96ql01dnv9kt.apps.googleusercontent.com',
    'https://developers.google.com/oauthplayground' // Redirect URI
);

oAuth2Client.setCredentials({
    refresh_token: 'Request details: access_type=offline response_type=code redirect_uri=https://developers.google.com/oauthplayground prompt=consent client_id=996730462967-ccou21ebqr9r6mrga33u96ql01dnv9kt.apps.googleusercontent.com scope=https://mail.google.com/ https://www.googleapis.com/auth/gmail.addons.current.action.compose https://www.googleapis.com/auth/gmail.addons.current.message.action https://www.googleapis.com/auth/gmail.addons.current.message.metadata https://www.googleapis.com/auth/gmail.addons.current.message.readonly https://www.googleapis.com/auth/gmail.compose https://www.googleapis.com/auth/gmail.insert https://www.googleapis.com/auth/gmail.labels https://www.googleapis.com/auth/gmail.metadata https://www.googleapis.com/auth/gmail.modify https://www.googleapis.com/auth/gmail.readonly https://www.googleapis.com/auth/gmail.send https://www.googleapis.com/auth/gmail.settings.basic https://www.googleapis.com/auth/gmail.settings.sharing'
});

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        type: 'OAuth2',
        user: 'josephcraig.cyber.secure@gmail.com', // Your Gmail email address
        clientId: '996730462967-ccou21ebqr9r6mrga33u96ql01dnv9kt.apps.googleusercontent.com',
        clientSecret: '996730462967-ccou21ebqr9r6mrga33u96ql01dnv9kt.apps.googleusercontent.com',
        refreshToken: 'Request details: access_type=offline response_type=code redirect_uri=https://developers.google.com/oauthplayground prompt=consent client_id=996730462967-ccou21ebqr9r6mrga33u96ql01dnv9kt.apps.googleusercontent.com scope=https://mail.google.com/ https://www.googleapis.com/auth/gmail.addons.current.action.compose https://www.googleapis.com/auth/gmail.addons.current.message.action https://www.googleapis.com/auth/gmail.addons.current.message.metadata https://www.googleapis.com/auth/gmail.addons.current.message.readonly https://www.googleapis.com/auth/gmail.compose https://www.googleapis.com/auth/gmail.insert https://www.googleapis.com/auth/gmail.labels https://www.googleapis.com/auth/gmail.metadata https://www.googleapis.com/auth/gmail.modify https://www.googleapis.com/auth/gmail.readonly https://www.googleapis.com/auth/gmail.send https://www.googleapis.com/auth/gmail.settings.basic https://www.googleapis.com/auth/gmail.settings.sharing',
        accessToken: oAuth2Client.getAccessToken()
    }
});

// Function to send the email
const sendEmail = (feedbackText) => {
    // Email content
    const mailOptions = {
        from: 'josephcraig.cyber.secure@gmail.com', // Sender email address
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
