/* eslint-disable react/prop-types */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function CourseCard({title, desc, img}) {
     
    let imgSize;

    if(title === "Kubernetes" || title === "Github" ){
        imgSize="contain"
    } 
        
  return (
    <Card sx={{maxWidth: "100%", height: "100%" }}>
      <CardActionArea>
        <CardMedia
          sx={{objectFit: imgSize }}
          component="img"
          height="240"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}