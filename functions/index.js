const {onRequest} = require("firebase-functions/v2/https");
const nodemailer = require("nodemailer");
const fetch = require("node-fetch");

exports.send_email = onRequest(
  { 
    cors: true,
    methods: ["POST"],
  },
    async (req, res) => {
      const transporter = nodemailer.createTransport({
        host: "smtp.seznam.cz",
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });
      transporter.verify((error, success) => {
        if (error) {
          console.error("Chyba při ověřování transportéru:", error);
        } else {
          console.log("Transportér je správně nakonfigurován:", success);
        }
      });
      const {from, service, name, tel, ico, description} = req.body;
      try {
        const user = await transporter.sendMail({
          from: `"ITaborsky.cz" <taborsky@itaborsky.cz>`,
          to: from,
          subject: `ITaborsky: Poděkování za nezávaznou žádost o službu ${service}` ,
          html: `
              <body style="margin: 0; padding: 0; background-color: #ffffff;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#ffffff">
                  <tr>
                    <td>
                      <table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" bgcolor="#ffffff" style="background-color: #ffffff; border: 0.3px solid #000000; box-shadow: 10px 10px 30px #000000; padding: 40px; font-family: Arial, Helvetica, sans-serif; font-size: 18px;">
                        <tr>
                          <td>
                            <img src="cid:logo" alt="Logo" width="175" style="display: block; padding-bottom: 50px;" />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p style="color:#000000; font-weight: 300; padding-bottom: 15px;">Moc Vám děkuji za Vaši žádost :).</p>
                            <p style="color:#000000; font-weight: 300; padding-bottom: 15px;">Co nejdříve se ozvu a domluvíme se na online nebo osobní schůzce.</p>
                            <p style="color:#000000; font-weight: 300; line-height: 35px; padding-bottom: 30px;">S pozdravem, <br>
                              <strong>Daniel Táborský</strong>
                            </p>
                            <p style="color:#000000; font-weight: 300; line-height: 35px; padding-bottom: 30px;">
                              Web: <a href="https://Itaborsky.cz" style="color:#000000;">Itaborsky.cz</a> <br>
                              E-mail: <a href="mailto:taborsky@itaborsky.cz" style="color:#000000;">taborsky@itaborsky.cz</a> <br>
                              Tel: (+420) 731 124 827 <br>
                            </p>
                            <img src="cid:me" alt="Daniel Táborský" width="225" style="display: block;">
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </body>
              `,
              attachments: [
                {
                  filename: "logo.png",
                  path: "./logo.png",
                  cid: "logo",
                },
                {
                  filename: "me.png",
                  path: "./me.png",
                  cid: "me",
                }
              ],
        });
        const info = await transporter.sendMail({
          from: `"ITaborsky.cz" <taborsky@itaborsky.cz>`,
          to: "taborsky@itaborsky.cz",
          subject: `ITaborsky.cz: Nová nezávazná žádost o službu ${service}`,
          html: `
              <body style="margin: 0; padding: 0; background-color: #ffffff;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#ffffff">
                  <tr>
                    <td>
                      <table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" bgcolor="#07031A" style="background-color:rgb(255, 255, 255); border: 0.3px solid #000000; box-shadow: 10px 10px 30px #000000; padding: 40px; font-family: Arial, Helvetica, sans-serif; font-size: 18px;">
                        <tr>
                          <td>
                            <img src="cid:logo" alt="Logo" width="175" style="display: block; padding-bottom: 50px;" />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p style="color:#000000; font-weight: 300; padding-bottom: 15px;">Byla zaslána žádost na službu <strong>${service}</strong> :).</p>
                            <p style="color:#000000; font-weight: 300; padding-bottom: 10px;"><strong>Jméno a příjmení</strong>: ${name}</p>
                            <p style="color:#000000; font-weight: 300; padding-bottom: 10px;"><strong>E-mail:</strong> ${from}</p>
                            <p style="color:#000000; font-weight: 300; padding-bottom: 10px;"><strong>Tel.:</strong> ${tel}</p>
                            <p style="color:#000000; font-weight: 300; padding-bottom: 10px;"><strong>Ičo:</strong> ${ico}</p>
                            <p style="color:#000000; font-weight: 300; padding-bottom: 50px;"><strong>Popis projektu:</strong> ${description}</p>
                            <p style="color:#000000; font-weight: 300; line-height: 35px;">S pozdravem, <br>
                              <strong>ITaborsky.cz</strong>
                            </p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </body>
              `,
              attachments: [
                {
                  filename: "logo.png",
                  path: "./logo.png",
                  cid: "logo",
                }
              ],
        });
        console.log("Email sent:", user);
        console.log("Email sent:", info);
        res.status(200).json({message: "Email sent successfully!"});
      } catch (error) {
        console.error("Error while sending email:", error);
        res.status(500)
            .json({error: "Failed to send email", details: error.message});
      }
    });

    exports.index_now = onRequest(
      { 
        cors: true,
        methods: ["POST"],
      },
      async (req, res) => {
      const payload = {
          host: "https://itaborsky.cz",
          key: "21be6e1b47d54025a332a85d96ee45dd",
          keyLocation: "https://itaborsky.cz/21be6e1b47d54025a332a85d96ee45dd.txt",
          urlList: ["https://itaborsky.cz"],
      };
      try {
          const response = await fetch("https://api.indexnow.org/indexnow", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify(payload),
          });
          const result = await response.text();
          res.status(200).send(result);
      } catch (error) {
          res.status(500).send({ error: error.message });
      }
  });