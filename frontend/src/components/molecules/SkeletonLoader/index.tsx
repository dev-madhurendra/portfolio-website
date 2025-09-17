import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import SidebarSkeletonLoader from "../../atoms/SidebarSkeleton";
import HomeSkeleton from "../../atoms/SkeletonLoader";


const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;



const PortfolioSkeletonLoader: React.FC = () => {
  return (
    <Container>
      <SidebarSkeletonLoader />
      <HomeSkeleton />
    </Container>
  );
};

export default PortfolioSkeletonLoader;
