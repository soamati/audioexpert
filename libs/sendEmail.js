const nodemailer = require("nodemailer");

async function sendEmail(email, results) {
  const options = {
    service: "gmail",
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
    name: "AudioExpert",
  };

  const transporter = nodemailer.createTransport(options);

  const { altavoz, auricular, microfono } = results.recommendation;
  const resultsHTML = `
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Secular+One&display=swap');
      </style>
      <div style="font-family: 'Secular One'; color: black; text-align: center">
      <h1 style="color: #f53b57">Sistema de audio recomendado para tu PC</h1>
      <img src="https://i.imgur.com/eqg2Jrp.png" alt="logo" style="width: 20%; min-width: 300px" />
      <h2 style="color: #575fcf">Altavoz</h2>
      <p style="color: #1e272e">Conectividad: ${altavoz.CONECTIVIDAD}</p>
      <p style="color: #1e272e">Potencia: ${altavoz.POTENCIA}</p>
      <p style="color: #1e272e">Direccionalidad: ${altavoz.DIRECCIONALIDAD}</p>
      <hr style="border-top: 1px solid #808e9b; width: 30%" />
      <h2 style="color: #575fcf">Auricular</h2>
      <p style="color: #1e272e">Tipo: ${auricular.TIPO}</p>
      <p style="color: #1e272e">Conectividad: ${auricular.CONECTIVIDAD}</p>
      <p style="color: #1e272e">Comodidad: ${auricular.COMODIDAD}</p>
      <hr style="border-top: 1px solid #808e9b; width: 30%" />
      <h2 style="color: #575fcf">Micrófono</h2>
      <p style="color: #1e272e">Tipo: ${microfono.TIPO}</p>
      <p style="color: #1e272e">Conectividad: ${microfono.CONECTIVIDAD}</p>
      <p style="color: #1e272e">Direccionalidad: ${microfono.DIRECCIONALIDAD}</p>
      <br />
      <a href="https://www.facebook.com/">
        <button
          to="facebook.com"
          style="
            font-family: 'Secular One';
            border-radius: 20px;
            background-color: #575fcf;
            color: #fff;
            height: 40px;
            width: 150px;
            border: none;
          "
        >
          Visítanos
        </button>
      </a>
    </div>
  `;

  const emailInfo = await transporter.sendMail({
    from: "'AudioExpert' <audioexpertapp@gmail.com>",
    to: email,
    //text: JSON.stringify(results),
    subject: "Sistema de audio para tu PC",
    html: resultsHTML,
  });

  return emailInfo;
}

module.exports = sendEmail;
