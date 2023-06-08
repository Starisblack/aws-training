/* eslint-disable react/prop-types */
import { Box, Stack, Typography } from "@mui/material";
import ResourceList from "../components/ResourceList";
import { TrainingNote } from "../data/data";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const CourseResources = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box className="course-resoures" sx={{ width: "100%", height: "100%" }}>
      <Stack sx={{ px: "10%" }}>
        <Stack spacing={3} sx={{ width: "100%" }}>
          <Typography fontSize={36} variant="h1">
            {" "}
            AWS Training Resources List
          </Typography>
          {TrainingNote.map((el) => {
            return (
              <Link key={el.title} to={el.doc} target="_blank">
                <ResourceList
                  type={el?.type}
                  title={el.title}
                  downloadURL={el.doc}
                />
              </Link>
            );
          })}
        </Stack>
      </Stack>
    </Box>
  );
};

export default CourseResources;
