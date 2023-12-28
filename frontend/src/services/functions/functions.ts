export const getRandomLightColor = () => {
    const letters = 'ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) 
        color += letters[Math.floor(Math.random() * 6)];
    return color;
};