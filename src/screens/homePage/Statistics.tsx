
import { Box, Container, Stack } from "@mui/material";
import Divider from "../../components/divider";

export default function Statistics() {
    return (
    <div className="static-frame">
        <Container>
            <Stack className="info">
                <Stack className="static-box">
                    <Box className="static-num">7+</Box>
                    <Box className="static-txt">Years Experience</Box>
                </Stack>

                <Divider height="64" width="2" bg="black"/>

                 <Stack className="static-box">
                    <Box className="static-num">8K+</Box>
                    <Box className="static-txt">Sofas Delivered</Box>
                </Stack>

                <Divider height="64" width="2" bg="black"/>

                 <Stack className="static-box">
                    <Box className="static-num">270+</Box>
                    <Box className="static-txt">Luxury Designs</Box>
                </Stack>

                <Divider height="64" width="2" bg="black"/>

                 <Stack className="static-box">
                    <Box className="static-num">10K+</Box>
                    <Box className="static-txt">Happy Customers</Box>
                </Stack>

            </Stack>
        </Container>
    </div>
);
}