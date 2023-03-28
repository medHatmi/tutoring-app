require("dotenv").config()
const nodemailer = require("nodemailer")


// send email
exports.send_mail = async (req, res)=>{

    const { firstName, lastName, email } = req.body
    // console.log(req.body);
	const transport = nodemailer.createTransport({
		host: process.env.MAIL_HOST,
		port: process.env.MAIL_PORT,
		auth: {
			user: process.env.MAIL_USER,
			pass: process.env.MAIL_PASS
		}
	})

	await transport.sendMail({
		from: process.env.MAIL_FROM,
		to: email,
		subject: "test email",
		html: `<div className="email" style="
        border: 1px solid black;
        padding: 20px;
        font-family: sans-serif;
        line-height: 2;
        font-size: 20px; 
        ">
        <h2>Here is your email!</h2>
        <p>unread message sent ${firstName} ${lastName}</p>
    
        <p>All the best, TUTORS</p>
         </div>
    `
    })
    
}

