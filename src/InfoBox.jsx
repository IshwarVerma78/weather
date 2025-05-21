import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}) {

  const INIT_URL = "https://images.unsplash.com/photo-1722858343990-1604f540c15d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const HOT_URL = "https://images.unsplash.com/photo-1561647784-2f9c43b07a0b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const COLD_URL = "https://images.unsplash.com/photo-1702346138087-46b8375732b9?q=80&w=2010&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const RAIN_URL = "https://images.unsplash.com/photo-1561915511-0184090c2bdb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="InfoBox">
   
      <div className="cardContainer">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={info.humidity>80 ? RAIN_URL: info.temp> 15 ? HOT_URL: COLD_URL}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city} {info.humidity>80 ? <ThunderstormIcon/> : info.temp> 15 ? <WbSunnyIcon/> : <AcUnitIcon/>}
          </Typography>

          <Typography variant="body2" sx={{ color: "text.secondary" }} component={"span"}>
            <p>Temperature = {info.temp} &deg;C </p>
            <p>Humidity = {info.humidity} </p>
            <p>Min Temp = {info.tempMin} </p>
            <p>Max Temp = {info.tempMax} </p>
            <p>The weather can be described as <i> {info.weather} </i> and feels like {info.feelsLike} </p>
          </Typography>

        </CardContent>

      </Card>
      </div>
    </div>
  );
}
