import {useQuery} from "@tanstack/react-query";
import {getUsers} from "../../services/apiUsers.js";

const useUsers=()=>{

    const {isLoading:loading,data:userData}=useQuery({
        queryKey:["users"],
        queryFn:getUsers,
        select:(data)=>data.map((user)=>{
            return user.email
        })
    })

    return{loading,userData}
}

export default useUsers