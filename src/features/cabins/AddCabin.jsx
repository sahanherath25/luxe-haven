import React, {createContext} from "react";
import Button from "../../ui/Button.jsx";
import {useState} from "react";
import CreateCabinForm from "./CreateCabinForm.jsx";
import CabinTable from "./CabinTable.jsx";
import Modal from "../../ui/Modal.jsx";



const AddCabin=()=>{
    return(
        <Modal>
            <Modal.Open opens={"cabin-form"}>
                <Button>Add New Cabin </Button>
            </Modal.Open>

            <Modal.Window name={"cabin-form"}>
                <CreateCabinForm />
            </Modal.Window>

            <Modal.Open opens={"table"}>
                <Button>Show table</Button>
            </Modal.Open >

            <Modal.Window name={"table"}>
                <CabinTable/>
            </Modal.Window>
        </Modal>


    )
}




// const AddCabin = () => {
//
//     const [isOpenModal, setIsOpenModal] = useState(false);
//
//     return (
//         <div>
//             <Button onClick={() => setIsOpenModal((prevState) => !prevState)}>Add New Cabin</Button>
//             {isOpenModal && (
//                 <Modal onCloseModal={()=>setIsOpenModal(false)}>
//                     <CreateCabinForm onCloseModal={()=>setIsOpenModal(false)}/>
//                 </Modal>
//             )
//             }
//
//         </div>
//     )
// }

export default AddCabin