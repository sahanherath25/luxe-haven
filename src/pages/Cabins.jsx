import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable.jsx";
import toast, {Toaster} from "react-hot-toast";
import AddCabin from "../features/cabins/AddCabin.jsx";


function Cabins() {

    return (
        <>
            <Row type={"horizontal"}>
                <Heading as={"h1"}>All Cabins</Heading>
            </Row>
            <Row>
                <CabinTable/>
                <AddCabin/>
            </Row>
        </>
    );
}

export default Cabins;
