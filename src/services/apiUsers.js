import axios from "axios";

export const getUsers = async () => {

    const response=await axios.get("http://127.0.0.1:3030/api/v1/users")

    const data=response.data.data.data

    console.log("REspionse DATA  ",response)
    console.log("RETURNING DATA  ",data)
    return data
 
}