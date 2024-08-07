import axios from "axios";

const BASE_KEY = 'SxX8SJVptwvSJlx8E139NUqSLTpdb58x'
axios.defaults.baseURL = 'https://api.currencybeacon.com/v1'
export const getCurrencies = () => {
    const params = {
        type: 'fiat'
    }

    const data = axios.get(`/currencies?api_key=${BASE_KEY}`, params)

    return data
}

export const currencyConvert = async (to, amount) => {
    const params = {
        from: 'USD',
        to,
        amount,
    }

    try {
        const data = await axios.get(`https://api.currencybeacon.com/v1/convert?from=USD&api_key=${BASE_KEY}&to=${to}&amount=${amount}`)

        return data
    } catch (err) {
        return err.message
    }
}