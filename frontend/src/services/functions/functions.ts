import { SxProps } from "@mui/material";
import { IEducationDetail, ISkill } from "../../interfaces/types";

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

export const getEducationDetails = (props : IEducationDetail) => {
    return [
        { label: 'School', value: props.school },
        { label: 'Percentage', value: props.percentage },
        { label: 'Duration', value: `${props.start_date} - ${props.end_date}` },
        { label: 'Location', value: props.location },
        { label: 'Description', value: props.description },
    ];
}

export const updateIndices =
    (
        startIndex: number,
        endIndex: number,
        direction: string,
        tags: string[]
    ) => {
    if (direction === 'prev' && startIndex > 0) {
        return { newStartIndex: startIndex - 1, newEndIndex: endIndex - 1 };
    } else if (direction === 'next' && endIndex < tags.length) {
        return { newStartIndex: startIndex + 1, newEndIndex: endIndex + 1 };
    }
    return { newStartIndex: startIndex, newEndIndex: endIndex };
};
