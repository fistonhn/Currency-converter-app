import React, { useState } from 'react'
import axios from 'axios'
import { language } from '../components/language'

const label = {
  "width": "325px",
  "color": "white",
  "fontSize": "21px"
}

const CurrencyConverter = () => {
    const [data, setData] = useState({
        conversionResult: '',
        fromCurrency: 'USD', 
        toCurrency: 'USD', 
        amountToConvert: 1
    })

    const handleInput = (e) => {
        const { name, value } = e.target

        setData({ ...data, [name]: value })
      }

    const handleSwitch = () => {
        const { fromCurrency, toCurrency, amountToConvert } = data;
        setData({ fromCurrency: toCurrency, toCurrency: fromCurrency, amountToConvert: amountToConvert });
    };

    const convertCurrency = async () => {
        const newData = {
        fromCurrency: data.fromCurrency, 
        toCurrency: data.toCurrency, 
        amountToConvert: parseInt(data.amountToConvert)
        }
        console.log(newData)

      const response = await axios.post('http://localhost:7000/api/convert', newData)
  
    //   setData(response.data.data)
    setData({ conversionResult: response.data.response, fromCurrency: data.fromCurrency, toCurrency: data.toCurrency, amountToConvert: parseInt(data.amountToConvert) })
    console.log(data.conversionResult)
    // console.log(response)
    }

        return (
            <>
                <div className='container-fluid shadow'>
                    <input
                        name="amountToConvert"
                        value={data.amountToConvert}
                        className="form-control-lg mt-5 shadow amount bg-dark"
                        placeholder="Enter Amount"
                        onChange={handleInput}
                        type="number"
                    />
                    <div className='fromdrop'>
                        <label className="dropdown" style={label} labelName="Into">
                            <select
                                name="fromCurrency"
                                value={data.fromCurrency}
                                className='form-select bg-dark custom-select form-select-lg text-white border-dark shadow'
                                onChange={handleInput}
                                >
                                {language.map(languages =>
                                    <option key={languages.code}>{languages.code}</option>
                                )}
                            </select>
                        </label>
                    </div>


                    <div className='text-center swap'>
                        <button className="btn shadow text-center" onClick={handleSwitch}><i className="fas fa-sort"></i></button>
                    </div>

                    <div className='fromdrop'>
                        <label className="dropdown" style={label} labelName="Into">
                            <select
                                name="toCurrency"
                                className='form-select bg-dark custom-select form-select-lg text-white border-dark shadow'
                                value={data.toCurrency}
                                onChange={handleInput}
                                >
                                {language.map(languages =>
                                    <option key={languages.code}>{languages.code}</option>
                                )}
                            </select>
                        </label>
                    </div>
                    <div className="mt-5 text-center">
                        <button
                            className='btn btn-scolor btn-lg shadow'
                            disabled={data.amountToConvert === "0" || data.amountToConvert === "" || data.amountToConvert < 0}
                            onClick={convertCurrency}
                        >Convert</button>
                    </div>
                    <div className='mt-5 mb-2 text-center'>
                       <h1 className="result">{data.conversionResult}</h1>
                    </div>
                </div>
            </>
        )}

export default CurrencyConverter