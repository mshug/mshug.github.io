var config = {
    style: 'mapbox://styles/kazukiarch/cl2dmuo9d001u14v8ie47htgp',
    accessToken: 'pk.eyJ1Ijoia2F6dWtpYXJjaCIsImEiOiJjbDJkc3Y2MWowNHdoM2lwMGZvaHc1bW8wIn0.3P_ApBE4M3eul29o9QGNGQ',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'The Historic Impact of Redlining in Roanoke City',
    subtitle: 'Data Visualization and Mapping Study',
    byline: 'By Haotian Xu & Kazuki Mitsunaga',
    footer: 'Sources:<p/>A Brief History of Roanoke County. History | Roanoke County, VA - Official Website. (n.d.). Retrieved May 11, 2022, from https://www.roanokecountyva.gov/805/History <p/>Arcgis.com. (n.d.). Retrieved May 11, 2022, from https://www.arcgis.com/apps/View/index.html?appid=909e8528cd3a4df190756596dcf5d693 </p> U.S. Census Bureau (2020). RACE. Retrieved from https://data.census.gov/cedsci/table?g=0500000US51770%241500000&y=2020&tid=DECENNIALPL2020.P1 </p> U.S. Census Bureau (2020). MEDIAN HOUSEHOLD VALUE. Retrieved from https://data.census.gov/cedsci/table?q=Median%20Housing%20value&g=0500000US51770%241500000&y=2020&tid=ACSDT5Y2020.B25077 </p> U.S. Census Bureau (2020). EDUCATIONAL ATTAINMENT FOR THE POPULATION 25 YEARS AND OVER. Retrieved from https://data.census.gov/cedsci/table?q=educational%20attainment&g=0500000US51770%241500000&y=2020&tid=ACSDT5Y2020.B15003</p> U.S. Census Bureau (2020). INTERNET SUBSCRIPTION IN HOUSEHOLD. Retrieved from https://data.census.gov/cedsci/table?q=Median%20Housing%20value&g=0500000US51770%241500000&y=2020&tid=ACSDT5Y2020.B25077</p> U.S. Census Bureau (2020). I POVERTY STATUS IN THE PAST 12 MONTHS OF FAMILIES BY FAMILY TYPE BY PRESENCE OF RELATED CHILDREN UNDER 18 YEARS BY AGE OF RELATED CHILDREN. Retrieved from https://data.census.gov/cedsci/table?q=poverty&g=0500000US51770%241500000&y=2020</p> US News. (n.d.). High schools in Roanoke City Public Schools district ... US News. Retrieved from https://www.usnews.com/education/best-high-schools/virginia/districts/roanoke-city-public-schools-104017 </p> US News. (n.d.). Patrick Henry High in Roanoke, VA - US news best high schools. US News. Retrieved from https://www.usnews.com/education/best-high-schools/virginia/districts/roanoke-city-public-schools/patrick-henry-high-20606',
    chapters: [
        {
            id: 'Virginia',
            alignment: 'Right',
            hidden: true,
            title: '',
            description: '',
            location: {
                center: { lon: -79.87533, lat: 38.28127 },
                zoom: 6.5,
                pitch: 0.00,
                bearing: 0.00,
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'RoanokeCityBoarders',
                    opacity: 1,
                     duration: 1000
                },
                {
                    layer: 'VirginiaCounties',
                    opacity: 1,
                     duration: 1000
                },
            ],
            onChapterExit: [
                {
                    layer: 'RoanokeCityBoarders',
                    opacity: 0,
                     duration: 500
                },
                {
                    layer: 'VirginiaCounties',
                    opacity: 0,
                     duration: 500
                },
            ]
        },
        {
            id: 'History',
            alignment: 'Full',
            hidden: false,
            title: 'A Brief History of Roanoke City',
            image: 'images/1891 Map.jpg',
            description: 'The first European settlers ventured into the valley around 1740; they were primarily Scotch-Irish immigrants, a hearty lot who pushed the boundaries of the western frontier and often clashed with both the natives and the English settlers who claimed the land as their own. <p/>The population of Western Virginia, especially Botetourt County, continued to grow in the years following the American Revolution, burgeoned by an influx of German immigrants who followed the Great Road west. In 1802, the Town of Salem was founded along this road. Sustained at first by westward travelers, the town was officially incorporated by the General Assembly in 1836. Two years later, in 1838, Roanoke County was carved out of portions of Botetourt and Montgomery Counties; Salem became the county seat.<p/>The arrival of the Virginia and Tennessee Railroad in 1852, the decision to locate Norfolk and Western Railroad headquarters in the valley, and the accompanying birth of Roanoke City and the Town of Vinton in 1884 gradually changed the character of Roanoke County from rural and agrarian to suburban, industrial, and commercial.<p/>The latter half of the 20th century saw the effects of this transition - population growth, residential and corporate expansion, and with it, a demand for increased services which expanded the scope and mission of county government.<p/>In order to meet the demands of a changing community, Roanoke County was chartered by the Commonwealth of Virginia in 1986, effectively granting the county much of the legal flexibility generally afforded to city governments.<p/>Today, Roanoke County remains dedicated to promoting a high quality of life and ample opportunity for over 90,000 residents. Maintaining excellent schools, ensuring effective public safety, and promoting competitive economic development remain top priorities for the county. Adaptive administration, regional cooperation, and public-private partnerships are leading the way. Together, we are working towards the promise of a bright tomorrow - a promise that begins with a strong foundation.',
            location: {
                center: {  },
                zoom: 0.00,
                pitch: 0.00,
                bearing: 0.00,
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'Redlining Map',
            alignment: 'Full',
            hidden: false,
            title: 'Redlining of Roanoke City',
            image: 'images/redlining.jpg',
            description: 'This map was created in the 1930s and 1940s by the government-sponsored Home Owners Loan Corporation (HOLC). They were used as “security maps” to rate neighborhoods and refinance mortgages to prevent widespread foreclosures during and in the aftermath of the Great Depression.<p/> Neighborhoods were classified into four categories: “A” and “B” areas were the most attractive neighborhoods for refinancing, while “C” areas were deemed to be “transition zones” in decline and “D” areas, colored red on the map, were “characterized by detrimental influence in a pronounced degree.” Race was the dominant factor in determining a neighborhood’s zone: white neighborhoods were nearly always classified as A or B areas. In contrast, black neighborhoods were almost always classified as D areas, areas in “full decline.”',
            location: {
                center: {  },
                zoom: 0.00,
                pitch: 0.00,
                bearing: 0.00,
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Introduction',
            alignment: 'Right',
            hidden: false,
            title: '',
            description: '</p><p style="color:Red; font-size:200%; font-weight: regular; font: serif">How does different factors present to and relate to one another? <p/> Everything can be seen as a consequence of any other factors.Oftentimes, there is no simple solution to solve the issue as everything is connected. Trying to find the exact causation can sometimes be like the question of the chicken or the egg Thus, maybe its about the correlation, and proving that by improving one, we can improve all others. In the case of Roanoke city, redlining as the earliest and the primary factor has a correlation to all the other factors such as racial composition, median housing value, School zone and performance, highest degree earned, poverty, crime rate, etc. Although the policy itself ended decades ago, the effect of it carried through till today.',
            image: 'images/Relation.jpg',
            location: {
                center: { lon: -79.87533, lat: 37.28127 },
                zoom: 11.7,
                pitch: 0.00,
                bearing: 0.00,
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'Racial Composition',
            alignment: 'right',
            hidden: false,
            title: 'Racial Composition of Roanoke City',
            description: 'Racial discrimination has played a large role in the urban development of Roanoke city. Back in the 1930s, the redlining policy separated the city into the north and the south. Despite legal and cultural attempts to integrate, the repercussions of this divide continue to be felt today.<p/>According to the 2018 census data, the majority of the Northern Roanoke population is mostly non-white while the Southern part of the city is predominately white population. <p/> <img src="images/White.png"><p/> <img src="images/Non-White.png">',
            location: {
                center: { lon: -79.87533, lat: 37.28127 },
                zoom: 11.7,
                pitch: 0.00,
                bearing: 0.00,
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'WhitePop',
                    opacity: 1,
                     duration: 1000
                },
                {
                    layer: 'NonWhitePop',
                    opacity: 1,
                     duration: 1000
                },
                {
                    layer: 'Railway',
                    opacity: 1,
                     duration: 1000
                },

            ],
            onChapterExit: [
                {
                    layer: 'WhitePop',
                    opacity: 0,
                     duration: 500
                },
                {
                    layer: 'NonWhitePop',
                    opacity: 0,
                     duration: 500
                },
                {
                    layer: 'Roads',
                    opacity: 0,
                     duration: 500
                },
                {
                    layer: 'Railway',
                    opacity: 1,
                     duration: 1000
                }, 
            ]
        },
        {
            id: 'Median Housing Value',
            alignment: 'right',
            hidden: false,
            title: 'Median Housing Value',
            description: ' The direct result of Redlining was Housing Value and Morgage which we can still trace from data today. <p/>By looking at the median housing value throughout Roanoke City, we see that the properties in the south are valued substantially higher than those in the north. This indicates that there is greater public and private investment throughout the years in predominantly white neighborhoods. <p/> <img src="images/Median Housing Value.png"> <p style="color:Black; font-size:120%; font-weight: Bold">North Side Street View<p/> <p style="color:Black; font-size:120%; font-weight: Bold"><img src="images/North_side_House_Pic.png"> South Side Street View<img src="images/Southside_House_Pic.png">',
            location: {
                center: { lon: -79.87533, lat: 37.28127 },
                zoom: 11.7,
                pitch: 0.00,
                bearing: 0.00,
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'MedianHousingValue',
                    opacity: 1,
                     duration: 2000
                },
                {
                    layer: 'WilliamFleming',
                    opacity: 1,
                     duration: 2000
                },
                {
                    layer: 'PatrickHenry',
                    opacity: 1,
                     duration: 2000
                },
                {
                    layer: 'Railway',
                    opacity: 1,
                     duration: 2000
                },
            ],
            onChapterExit: [
                {
                    layer: 'MedianHousingValue',
                    opacity: 0,
                     duration: 1000
                },
                {
                    layer: 'WilliamFleming',
                    opacity: 0,
                     duration: 1000
                },
                {
                    layer: 'PatrickHenry',
                    opacity: 0,
                     duration: 1000
                },
                {
                    layer: 'SchoolDistrictLine',
                    opacity: 0,
                     duration: 1000
                },
                {
                    layer: 'Railway',
                    opacity: 0,
                     duration: 1000
                },
            ]
        },
        {
            id: 'Crime Rate',
            alignment: 'Left',
            hidden: false,
            title: 'Property Crime Rate',
            description: '<img src="images/Crime Grades.png">Roanoke is in the 30th percentile for safety, meaning 70% of cities are safer and 30% of cities are more dangerous. According to the map, more crimes occur in the northern and central of Roanoke city while the southern part is considered the safest.',
            image: 'images/Crime Rate.png',
            location: {
                center: { lon: -79.87533, lat: 37.28127 },
                zoom: 11.7,
                pitch: 0.00,
                bearing: 0.00,
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'School Zones',
            alignment: 'right',
            hidden: false,
            title: 'School Zone',
            description: 'William Fleming Highschool, Founded 1933 <p/> <img src="images/William_Fleming_Highschool.jpg"> Patrick Henry Highschool, Founded 1951.<p/> <img src="images/Patrick_Henry_Highschool.jpg">Although Redlining ended way before the founding of the schools. Interestingly, the school zones follow the general pattern fo redlinning.',
            location: {
                center: { lon: -79.87533, lat: 37.28127 },
                zoom: 11.7,
                pitch: 0.00,
                bearing: 0.00,
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'PatrickHenry',
                    opacity: 1,
                     duration: 500
                },
                {
                    layer: 'WilliamFleming',
                    opacity: 1,
                     duration: 500
                },
                {
                    layer: 'SchoolDistrictLine-Red',
                    opacity: 1,
                     duration: 500
                },
                {
                    layer: 'Roads',
                    opacity: 1,
                     duration: 500
                },
                {
                    layer: 'Railway',
                    opacity: 1,
                     duration: 500
                },

            ],
            onChapterExit: [
                {
                    layer: 'PatrickHenry',
                    opacity: 0,
                     duration: 500
                },
                {
                    layer: 'WilliamFleming',
                    opacity: 0,
                     duration: 500
                },
                {
                    layer: 'SchoolDistrictLine-Red',
                    opacity: 0,
                     duration: 500
                },
                {
                    layer: 'Roads',
                    opacity: 0,
                     duration: 500
                },
                {
                    layer: 'Railway',
                    opacity: 0,
                     duration: 500
                },

            ]
        },
        {
            id: 'WilliamFlemingHigh',
            alignment: 'right',
            hidden: false,
            title: 'Willam Fleming Highschool Student Performance',
            image: '',
            description: ' Located in the northern part of the city, the majority of the student population belongs to the minority group with only 20% being white. The school offers AP courses and the performance of students is at the national average, and the graduation rate is well below the state median.<p/><img src="images/William_Fleming.png">',
            location: {
                center: { lon: -79.9594579, lat: 37.3100864 },
                zoom: 13,
                pitch: 0.00,
                bearing: 0.00,
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [                
                {
                    layer: 'PatrickHenry',
                    opacity: 1,
                     duration: 500
                },
                {
                    layer: 'WilliamFleming',
                    opacity: 1,
                     duration: 500
                },
                {
                    layer: 'SchoolDistrictLine-Red',
                    opacity: 1,
                     duration: 500
                },
                {
                    layer: 'Roads',
                    opacity: 1,
                     duration: 500
                },
                {
                    layer: 'Railway',
                    opacity: 1,
                     duration: 500
                },
                {
                layer: 'WhitePop',
                opacity: 1,
                 duration: 1000
            },
            {
                layer: 'NonWhitePop',
                opacity: 1,
                 duration: 1000

            },
        ],
            onChapterExit: [
                {
                    layer: 'PatrickHenry',
                    opacity: 0,
                     duration: 500
                },
                {
                    layer: 'WilliamFleming',
                    opacity: 0,
                     duration: 500
                },
                {
                    layer: 'SchoolDistrictLine-Red',
                    opacity: 0,
                     duration: 500
                },
                {
                    layer: 'Roads',
                    opacity: 0,
                     duration: 500
                },
                {
                    layer: 'Railway',
                    opacity: 0,
                     duration: 500
                },
                {
                layer: 'WhitePop',
                opacity: 0,
                 duration: 500
            },
            {
                layer: 'NonWhitePop',
                opacity: 0,
                 duration: 500

            },
        ]
        },
        {
            id: 'PatrickHenryHigh',
            alignment: 'right',
            hidden: false,
            title: 'Patrick Henry HighSchool Student Performance',
            image: '',
            description: ' Located in the Southern part of the city, about half of the student population is white. The school offers AP courses and the performance of students is above the national average, and the graduation rate is at the state median.<p/><img src="images/Patrick_Henry.png">',
            location: {
                center: { lon: -79.9634739, lat: 37.2605195 },
                zoom: 13,
                pitch: 0.00,
                bearing: 0.00,
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'PatrickHenry',
                    opacity: 1,
                     duration: 500
                },
                {
                    layer: 'WilliamFleming',
                    opacity: 1,
                     duration: 500
                },
                {
                    layer: 'SchoolDistrictLine-Red',
                    opacity: 1,
                     duration: 500
                },
                {
                    layer: 'Roads',
                    opacity: 1,
                     duration: 500
                },
                {
                    layer: 'Railway',
                    opacity: 1,
                     duration: 500
                },
                {
                layer: 'WhitePop',
                opacity: 1,
                 duration: 1000
            },
            {
                layer: 'NonWhitePop',
                opacity: 1,
                 duration: 1000

            },
            ],
            onChapterExit: [
                {
                    layer: 'PatrickHenry',
                    opacity: 0,
                     duration: 500
                },
                {
                    layer: 'WilliamFleming',
                    opacity: 0,
                     duration: 500
                },
                {
                    layer: 'SchoolDistrictLine-Red',
                    opacity: 0,
                     duration: 500
                },
                {
                    layer: 'Roads',
                    opacity: 0,
                     duration: 500
                },
                {
                    layer: 'Railway',
                    opacity: 0,
                     duration: 500
                },
                {
                layer: 'WhitePop',
                opacity: 0,
                 duration: 500
            },
            {
                layer: 'NonWhitePop',
                opacity: 0,
                 duration: 500

            },
        ]
        },
        {
            id: 'Graduation Rate',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: '<p/><img src="images/Graduation_Rate.png"><p/><img src="images/Dropout_Rate.png"><p/>By contrasting data between the graduation and dropout rates relative to the two public schools, we see that Patrick Henry was more successful in guiding students through the American educational system, especially during the covid pandemic. ',
            location: {
                center: { lon: -79.87533, lat: 37.28127 },
                zoom: 11.7,
                pitch: 0.00,
                bearing: 0.00,
                mapAnimation: 'flyTo',
            },
            onChapterEnter: [
                {
                    layer: 'WilliamFleming',
                    opacity: 1,
                     duration: 1000
                },
                {
                    layer: 'PatrickHenry',
                    opacity: 1,
                     duration: 1000
                },
                {
                    layer: 'SchoolDistrictLine-Red',
                    opacity: 1,
                     duration: 1000
                },
                {
                    layer: 'Roads',
                    opacity: 1,
                     duration: 1000
                },
                {
                    layer: 'Railway',
                    opacity: 1,
                     duration: 1000
                },

            ],
            onChapterExit: [
                {
                    layer: 'WilliamFleming',
                    opacity: 0,
                     duration: 500
                },
                {
                    layer: 'PatrickHenry',
                    opacity: 0,
                     duration: 500
                },
                {
                    layer: 'SchoolDistrictLine-Red',
                    opacity: 0,
                     duration: 500
                },

            ]
        },
        {
            id: 'Education',
            alignment: 'right',
            hidden: false,
            title: 'Highest Degree Earned-Bachelor (%)',
            image: '',
            description: 'The higher academic performance of Patrick Heney Highschool could be a result of the higher education level of their parents. There’s a significantly higher percentage of households that possess a Bachelor’s degree or higher in the south, indicating that those households most likely have higher-paying and more stable jobs that can cushion the financial blows of the pandemic. </p> <img src="images/Bachelor Degree.png">',
            location: {
                center: { lon: -79.87533, lat: 37.28127 },
                zoom: 11.7,
                pitch: 0.00,
                bearing: 0.00,
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer:'Education',
                    opacity: 1,
                    Duration: 2000
                },
                {
                    layer: 'WilliamFleming',
                    opacity: 1,
                     duration: 2000
                },
                {
                    layer: 'PatrickHenry',
                    opacity: 1,
                     duration: 2000
                },
                {
                    layer: 'SchoolDistrictLine',
                    opacity: 1,
                     duration: 2000
                },
                {
                    layer: 'Roads',
                    opacity: 1,
                     duration: 2000
                },
                {
                    layer: 'Railway',
                    opacity: 1,
                     duration: 2000
                },
            ],
            onChapterExit: [
                {
                    layer:'Education',
                    opacity: 0,
                    Duration: 3000
                },  
                {
                    layer: 'WilliamFleming',
                    opacity: 0,
                     duration: 2000
                },
                {
                    layer: 'PatrickHenry',
                    opacity: 0,
                     duration: 2000
                },
                {
                    layer: 'SchoolDistrictLine',
                    opacity: 0,
                     duration: 2000
                },

            ],
        },

        {
            id: 'Childhood Poverty',
            alignment: 'right',
            hidden: false,
            title: 'Childhood Poverty (%)' ,
            description: 'By examining the rate of childhood poverty in Roanoke City, we see that it is primarily experienced in the North. Despite already struggling to make due, this becomes especially difficult during the pandemic as families’ struggles are compounded by layoffs and medical bills. </p> <img src="images/Childhood Poverty.png">',
            location: {
                center: { lon: -79.87533, lat: 37.28127 },
                zoom: 11.7,
                pitch: 0.00,
                bearing: 0.00,
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'Poverty',
                    opacity: 1,
                     duration: 1000
                },
                {
                    layer: 'WilliamFleming',
                    opacity: 1,
                     duration: 1000
                },
                {
                    layer: 'PatrickHenry',
                    opacity: 1,
                     duration: 1000
                },
                {
                    layer: 'SchoolDistrictLine',
                    opacity: 1,
                     duration: 1000
                },
                {
                    layer: 'Roads',
                    opacity: 1,
                     duration: 1000
                },
                {
                    layer: 'Railway',
                    opacity: 1,
                     duration: 1000
                },

            ],
            onChapterExit: [
                {
                    layer: 'Poverty',
                    opacity: 0,
                    duration:1000
                },
                {
                    layer: 'WilliamFleming',
                    opacity: 0,
                     duration: 1000
                },
                {
                    layer: 'PatrickHenry',
                    opacity: 0,
                     duration: 1000
                },
                {
                    layer: 'Roads',
                    opacity: 0,
                     duration: 1000
                },
                {
                    layer: 'Railway',
                    opacity: 0,
                     duration: 1000
                },
            ]
        },
        
        {
            id: 'Internet Access',
            alignment: 'right',
            hidden: false,
            title: 'Households without Internet Access (%)' ,
            description: '<p/><img src="images/Dropout_Rate.png">A more recent historic effect that’s closer to us would be the relationship between the data and the Covid pandemic. <p/>The dropout rates for William Flem in 2020 have increased by more than 5%. This significant increase in dropout rates can be related to the percentage household of internet access (2018 Census Data). During Covid, almost every school in United State has turned to stay-home, online classes, and the public schools in Roanoke City is not an exception. Not having internet access become a critical asset that prevented students in the north from attending class as schools shifted to online means of teaching.<img src="images/No Internet.png">',
            location: {
                center: { lon: -79.87533, lat: 37.28127 },
                zoom: 11.7,
                pitch: 0.00,
                bearing: 0.00,
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'No_Internet',
                    opacity: 1,
                     duration: 1000
                },
                {
                    layer: 'WilliamFleming',
                    opacity: 1,
                     duration: 1000
                },
                {
                    layer: 'PatrickHenry',
                    opacity: 1,
                     duration: 1000
                },
                {
                    layer: 'SchoolDistrictLine',
                    opacity: 1,
                     duration: 1000
                },
                {
                    layer: 'Roads',
                    opacity: 1,
                     duration: 1000
                },
                {
                    layer: 'Railway',
                    opacity: 1,
                     duration: 1000
                },

            ],
            onChapterExit: [
                {
                    layer: 'No_Internet',
                    opacity: 0,
                    duration:300
                },
                {
                    layer: 'WilliamFleming',
                    opacity: 0,
                     duration: 300
                },
                {
                    layer: 'PatrickHenry',
                    opacity: 0,
                     duration: 300
                },
                {
                    layer: 'Roads',
                    opacity: 0,
                     duration: 300
                },
                {
                    layer: 'SchoolDistrictLine',
                    opacity: 0,
                     duration: 300
                },
                {
                    layer: 'Railway',
                    opacity: 0,
                     duration: 300
                },
            ]
        },
        
        {
            id: 'Conclusion',
            alignment: 'fully',
            hidden: false,
            title: 'Conclusion',
            image: 'images/Relation.jpg',
            description: 'It is important to acknowledge the circumstances in which redlining is still impacting the city today from all aspects. A lot of these parameters are compounding and outside of any one person’s control, and the indiscriminate effect of our most recent pandemic has highlighted an issue that is embedded in Roanoke City. Recognizing these discrepancies in living conditions is a key step to building a city of equal opportunity.',
            location: {
                center: { lon: -79.87533, lat: 37.28127 },
                zoom: 11.7,
                pitch: 0.00,
                bearing: 0.00,
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};
