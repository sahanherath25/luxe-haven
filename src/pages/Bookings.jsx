import Heading from "../ui/Heading";
import Row from "../ui/Row";
import toast, {Toaster} from "react-hot-toast";

function Bookings() {
    return (
        <Row type="horizontal">

            <button onClick={() => toast.success('It works!')}>Show Toast</button>

            <Heading as="h1">All bookings</Heading>
            <p>TEST</p>
        </Row>
    );
}

export default Bookings;
