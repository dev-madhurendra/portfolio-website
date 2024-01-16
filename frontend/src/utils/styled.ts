import styled from '@emotion/styled'
import MuiButton from '../components/atoms/Button'
import WaveUrl from "../../public/gif/Wave-Animation.gif"
import DarkModeWaveUrl from "../../public/gif/Dark-Mode.gif"
import { keyframes } from '@emotion/react'
import { Tab } from 'react-tabs'

export const StyledIcon = styled.img`
  cursor: pointer;
`

const slideInAnimation = () => ({
  '@keyframes slideIn': {
    from: {
      transform: 'translateX(-100%)',
    },
    to: {
      transform: 'translateX(0)',
    },
  },
  animation: 'slideIn 1s ease-in',
});

export const IconContainer = styled('div')({
  height: '100vh',
  position: 'fixed',
  left: '0',
  display: 'flex',
  justifyContent: 'space-around',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1.25rem',
  fontSize: '1.5rem',
  marginLeft: '1.25rem',
  zIndex: '1111',
  '@media (max-width: 468px)': {
    display: 'flex', 
    flexDirection: 'row', 
    alignItems: 'center', 
    position: 'fixed', 
    top: '0', 
    left: '0', 
    width: '80%', 
    height: 'auto', 
    gap: '0.5rem', 
    marginLeft: '0', 
  },
}, slideInAnimation);


export const LeftDiv = styled('div')({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "rgba(0, 0, 0, 0.35) 0px 0.3125rem 0.9375rem",
  cursor: "pointer",
  borderRadius: "50%",
  '@media (max-width: 468px)': {
    display:"none"
  },
  
})
export const MiddleDiv = styled('div')({
  display: "flex",
  justifyContent: "center",
  flexDirection:"column",
  alignItems: "center",
  gap:"0.625rem",
  boxShadow: "rgba(0, 0, 0, 0.35) 0rem 0.3125rem 0.9375rem",
  padding: "1.25rem",
  cursor: "pointer",
  borderRadius: "3.125rem",
  backgroundColor: "rgba(255,255,255,0.1)",
  backdropFilter: "blur(0.0625rem)",
  '@media (max-width: 468px)': {
    flexDirection: 'row', 
    position: 'fixed', 
    overflow:"hidden",
    top: '0', 
    left: '0',
    gap:"1.25rem",
    width: '80%', 
    height: 'auto', 
    marginLeft: '0', 
    marginTop: '0.3125rem', 
    padding: "1.25rem",
  },
})
export const RightDiv = styled('div')({
  display: "flex",
  justifyContent: "center",
  flexDirection:"column",
  alignItems: "center",
  cursor: "pointer",
  gap: "1.25rem",
  '@media (max-width: 468px)': {
    marginLeft: "90%",
    marginTop: '0.3125rem', 
  },
})
export const StyledNavIcon = {
  width: "4rem",
  height: "4rem",
  border: "1px solid black",
  borderRadius: "50%",
  backgroundSize:"contain"
}
export const StyledAboutIcon = {
  width: "1.5rem",
  height: "1.5rem",
}
export const StyledSkillIcon = {
  width: "4rem",
  height: "4rem",
}
export const HomeDiv = styled('div')<{ id: string }>({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100vh",
    width: "90vw",
    '@media (max-width: 900px)': {
      flexDirection: 'column',
      width: "100vw",
    },
    '@media (max-width:468px)': {
      justifyContent: "center",
      width: "100%",
      marginLeft: "0vw",
      marginTop:"30%"
    },
    '@media (max-width:1024px)': {
      justifyContent: "center",
      width: "90vw",
      marginLeft: "6vw",
    },
})
export const RotatedBackground = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: `url(${WaveUrl})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100% 100%',
  transform: 'rotate(0deg)',
});
export const DarkRotatedBackground = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: `url(${DarkModeWaveUrl})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100% 100%',
  transform: 'rotate(0deg)',
});
export const LeftHomeDiv = styled('div')({
    display: "flex",
    justifyContent: "center",
    alignItems:"center",
    flexDirection: "column",
    width: "100%",
    height: "50%",    
    gap: "1rem",
    fontSize: "1.875rem",
    '@media (max-width:900px)': {
      width: "90%",
      fontSize: "2.1875rem",
    },
    '@media (max-width:468px)': {
      width: "100vw",
      marginLeft: "0px",
      fontSize: "1.875rem",
    },
    zIndex:1
})
const floatAnimation = keyframes`
  0%, 100% {
    transform: translateY(-20);
  }
  50% {
    transform: translateY(1.25rem);
  }
`;

