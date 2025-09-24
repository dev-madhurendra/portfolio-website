import { IEducationDetail } from "../../interfaces/types";

export const getRandomLightColor = () => {
  const letters = "ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) color += letters[Math.floor(Math.random() * 6)];
  return color;
};

export const getEducationDetails = (props: IEducationDetail) => {
  return [
    { label: "School", value: props.school },
    { label: "Percentage", value: props.percentage },
    { label: "Duration", value: `${props.start_date} - ${props.end_date}` },
    { label: "Location", value: props.location },
    { label: "Description", value: props.description },
  ];
};

export const getExpStat = (
  totalRoles: number,
  totalPromotions: number,
  totalTechnologies: number,
  totalExps: number
) => {
  return [
    {
      label: "Companies",
      number: totalExps.toString(), 
    },
    {
      label: "Total Roles",
      number: totalRoles.toString(), 
    },
    {
      label: "Promotions",
      number: totalPromotions.toString(), 
    },
    {
      label: "Technologies",
      number: totalTechnologies.toString(), 
    },
  ];
};
