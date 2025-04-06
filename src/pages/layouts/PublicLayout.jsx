import {Flex} from "@chakra-ui/react";
import {Outlet} from "react-router";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const PublicLayout = () => {
    return <Flex height="100%" direction="column" pt="20">
        <Navbar />
        <Outlet /> {/* app content */}
        <Footer />
    </Flex>;
};

export default <PublicLayout />;
