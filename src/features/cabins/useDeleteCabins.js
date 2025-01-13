import {useMutation, useQueryClient} from "@tanstack/react-query";
import {deleteCabin as deleteCabinApi} from "../../services/apiCabins.js";
import toast from "react-hot-toast";

const useDeleteCabin=()=>{

    //TODO Accessing the Query Client we created on our App
    const queryClient=useQueryClient()

    const{isLoading:isDeleting,mutate:deleteCabin}=useMutation({
        //TODO  mutationFn:(id)=>deleteCabin(cabinId)
        mutationFn:deleteCabinApi,
        onSuccess:()=>{
            toast.success("Cabin Deleted Sucessfully")
            //    TODO Manually invalidate query

            queryClient.invalidateQueries({
                queryKey:["cabins"]
            })
        },
        onError:(error) =>{
            console.log("ERROR SAHAN")
            toast.error(error.message)
        }
    })

    return {isDeleting,deleteCabin}
}

export default useDeleteCabin


