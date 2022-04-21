const CC = require("currency-converter-lt");

const convertData = async (req, res) => {
    const { fromCurrency, toCurrency, amountToConvert } = req.body;

    let currencyConverter = new CC(
        {
            from: fromCurrency,
            to: toCurrency,
            amount: amountToConvert
        }
    );
    
    currencyConverter.convert().then((response)=>{
        console.log(amountToConvert + " " + fromCurrency + " is equal to " + 
            response + " " + toCurrency);
            res.status(201).json({ status: 201, message: 'Data Converted successfull', response });

    });
};

  module.exports = convertData;
