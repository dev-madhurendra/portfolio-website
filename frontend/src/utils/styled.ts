import styled from '@emotion/styled'
import MuiButton from '../components/atoms/Button'
import WaveUrl from "../../public/gif/Wave-Animation.gif"
import DarkModeWaveUrl from "../../public/gif/Dark-Mode.gif"
import { keyframes } from '@emotion/react'

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
  height: "100vh",
  position: "fixed",
  left:"0",
  display: "flex",
  justifyContent: "space-around",
  flexDirection:"column",
  alignItems: "center",
  gap: "1.25rem",
  fontSize: "1.5rem",
  marginLeft: "1.25rem",
  '@media (max-width:468px)': {
    display: "none",
  },
  zIndex:"1111",
},slideInAnimation)

export const LeftDiv = styled('div')({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  cursor: "pointer",
  borderRadius:"50%"
})
export const MiddleDiv = styled('div')({
  display: "flex",
  justifyContent: "center",
  flexDirection:"column",
  alignItems: "center",
  gap:"2.25rem",
  boxShadow: "rgba(0, 0, 0, 0.35) 0px 0.3125rem 0.9375rem",
  padding: "1.25rem",
  cursor: "pointer",
  borderRadius: "50px",
  backgroundColor: "rgba(255,255,255,0.1)",
  backdropFilter:"blur(1px)"
})
export const RightDiv = styled('div')({
  display: "flex",
  justifyContent: "center",
  flexDirection:"column",
  alignItems: "center",
  cursor: "pointer",
  gap:"1.25rem"
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
      justifyContent: "space-evenly",
      width: "100vw",
    },
    '@media (max-width:468px)': {
      justifyContent: "center",
      width: "100vw",
      marginLeft: "0vw",
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
    '@media (max-width:468px)': {
      width: "100vw",
  },
  zIndex:1
})
const floatAnimation = keyframes`
  0%, 100% {
    transform: translateY(-20);
  }
  50% {
    transform: translateY(20px);
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
      marginTop:"-4.5rem"
    }
  },
  '@media (max-width: 468px)': {
    '& img': {
      width: "25rem",
      height: "25rem",
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
  '@media (max-width: 900px)': {
    width: "60vw",
  },
  '@media (max-width:468px)': {
    width: "80vw",
    justifyContent:"center",
  }
})
export const TypedHomeDiv = styled('div')({
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
    width: "90vw",
    height: "100%",
    marginLeft: "8vw",
    textAlign: "justify",
    marginTop: "6.25rem",
    '@media (max-width: 768px)': {
      flexDirection: "column-reverse",
      height: "100%",
      gap:"1.25rem",
      margin:"auto",
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
    width: "60%",
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
  '@media (max-width: 768px)': {
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
    '@media (max-width: 900px)': {
      '& div': {
        fontSize:"1.8125rem !important",
      },
    },
    '@media (max-width: 1280px)': {
      '& div': {
        fontSize:"2.5rem",
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
  fontSize: '14px',
  fontWeight: '500',
  height: '48px',
  justifyContent: 'center',
  letterSpacing: '.25px',
  lineHeight: 'normal',
  maxWidth: '100%',
  overflow: 'visible',
  padding: '2px 24px',
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

export const SkillTagDiv = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap:"1.25rem"
})

export const SlillTagList = styled('ul')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap:"1.25rem"
})
