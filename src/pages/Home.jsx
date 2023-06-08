import { Box, Grid, Stack } from "@mui/material";
import SearchBar from "../components/SearchInput";
import CourseCard from "../components/Card";
import { CourseLists } from "../data/data";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Home = () => {

  const [input, setInput] = useState("")

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
 
  const searchHandler = (data) => {
    return data.filter((el) =>
      el.title.toLowerCase().includes(input?.toLowerCase())
    );
  };
  
  return (
    <Box sx={{ height: "100%", width: "100%" }}>
      <Stack spacing={8} sx={{ px: "10%", pb: "5%" }}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"flex-end"}
        >
          <SearchBar setInput={setInput} />
        </Stack>

        <Stack>
          <Grid container spacing={2}>
            {searchHandler(CourseLists).map((el) => {
              return (
                <Grid item key={el.title} xs={12} sm={6} md={6} lg={4}>
                  <Link to={"/course/" + el?.url}>
                    <CourseCard
                      title={el?.title}
                      desc={el?.desc}
                      img={el?.img}
                    />
                  </Link>
                </Grid>
              );
            })}
          </Grid>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Home;
