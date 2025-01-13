import {useMutation, useQueryClient} from "@tanstack/react-query";
import {createEditCabin} from "../../services/apiCabins.js";
import toast from "react-hot-toast";


const useEditCabin=()=>{

    const queryClient=useQueryClient();

    const {mutate:editCabin,isLoading:isEditing}=useMutation({
        // mutationFn:(newCabinData,id)=>createEditCabin(newCabinData,id),
        mutationFn:({newCabinData,id})=>createEditCabin(newCabinData,id),
        onSuccess:()=>{
            toast.success("Cabin is Updated  Successfully")
            //TODO Invalidate Cabins Query for Manually refetch
            queryClient.invalidateQueries({queryKey:"cabins"})
            // reset()
        },
        onError:(error)=>{toast.error(error.message)}
    })

    return {editCabin,isEditing}
}

export default useEditCabin

