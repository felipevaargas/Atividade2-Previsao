import axios from 'axios'

export const getUsers = (total = 5) => {

    return new Promise(async (resolve, reject) => {
        try {
            const response = await axios.get('https://apiprevmet3.inmet.gov.br/previsao/5300108')
            resolve(response.data)
        } catch (error) {
            reject("Ops, algo deu errado!")
        }

    })


}