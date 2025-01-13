import styled from "styled-components";
import Heading from "../../ui/Heading.jsx";
import Row from "../../ui/Row.jsx";

import {useQuery} from "@tanstack/react-query";

import {getCabins }from "../../services/apiCabins.js";
import Spinner from "../../ui/Spinner.jsx";
import CabinRow from "./CabinRow";
import CabinRows from "./CabinRow";
import useCabins from "./useCabins.js";
import {getUsers} from "../../services/apiUsers.js";
import useUsers from "../users/useUsers.js";

const Table = styled.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
`;

const CabinTable = () => {

    const {isLoading,cabins,error}=useCabins()

    // const {loading,userData}=useUsers()
    //
    // console.log("DATA OF CABIN is ",cabins)
    // console.log("USER DATA IS  ",userData)
    // console.log("USER DATA IS  ",typeof(userData))


    if(isLoading) return <Spinner/>
    return (
        <div>
            <Table role={"table"}>
                <TableHeader>
                    <div></div>
                    <div>Cabin</div>
                    <div>Capacity</div>
                    <div>Price</div>
                    <div>Discount</div>
                    <div></div>
                </TableHeader>
                {
                    cabins.map((cabin)=>{
                        return(
                            <CabinRows cabin={cabin} key={cabin.id}/>
                            )
                    })
                }
            </Table>
        </div>
    )
}

export default CabinTable
