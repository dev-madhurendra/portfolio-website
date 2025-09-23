import React, { useEffect, useState } from "react";
import { FloatingIcon } from "./interfaces";
import { Container, FloatingIconWrapper } from "./styled";
import { techIcons } from "../../../services/mocks/mocks";

const FloatingIcons: React.FC = () => {
  const [floatingIcons, setFloatingIcons] = useState<FloatingIcon[]>([]);

  useEffect(() => {
    const generateFloatingIcons = () => {
      return techIcons.map((tech, index) => {
        const isTop = Math.random() < 0.78;
        const top = isTop
          ? Math.random() * 40 + 5 
          : Math.random() * 35 + 45; 

        return {
          id: index,
          Icon: tech.Icon,
          color: tech.color,
          top,
          left: Math.random() * 90, 
          size: Math.random() * 25 + 20, 
          duration: Math.random() * 4 + 4, 
          driftDuration: Math.random() * 6 + 6, 
          delay: Math.random() * 5,
          opacity: Math.random() * 0.4 + 0.2, 
        };
      });
    };

    setFloatingIcons(generateFloatingIcons());
  }, []);

  return (
    <Container>
      {floatingIcons.map((tech) => (
        <FloatingIconWrapper
          key={tech.id}
          top={tech.top}
          left={tech.left}
          size={tech.size}
          color={tech.color}
          duration={tech.duration}
          driftDuration={tech.driftDuration}
          delay={tech.delay}
          opacity={tech.opacity}
        >
          <tech.Icon />
        </FloatingIconWrapper>
      ))}
    </Container>
  );
};

export default FloatingIcons;
