import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'ccf9529207414882afef3abc91c55496'
    }
})