import  Typography from "@mui/material/Typography";
import  Link from "@mui/material/Link";


function KhCopyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {'© '}
        <Link color="#000000" href="/">
          Kh Infinite Possibilities Private Limited
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

export default KhCopyright ;
  