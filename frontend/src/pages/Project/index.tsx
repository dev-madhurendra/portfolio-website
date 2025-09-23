import React, { useState, useMemo, useEffect } from "react";
import {
  ExternalLink,
  Github,
  ArrowUpRight,
  Code,
  Search,
  Filter,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  ProjectsContainer,
  ContentWrapper,
  HeaderSection,
  MainTitle,
  GradientText,
  HeaderDescription,
  CategoryFilter,
  CategoryButton,
  SectionTitle,
  ProjectsGrid,
  ProjectCard,
  ProjectImage,
  ProjectContent,
  ProjectHeader,
  ProjectTitle,
  ProjectDescription,
  TechStack,
  TechBadge,
  StyledBadge,
  StyledInput,
  StyledButton,
  SearchContainer,
  SearchIcon,
  FilterContainer,
  FilterText,
  SearchAndFilterWrapper,
  NoResultsContainer,
  NoResultsText,
  PaginationContainer,
  PaginationNumbers,
  IconButton,
  ProjectLinksContainer,
  HoverIndicator,
} from "./styled";
import { AnimatedBackground, TitleBadge } from "../../globalStyled";
import { GradientOrb } from "../Home/styled";
import { getProjects } from "../../services/apicalls/getcall";
import { ProjectData } from "./interfaces";
import MyChip from "../../components/atoms/Chip";
import { useAnimateOnScroll } from "../../hook/useAnimateOnScroll";

const PROJECTS_PER_PAGE = 6;

