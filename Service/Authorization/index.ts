import Request from "../index"
import { handleRequestErrors } from "../../utils/functions/errorHandler"

interface Data {
    data:{}
}

export const login = async (dataToSend:Data)=>{
    try {
        const response = await Request.post('/somewhere',dataToSend);
        const {status, data} = response
        return {status, data}
    } catch (error) {
        handleRequestErrors(error)
    }
}