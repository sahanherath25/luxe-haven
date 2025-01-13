import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input.jsx';
import {useQuery} from "@tanstack/react-query";
import {getSettings} from "../../services/apiSettings.js";
import {useForm} from "react-hook-form";
import Spinner from "../../ui/Spinner.jsx";
import useSettings from "./useSettings.js";
import useUpdateSetting from "./useEditSetting.js";

function UpdateSettingsForm() {


    const {isLoading,settings:{breakfastPrice,maxBookingLength,maxGuestPerBooking,minBookingLength}={}}=useSettings()

    const {updateSettings,isUpdating}=useUpdateSetting()

    if(isLoading) return <Spinner/>

    // console.log("MIN",minBookingLength)

    function handleUpdate(e,fieldToUpdate) {
        const {value}=e.target
        if(!value) return
        updateSettings({[fieldToUpdate]:value})
    }

  return (
    <Form>
      <FormRow label='Minimum nights/booking'>
        <Input type='number' id='min-nights' defaultValue={minBookingLength} onBlur={(e)=>handleUpdate(e,"minBookingLength")}/>
      </FormRow>
      <FormRow label='Maximum nights/booking'>
        <Input type='number' id='max-nights' defaultValue={maxBookingLength}  onBlur={(e)=>handleUpdate(e,"maxBookingLength")}/>
      </FormRow>
      <FormRow label='Maximum guests/booking'>
        <Input type='number' id='max-guests' defaultValue={maxGuestPerBooking}  onBlur={(e)=>handleUpdate(e,"maxGuestPerBooking")}/>
      </FormRow>
      <FormRow label='Breakfast price'>
        <Input type='number' id='breakfast-price' defaultValue={breakfastPrice}  onBlur={(e)=>handleUpdate(e,"breakfastPrice")}/>
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