export function Project() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [projects, setProjects] = useState<ProjectData[]>();
  const {ref, isVisible} = useAnimateOnScroll(projects);

  useEffect(() => {
    (async () => {
      try {
        const res = await getProjects();
        setProjects(res.data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  const categories = [
    "All",
    ...Array.from(new Set(projects?.map((p) => p.category))),
  ]

  const filteredProjects = useMemo(() => {
    let filtered = projects;

    if (activeCategory !== "All") {
      filtered = filtered?.filter(
        (project ) => project.category === activeCategory
      );
    }

    if (searchQuery) {
      filtered = filtered?.filter(
        (project) =>
          project?.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          project?.description
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          project.technologies.some((tech) =>
            tech.toLowerCase().includes(searchQuery.toLowerCase())
          )
      );
    }

    return filtered;
  }, [activeCategory, searchQuery, projects]);

  const featuredProjects = projects?.filter((project) => project.featured);

  const totalPages = Math.ceil(filteredProjects?.length / PROJECTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const paginatedProjects = filteredProjects?.slice(
    startIndex,
    startIndex + PROJECTS_PER_PAGE
  );

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  return (
    <ProjectsContainer ref={ref} id="project">
      <AnimatedBackground>
        <GradientOrb className="orb-1" />
        <GradientOrb className="orb-2" />
        <GradientOrb className="orb-3" />
      </AnimatedBackground>

      <ContentWrapper>
        <HeaderSection>
          <TitleBadge>
            <Code />
            Portfolio Showcase
          </TitleBadge>
          <MainTitle>
            Building Digital
            <GradientText> Solutions</GradientText>
          </MainTitle>
          <HeaderDescription>
            A comprehensive collection of {projects?.length} projects showcasing
            expertise across multiple technologies and domains, from web
            applications to system design.
          </HeaderDescription>
        </HeaderSection>

        <SearchAndFilterWrapper>
          <SearchContainer>
            <SearchIcon>
              <Search />
            </SearchIcon>
            <StyledInput
              placeholder="Search projects, technologies, or descriptions..."
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              style={{ paddingLeft: "2.5rem" }}
            />
          </SearchContainer>
          <FilterContainer>
            <Filter />
            <FilterText>
              {filteredProjects?.length} of {projects?.length} projects
            </FilterText>
          </FilterContainer>
        </SearchAndFilterWrapper>

        <CategoryFilter>
          {categories.map((category) => (
            <CategoryButton
              key={category}
              active={activeCategory === category}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
              <span
                style={{
                  marginLeft: "0.5rem",
                  fontSize: "0.75rem",
                  opacity: 0.7,
                }}
              >
                (
                {category === "All"
                  ? projects?.length
                  : projects?.filter((p) => p.category === category).length}
                )
              </span>
            </CategoryButton>
          ))}
        </CategoryFilter>

        {activeCategory === "All" && !searchQuery && (
          <div style={{ marginBottom: "5rem" }}>
            <SectionTitle>
              <ArrowUpRight />
              Featured Projects
            </SectionTitle>
            <ProjectsGrid featured>
              {featuredProjects?.map((project) => (
                <ProjectCard
                  key={project.id}
                  featured
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className={isVisible ? "visible" : ""}
                >
                  <ProjectImage featured>
                    <img
                      src={project.projectImage || "/placeholder.svg"}
                      alt={project.title}
                    />
                  </ProjectImage>

                  <ProjectContent featured>
                    <ProjectHeader>
                     <MyChip label={project.category} />
                      <ProjectLinksContainer>
                        {project.githubUrl && (
                          <IconButton
                            variant="ghost"
                            as="a"
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github />
                          </IconButton>
                        )}
                        {project.deployedUrl && (
                          <IconButton
                            variant="ghost"
                            as="a"
                            href={project.deployedUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink />
                          </IconButton>
                        )}
                      </ProjectLinksContainer>
                    </ProjectHeader>

                    <ProjectTitle featured>{project.title}</ProjectTitle>
                    <ProjectDescription>
                      {project.description}
                    </ProjectDescription>

                    <TechStack>
                      {project.technologies.slice(0, 4).map((tech) => (
                        <TechBadge key={tech}>{tech}</TechBadge>
                      ))}
                      {project.technologies.length > 4 && (
                        <TechBadge>
                          +{project.technologies.length - 4} more
                        </TechBadge>
                      )}
                    </TechStack>
                  </ProjectContent>

                  {hoveredProject === project.id && (
                    <HoverIndicator>
                      <ArrowUpRight />
                    </HoverIndicator>
                  )}
                </ProjectCard>
              ))}
            </ProjectsGrid>
          </div>
        )}

        <div style={{ marginBottom: "2rem" }}>
          <SectionTitle>
            <Code />
            {activeCategory === "All"
              ? "All Projects"
              : `${activeCategory} Projects`}
            {searchQuery && (
              <span
                style={{
                  fontSize: "0.875rem",
                  fontWeight: "normal",
                  marginLeft: "0.5rem",
                }}
              >
                - Search: "{searchQuery}"
              </span>
            )}
          </SectionTitle>

          {paginatedProjects?.length === 0 ? (
            <NoResultsContainer>
              <NoResultsText>
                No projects found matching your criteria.
              </NoResultsText>
              <StyledButton
                variant="outline"
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All");
                  setCurrentPage(1);
                }}
              >
                Clear Filters
              </StyledButton>
            </NoResultsContainer>
          ) : (
            <ProjectsGrid>
              {paginatedProjects?.map((project) => (
                <ProjectCard
                  key={project.id}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className={isVisible ? "visible" : ""}
                >
                  <ProjectImage>
                    <img
                      src={project.projectImage || "/placeholder.svg"}
                      alt={project.title}
                    />
                  </ProjectImage>

                  <ProjectContent>
                    <ProjectHeader>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                        }}
                      >
                        <Code />
                        <StyledBadge variant="secondary">
                          {project.category}
                        </StyledBadge>
                      </div>
                      <ProjectLinksContainer>
                        {project.githubUrl && (
                          <IconButton
                            size="sm"
                            variant="ghost"
                            as="a"
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github />
                          </IconButton>
                        )}
                        {project.deployedUrl && (
                          <IconButton
                            size="sm"
                            variant="ghost"
                            as="a"
                            href={project.deployedUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink />
                          </IconButton>
                        )}
                      </ProjectLinksContainer>
                    </ProjectHeader>

                    <ProjectTitle>{project.title}</ProjectTitle>
                    <ProjectDescription>
                      {project.description}
                    </ProjectDescription>

                    <TechStack>
                      {project.technologies.slice(0, 3).map((tech) => (
                        <TechBadge key={tech}>{tech}</TechBadge>
                      ))}
                      {project.technologies.length > 3 && (
                        <TechBadge>
                          +{project.technologies.length - 3}
                        </TechBadge>
                      )}
                    </TechStack>
                  </ProjectContent>

                  {hoveredProject === project.id && (
                    <HoverIndicator>
                      <ArrowUpRight />
                    </HoverIndicator>
                  )}
                </ProjectCard>
              ))}
            </ProjectsGrid>
          )}
        </div>

        {totalPages > 1 && (
          <PaginationContainer>
            <StyledButton
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft />
              Previous
            </StyledButton>

            <PaginationNumbers>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <StyledButton
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentPage(page)}
                    style={{ width: "2rem", height: "2rem", padding: "0" }}
                  >
                    {page}
                  </StyledButton>
                )
              )}
            </PaginationNumbers>

            <StyledButton
              variant="outline"
              size="sm"
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
            >
              Next
              <ChevronRight />
            </StyledButton>
          </PaginationContainer>
        )}

      </ContentWrapper>
    </ProjectsContainer>
  );
}

export default Project;