const slideInFromRight = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;
export const RightHomeDiv = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '& img': {
    animation: `${floatAnimation} 3s ease-in-out infinite, ${slideInFromRight} 3s ease-in-out`,
    width: "31.25rem",
    height:"25rem"
  },
  '@media (max-width: 900px)': {
    '& img': {
      width: "20rem",
      height: "20rem",
      marginTop: "-4.5rem",
      marginLeft:"-7.5rem"
    }
  },
  '@media (max-width: 468px)': {
    '& img': {
      width: "25rem",
      height: "25rem",
      marginLeft: "-0.625rem",      
    }
  },
});
export const GreetHomeDiv = styled('div')({
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "60%",
    '@media (max-width: 900px)': {
      width: "60vw",
    },
    '@media (max-width:468px)': {
      width: "80vw",

    }
})

export const CapsuleButton = styled(MuiButton)({
  borderRadius: '50px', 
  textTransform: 'none',
  width: "11.375rem",
  height: "3.125rem",
  fontSize: "1.375rem",
})

export const ButtonHomeDiv = styled('div')({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "1rem",
  width: "60%",
  '@media (max-width:1024px)': {
    width: "80%",
    marginLeft:"6rem",
  },
  '@media (max-width: 900px)': {
    width: "60vw",
    marginLeft:"0px",
  },
  '@media (max-width:468px)': {
    width: "80%",
    justifyContent: "center",
    marginLeft:"0px",
  }
})
export const TypedHomeDiv = styled('div')({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  width: "60%",
  '@media (max-width:1024px)': {
    fontSize: "25px",
  },
  '@media (max-width: 900px)': {
    width: "60vw",
  },
  '@media (max-width:468px)': {
    width: "80vw",
  }
})
export const IntroDiv = styled('div')({
  width: "60%",
  display: "flex",
  '@media (max-width: 900px)': {
    display: "flex",
    justifyContent: "flex-start",
    alignItems:"center",
    width:"60vw"
  },
  '@media (max-width:468px)': {
    width: "80vw",
  },
})
export const socialMediaColors = {
  github: '#333',
  instagram: '#e4405f',
  x: '#000', 
  linkedin: '#0077b5',
  quora: '#a82400',
  youtube: '#ff0000',
  discord: '#7289da',
  codepen: '#000000',
  snapchat: '#fffc00'
};
export const IconDiv = styled('div')({
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "1rem",
    cursor: "pointer",
    width: "60%",
    '@media (max-width: 900px)': {
      width:"60vw"
    },
    '@media (max-width: 468px)': {
      width: "80vw",
      fontSize: "1.125rem",
    },

})

export const AboutDiv = styled('div')<{id: string}>({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "85vw",
    height: "100%",
    marginLeft: "8vw",
    textAlign: "justify",
    marginTop: "6.25rem",
    '@media (max-width: 768px)': {
      flexDirection: "column-reverse",
      height: "100%",
      gap:"1rem",
      margin: "auto",
      width: "95%",
    },  
})

