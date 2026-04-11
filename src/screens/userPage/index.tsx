import { Box, Container, Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LocationPinIcon from '@mui/icons-material/LocationOn';
import { Settings } from "./Settings";
import "../../css/userPage.css";
import { Navigate } from "react-router-dom";
import { useGlobals } from "../../app/hooks/useGlobals";
import { serverApi } from "../../lib/config";

export default function UserPage() {
  const { authMember } = useGlobals();
   if (!authMember) return <Navigate to="/" />;
  return (
    <div className={"user-page"}>
      <Container>
        <Stack className={"my-page-frame"}>
          <Stack className={"my-page-left"}>
            <Box display={"flex"} flexDirection={"column"}>
              <Box className={"menu-name"}>Modify Member Details</Box>
              <Box className={"menu-content"}>
                <Settings />
              </Box>
            </Box>
          </Stack>

          <Stack className={"my-page-right"}>
            <Box className={"order-info-box"}>
              <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
              >
                <div className={"order-user-img"}>
                  <img
                    src={authMember?.memberImage
                      ? `${serverApi}/${authMember.memberImage}`
                      : "/icons/default-user.webp"}
                    className={"order-user-avatar"}
                  />
                </div>
                <span className={"order-user-name"}>{authMember?.memberNick}</span>
                <span className={"order-user-prof"}>{authMember?.memberType}</span>
                <span className={"order-user-prof2"}>
                  <LocationPinIcon fontSize="small"/>
                  {authMember?.memberAddress
                    ? authMember.memberAddress
                    : "no address"}
                  </span>
              </Box>
              <Box className={"user-media-box"}>
                <FacebookIcon  sx={{color: "rgb(212, 175, 55)"}}/>
                <InstagramIcon sx={{color: "rgb(212, 175, 55)"}} />
                <TelegramIcon sx={{color: "rgb(212, 175, 55)"}}/>
                <YouTubeIcon sx={{color: "rgb(212, 175, 55)"}}/>
              </Box>
              <p className={"user-desc"}>{"user-desc"}
                {authMember?.memberDesc
                  ? authMember.memberDesc
                  : "no description"}</p>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
