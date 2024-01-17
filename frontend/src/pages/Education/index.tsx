import React, { useEffect, useState } from 'react'
import { IEducationDetail } from '../../interfaces/types'
import { getEducations } from '../../services/apicalls/getcall'
import EducationDetail from '../../components/organisms/EducationDetail'
import { Tab, Tabs } from '@mui/material'
import { a11yProps, getTabStyle } from '../../services/functions/functions'
import { useDarkMode } from '../../services/customhook/useDarkMode'
import { EductionsDiv, LeftEducationDiv, RightEducationDiv, EductionsTabDiv, EductionsDetailsDiv } from '../../utils/styled'
import { EDUCATION_SECTION_TEST_ID } from '../../services/mocks/testMocks'
import { EDUCATION_TITLE } from '../../utils/constants'


const Education = () => {
    const { isDark } = useDarkMode();

    const [educations, setEducations] = useState<IEducationDetail[]>([])
    const [value, setValue] = React.useState(0);

    useEffect(() => {
        getEducations()
            .then(res => setEducations(res.data))
            .catch(error => console.log("error while fetching educations : " + error))
    }, [])

    const handleChange = (event: React.SyntheticEvent,newValue: number) => setValue(newValue);
  return (
    <EductionsDiv id={'education'} data-testid = {EDUCATION_SECTION_TEST_ID}>
        <LeftEducationDiv>
            <h1>{EDUCATION_TITLE}</h1>  
        </LeftEducationDiv>      
        <RightEducationDiv>
            <EductionsTabDiv>
                <Tabs
                    orientation="vertical"
                    variant="standard"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    
                >
                    {educations.map((education,index) =>
                        <Tab
                            key={index}
                            label={education.title}
                            {...a11yProps(index)}
                            sx={getTabStyle(index, value, isDark)}
                              
                        />
                    )}  
                </Tabs>
            </EductionsTabDiv>      
            <EductionsDetailsDiv>
                <EducationDetail
                    key={educations[value]?.id}
                    {...educations[value]}
                />
            </EductionsDetailsDiv> 
        </RightEducationDiv>     
    </EductionsDiv>
  )
}

export default Education