export const LeftAboutDiv = styled('div')({
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    '& img': {
        width: "80%",
        height: "90%",
        borderRadius: "10%",
    },
    width: "50%",
    '@media (max-width: 768px)': {
      width: "100%",
      margin: "auto",
      '& img': {
          width: "100%",
          height: "90%",
          borderRadius: "10%",
      },
    },
})
export const RightAboutDiv = styled('div')({
    display: "flex",
    justifyContent: "center",
    flexDirection:"column",
    width: "50%",
    padding:"3.125rem",
    gap: "1.25rem",
    '@media (max-width: 768px)': {
      width: "100%",
      justifyContent: "center",
      alignItems:"center"
    },
    background: 'rgba( 255, 255, 255, 0.1 )',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    borderRadius: '50px',
    border: '1px solid rgba(255, 255, 255, 0.18)',
})
export const SkillAboutDiv = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  rowGap: '0.625rem',
  columnGap: '0.625rem',
  '@media (max-width: 800px)': {
    gridTemplateColumns: 'repeat(2, 1fr)', 
  },
  '@media (max-width: 480px)': {
    gridTemplateColumns: 'repeat(1, 1fr)', 
  },
});

export const FlexDiv = styled('div')({
    display: "flex",
    gap: "10px",
    fontWeight: "bold",
    '& div': {
      fontSize:"3.1125rem",
    },
    '@media (max-width: 1280px)': {
      '& div': {
        fontSize:"2.2rem",
      },
    },
    '@media (max-width:1024px)': {
      '& div': {
        fontSize: "1.75rem",
      }
    },
    '@media (max-width: 900px)': {
      '& div': {
        fontSize:"1.8125rem !important",
      },
    },

})

export const EductionsDiv = styled('div')<{id: string}>({
    display: "flex",
    justifyContent:"space-around",
    flexDirection:"column",
    alignItems: "center",
    width: "100vw",
    height: "100%",
    marginTop: "6.25rem",
    marginBottom:"3.125rem",
    '@media (max-width: 1000px)': {
        marginTop:"5.25rem",
        width: "100%",
        height:"100%"
    },
})

export const EductionsTabDiv = styled('div')({
    display: "flex",
    justifyContent:"flex-end",
    flexDirection:"column",
    gap: "1.25rem",
    width: "40%",
    
    '@media (max-width: 650px)': {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginTop:"2.125rem",
      },
})

export const LeftEducationDiv = styled('div')({
    display: "flex",
    justifyContent:"flex-end",
    flexDirection: "column",
})


export const RightEducationDiv = styled('div')({
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  width: "100%",
  height:"100%",
  '@media (max-width: 768px)': {
      flexDirection: "column",
  },
});

export const EductionsDetailsDiv = styled('div')({
    display: "flex",
    justifyContent:"flex-end",
    alignItems: "center",
    width: "50%",
    marginTop:"3.125rem",
    '@media (max-width: 650px)': {
      width: "100%",
      justifyContent:"center",
      marginTop:"2.125rem",
  },
})

