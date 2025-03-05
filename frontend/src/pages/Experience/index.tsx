import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { IExperience } from "../../interfaces/types";
import { getExperiences } from "../../services/apicalls/getcall";
import { EXPERIENCE_TITLE } from "../../utils/constants";
import {
  StyledExperienceSection,
  ExperienceFirstContainer,
  ExperienceTabDiv,
  StyledTabPanelDiv,
  StyledDescriptionExp,
  ExperienceMuiButton
} from "../../utils/styled";
import './index.css'
import TechScroll from "../../components/organisms/TechScroll";
import { useScrollReveal } from "../../hook/useScrollReveal";


const Experience = () => {
  const [experiences, setExperiences] = useState<IExperience[]>([]);
  const [tabIndex, setTabIndex] = useState(0);
  useScrollReveal()
  useEffect(() => {
    getExperiences()
      .then((res) => {
        setExperiences(res.data);
      })
      .catch((err) => {
        throw new Error("Error while fetching experience " + err);
      });
  }, []);

  return (
    <StyledExperienceSection id="experience" className="reveal">
      <h1>{EXPERIENCE_TITLE}</h1>
      <ExperienceFirstContainer>
        <Tabs
          selectedIndex={tabIndex}
          className="tabs"
          onSelect={(index) => setTabIndex(index)}
          selectedTabClassName={"is-active"}
          selectedTabPanelClassName={"is-active"}
        >
          <ExperienceTabDiv>
            <div>
              <TabList className="tab__list">
                {experiences.map((experience) => {
                  const { id, company } = experience;
                  return (
                    <Tab
                      key={`company-${id}`}
                      selectedClassName="selected-tab"
                      className="tab"
                    >
                      <ExperienceMuiButton children={company} className="button" />
                    </Tab>
                  );
                })}
              </TabList>
            </div>

            <div>
              {experiences.map((experience) => {
                const {
                  id,
                  titles,
                  company,
                  location,
                  description,
                  technologies,
                } = experience;
                return (
                  <TabPanel key={`panel-${id}`}>
                    <StyledTabPanelDiv>
                      <div className="timeline">
                        {titles.map((title_child) => (
                          <div key={`title-${title_child.title_id}`} className="timeline-item">
                            <div className="timeline-dot" />
                            <div className="timeline-content">
                              <h2 className="tab__panel-title">
                                {title_child.title} @ {company}
                              </h2>
                              <p className="tab__panel-subtitle">
                                {title_child.start_date} - {title_child.end_date ? title_child.end_date : "Present"}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <p className="tab__panel-subtitle">{location}</p>
                      <StyledDescriptionExp className="tab__panel-subtitle">
                        {description}
                      </StyledDescriptionExp>
                      <TechScroll technologies={technologies} />
                    </StyledTabPanelDiv>
                  </TabPanel>
                );
              })}
            </div>
          </ExperienceTabDiv>
        </Tabs>
      </ExperienceFirstContainer>
    </StyledExperienceSection>
  );
};

export default Experience;
