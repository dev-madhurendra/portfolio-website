import React, { useState } from "react";
import {
  Calendar,
  MapPin,
  Trophy,
  ChevronDown,
  TrendingUp,
  Award,
  Code,
  Users,
  Building2,
  Clock,
  Target,
} from "lucide-react";
import {
  ExperienceContainer,
  Container,
  HeaderSection,
  ExperienceTimeline,
  CompanySection,
  CompanyHeader,
  CompanyInfo,
  CompanyName,
  CompanyMeta,
  MetaItem,
  CompanyStats,
  StatBadge,
  CompanyContent,
  RolesContainer,
  RoleCard,
  RoleHeader,
  RoleInfo,
  RoleTitle,
  RolePeriod,
  PromotionBadge,
  RoleDescription,
  CollapsibleSection,
  CollapsibleHeader,
  CollapsibleContent,
  TechStack,
  TechTag,
  AchievementsList,
  AchievementItem,
  ExpandIcon,
  ExpStatsSection,
  StatTimelineSection,
} from "./styled";
import { experienceData } from "../../services/mocks/mocks";
import {
  AnimatedBackground,
  GradientText,
  MainTitle,
  TitleBadge,
} from "../../globalStyled";
import { HeaderDescription } from "../Project/styled";
import { GradientOrb } from "../Home/styled";
import { getExpStat } from "../../services/functions/functions";
import AnimatedStatCard from "../../components/atoms/AnimatedStatCard";
import { useAnimateOnScroll } from "../../hook/useAnimateOnScroll";

