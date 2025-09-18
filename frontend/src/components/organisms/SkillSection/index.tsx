import React from "react";
import { useEffect, useState } from "react";
import {
  CategoryContainer,
  CategoryHeader,
  CategoryIcon,
  CategoryInfo,
  CategoryTitle,
  CategoryCount,
  ChevronIcon,
  SkillsGrid,
  SkillsContainer,
  SectionContainer,
  BackgroundDecor,
  ContentWrapper,
  CategoriesContainer,
} from "./styled";
import SkillTagComponent from "../SkillsTag";
import { SkillCategory } from "./interfaces";
import { getSkillContent } from "../../../services/apicalls/getcall";
import { getRandomLightColor } from "../../../services/functions/functions";



export default function SkillsPageSection({isVisible}: {isVisible: boolean}) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [skillData, setSkillData] = useState<SkillCategory[] | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await getSkillContent();
        setSkillData(res.data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <SectionContainer>
      <BackgroundDecor />
      <ContentWrapper>
        <CategoriesContainer>
          {skillData?.map((category, index) => (
            <CategoryContainer
              key={category.name}
              $isVisible={isVisible}
              $delay={`${index * 200}ms`}
            >
              <CategoryHeader
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
              >
                <CategoryIcon
                  $category={category.name}
                  color={getRandomLightColor()}
                >
                  {category.icon}
                </CategoryIcon>
                <CategoryInfo>
                  <CategoryTitle>{category.name}</CategoryTitle>
                  <CategoryCount>{category.skills.length} skills</CategoryCount>
                </CategoryInfo>
                <ChevronIcon $isExpanded={expandedIndex === index}>
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </ChevronIcon>
              </CategoryHeader>

              <SkillsGrid $isExpanded={expandedIndex === index}>
                <SkillsContainer>
                  {category.skills.map((skill, skillIndex) => (
                    <SkillTagComponent
                      key={skill.name}
                      skill={skill}
                      index={skillIndex}
                      isVisible={isVisible && expandedIndex === index}
                    />
                  ))}
                </SkillsContainer>
              </SkillsGrid>
            </CategoryContainer>
          ))}
        </CategoriesContainer>
      </ContentWrapper>
    </SectionContainer>
  );
}
