import React from "react";
import { placeholders } from "../../../services/mocks/mocks";
import { SkeletonHomeDiv, SkeletonLeftHomeDiv, SkeletonPlaceholder, SkeletonRightHomeDiv } from "../../../utils/styled";


 const SkeletonHomeSection = () =>
    <SkeletonHomeDiv>
      <SkeletonLeftHomeDiv>
        {placeholders.map((placeholder, index) => (
          <SkeletonPlaceholder key={index} {...placeholder} />
        ))}
      </SkeletonLeftHomeDiv>
      <SkeletonRightHomeDiv>
        <SkeletonPlaceholder width="31.25rem" height="25rem" />
      </SkeletonRightHomeDiv>
    </SkeletonHomeDiv>


export default SkeletonHomeSection;
