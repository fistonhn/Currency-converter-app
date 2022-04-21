const  convertInput = require('../helper/input')

const validateInput = (req, res, next) => {
  const { error } = convertInput(req);
  if (error) return res.status(400).json({ status: res.statusCode, error: error.details[0].message });

  next();
};

module.exports = validateInput;
