import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
import "./footer.css";
export default function Footer() {
  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: "#1b1b1b" }}>
        <Container maxWidth="md">
          <Toolbar>
            <Typography variant="body1" color="inherit">
              © 2021 Vũ Minh Đức
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
