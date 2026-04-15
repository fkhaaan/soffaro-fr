import React, { useState } from "react";
import {
  Modal,
  Backdrop,
  Fade,
  Fab,
  Stack,
  TextField,
 
  styled,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { Messages } from "../../../lib/config";
import { LoginInput, MemberInput } from "../../../lib/types/member";
import MemberService from "../../services/MemberService";
import { sweetErrorHandling } from "../../../lib/sweetAlert";
import { useGlobals } from "../../hooks/useGlobals";

/** STYLED COMPONENTS **/
const StyledModal = styled(Modal)(({ }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const ModalContainer = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  border: "2px solid #000",
  boxShadow: theme.shadows[5] as string,
  padding: theme.spacing(2, 2, 2),
  outline: "none", // Removes the default focus outline
}));

const ModalImg = styled("img")({
  width: "62%",
  height: "100%",
  borderRadius: "10px",
  background: "#000",
  marginTop: "9px",
  marginLeft: "10px",
});

interface AuthenticationModalProps {
  signupOpen: boolean;
  loginOpen: boolean;
  handleSignupClose: () => void;
  handleLoginClose: () => void;
}

export default function AuthenticationModal(props: AuthenticationModalProps) {
  const { signupOpen, loginOpen, handleSignupClose, handleLoginClose } = props;
  const [memberNick, setMemberNick] = useState<string>("");
  const [memberPhone, setMemberPhone] = useState<string>("");
  const [memberPassword, setMemberPassword] = useState<string>("");
  const { setAuthMember } = useGlobals();

  /** HANDLERS **/
  const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMemberNick(e.target.value);
  };

  const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMemberPhone(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMemberPassword(e.target.value);
  };

  const handlePasswordKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      if (signupOpen) handleSignupRequest();
      if (loginOpen) handleLoginRequest();
    }
  };

  const handleSignupRequest = async () => {
    try {
      const isFulfill = memberNick !== "" && memberPhone !== "" && memberPassword !== "";
      if (!isFulfill) throw new Error(Messages.error3);

      const signupInput: MemberInput = {
        memberNick,
        memberPhone,
        memberPassword,
      };

      const member = new MemberService();
      const result = await member.signup(signupInput);

      setAuthMember(result);
      handleSignupClose();
    } catch (err) {
      handleSignupClose();
      sweetErrorHandling(err).then();
    }
  };

  const handleLoginRequest = async () => {
    try {
      const isFulfill = memberNick !== "" && memberPassword !== "";
      if (!isFulfill) throw new Error(Messages.error3);

      const loginInput: LoginInput = {
        memberNick,
        memberPassword,
      };

      const member = new MemberService();
      const result = await member.login(loginInput);

      setAuthMember(result);
      handleLoginClose();
    } catch (err) {
      handleLoginClose();
      sweetErrorHandling(err).then();
    }
  };

  return (
    <div>
      {/* SIGNUP MODAL */}
      <StyledModal
        open={signupOpen}
        onClose={handleSignupClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: { timeout: 500 },
        }}
      >
        <Fade in={signupOpen}>
          <ModalContainer direction="row" sx={{ width: "800px" }}>
            <ModalImg src="/img/auth.webp" alt="Signup" />
            <Stack sx={{ ml: "69px", alignItems: "center" }}>
              <h2>Signup Form</h2>
              <TextField
                sx={{ mt: "7px" }}
                label="username"
                variant="outlined"
                onChange={handleUsername}
              />
              <TextField
                sx={{ my: "17px" }}
                label="phone number"
                variant="outlined"
                onChange={handlePhone}
              />
              <TextField
                label="password"
                variant="outlined"
                type="password"
                onChange={handlePassword}
                onKeyDown={handlePasswordKeyDown}
              />
              <Fab
                sx={{ mt: "30px", width: "120px" }}
                variant="extended"
                color="secondary"
                onClick={handleSignupRequest}
              >
                <LoginIcon sx={{ mr: 1 }} />
                Signup
              </Fab>
            </Stack>
          </ModalContainer>
        </Fade>
      </StyledModal>

      {/* LOGIN MODAL */}
      <StyledModal
        open={loginOpen}
        onClose={handleLoginClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: { timeout: 500 },
        }}
      >
        <Fade in={loginOpen}>
          <ModalContainer direction="row" sx={{ width: "700px" }}>
            <ModalImg src="/img/auth.webp" alt="Login" />
            <Stack sx={{ ml: "65px", mt: "25px", alignItems: "center" }}>
              <h2>Login Form</h2>
              <TextField
                label="username"
                variant="outlined"
                sx={{ my: "10px" }}
                onChange={handleUsername}
              />
              <TextField
                label="password"
                variant="outlined"
                type="password"
                onChange={handlePassword}
                onKeyDown={handlePasswordKeyDown}
              />
              <Fab
                sx={{ mt: "27px", width: "120px" }}
                variant="extended"
                color="secondary"
                onClick={handleLoginRequest}
              >
                <LoginIcon sx={{ mr: 1 }} />
                Login
              </Fab>
            </Stack>
          </ModalContainer>
        </Fade>
      </StyledModal>
    </div>
  );
}