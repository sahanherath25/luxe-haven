import Heading from "../ui/Heading";
import Row from "../ui/Row";
import toast from "react-hot-toast";

function Dashboard() {

    toast.dismiss('Successfully toasted!')

    return (
        <Row type="horizontal">
            <Heading as="h1">Dashboard</Heading>
            <p>TEST</p>
        </Row>
    );
}

export default Dashboard;
