import React, { useEffect, useState } from 'react';
import { getSkillsTags } from '../../../services/apicalls/getcall';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { SkillTagButton, SkillTagDiv, SlillTagList } from '../../../utils/styled';
import { itemsPerPage } from '../../../services/mocks/mocks';
import { CHEVRON_LEFT_ROLE, CHEVRON_RIGHT_ROLE, SKILL_SECTION_TEST_ID, SKILL_TAG } from '../../../services/mocks/testMocks';
import { updateIndices } from '../../../services/functions/functions';

const SkillsTag = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [pageState, setPageState] = useState({
    startIndex: 0,
    endIndex: itemsPerPage.laptop,
  });

  useEffect(() => {
    let mounted = true;

    window.addEventListener('resize',handleResize);

    getSkillsTags()
      .then((res) => {
        if (mounted) {
          setTags(res);
        }
          
      })
      .catch(() => {
        console.log('error');
      });

    return () => {
      mounted = false;
    };
  }, []);

  const handlePageChange = (direction: string) => {
    setPageState((prevState) => {
      const { newStartIndex, newEndIndex } = updateIndices(
        prevState.startIndex,
        prevState.endIndex,
        direction,
        tags
      );
      return {
        startIndex: newStartIndex,
        endIndex: newEndIndex,
      };
    });
  };

  const handleResize = () => {
    if (window.innerWidth >= 1000) {
      setPageState((prevState) => ({
        ...prevState,
        endIndex: itemsPerPage.laptop,
      }));
    } else if (window.innerWidth >= 768) {
      setPageState((prevState) => ({
        ...prevState,
        endIndex: itemsPerPage.tablet,
      }));
    } else {
      setPageState((prevState) => ({
        ...prevState,
        endIndex: itemsPerPage.mobile,
      }));
    }
  };

  return (
    <SkillTagDiv data-testid={SKILL_SECTION_TEST_ID}>
      <SkillTagButton
        onClick={() => handlePageChange('prev')}
        disabled={pageState.startIndex === 0}
        children={<FontAwesomeIcon icon={faChevronCircleLeft} />}
        role={CHEVRON_LEFT_ROLE}
      />
      <SlillTagList>
        {tags?.slice(pageState.startIndex, pageState.endIndex)
          .map((tag, index) => (
            <SkillTagButton key={index} children={tag} role={SKILL_TAG + index} />
          ))}
      </SlillTagList>
      <SkillTagButton
        onClick={() => handlePageChange('next')}
        disabled={pageState.endIndex >= tags.length - 5}
        children={<FontAwesomeIcon icon={faChevronCircleRight} />}
        role={CHEVRON_RIGHT_ROLE}
      />
    </SkillTagDiv>
  );
};

export default SkillsTag;
