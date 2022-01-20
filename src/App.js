import Cards from './component/card.js'
import Stack from '@mui/material/Stack';

import './App.css';

function App()
{
  
  const legend_1={
    title:'Lifeline',
    image: 'https://cdn.vox-cdn.com/thumbor/8eFOQV8hAOBsQNTLVWDZjZ-4uAw=/0x0:1920x1080/1200x800/filters:focal(903x276:1209x582)/cdn.vox-cdn.com/uploads/chorus_image/image/63050039/apex_concept_art_wallpaper_lifeline.0.png',
    alt_text:'lifeline code',
    Passive: ' Healing other legends/players at a faster rate',
    Tactical: ' Health drone also named AJ',
    Ultimate: ' A carepackage Drop.',
  }
  const legend_2={
    title: 'Wraith',
    image:'http://pm1.narvii.com/7142/ab00863387f33c6de41433d346736bce3600a620r1-599-840v2_uhq.jpg',
    alt_text:'wraith code',
    Passive: ' Would be warned when an enemy is aimming at her ',
    Tactical: ' Can phase away from difficult situations',
    Ultimate:  'Can create portal for escape or reposition',
  }
  const legend_3={
    Title: 'Bloodhound',
    image:'https://cdn.donmai.us/sample/fd/cc/sample-fdccc2c3aa71877e3cf2040d2b81c3b6.jpg',
    alt_text:'bloodhound code',
    Passive: ' Ability to track enemies foot prints or activiity',
    Tactical: ' Can scan their surrounding  for enemies or traps',
    Ultimate: ' beast of the hunt, speed increases and scans as well',
  }


  return (

    
    <div className="Legend" >
     <h1>TRADING CARDS</h1>
     <h2>APEX LEGENDS</h2>
    <div className="centering">
      <Stack direction="row" spacing={2}>
        
          <Cards title={legend_1.title} Passive={legend_1.Passive} Tactical={legend_1.Tactical} Ultimate={legend_1.Ultimate} image={legend_1.image}  />
          <Cards title={legend_2.title} Passive={legend_2.Passive} Tactical={legend_2.Tactical} Ultimate={legend_2.Ultimate} image={legend_2.image}/>
          <Cards title={legend_3.Title} Passive={legend_3.Passive} Tactical={legend_3.Tactical} Ultimate={legend_3.Ultimate} image={legend_3.image}/>
      </Stack>
    </div>
    </div>
    
  );
  
}

export default App;
