import { Box, Container, Stack } from "@mui/material";

const stats = [
    { value: "7+", label: "Years Experience" },
    { value: "8K+", label: "Sofas Delivered" },
    { value: "270+", label: "Luxury Designs" },
    { value: "10K+", label: "Happy Customers" },
];

export default function Statistics() {
    return (
    <div className="static-frame">
        <Container>
            <Stack className="info">
                {stats.map((stat) => (
                    <Stack className="static-box" key={stat.label}>
                        <Box className="static-num">{stat.value}</Box>
                        <Box className="static-txt">{stat.label}</Box>
                    </Stack>
                ))}
            </Stack>
        </Container>
    </div>
);
}