const Experience = () => {
  const [expandedCompanies, setExpandedCompanies] = useState(new Set([1]));
  const [expandedRoleSections, setExpandedRoleSections] = useState(new Set());
  const {ref, isVisible} = useAnimateOnScroll({threshold: [0.4]});

  const toggleCompany = (companyId: number) => {
    const newExpanded = new Set(expandedCompanies);
    if (newExpanded.has(companyId)) {
      newExpanded.delete(companyId);
    } else {
      newExpanded.add(companyId);
    }
    setExpandedCompanies(newExpanded);
  };

  const toggleRoleSection = (roleId: never, section: string) => {
    const key = `${roleId}-${section}`;
    const newExpanded = new Set(expandedRoleSections);
    if (newExpanded.has(key)) {
      newExpanded.delete(key);
    } else {
      newExpanded.add(key);
    }
    setExpandedRoleSections(newExpanded);
  };

  const calculateSummary = () => {
    const totalRoles = experienceData.reduce(
      (acc, company) => acc + company.totalRoles,
      0
    );
    const totalPromotions = experienceData.reduce(
      (acc, company) => acc + company.promotions,
      0
    );
    const totalTechnologies = new Set(
      experienceData.flatMap((company) =>
        company.roles.flatMap((role) => role.technologies)
      )
    ).size;

    return { totalRoles, totalPromotions, totalTechnologies };
  };

  const { totalRoles, totalPromotions, totalTechnologies } = calculateSummary();

  const expStat = getExpStat(
    totalRoles,
    totalPromotions,
    totalTechnologies,
    experienceData.length
  );
  return (
    <ExperienceContainer id="experience" ref={ref}>
      <AnimatedBackground>
        <GradientOrb className="orb-1" />
        <GradientOrb className="orb-2" />
        <GradientOrb className="orb-3" />
      </AnimatedBackground>
      <Container>
        <HeaderSection>
          <TitleBadge>
            <Trophy size={16} />
            PROFESSIONAL JOURNEY
          </TitleBadge>
          <MainTitle>
            Experience & <GradientText>Growth</GradientText>
          </MainTitle>
          <HeaderDescription>
            5+ years of professional development across diverse roles and
            responsibilities, showcasing consistent growth and expanding
            expertise in modern web technologies.
          </HeaderDescription>
        </HeaderSection>
        
        <StatTimelineSection>
          <ExpStatsSection delay="1.2s" className={isVisible ? "visible" : ""}>
            {expStat.map((stat, index) => (
              <AnimatedStatCard
                isPlusSign={false}
                key={stat.label}
                stat={stat}
                index={index}
                isIcon={false}
              />
            ))}
          </ExpStatsSection>

          <ExperienceTimeline className={isVisible ? "visible" : ""}>
            {experienceData.map((company) => {
              const isExpanded = expandedCompanies.has(company.id);

              return (
                <CompanySection key={company.id}>
                  <CompanyHeader
                    isExpanded={isExpanded}
                    onClick={() => toggleCompany(company.id)}
                  >
                    <CompanyInfo>
                      <CompanyName>
                        <Building2 size={18} />
                        {company.company}
                      </CompanyName>
                      <CompanyMeta>
                        <MetaItem>
                          <MapPin size={14} />
                          {company.location}
                        </MetaItem>
                        <MetaItem>
                          <Users size={14} />
                          {company.companySize}
                        </MetaItem>
                        <MetaItem>
                          <Clock size={14} />
                          {company.totalDuration}
                        </MetaItem>
                      </CompanyMeta>
                    </CompanyInfo>

                    <CompanyStats>
                      <StatBadge variant="primary">
                        <Award size={12} />
                        {company.totalRoles} Roles
                      </StatBadge>
                      {company.promotions > 0 && (
                        <StatBadge variant="success">
                          <TrendingUp size={12} />
                          {company.promotions} Promoted
                        </StatBadge>
                      )}
                      <ExpandIcon isExpanded={isExpanded}>
                        <ChevronDown size={16} />
                      </ExpandIcon>
                    </CompanyStats>
                  </CompanyHeader>

                  <CompanyContent isExpanded={isExpanded}>
                    <RolesContainer>
                      {company.roles.map((role) => (
                        <RoleCard key={role.id}>
                          <RoleHeader>
                            <RoleInfo>
                              <RoleTitle>{role.title}</RoleTitle>
                              <RolePeriod>
                                <Calendar size={14} />
                                {role.period} • {role.duration}
                              </RolePeriod>
                            </RoleInfo>
                            {role.isPromotion && (
                              <PromotionBadge>
                                <TrendingUp size={12} />
                                Promoted
                              </PromotionBadge>
                            )}
                          </RoleHeader>

                          <RoleDescription>{role.description}</RoleDescription>

                          <CollapsibleSection>
                            <CollapsibleHeader
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleRoleSection(role.id, "tech");
                              }}
                            >
                              <Code size={14} />
                              Technologies ({role.technologies.length})
                              <ChevronDown
                                size={14}
                                style={{
                                  transform: expandedRoleSections.has(
                                    `${role.id}-tech`
                                  )
                                    ? "rotate(180deg)"
                                    : "rotate(0deg)",
                                  transition: "transform 0.2s ease",
                                }}
                              />
                            </CollapsibleHeader>
                            <CollapsibleContent
                              isOpen={expandedRoleSections.has(
                                `${role.id}-tech`
                              )}
                            >
                              <TechStack>
                                {role.technologies.map((tech, i) => (
                                  <TechTag key={i}>{tech}</TechTag>
                                ))}
                              </TechStack>
                            </CollapsibleContent>
                          </CollapsibleSection>

                          <CollapsibleSection>
                            <CollapsibleHeader
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleRoleSection(role.id, "achievements");
                              }}
                            >
                              <Target size={14} />
                              Key Achievements ({role.achievements.length})
                              <ChevronDown
                                size={14}
                                style={{
                                  transform: expandedRoleSections.has(
                                    `${role.id}-achievements`
                                  )
                                    ? "rotate(180deg)"
                                    : "rotate(0deg)",
                                  transition: "transform 0.2s ease",
                                }}
                              />
                            </CollapsibleHeader>
                            <CollapsibleContent
                              isOpen={expandedRoleSections.has(
                                `${role.id}-achievements`
                              )}
                            >
                              <AchievementsList>
                                {role.achievements.map((achievement, i) => (
                                  <AchievementItem key={i}>
                                    {achievement}
                                  </AchievementItem>
                                ))}
                              </AchievementsList>
                            </CollapsibleContent>
                          </CollapsibleSection>
                        </RoleCard>
                      ))}
                    </RolesContainer>
                  </CompanyContent>
                </CompanySection>
              );
            })}
          </ExperienceTimeline>
        </StatTimelineSection>
      </Container>
    </ExperienceContainer>
  );
};

export default Experience;
