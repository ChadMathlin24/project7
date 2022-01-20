import CardMedia from '@mui/material/CardMedia';
export default function Cardphoto({
    image,
    alt_text
})
   {
return (
	
	    <CardMedia
		component='img'
		height='400'
		image={image}
		alt={alt_text}
	    />
       
)
   }

 