import { Divider } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2'; 

export const GridDivider = () => {
  return ( 
    <Grid xs={12}>
      <Divider sx={{ marginBottom: 1, marginTop: 1 }}/>
    </Grid>
  );
}