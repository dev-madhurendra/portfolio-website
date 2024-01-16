import React, { useEffect, useState } from 'react';
import SkillsTag from '../../components/organisms/SkillsTag';
import { getSkillsByTag } from '../../services/apicalls/getcall';
import { TagsToSkillsMapping } from '../../interfaces/types';
import MyChip from '../../components/atoms/Chip';
import { getSkiilImage } from '../../services/apicalls/getcall';
import { useDarkMode } from '../../services/customhook/useDarkMode';
import {
  LeftSkillDiv,
  MuiChipSkillSx,
  RightSkillDiv,
  SkillDiv,
  SkillGrid,
  SkillTextImageDiv
} from '../../utils/styled';

const SkillSection = () => {
  const {isDark} = useDarkMode()
  const [skills, setSkills] = useState<string[]>([]);
  const [tagSkillObj, setTagSkillObj] = useState<TagsToSkillsMapping>({});

  useEffect(() => {
    getSkillsByTag()
      .then((res) => {
        setTagSkillObj(res);
        const defaultTag = Object.keys(res)[0];
        const defaultSkills = res[defaultTag] || [];
        setSkills(defaultSkills);
      })
      .catch((error) => {
        throw new Error("Error while fetching skills " + error)
      });
  }, []);

  const handleTagSkill = (value: string) => {
    const selectedSkills = tagSkillObj[value] || [];
    setSkills(selectedSkills);
  };

  return (
    <SkillDiv id='skill'>
      <LeftSkillDiv>
        <h1>{'<'}Skills{'/>'}</h1>
        <SkillsTag onSkillTagClick={handleTagSkill} />
      </LeftSkillDiv>
      <RightSkillDiv>
        <SkillGrid>
          {skills.map((skill,index) =>
            <SkillTextImageDiv key={index}>
              <img
                src={getSkiilImage(skill, isDark)}
                alt={skill}
              />
              <MyChip
                label={skill}
                key={skill}
                style={MuiChipSkillSx}
              />
            </SkillTextImageDiv>
          )}
        </SkillGrid>
      </RightSkillDiv>
    </SkillDiv>
  );
};

export default SkillSection;
