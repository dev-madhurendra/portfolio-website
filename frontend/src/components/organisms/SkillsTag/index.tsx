import React, { useState } from "react";
import { Skill } from "./interfaces";
import { LevelDot, Tooltip } from "../SkillSection/styled";
import { SkillTag, SkillIcon, SkillName, SkillLevel } from "./styled";

const SkillTagComponent = ({
  skill,
  index,
  isVisible,
}: {
  skill: Skill;
  index: number;
  isVisible: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <SkillTag
      $isVisible={isVisible}
      $delay={`${index * 50}ms`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <SkillIcon className="skill-icon">{skill.icon}</SkillIcon>
      <SkillName className="skill-name">{skill.name}</SkillName>

      <SkillLevel>
        {[...Array(5)].map((_, i) => (
          <LevelDot key={i} $active={i < Math.floor(skill.level / 20)} />
        ))}
      </SkillLevel>

      {isHovered && <Tooltip>{skill.level}% proficiency</Tooltip>}
    </SkillTag>
  );
};

export default SkillTagComponent;
