import styled from "styled-components";

import Input from "../../ui/Input.jsx";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";

import {useForm} from "react-hook-form";

import FormRow from "../../ui/FormRow.jsx";
import useEditCabin from "./useEditCabin.js";
import useCreateCabin from "./useCreateCabin.js";



const FormRow2 = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function CreateCabinForm({cabinToEdit={},onCloseModal}) {


    //TODO Destructuring cabinData
    const {id:editId,...editValues}=cabinToEdit

    console.log("CABIN EDIT ",editId)
    console.log("CABIN Vlues ",editValues)

    //TODO Checking  if there is id already
    const isEditSession=Boolean(editId)

    const {register, handleSubmit,getValues,formState,reset} = useForm({
        defaultValues:isEditSession?editValues:{}
    })

    const {createCabin,isCreating}=useCreateCabin()
    const {editCabin,isEditing}=useEditCabin()

    const {errors}=formState
    const isWorking=isCreating||isEditing;



    const onSubmit = (data) => {
        //Checking image
        const image=typeof data.image==="string"?data.image:data.image[0]

        if(isEditSession){
            editCabin({newCabinData:{...data,image},id:editId},{
                onSuccess:(data)=>{
                    //TODO data is the returned data new/edited is sucess
                    console.log("Edited Data DATA ",data)
                    reset()
                }
            })
        }else {
            createCabin({...data,image:image},{
                onSuccess:(data)=>{
                    //TODO data is the returned data new/edited is sucess
                    console.log("NEW DATA ",data)
                    reset()
                    onCloseModal?.()
                }
            })
        }
    }


    const onError = (errors) => {
        console.error("Error in the form ",errors)
    }

    console.log(getValues())
    return (

        <Form onSubmit={handleSubmit(onSubmit,onError)} type={onCloseModal ? "modal":"regular" }>

            <FormRow label={"Cabin Name"} error={errors?.name?.message}>
                <Input type="text" id="name"  disabled={isWorking} {...register("name",{
                    required:"This Name Field is Required"})
                }/>
            </FormRow>

            <FormRow label={"Maximum capacity"} error={errors?.maxCapacity?.message}>
                <Input type="number" id="maxCapacity" disabled={isWorking}  {...register("maxCapacity",{
                    required:"This Field is Required",
                    min:{value:1,message:"Capacity Should at least 1"}
                }
                )}/>
            </FormRow>

            <FormRow label={"Regular price"} error={errors?.regularPrice?.message}>
                <Input type="number" id="regularPrice" disabled={isWorking}  {...register("regularPrice",{
                    required:"This Field is Required",
                }
                )} />

            </FormRow>
            <FormRow label={"Discount"} error={errors?.discount?.message} >
                <Input type="number" id="discount" defaultValue={0} disabled={isWorking}   {...register("discount",{
                    required:"This Field is Required"})
                }/>
            </FormRow>

            <FormRow label={"Description for website"} error={errors?.description?.message}>
                <Textarea type="number" id="description" disabled={isWorking}  defaultValue="" {...register("description",{
                    required:"This Field is Required"})
                } />
            </FormRow>

            <FormRow label={"Cabin photo"} error={errors?.image?.message}>
                <FileInput id="image" accept="image/*"   {...register("image",{
                    required:isEditSession?false:"This Field is Required"})
                }  />
            </FormRow>

            <FormRow>
                {/* type is an HTML attribute! */}
                <Button variation="secondary" type="reset" onClick={()=>onCloseModal?.()}>
                    Cancel
                </Button>
                <Button disabled={isWorking} >{isEditSession?"EditCabin":"Create New Cabin"}</Button>
            </FormRow>
        </Form>
    );
}

export default CreateCabinForm;
