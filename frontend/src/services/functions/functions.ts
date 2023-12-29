import { SxProps } from "@mui/material";

export const getRandomLightColor = () => {
    const letters = 'ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) 
        color += letters[Math.floor(Math.random() * 6)];
    return color;
};

export const getRandomDarkColor = () => {
  const red = Math.floor(Math.random() * 128);
  const green = Math.floor(Math.random() * 128);
  const blue = Math.floor(Math.random() * 128);

  const hexColor = `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;

  const luminance = 0.299 * red + 0.587 * green + 0.114 * blue;
  const textColor = luminance > 128 ? '#fff' : '#000';

  return { background: hexColor, color: textColor };
}

// Example usage:
const randomDarkColor = getRandomDarkColor();
console.log(randomDarkColor.background); // Background color
console.log(randomDarkColor.color);      // Text color


export const getRandomImage = (imageArr: string[]) => imageArr[Math.floor(Math.random() * imageArr.length)];

export const a11yProps = (index: number) => ({
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
});
  
export const getTabStyle = (index: number, value: number, isDark: boolean, customSx?: SxProps) => ({    
    backgroundColor: index === value ? 'lightblue !important' : 'transparent',
    fontSize: "1.25rem",
    color: isDark ? "#fff" : "#000",
    '@media (min-width: 700px)': {
        marginLeft: "40%",
    },
    '&.Mui-selected': {
        backgroundColor: 'lightblue !important',
        borderRadius: "0.625rem",
    },
    ...customSx
})