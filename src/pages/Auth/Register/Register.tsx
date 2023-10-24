import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Register() {
  const initialValues = {
    id: uuidv4(),

    email: "",
    password: "",
    confirmPassword: "",
  };
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  // const [emailExists, setEmailExists] = React.useState(false);
  const checkEmail = async (email: string) => {
    try {
      const response = await axios.get("http://localhost:3000/users", {
        params: { email },
      });

      // Check if there are any users with the same email
      const existingUsers = response.data;
      // If there are existing users with the same email, return true
      return existingUsers.length > 0;
    } catch (error) {
      console.error("Lỗi khi kiểm tra email:", error);
      return false;
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Ngăn chặn việc nạp lại trang khi form được nộp
    const form = event.currentTarget as HTMLFormElement;
    const email = form.elements.namedItem("email") as HTMLInputElement;
    const password = form.elements.namedItem("password") as HTMLInputElement;
    const repeatPassword = form.elements.namedItem(
      "repeatpassword"
    ) as HTMLInputElement;

    if (email && password && repeatPassword) {
      const emailValue = email.value;
      const passwordValue = password.value;
      const repeatPasswordValue = repeatPassword.value;
      const emailFormat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!emailFormat.test(emailValue)) {
        alert("Vui lòng nhập một địa chỉ email hợp lệ.");
        return; // Không thực hiện đăng ký nếu email không hợp lệ
      }

      // Kiểm tra mật khẩu có đủ dài (tối thiểu 6 ký tự) và khớp với xác nhận mật khẩu
      if (passwordValue.length < 6 || passwordValue !== repeatPasswordValue) {
        alert(
          "Mật khẩu phải có ít nhất 6 ký tự và phải khớp với xác nhận mật khẩu."
        );
        return; // Không thực hiện đăng ký nếu mật khẩu không hợp lệ
      }
    }
    const emailValue: string = email.value;
    const passwordValue: string = password.value;
    const emailAlreadyExists = await checkEmail(emailValue);

    if (emailAlreadyExists) {
      // setEmailExists(true);
      // Hiển thị thông báo rằng địa chỉ email đã tồn tại
      alert("email đã tồn tại.");
    } else {
      // Địa chỉ email chưa tồn tại, bạn có thể tiến hành đăng ký
      // setEmailExists(false);

      // Gửi dữ liệu đăng ký lên máy chủ

      const registrationData = {
        email: emailValue,
        id: uuidv4(),
        password: passwordValue,
      };
      try {
        const response = await axios.post(
          "http://localhost:3000/users",
          registrationData
        );

        navigate("/signin");
      } catch (error) {
        console.error("Lỗi ", error);
        // Xử lý khi đăng ký thất bại, ví dụ hiển thị thông báo lỗi
      }
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="repeatpassword"
                  label="Repeat Password"
                  type="password"
                  id="reapeat-password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
