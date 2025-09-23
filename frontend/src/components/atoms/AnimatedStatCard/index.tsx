import React from "react";
import {
  StatCard,
  StatIcon,
  StatLabel,
  StatNumber,
} from "../../../globalStyled";
import { useCountUp } from "../../../hook/useCountUp";
import { Stat } from "./type";

function AnimatedStatCard({
  stat,
  index,
  isIcon,
  isVisible,
  isPlusSign = true,
}: {
  stat: Stat;
  index: number;
  isIcon: boolean;
  isVisible?: boolean;
  isPlusSign?: boolean;
}) {
  const count = useCountUp(
    isPlusSign ? +stat.number.slice(0, -1) : +stat.number,
    2000,
    (isVisible = true)
  );

  return (
    <StatCard
      delay={`${0.2 + index * 0.1}s`}
      className={isVisible ? "visible" : ""}
    >
      <StatNumber>{count + (isPlusSign ? "+" : "")}</StatNumber>
      <StatLabel>{stat.label}</StatLabel>
      <StatIcon>{isIcon && stat.icon && <stat.icon />}</StatIcon>
    </StatCard>
  );
}

export default AnimatedStatCard;
