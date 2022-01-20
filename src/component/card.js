import Cardphoto from'./cardmedia'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import CardAbilities from './abilities';
 function Cards({
     title,
    Passive,
    Tactical,
    Ultimate,
    image,
   
}){
    
    return(
       
        <Box sx={{
            width: 350,
            height:200
            }}>
          
        <Card expand style={{color: '#fff', background: 'url(https://i.pinimg.com/736x/0d/e7/8f/0de78f5340e1fa879a1d413e917bf00f.jpg) bottom right 15% no-repeat #46B6AC'}}>
            <CardContent>
                <h2>
                    {title}
                </h2>
                <Cardphoto image={image} />
                <CardAbilities Passive={Passive} Tactical={Tactical} Ultimate={Ultimate}/>
                
               
            </CardContent>
        </Card>
        
       </Box>
        
    )   
}
export default Cards;