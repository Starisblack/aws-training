/* eslint-disable react/prop-types */
import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import {
  DownloadSimple,
  FileDoc,
  FilePdf,
  FilePpt,
} from "@phosphor-icons/react";

const ResourceList = ({ type, title }) => {
  const theme = useTheme();
  const onlyMediumScreen = useMediaQuery(theme.breakpoints.down("md"))
  return (
    <Box p={0.5} sx={{ width: "100%" }}>
      <Stack spacing={2}>
        <Stack
          p={0.4}
          spacing={3}
          alignItems="center"
          justifyContent={onlyMediumScreen && "space-between"}
          direction="row"
          sx={{
            borderRadius: 1,
          }}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            {type === "pdf" && <FilePdf size={20} />}
            {type === "pptx" && <FilePpt size={20} />}
            {type === "docx" && <FileDoc size={20} />}
            <Typography sx={{ color: theme.palette.text }} variant="subtitle1">
              {title}
            </Typography>
          </Stack>

          <DownloadSimple size={20} />
        </Stack>
      </Stack>
    </Box>
  );
};

export default ResourceList;
