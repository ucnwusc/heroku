import {ChakraProvider} from "@chakra-ui/react";
import {BrowserRouter, Route, Routes} from "react-router";
import Demo from "./pages/app/Demo";
import ComingSoon from "./pages/ComingSoon";
import Contact from "./pages/ContactUs";
import Error404 from "./pages/errors/Error404";
import Landing from "./pages/Landing";
import PublicLayout from "./pages/layouts/PublicLayout.jsx";
import theme from "./theming/theme";

function App() {
    return (
        <ChakraProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    {/* public pages */}
                    <Route path="/" element={PublicLayout}>
                        <Route index element={Landing} />
                        <Route path="product" element={ComingSoon} />
                        <Route path="healthcare" element={ComingSoon} />
                        <Route path="contact-us" element={Contact} />
                    </Route>

                    {/* app */}
                    <Route path="/demo">
                        <Route index element={Demo} />
                    </Route>

                    {/* page not found */}
                    <Route path="*" element={Error404} />
                </Routes>
            </BrowserRouter>
        </ChakraProvider>
    )
}

export default App
