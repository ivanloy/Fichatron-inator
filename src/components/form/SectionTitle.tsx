import { Box, Typography } from "@mui/material";

type SectionTitleProps = {
  title: string;
}

export const SectionTitle = (props: SectionTitleProps) => {
  const { title } = props;
  return (
    <Box display="flex">
      <Typography 
        color="secondary.dark" 
        variant="overline" 
        sx={{ marginBottom: 1, fontSize: 20, fontWeight: 600 }}>
          {title}
      </Typography>
    </Box>
  );
}