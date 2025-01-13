import {useMutation, useQueryClient} from "@tanstack/react-query";
import {createEditCabin} from "../../services/apiCabins.js";
import toast from "react-hot-toast";


const useCreateCabin=()=>{

    const queryClient=useQueryClient();

    const {mutate:createCabin,isLoading:isCreating}=useMutation({
        mutationFn:createEditCabin,
        onSuccess:()=>{
            toast.success("New Cabin is Added Successfully")
            //TODO Invalidate Cabins Query for Manually refetch
            queryClient.invalidateQueries({queryKey:"cabins"})
        },
        onError:(error)=>{toast.error(error.message)}
    })

    return {createCabin,isCreating}

}
export default useCreateCabin
