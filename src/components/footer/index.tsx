
import { Box, Container, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LocationPinIcon from '@mui/icons-material/LocationPin';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const Footers = styled.div`
  width: 100%;
  height: 460px;
  display: flex;
  background:
        linear-gradient(rgba(0,0,0,0.80), rgba(0,0,0,0.80)),
        url('/img/main3.jpg');
  background-size: cover;
`;

export default function Footer() {
  const authMember = true;

  return (
    <Footers>
      <Container >
        <Stack flexDirection={'row'} sx={{ mt: '94px' }}>
          <Stack flexDirection={'column'} style={{ width: '340px' }}>
    
            <Box className={'foot-desc-txt'}>
              Premium sofas crafted for comfort and style.
               Transform your living space with timeless design.
            </Box>
            <Box className="sns-context">
              <img src={'/icons/facebook.svg'} />
              <img src={'/icons/twitter.svg'} />
              <img src={'/icons/instagram.svg'} />
              <img src={'/icons/youtube.svg'} />
            </Box>
          </Stack>
          <Stack sx={{ ml: '288px' }} flexDirection={'row'}>
            <Stack>
              <Box>
                <Box className={'foot-category-title'}></Box>
                <Box className={'foot-category-link'}>
                  <Link to="/">HOME</Link>
                  <Link to="/products">SOFAS</Link>
                  {authMember && <Link to="/orders">ORDERS</Link>}
                  <Link to="/help">HELP
                  </Link>
                </Box>
              </Box>
            </Stack>
            <Stack sx={{ ml: '100px' }}>
              <Box>
                <Box className={'foot-category-title'}></Box>
                <Box
                  flexDirection={'column'}
                  sx={{ mt: '20px' }}
                  className={'foot-category-link'}
                  justifyContent={'space-between'}
                >
                  <Box flexDirection={'row'} className={'find-us'}>
                    <LocationPinIcon sx={{ color: "white", marginTop: "5px" }} />
                    <div>Haeundae,Busan</div>
                  </Box>
                  <Box className={'find-us'}>
                    <PhoneIcon sx={{ color: "white", marginTop: "5px" }} />
                    <div>+82 10 9989 7711</div>
                  </Box>
                  <Box className={'find-us'}>
                    <EmailIcon sx={{ color: "white", marginTop: "5px" }} />
                    <div> isoffaro@gmail.com</div>
                  </Box>
                  <Box className={'find-us'}>
                    <AccessAlarmIcon sx={{ color: "white", marginTop: "5px"}} />
                    <div> 09:00- 20:00</div>
                  </Box>
                </Box>
              </Box>
            </Stack>
          </Stack>
        <Box>
              <img width={'300px'} src={'/img/soffaropng.png'} />
            </Box>
        </Stack>
        <Stack style={{ border: '1px solid #C5C8C9', width: '100%', opacity: '0.2' }} sx={{ mt: '40px' }}></Stack>
        <Stack className={'copyright-txt'}>© Copyright SOFFARO.  All Rights Reserved.</Stack>
      </Container>
    </Footers>
  )
}