export const SkillTagButton = styled(MuiButton)({
  alignItems: 'center',
  appearance: 'none',
  backgroundColor: '#fff',
  borderRadius: '24px',
  borderStyle: 'none',
  boxShadow: 'rgba(0, 0, 0, .2) 0 3px 5px -1px, rgba(0, 0, 0, .14) 0 6px 10px 0, rgba(0, 0, 0, .12) 0 1px 18px 0',
  boxSizing: 'border-box',
  color: '#3c4043',
  cursor: 'pointer',
  display: 'inline-flex',
  fill: 'currentcolor',
  fontFamily: '"Google Sans", Roboto, Arial, sans-serif',
  fontWeight: '500',
  height: '48px',
  justifyContent: 'center',
  letterSpacing: '.25px',
  lineHeight: 'normal',
  maxWidth: '90%',
  overflow: 'visible',
  position: 'relative',
  textAlign: 'center',
  textTransform: 'none',
  transition: 'box-shadow 280ms cubic-bezier(.4, 0, .2, 1), opacity 15ms linear 30ms, transform 270ms cubic-bezier(0, 0, .2, 1) 0ms',
  userSelect: 'none',
  WebkitUserSelect: 'none',
  touchAction: 'manipulation',
  width: 'auto',
  willChange: 'transform, opacity',
  zIndex: '0',

  '&:hover': {
    background: '#F6F9FE',
    color: '#174ea6',
  },

  '&:active': {
    boxShadow: '0 4px 4px 0 rgb(60 64 67 / 30%), 0 8px 12px 6px rgb(60 64 67 / 15%)',
    outline: 'none',
  },

  '&:focus': {
    outline: 'none',
    border: '2px solid #4285f4',
  },

  '&:not(:disabled)': {
    boxShadow: 'rgba(60, 64, 67, .3) 0 1px 3px 0, rgba(60, 64, 67, .15) 0 4px 8px 3px',
  },

  '&:not(:disabled):hover': {
    boxShadow: 'rgba(60, 64, 67, .3) 0 2px 3px 0, rgba(60, 64, 67, .15) 0 6px 10px 4px',
  },

  '&:not(:disabled):focus': {
    boxShadow: 'rgba(60, 64, 67, .3) 0 1px 3px 0, rgba(60, 64, 67, .15) 0 4px 8px 3px',
  },

  '&:not(:disabled):active': {
    boxShadow: 'rgba(60, 64, 67, .3) 0 4px 4px 0, rgba(60, 64, 67, .15) 0 8px 12px 6px',
  },

  '&:disabled': {
    boxShadow: 'rgba(60, 64, 67, .3) 0 1px 3px 0, rgba(60, 64, 67, .15) 0 4px 8px 3px',
  },
});

export const DefaultClickedTagButton = styled(MuiButton)({
  alignItems: 'center',
  appearance: 'none',
  backgroundColor: '#fff',
  borderRadius: '24px',
  border: '2px solid #4285f4',
  boxSizing: 'border-box',
  color: '#174ea6',
  cursor: 'pointer',
  display: 'inline-flex',
  fill: 'currentcolor',
  fontFamily: '"Google Sans", Roboto, Arial, sans-serif',
  fontWeight: '500',
  height: '48px',
  justifyContent: 'center',
  letterSpacing: '.25px',
  lineHeight: 'normal',
  maxWidth: '90%',
  overflow: 'visible',
  position: 'relative',
  textAlign: 'center',
  textTransform: 'none',
  transition: 'box-shadow 280ms cubic-bezier(.4, 0, .2, 1), opacity 15ms linear 30ms, transform 270ms cubic-bezier(0, 0, .2, 1) 0ms',
  userSelect: 'none',
  WebkitUserSelect: 'none',
  touchAction: 'manipulation',
  width: 'auto',
  willChange: 'transform, opacity',
  zIndex: '0',
  boxShadow: 'rgba(60, 64, 67, .3) 0 1px 3px 0, rgba(60, 64, 67, .15) 0 4px 8px 3px',
})

export const SkillTagDiv = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: "1.25rem",
    '@media (max-width: 468px)':{
      width: "90%",
      marginLeft:"14%"
    },
})

export const SlillTagList = styled('ul')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: "1.25rem",
    '@media (max-width: 468px)':{
      width: "12.5rem",
    },
})
export const MuiChipAboutStyled = ({
  width: "100%",
  '@media (min-width: 776px) and (max-width: 1024px)': {
    width: "100px",
  },
})

export const EducationDiv = styled('div')({
    display: "flex",
    flexDirection:"column",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "90%",
    height: "37.5rem",
    background: 'rgba( 255, 255, 255, 0.1 )',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    borderRadius: '50px',
    border: '1px solid rgba(255, 255, 255, 0.18)',
})

export const EducationIconTextDiv = styled('div')({
    display: "flex",
    justifyContent: "flex-start",
    textAlign:"justify",
    gap:"20px",
    width:"100%",
    fontSize: "1.25rem",
    '& span': {
        width:"20%",
    },
    '& p': {
        width:"60%",
    }
})
export const EducationImageDiv = styled('div')({
    display: "flex",
    justifyContent: "flex-start",
    borderRadius: "10px",
    width:"90%",
    '& img': {
        width: "100%",
        height: "18.75rem",
        borderRadius:"0.625rem"
    }
});

