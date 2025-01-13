import {useQuery} from "@tanstack/react-query";
import {getCabins} from "../../services/apiCabins.js";

const useCabins=()=>{
    const {isLoading,data:cabins,error}=useQuery({
        queryKey:["cabins"],
        //TODO actual function to fetch data
        queryFn:getCabins
    })

    return {isLoading,cabins,error}
}

export default useCabins