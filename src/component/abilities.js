import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

 function CardAbilities({
    Passive,
    Tactical,
    Ultimate
}){
    return(
        <div className='CardAbilities' style={{backgroundColor:"#7A7777"}}>
            <Typography variant='body1' component='div' ClassName='abilities'>
                Passive:<Chip label={Passive} size="small" style={{backgroundColor:"#364362", color:"white"}} />
                </Typography>
            <Typography variant='body1' component='div' ClassName='abilities'>
            Tactical:<Chip label={Tactical} size="small" style={{backgroundColor:"#364362", color:"white"}} />
                </Typography>
            <Typography variant='body1' component='div' ClassName='abilities'>
             Ultimate:<Chip label={Ultimate} size="small" style={{backgroundColor:"#364362", color:"white"}} />
                </Typography>
        </div>
     
    ); 
}
export default CardAbilities;