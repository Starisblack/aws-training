/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Box, Button, Stack, Typography } from "@mui/material";
import { YoutubeLogo } from "@phosphor-icons/react";
import { Link, useParams } from "react-router-dom";
import { AWSResources, DockerizationResources, GithubResources, KubernetesResources, LinuxResources, LogicalResources } from "../data/data";
import { useEffect } from "react";


const CourseList = ({title, duration, url}) => {
   return <Box width={{xs: "100%", md: "70%"}} sx={{borderBottom: "1px solid #fff", cursor: "pointer"}}>
    <Link style={{color: "#4c4c4c"}} to="/">
      <Stack
       spacing={2}
       className="list-btn"
        alignItems="center"
        justifyContent="space-between"
        direction="row"
        sx={{
          padding: "11px 16px"
        }}
      >
        <Stack justifyContent="center" direction="row" spacing={1} alignItems="center">
          <YoutubeLogo size={22} />
          <Typography fontSize={{xs: 12, sm: 15}} variant="subtitle1">{title} <span>({duration})</span></Typography>
        </Stack>
        <Button sx={{background:"#FFBD59", color: "white"}} variant="filled">View</Button>
      </Stack>
      </Link>
    </Box>
}

const loadResoures = (data) =>{
   return  data.map(el => {
        return  <CourseList {...el} key={el.title}/>
    })
} 

const Course = () => {
  const { title } = useParams();


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let changeTitle = null;

  if (title === "linux-administration") {
    changeTitle = "Linux Administration";
  } else if (title === "logical-volume-management") {
    changeTitle = "Logical Volume Management";
  }

  return (
    <Box sx={{width: "100%", height: "100%"}} >
      <Stack spacing={5} px={{xs: "5%", md: "10%"}}>
        <Typography sx={{ fontSize: "40px", textAlign: "center" }} variant="h1">
          {changeTitle ? changeTitle.toUpperCase() : title.toUpperCase()}
        </Typography>

        <Stack spacing={1} alignItems="center">
          {(()=> {
             switch(title){
                case "aws": 
                return  loadResoures(AWSResources)
                case "dockerization": 
                return loadResoures(DockerizationResources)
                case "github": return loadResoures(GithubResources)
                case  "kubernetes": return loadResoures(KubernetesResources)
                case "linux-administration": return loadResoures(LinuxResources)
                case "logical-volume-management": return loadResoures(LogicalResources)
                default:
                return <div>No Data Available</div>
             }
          })()}
         
        </Stack>
      </Stack>
    </Box>
  );
};

export default Course;