export const EducationDetails = styled('div')({
    display: "flex",
    flexDirection: "column",
    gap:"0.125rem",
    justifyContent: "center",
    width: "90%",
});
export const StyledProjectContainer = styled('div')({
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  flexDirection: "column",
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  padding: "0 1.25rem 1.25rem 1.25rem",
  width: "25rem",
  borderRadius: "0.625rem",
  height: "100%",
})
export const StyledProjectImageDiv = styled('div')({
  '& img': {
    width: "25rem",
    height: "25rem",
    objectFit:"cover"
  },
})
export const StyledProjectInfoDiv = styled('div')({
  width: "100%",
  display: "flex",
  flexDirection:"column",
  justifyContent: "space-around",
  alignItems: "flex-start",
  gap: "0.9375rem",
})
export const StyledProjectUrlsDiv = styled('div')({
  width: "100%",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  paddingTop: "1.25rem",
  gap:"10px"
})
export const StyledProjectDiv = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  maxWidth: '100vw',
  gap: "1.25rem",
  margin: '0 auto',
  
});

export const StyledProjectSection = styled('div')<{ id: string }>({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  height: '100vh',
  marginLeft: '5rem',
  '@media (max-width: 468px)': {
    marginLeft: 0,
  },
});
export const StyledMuiButton = styled(MuiButton)`
  background-color: #FFFFFF;
  border: 1px solid #222222;
  border-radius: 8px;
  box-sizing: border-box;
  color: #222222;
  cursor: pointer;
  display: inline-block;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,"Helvetica Neue",sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  margin: 0;
  outline: none;
  padding: 13px 23px;
  position: relative;
  text-align: center;
  text-decoration: none;
  touch-action: manipulation;
  transition: box-shadow .2s,-ms-transform .1s,-webkit-transform .1s,transform .1s;
  user-select: none;
  -webkit-user-select: none;
  width: auto;

  &:focus-visible {
    box-shadow: #222222 0 0 0 2px, rgba(255, 255, 255, 0.8) 0 0 0 4px;
    transition: box-shadow .2s;
  }

  &:active {
    background-color: #F7F7F7;
    border-color: #000000;
    transform: scale(.96);
  }

  &:disabled {
    border-color: #DDDDDD;
    color: #DDDDDD;
    cursor: not-allowed;
    opacity: 1;
  }
`;
export const MuiChipSkillSx = {
  height: "50px",
  width: "200px",
  borderRadius: "50px",
  fontSize: "20px",
  '@media(max-width:468px)': {
    width: "100px",
  }
}

export const SkillDiv = styled('div')<{ id: string }>({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  flexDirection: 'column',
  width: '90%',
  marginLeft:"10%",
  height: '100vh',
});
export const LeftSkillDiv = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'column',
  height: "20%",
  marginLeft:"-100px"
});
export const RightSkillDiv = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'column',
  height: "60%",
  marginLeft:"-100px"
});
export const SkillTextImageDiv = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',  
})
export const SkillGrid = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, minmax(150px, 1fr))',
  gap: '16px',
  justifyContent: "center",
  alignItems: "center",
  '@media(max-width:468px)':{
    gridTemplateColumns: 'repeat(2, minmax(150px, 1fr))',
    marginLeft:"15%"
  },
});
export const StyledExperienceSection = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100vw",
  height: "100vh",
  '@media(max-width:468px)':{
    height: "100%",
  },
});

export const ExperienceFirstContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "90%",
  width: "100vw",
  marginLeft: "200px",
  '@media(max-width:468px)':{
    marginTop:"0px"
  },
});

export const ExperienceTabDiv = styled(Tab)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "80vw",
  gap: "20px",
  height: "90vh",
  "@media (max-width: 768px)": {
    flexDirection: "column",
    marginLeft: "-200px",
  },
});

