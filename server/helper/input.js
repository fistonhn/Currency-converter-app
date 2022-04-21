const Joi = require('@hapi/joi');

const convertInput = (req) => {
  const schema = Joi.object().keys({
    fromCurrency: Joi.string().required(),
    toCurrency: Joi.string().required(),
    amountToConvert: Joi.number().required(),
  });

  return Joi.validate(req.body, schema);
};

module.exports = convertInput;
