import {useMutation, useQueryClient} from "@tanstack/react-query";
import {createEditCabin} from "../../services/apiCabins.js";
import toast from "react-hot-toast";
import {updateSetting as updateSettingApi} from "../../services/apiSettings.js";

const useUpdateSetting=()=>{

    const queryClient=useQueryClient();

    const {mutate:updateSettings,isLoading:isUpdating}=useMutation({
        mutationFn:updateSettingApi,
        onSuccess:()=>{
            toast.success("Settings Updated  Successfully")
            //TODO Invalidate Cabins Query for Manually refetch
            queryClient.invalidateQueries({queryKey:"settings"})
            // reset()
        },
        onError:(error)=>{toast.error(error.message)}
    })

    return {updateSettings,isUpdating}

}

export default useUpdateSetting