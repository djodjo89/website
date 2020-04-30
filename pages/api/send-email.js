const cors = require('cors')({ origin: true });
const mailer = require('nodemailer');
const { google } = require('googleapis');
const validator = require('node-email-validation');
const Entities = require('html-entities').AllHtmlEntities;

const {
    OAUTH_CLIENT_ID,
    OAUTH_CLIENT_SECRET,
    OAUTH_TOKEN_REFRESH,
    OAUTH_PLAYGROUND_URL,
    OAUTH_USER_EMAIL,
} = process.env;

const tokenRefresh = decodeURIComponent(OAUTH_TOKEN_REFRESH);

const OAuth2 = google.auth.OAuth2;
const entities = new Entities();

const oauth2Client = new OAuth2(
    OAUTH_CLIENT_ID,
    OAUTH_CLIENT_SECRET,
    OAUTH_PLAYGROUND_URL,
);

oauth2Client.setCredentials({
    refresh_token: tokenRefresh,
});

module.exports = (req, res) => {
    cors(req, res, async () => {
        const accessToken = await oauth2Client.getAccessToken();

        const transport = mailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: OAUTH_USER_EMAIL,
                clientId: OAUTH_CLIENT_ID,
                clientSecret: OAUTH_CLIENT_SECRET,
                refreshToken: tokenRefresh,
                accessToken: accessToken,
            },
        });

        const isString = variable => typeof variable === 'string';
        const message = {};
        const encodeBody = _ => Object.entries(req.body)
            .filter(entry => isString(entry[0]) && isString(entry[0]))
            .map(entry => entry.map(entities.encode))
            .forEach(entry => message[entry[0]] = entry[1]);

        encodeBody();

        const {
            name,
            email,
            subject,
            content
        } =  message;

        console.log('Message', message);

        const correctEmail = validator.is_email_valid(email);
        const emptySubject = subject === '';
        const body = {
            status: 400,
            message: 'No message set yet',
        };

        if (correctEmail && !emptySubject) {
            const options = {
                from: `${name} - <${email}>`,
                to: OAUTH_USER_EMAIL,
                subject: subject,
                text: `From: ${email}\n\n${content}`,
            };

            transport.sendMail(options, error =>{
                if (error) {
                    body.message = `Email could not be sent due to error ${error}`;
                } else {
                    body.status = 201;
                    body.message = 'Email has been sent successfully';
                }
                res.json(body);
            });
        } else {
            if (!correctEmail) {
                body.status = 422;
                body.message = `Email address ${email} is incorrect`;
            } else if (emptySubject) {
                body.message ='Error, subject is empty';
            }
            res.json(body);
        }
    });
};
