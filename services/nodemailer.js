const transporter = nodemailer.createTransport({
  host: "smtp.gmail.net",
  port: 465,
  secure: true,
  auth: {
    user: "REPLACE-WITH-YOUR-ALIAS@YOURDOMAIN.COM",
    pass: "REPLACE-WITH-YOUR-GENERATED-PASSWORD",
  },
});
const mailer = async (mail) => {
  const info = await transporter.sendMail({
    from: "prabin", // sender address
    to: mail, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });
  return info.messageID;
};
