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
  zIndex:1,
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
export const HomeDiv = styled('div')({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100vh",
    width: "92vw",
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
    }
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
  fontSize: "1.375rem"
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
  '@media (max-width: 900px)': {
    '& h2': {
      fontSize: "40px",
    },
    display: "flex",
    justifyContent: "flex-start",
    alignItems:"center",
    width:"60vw"
  },
  '@media (max-width:468px)': {
    '& h2': {
      width: "100%",
      justifyContent: "flex-start",
      fontSize: "35px",
    },
    width: "80vw",
  },
  '@media (max-width:1280px)': {
    fontSize:"1.3125rem"
  }
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

export const AboutDiv = styled('div')({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "90vw",
    height: "100vh",
    marginLeft: "8vw",
    textAlign:"justify"
})

export const LeftAboutDiv = styled('div')({
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    '& img': {
        width: "600px",
        height: "600px",
        borderRadius: "50%",
    },
    width: "50%",
})
export const RightAboutDiv = styled('div')({
    display: "flex",
    justifyContent: "center",
    flexDirection:"column",
    width:"40%",
    gap: "1.25rem",
})
export const SkillAboutDiv = styled('div')({
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    rowGap: "0.625rem",
    columnGap:"0.625rem"
})