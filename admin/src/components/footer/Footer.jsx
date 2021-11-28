import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";

export default function Footer() {
  return (
    <div>
      <div>
        <AppBar position="static" style={{ backgroundColor: "#fff" }}>
          <Container maxWidth="md">
            <Toolbar>
              <Typography variant="body1" color="#1b1b1b">
                © 2021 Vũ Minh Đức
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
      </div>
    </div>
  );
}
