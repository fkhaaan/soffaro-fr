
import { useState } from "react";
import { Box, Modal, Backdrop, Fade, Fab, Stack, TextField, useTheme } from "@mui/material";
import styled from "styled-components";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { T } from "../../../lib/types/common";
import { Messages } from "../../../lib/config";
import { LoginInput, MemberInput } from "../../../lib/types/member";
import MemberService from "../../services/MemberService";
import { sweetErrorHandling } from "../../../lib/sweetAlert";
import { useGlobals } from "../../hooks/useGlobals";

// ✅ GOLD COLOR THEME
const GOLD_COLOR = "rgb(212, 175, 55)";
const GOLD_DARK = "rgb(180, 145, 35)";

const ModalImg = styled.img`
  width: 45%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #000;
  object-fit: cover;
`;

const ModalPaper = Box;

interface AuthenticationModalProps {
  signupOpen: boolean;
  loginOpen: boolean;
  handleSignupClose: () => void;
  handleLoginClose: () => void;
}

export default function AuthenticationModal(props: AuthenticationModalProps) {
  const { signupOpen, loginOpen, handleSignupClose, handleLoginClose } = props;
  const theme = useTheme();
  const [memberNick, setMemberNick] = useState<string>("");
  const [memberPhone, setMemberPhone] = useState<string>("");
  const [memberPassword, setMemberPassword] = useState<string>("");
  const { setAuthMember } = useGlobals();

  /** HANDLERS **/
  const handleUsername = (e: T) => {
    setMemberNick(e.target.value);
  };

  const handlePhone = (e: T) => {
    setMemberPhone(e.target.value);
  };

  const handlePassword = (e: T) => {
    setMemberPassword(e.target.value);
  };

  const handlePasswordKeyDown = (e: T) => {
    if (e.key === "Enter" && signupOpen) {
      handleSignupRequest().then();
    } else if (e.key === "Enter" && loginOpen) {
      handleLoginRequest().then();
    }
  };

  const handleSignupRequest = async () => {
    try {
      const isFulfill =
        memberNick !== "" && memberPhone !== "" && memberPassword !== "";
      if (!isFulfill) throw new Error(Messages.error3);

      const signupInput: MemberInput = {
        memberNick: memberNick,
        memberPhone: memberPhone,
        memberPassword: memberPassword,
      };

      const member = new MemberService();
      const result = await member.signup(signupInput);

      setAuthMember(result);
      handleSignupClose();
      setMemberNick("");
      setMemberPhone("");
      setMemberPassword("");
    } catch (err) {
      console.log(err);
      handleSignupClose();
      sweetErrorHandling(err).then();
    }
  };

  const handleLoginRequest = async () => {
    try {
      const isFulfill = memberNick !== "" && memberPassword !== "";
      if (!isFulfill) throw new Error(Messages.error3);

      const loginInput: LoginInput = {
        memberNick: memberNick,
        memberPassword: memberPassword,
      };

      const member = new MemberService();
      const result = await member.login(loginInput);

      setAuthMember(result);
      handleLoginClose();
      setMemberNick("");
      setMemberPassword("");
    } catch (err) {
      console.log(err);
      handleLoginClose();
      sweetErrorHandling(err).then();
    }
  };

  // ✅ GOLD BORDER DESIGN WITH WHITE BACKGROUND
  const modalPaperStyle = {
    backgroundColor: "#FFFFFF",
    border: `3px solid ${GOLD_COLOR}`,
    boxShadow: theme.shadows[5],
    padding: 0,
    borderRadius: "10px",
    overflow: "hidden",
  };

  // ✅ GOLD BORDER FOR TEXT INPUTS
  const textFieldStyle = {
    marginTop: "7px",
    minWidth: "250px",
    "& .MuiOutlinedInput-root": {
      backgroundColor: "#FFFFFF",
      "& fieldset": {
        borderColor: GOLD_COLOR,
        borderWidth: "2px",
      },
      
      "&.Mui-focused fieldset": {
        borderColor: GOLD_COLOR,
        borderWidth: "2px",
      },
    },
    "& .MuiInputBase-input": {
      color: "#000",
    },
    "& .MuiInputLabel-root": {
      color: GOLD_COLOR,
      "&.Mui-focused": {
        color: GOLD_COLOR,
      },
    },
  };

  return (
    <div>
      {/* Signup Modal */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={signupOpen}
        onClose={handleSignupClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Fade in={signupOpen}>
          <ModalPaper
            component={Stack}
            direction="row"
            sx={{
              ...modalPaperStyle,
              width: "900px",
              height: "500px",
            }}
          >
            {/* ✅ IMAGE ON LEFT SIDE */}
            <ModalImg src={"/img/auth.webp"} alt="auth illustration" />

            {/* ✅ FORM ON RIGHT SIDE */}
            <Stack
              sx={{
                flex: 1,
                padding: "40px",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#FFFFFF",
              }}
            >
              <h2 style={{ color: "#000000", marginBottom: "30px" }}>
                Signup Form
              </h2>
              <TextField
                sx={{ ...textFieldStyle, marginTop: "0px", marginBottom: "20px" }}
                id="signup-username"
                label="Username"
                variant="outlined"
                value={memberNick}
                onChange={handleUsername}
                fullWidth
              />
              <TextField
                sx={{ ...textFieldStyle, marginBottom: "20px" }}
                id="signup-phone"
                label="Phone Number"
                variant="outlined"
                value={memberPhone}
                onChange={handlePhone}
                fullWidth
              />
              <TextField
                sx={{ ...textFieldStyle, marginBottom: "30px" }}
                id="signup-password"
                label="Password"
                type="password"
                variant="outlined"
                value={memberPassword}
                onChange={handlePassword}
                onKeyDown={handlePasswordKeyDown}
                fullWidth
              />
              <Fab
                sx={{
                  width: "140px",
                  backgroundColor: GOLD_COLOR,
                  color: "#000000",
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: GOLD_DARK,
                  },
                }}
                variant="extended"
                onClick={handleSignupRequest}
              >
                <PersonAddIcon sx={{ mr: 1 }} />
                Signup
              </Fab>
            </Stack>
          </ModalPaper>
        </Fade>
      </Modal>

      {/* Login Modal */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={loginOpen}
        onClose={handleLoginClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Fade in={loginOpen}>
          <ModalPaper
            component={Stack}
            direction="row"
            sx={{
              ...modalPaperStyle,
              width: "900px",
              height: "500px",
            }}
          >
            {/* ✅ IMAGE ON LEFT SIDE */}
            <ModalImg src={"/img/auth.webp"} alt="auth illustration" />

            {/* ✅ FORM ON RIGHT SIDE */}
            <Stack
              sx={{
                flex: 1,
                padding: "40px",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#FFFFFF",
              }}
            >
              <h2 style={{ color: "#000000", marginBottom: "30px" }}>
                Login Form
              </h2>
              <TextField
                id="login-username"
                label="Username"
                variant="outlined"
                sx={{ ...textFieldStyle, marginTop: "0px", marginBottom: "20px" }}
                value={memberNick}
                onChange={handleUsername}
                fullWidth
              />
              <TextField
                id="login-password"
                label="Password"
                variant="outlined"
                type="password"
                sx={{ ...textFieldStyle, marginBottom: "30px" }}
                value={memberPassword}
                onChange={handlePassword}
                onKeyDown={handlePasswordKeyDown}
                fullWidth
              />
              <Fab
                sx={{
                  width: "140px",
                  backgroundColor: GOLD_COLOR,
                  color: "#000000",
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: GOLD_DARK,
                  },
                }}
                variant="extended"
                onClick={handleLoginRequest}
              >
                <LoginIcon sx={{ mr: 1 }} />
                Login
              </Fab>
            </Stack>
          </ModalPaper>
        </Fade>
      </Modal>
    </div>
  );
}