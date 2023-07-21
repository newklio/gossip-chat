import { myTheme } from '@gossip/pages/theme';
import { Stack, Typography } from '@mui/material';
import React from 'react'

const Trending = () => {
    return (
        <>
            <Stack sx={{width:'304px',maxHeightheight:'19px'}}>
               {/* trending topic  */}
                <Typography
                // fontFamily={'Inter'}
                 sx={{ fontWeight:700,
                lineHeight:'19px',
                color:myTheme.text.light.active,
                fontSize:'20px',
                width:'158px',
                height:'19px'}}>Trending Topics</Typography>
                 </Stack>
                 {/* trending topic closed */}
                <Stack sx={{gap:'16px',width:'304px'}}>
                  {/* design */}
                  <Stack sx={{gap:'2px',width:'304px',height:'61px'}}>
                    <Typography sx={{fontSize:'12px',
                color:'rgba(0, 0, 0, 0.60)',
                fontStyle:'normal',
                fontWeight:400,
                lineHeight:'19px',
                letterSpacing:'1px',
                textTransform:'uppercase'
                }}>Design
                    </Typography>
                    <Typography sx={{
                        fontSize:'14px',
                        textOverflow:'ellipsis',
                        color:'rgba(0, 0, 0, 0.87)',
                        overflow:'hidden',
                        fontStyle:'normal',
                        fontWeight:500,
                        lineHeight:'19px',
                    }}>   ThreadsDesktop
                    </Typography>
                    <Typography sx={{fontSize:'12px',
                color:'#757575',
                fontStyle:'normal',
                fontWeight:400,
                lineHeight:'19px',
                }} >123.9k threads
                    </Typography>
                  </Stack>
                  {/* design closed */}
                  {/* Movies and series */}
                  <Stack sx={{gap:'2px',width:'304px',height:'61px'}}>
                    <Typography sx={{fontSize:'12px',
                color:'rgba(0, 0, 0, 0.60)',
                fontStyle:'normal',
                fontWeight:400,
                lineHeight:'19px',
                letterSpacing:'1px',
                textTransform:'uppercase'
                }}>movies and series
                    </Typography>
                    <Typography sx={{
                        fontSize:'14px',
                        textOverflow:'ellipsis',
                        color:'rgba(0, 0, 0, 0.87)',
                        overflow:'hidden',
                        fontStyle:'normal',
                        fontWeight:500,
                        lineHeight:'19px',
                    }}>   Spider-Man: Across the Spider-Verse
                    </Typography>
                    <Typography sx={{fontSize:'12px',
                color:'#757575',
                fontStyle:'normal',
                fontWeight:400,
                lineHeight:'19px',
                }} >93.4k threads
                    </Typography>
                  </Stack>
                    {/* Movies and series closed */}
                    {/* tech */}
                    <Stack sx={{gap:'2px',width:'304px',height:'61px'}}>
                    <Typography sx={{fontSize:'12px',
                color:'rgba(0, 0, 0, 0.60)',
                fontStyle:'normal',
                fontWeight:400,
                lineHeight:'19px',
                letterSpacing:'1px',
                textTransform:'uppercase'
                }}>tech
                    </Typography>
                    <Typography sx={{
                        fontSize:'14px',
                        textOverflow:'ellipsis',
                        color:'rgba(0, 0, 0, 0.87)',
                        overflow:'hidden',
                        fontStyle:'normal',
                        fontWeight:500,
                        lineHeight:'19px',
                    }}> iPhone 15
                    </Typography>
                    <Typography sx={{fontSize:'12px',
                color:'#757575',
                fontStyle:'normal',
                fontWeight:400,
                lineHeight:'19px',
                }} >85.2k threads
                    </Typography>
                  </Stack>
                    {/* tech closed */}
                    {/* games */}
                    <Stack sx={{gap:'2px',width:'304px',height:'61px'}}>
                    <Typography sx={{fontSize:'12px',
                color:'rgba(0, 0, 0, 0.60)',
                fontStyle:'normal',
                fontWeight:400,
                lineHeight:'19px',
                letterSpacing:'1px',
                textTransform:'uppercase'
                }}>games
                    </Typography>
                    <Typography sx={{
                        fontSize:'14px',
                        textOverflow:'ellipsis',
                        color:'rgba(0, 0, 0, 0.87)',
                        overflow:'hidden',
                        fontStyle:'normal',
                        fontWeight:500,
                        lineHeight:'19px',
                    }}>Riot Games
                    </Typography>
                    <Typography sx={{fontSize:'12px',
                color:'#757575',
                fontStyle:'normal',
                fontWeight:400,
                lineHeight:'19px',
                }} >71.9k threads
                    </Typography>
                  </Stack>
                    {/* games closed */}
                    {/* DESIGN */}
                    <Stack sx={{gap:'2px',width:'304px',height:'61px'}}>
                    <Typography sx={{fontSize:'12px',
                color:'rgba(0, 0, 0, 0.60)',
                fontStyle:'normal',
                fontWeight:400,
                lineHeight:'19px',
                letterSpacing:'1px',
                textTransform:'uppercase'
                }}>Design
                    </Typography>
                    <Typography sx={{
                        fontSize:'14px',
                        textOverflow:'ellipsis',
                        color:'rgba(0, 0, 0, 0.87)',
                        overflow:'hidden',
                        fontStyle:'normal',
                        fontWeight:500,
                        lineHeight:'19px',
                    }}> #Minimalism
                    </Typography>
                    <Typography sx={{fontSize:'12px',
                color:'#757575',
                fontStyle:'normal',
                fontWeight:400,
                lineHeight:'19px',
                }} >69.1k threads
                    </Typography>
                  </Stack>
                    {/* DESIGN closed */}
                {/* see more text */}
                <Stack>
                    <Typography sx={{ color:'#03A9F4',
                    fontSize:'#03A9F4',
                    fontStyle:'normal',
                    fontWeight:500,
                    lineHeight:'19px',
                }}
                width={'62px'}
                height={'19px'}>see more
                    </Typography>
                </Stack>
                {/* see more closed */}

            </Stack>
            </>

    )
}

export default Trending