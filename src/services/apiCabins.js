//TODO  Define our Different method (HTTP) to GET<SET<UPDATE and DELETE Operation using function provided by supabase

import supabase from "./supabase.js";
import log from "eslint-plugin-react/lib/util/log.js";

export const getCabins = async () => {

    let {data: cabins, error} = await supabase
        .from('cabins')
        .select('*')

    if (error) {
        console.error("ERROR ", error)
        throw new Error("Cabins are Not Loading Due to Error")
    }
    return cabins
}


export const deleteCabin = async (id) => {

    const {data, error} = await supabase
        .from('cabins')
        .delete()
        .eq("id", id)

    console.log("DELETING CABIN")

    if (error) {
        console.error("ERROR ", error)
        throw new Error("Cabins Cannot Be Deleted Due to About Error")
    }

    return data

}

export const createEditCabin = async (newCabinData,id) => {

    const hasImagePath=newCabinData.image?.startsWith?.(import.meta.env.VITE_SUPABASE_URL);


    const imageName=`${Math.random()}-${newCabinData.image.name}`.replaceAll("/","")
    //TODO If file name contaiing any / supabase will create a folder for each /  wtihin and image will be saved

    //Creating image path with storage bucket path
    const imagePath= hasImagePath?newCabinData.image:`${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/cabin-images/${imageName}`
    let query=supabase.from("cabins")

    //TODO A.CREATE Cabin
    if(!id){
        //TODO No id means we going to create new cabin
        query=query.insert([ {...newCabinData,image:imagePath}])
    }

    //TODO B.EDIT A CABIN
    if(id){
        query=query.update([ {...newCabinData,image:imagePath}]).eq("id",id)
    }
    const {data, error} =await query.select()
    if (error) {
        console.error("ERROR ", error)
        throw new Error("Cabins Cannot be Created Due to Error")
    }


    console.log("MY DUB DATA ",data)
    if(hasImagePath) return data

    //TODO 2.Upload Image
    const {  error:storageError } = await supabase
        .storage
        .from('cabin-images')
        .upload(imageName, newCabinData.image)

    //TODO Prevent new cabin getting created if there is any Exception occured when saving image
    if(storageError){
        await supabase
            .from('cabins')
            .delete()
            .eq("id", data.id)

        console.error("ERROR ", error)
        throw new Error("Exception occured when Image is uploading Cabin is not created ")

    }

    return data
}

