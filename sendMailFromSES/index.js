'use strict'
const SDK = require('aws-sdk');

exports.handler = (event, context, callback) => {
    const ses = new SDK.SES({ region: 'us-east-1' });
    const email = {
        // From
        Source: "1reanati@gmail.com",
        // To
        Destination: { ToAddresses: ["1reanati@gmail.com"] },
        Message: {
            // 件名
            Subject: { Data: "Alexaからのメール" },
            // 本文
            Body: {
                Text: { Data: [
                    event.form.body,
                ].join("\n")}
            },
        },
    };
    ses.sendEmail(email, callback);
};
