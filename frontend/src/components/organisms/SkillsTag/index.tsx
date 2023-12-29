import React, { useEffect, useState } from 'react';
import { getSkillsTags } from '../../../services/apicalls/getcall';
import { ISkill } from '../../../interfaces/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { SkillTagButton, SkillTagDiv, SlillTagList } from '../../../utils/styled';


const SkillsTag = () => {
  const itemsPerPage = 5;
  const [tags, setTags] = useState<string[]>([]);
  const [pageState, setPageState] = useState({
    startIndex: 0,
    endIndex: itemsPerPage,
  });

  useEffect(() => {
    getSkillsTags()
      .then((res) => {
        const tagSet = new Set<string>();
        res.data.forEach((skill: ISkill) => {
          skill.tags.forEach((tag) => {
            tagSet.add(tag);
          });
        });
        const tagArray = Array.from(tagSet);
        setTags(tagArray);
      })
      .catch(() => {
        console.log('error');
      });
  }, []);

  const handlePageChange = (direction: 'prev' | 'next') => {
    setPageState((prevState) => {
      let newStartIndex = prevState.startIndex;
      let newEndIndex = prevState.endIndex;

      if (direction === 'prev' && prevState.startIndex > 0) {
        newStartIndex -= 1;
        newEndIndex -= 1;
      } else if (direction === 'next' && prevState.endIndex < tags.length) {
        newStartIndex += 1;
        newEndIndex += 1;
      }

      return {
        startIndex: newStartIndex,
        endIndex: newEndIndex,
      };
    });
  };

  return (
    <SkillTagDiv>
      <SkillTagButton
        onClick={() => handlePageChange('prev')}
        disabled={pageState.startIndex === 0}
        children={<FontAwesomeIcon icon={faChevronCircleLeft} />}
      />
      <SlillTagList>
        {tags.slice(pageState.startIndex, pageState.endIndex)
            .map((tag, index) => (
          <SkillTagButton key={index} children={tag} />
        ))}
      </SlillTagList>
      <SkillTagButton
        onClick={() => handlePageChange('next')}
        disabled={pageState.endIndex >= tags.length - 5}
        children={<FontAwesomeIcon icon={faChevronCircleRight} />}
      />
    </SkillTagDiv>
  );
};

export default SkillsTag;
