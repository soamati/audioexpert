const runEngine = require("../libs/engine");
const sendEmail = require("../libs/sendEmail");

exports.recommend = async (req, res, next) => {
  try {
    console.log(req.params);
    const { facts, options } = req.body;

    const results = await runEngine(facts);

    if (results.error) {
      res.status(400);
      res.json(results);
      return;
    }

    let emailPromise;
    if (options.sendMeEmail) {
      emailPromise = sendEmail(options.email, results);
      results.sendMeEmail = true;
    }

    const emailInfo = await emailPromise;
    if (emailInfo && emailInfo.messageId) {
      results.emailSent = true;
    } else {
      results.emailSent = false;
    }

    res.json(results);
  } catch (err) {
    next(err);
  }
};
