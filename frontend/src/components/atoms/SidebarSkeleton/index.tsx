import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { SkeletonDiv, SkeletonIconContainer, SkeletonLeftDiv, SkeletonMiddleDiv, SkeletonRightDiv } from "../../../utils/styled";


const SidebarSkeletonLoader = () =>
    <SkeletonIconContainer>
      <SkeletonLeftDiv>
        <SkeletonDiv />
      </SkeletonLeftDiv>
      <SkeletonMiddleDiv>
        {new Array(6).fill(0).map((_, index) => (
          <SkeletonDiv key={index} />
        ))}
      </SkeletonMiddleDiv>
      <SkeletonRightDiv>
        <SkeletonDiv />
        <SkeletonDiv />
      </SkeletonRightDiv>
    </SkeletonIconContainer>

export default SidebarSkeletonLoader;
