import React from 'react';
import styled from 'styled-components';
import MyChip from '../../atoms/Chip';

const whatIDo = [
  'Full-Stack Development',
  'React & Next.js',
  'Node.js & Express',
  'Database Design',
  'API Development',
  'UI/UX Design',
  'Mobile Development',
  'Cloud Computing',
  'DevOps',
  'Problem Solving',
  'Code Review',
  'Team Leadership',
  'Project Management',
  'Technical Writing'
];

const WhatIDoSection = styled.div`
  margin: 2rem 0;
`;

const SectionTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1.2rem;
  font-family: ${({ theme }) => theme.fonts.heading};
`;

const ChipsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  align-items: flex-start;
`;


const WhatIDo = () => {
  return (
    <WhatIDoSection>
      <SectionTitle>What I Do</SectionTitle>
      <ChipsContainer>
        {whatIDo.map((item) => (
          <MyChip label={item} />
        ))}
      </ChipsContainer>
    </WhatIDoSection>
  );
};

export default WhatIDo;