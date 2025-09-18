import React from "react";
import {
  StatCard,
  StatIcon,
  StatLabel,
  StatNumber,
} from "../../../globalStyled";
import { useCountUp } from "../../../hook/useCountUp";

type Stat = {
  number: string;
  label: string;
  icon?: React.ElementType;
};

function AnimatedStatCard({
  stat,
  index,
  isIcon,
  isVisible,
}: {
  stat: Stat;
  index: number;
  isIcon: boolean;
  isVisible: boolean;
}) {
  const count = useCountUp(+stat.number.slice(0, -1), 2000, isVisible);

  return (
    <StatCard delay={`${0.2 + index * 0.1}s`} className={isVisible ? "visible" : ""}>
      <StatNumber>{count + "+"}</StatNumber>
      <StatLabel>{stat.label}</StatLabel>
      <StatIcon>
        {isIcon && stat.icon && <stat.icon />}
      </StatIcon>
    </StatCard>
  );
}

export default AnimatedStatCard;