export const StyledTabPanelDiv = styled("div")({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "flex-start",
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  padding: "50px",
  borderRadius: "10px",
  "@media (max-width: 468px)": {
    width:"90vw"
  },
});

export const StyledExpTechDiv = styled("div")({
  display: "grid",
  gridTemplateColumns: "repeat(6, 1fr)", 
  gridTemplateRows: "repeat(3, 1fr)", 
  gap: "10px",
  "@media (max-width: 468px)": {
    gridTemplateColumns: "repeat(3, 1fr)", 
    gridTemplateRows: "repeat(3, 1fr)", 
  },
});
export const StyledDescriptionExp = styled("div")({
  width: "37.5rem",
  "@media (max-width: 468px)": {
    width: "70vw",
    textAlign:"justify"
  },
})
export const StyledContactSection = styled.div`
  width: 100%;
  margin: auto;
  padding: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  @media (max-width: 468px) {
    width:90vw;
    height:100%;
  }
`;

export const ContactGrid = styled.div`
  display: flex;
  justify-content:center;
  align-items:center;
  gap: 20px;
  width:70%;
  height:650px;
  @media (max-width: 468px) {
    width:90vw;
    height:100%;
  }
`;

export const LeftColumn = styled.div`
  grid-column: span 3;
  grid-row: span 2;
  width: 100%;
  height: 100%;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(20px);
  Webkit-backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 16px;
  @media (max-width: 468px) {
    height:100%;
  }
`;

export const ImageContainer = styled.div`
  img {
    border-radius: 20px;
    transition: transform 0.3s ease-in-out;
    width:100%;
    &:hover {
      transform: scale(1.01);
    }
  }
`;

export const ContactDetails = styled.div`
  h3 {
    padding-top: 0.5rem;
    font-size: 1.5rem;
  }

  p {
    padding-top: 0.5rem;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding-top: 1rem;
  gap:20px;

  a {
    text-decoration: none;
  }

  div {
    border-radius: 20px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    padding: 1rem;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }
`;


export const StyledHorizontalSmallLine = styled("hr")`
  border: 1px solid orange;
  width: 40%;
  margin-bottom: 10px;
`;
export const StyledHorizontalLargeLine = styled("hr")`
  border: 1px solid orange;
  width: 50%;
`;
export const FoorterWrapper = styled("div")`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 80vw;
  margin: auto;
  gap:20px;
  @media (max-width: 468px) {
    height:100%;
    justify-content: center;
    flex-direction:column;
    gap:0px;
  }
`;
export const FoorterDiv = styled("div")`
  display:flex;
  justify-content:flex-start;
  flex-direction:column;
  width: 100%;
  padding: 50px;
  gap:10px;
  height:300px;
  @media (max-width: 468px) {
    height:fit-content;
  }
`;
export const FooterContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  flex-direction:column;
  gap:20px;
  padding:20px;
  align-items: center;
  font-weight:900;
  width:95vw;
  margin-left:5vw;
`;
export const DeveloperName = styled.h2`
  margin: 0;
`;

export const Year = styled.p`
  margin: 0;
`;

export const SocialLinksContainer = styled.div`
  a {
    display: inline-block;
    margin-right: 10px;
    font-size:30px;
    color:black;
  }
`;

export const QuickLinksContainer = styled.div`
  div {
    margin-bottom: 5px;
    cursor:pointer;
  }
`;

export const BottomToTopButton = styled(MuiButton)({
  backgroundColor: "white",
  borderRadius: "50%",
  width: "60px",
  height: "60px",
  color: "black",
  fontSize: "20px",
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
  backdropFilter: "blur(20px)"
})
export const StyledHorizontalLine = styled.hr`
  width: 60%;
  border: 1px solid grey;
`;
export const StyledContactMeSection = styled('div')<{id: string}>({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    "@media (max-width: 468px)": {
      flexDirection:"column",
      height:"100%"
    },
})
export const ExperienceMuiButton = styled(MuiButton)({
    fontSize: "18px",
    padding:"10px"
})
