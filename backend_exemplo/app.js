const axios = require('axios')
const express = require('express')

const app = express()

app.get('/', (req, res) => {
  function reverseStr(str) {
    return str.split("").reverse().join("")
  }

  console.log('buscando... ');

  axios.get("https://servicosfinanceiros.bnymellon.com/AppPages/investimentfunds/fund.aspx?iditem=3308")
    .then(function ({ data }) {
      console.log('data :>> ', data);

      var dateResult = data.search("ContentPlaceHolder_lblDateValue")
      var date = data.substring(dateResult + 33, dateResult + 43)
      console.log('date :>> ', date);

      var quoteResult = data.search("ContentPlaceHolder_lblQuoteValue")
      var quoteString = data.substring(quoteResult)
      var quoteStart = quoteString.search(">")
      var quoteEnd = quoteString.search("<")
      var quote = quoteString.substring(quoteStart + 1, quoteEnd)
      console.log('quote :>> ', quote);

      //24018977000102
      var cnpjResult = data.search(".pdf")
      var cnpjString = data.substring(cnpjResult - 100, cnpjResult)
      cnpjString = reverseStr(cnpjString)

      var cnpjStart = cnpjString.search(">")
      var cnpjEnd = cnpjStart - 14
      var cnpj = cnpjString.substring(cnpjEnd, cnpjStart)
      cnpj = reverseStr(cnpj)
      console.log('cnpj :>> ', cnpj);

      res.status(200).json({ date, quote, cnpj })
    })
})

const PORT = 3001
app.listen(PORT, () => {
  console.log("Servidor rodando! Porta: ", PORT);
});
