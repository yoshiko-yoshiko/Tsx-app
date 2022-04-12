import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";

export default function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        height: 20,
        position: "absolute",
        backgroundColor: "primary.dark",
        bottom: 0,
      }}
    >
      <AppBar position="static">&copy;Kanei Nakashima 2022</AppBar>
    </Box>
  );
}
