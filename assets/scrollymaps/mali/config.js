var config = {
    style: 'mapbox://styles/poorvam/clabrdg80001615qvfzhc7ukn',
    accessToken: 'pk.eyJ1IjoicG9vcnZhbSIsImEiOiJjbGFhY29sczYwMjhqM3dvMjRzYWw4N2Z1In0.nHnA2R3DXmCUB0iUcAnfJw',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'Climate change real in Pittsburg?',
    subtitle: 'Identifying the relationship between major climatic events and social equity',
    byline: 'By Poorva Mali',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: '',
            description: '<h2 style="text-align:center;">The tale of three rivers.</h2> <p style="text-align:justify;">Pittsburg is the largest city in Appalachia known for its abundance in steel businesses and about 446 bridges. The Economist Intelligence Unit in its most recent livability survey ranked Pittsburgh as the most livable city in the United States. </p>In the geographical context ‘the relatively flat surface of the plateau is dissected by drainage from the three principal rivers of the region, the Allegheny, Monongahela, and Ohio. The formation of Pittsburgh’s three rivers and drainages has a long history dating back to before the Pleistocene Epoch, linked closely to the advance and retreat of continental glaciation.’ (Gray et al, 2019) Historically these rivers have been responsible for efficient transportation to and within the city  which was a primary catalyst in the development of the steel industries.</p>But off late, these rivers, in public opinion have also been the reason for intensifying the damages of multiple climatic hazard events in the city.',
            location: {
                center: [-80.3007119, 40.5314779],
                zoom: 9.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                   layer: 'pittsburg-shape',
                  opacity: 1,
                    duration: 1
                },
                {
                    layer: 'bg',
                   opacity: 1,
                     duration: 1
                 }
           ],
           onChapterExit: []
        },
        {
            id: 'Intro 1',
            alignment: 'Full',
            hidden: false,
            title: '',
            image: '',
            description: '<h2 style="text-align:center;">Sequential severe weather events.</h2> <img src="images/news.png"> </p>One of the primary weaknesses that Pittsburg is trying to overcome, being a part of the Rockefeller Foundation’s 100 resilient cities plan, is the impact of severe weather events. In 2021, Pittsburg saw tornados, record setting snow storms and frequent flash floods all in one year, which brought up a serious question – Is the effect of climate change getting more evident in Southern Pennsylvania than the rest of the country? While the overall climate in terms of temperature , rainfall or snowfall doesn’t really show much deviation the events have a long lasting impact. This is where statistics fail to show the true picture and individual incidents need to be studied better.',
            location: {
                center: [-79.99579, 40.44537],
                zoom: 9.5,
                pitch: 0,
                bearing: 0,
               
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Intro 2',
            alignment: 'Full',
            hidden: false,
            title: '',
            image: '',
            description: '<h2 style="text-align:center;">Impact Analysis</h2> </p> The rivers have produced produced steep-sided valleys having a relief ranging up to 600 ft (182 m). The upland areas generally lie at an elevation greater than 1,200 ft (365 m) above mean sea level and constitute only about 10 to 20 percent of the surface area of the region.<img src="images/contour 1.png"><img src="images/contour 2.png"></p>So how do these relief patterns and the rains impact the city? The most obvious consequence is flash floods. The water flows from higher level to lower level increasing the tendance of the water accumulation in the lower elevation areas. The map shows the contours in the physical form of the city, Magenta being the lower elevations and  pastel green being the higher. The rivers unsurpringlying are the source of these low lying areas where the flash flooding risks should be the highest.',
            location: {
                center: [-79.99579, 40.44537],
                zoom: 9.5,
                pitch: 0,
                bearing: 0,
               
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Intro 3',
            alignment: 'Full',
            hidden: false,
            title: '',
            image: '',
            description: '<h2 style="text-align:center;">Comparison to FEMA flood maps.</h2> <img src="images/fema.png"></p>This information resonates with the depictions of the FEMA Flood Maps. The City of Pittsburgh participates in the National Flood Insurance Program, a federal program though the Federal Emergency Management Agency (FEMA). Through the National Flood Insurance Plan, the City agrees to manage development in the floodway and floodplain, which is any land area susceptible to being inundated by floodwaters and heavy rains.</p>FEMA and the floodplain administrator work with local engineers and surveyors to collect the data to inform the maps. According o the map generated for Pittsburg the land around the rivers is under the maximum risk of flooding in case of heavy rainfall and storms.',
            location: {
                center: [-79.99579, 40.44537],
                zoom: 9.5,
                pitch: 0,
                bearing: 0,
               
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Intro 4',
            alignment: 'Full',
            hidden: false,
            title: '',
            image: '',
            description: '<h2 style="text-align:center;">Contradiction to NWS reports</h2> <img src="images/nws.png"></p>The National Weather service relies  heavily on Skywarn Spotters, Broadcast media, cooperative observers, County Officials, and the Public for severe weather reports. While the attempts a diligent, a lot of floods also go unrecorded. But the crucial observation here is that certain areas in Pittsburg had way more floods than the others , almost 10x times. These high risk areas include neighborhoods like Bloomfield, Garfield, Squirrel hill north etc., basically the area between the rivers Monongahela and Allegheny. But other than this geographical distinction are there any other common factors that possibly connect the pattern ?',
            location: {
                center: [-79.99579, 40.44537],
                zoom: 9.5,
                pitch: 0,
                bearing: 0,
               
            },
            onChapterEnter: [],
            onChapterExit: [
                {
                    layer: 'pittsburg-shape',
                    opacity: 0
                },
                {
                    layer: 'bg',
                    opacity: 0
                }
            ]
        },
        {
            id: 'slug-style-id2',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: '<h2 style="text-align:center;">Social Equity factor : RACE</h2><img src="images/White pop legend.png"></p>Turns out that the areas with the highest flood reports are infact the areas with maximum non white population in the city thus making social equity a crucial factor in understanding the impact of major climate events on the population.</p> <h4 style="text-align:center;"> Social equity in Pittsburg</h4></p> Junia Howell, Professor at the University of Pittsburg, in her 2019 study said that if the black residents in the city then, moved to any other major city in the United states, their life expectancy, education and employment opportunities, and income would automatically go up. Such is the state of inequity in Pittsburg, poorer than most of the U.S. The Black residents in Pittsburg are 9 times more likely to be homeless and 6 times more likely to go to bed hungry than the white residents.',
            location: {
                center: [-80.0507119, 40.4314779],
                zoom: 11,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                    layer: 'white-population-pitts-only',
                   opacity: 1,
                     duration: 1000
                 } 
            ],
            onChapterExit: [ ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: '',
            image: ' ',
            description: '<h2 style="text-align:center;">Proximity to Permiable surfaces</h2>Other neighborhoods with minimum diversity have greater proximity to the open pervious areas mitigating water accumulation as compared to the area between the Monongahela and Alleghany River.</footer>',
            location: {
                center: [-79.8607119, 40.4414779],
                zoom: 11.5,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'permiable-surfaces',
                   opacity: 1,
                     duration: 1000
                 },
                 {
                    layer: 'square',
                   opacity: 1,
                     duration: 1000
                 }
           
            ],
            onChapterExit: [  ]
        },
        {
            id: 'Filler 1',
            alignment: 'Full',
            hidden: false,
            title: ' ',
            image: ' ',
            description: 'Not only this, but also the flood reports have no connections to the physical elevation of the land. The neighborhoods with non-white population, which have higher flood reports are also at higher elevations. Whereas the low-lying areas have comparatively narrow flooding instances. Thus the natural rules of flooding possibility get overruled in an urban scenario. Higher density of urban infrastructure refers to higher number of impervious which do not allow the water to infiltrate causing it to log quickly in a shorter span of time. </p><img src="images/overlap.png">',
            location: {
                center: [-79.8607119, 40.4414779],
                zoom: 11.77,
                pitch: 0,
                bearing: 0,
               
            },
            onChapterEnter: [
                {
                    layer: 'permiable-surfaces',
                   opacity: 1,
                     duration: 1000
                 }
            ],
            onChapterExit: [     
                {
                    layer: 'white-population-pitts-only',
                    opacity: 0
                },
                {
                    layer: 'permiable-surfaces',
                   opacity: 0,
                     duration: 1000
                 }

            ]
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: '<h2 style="text-align:center;">Social Equity factor : AGE OF INFRASTRUCTURE</h2><img src="images/Age of Infra legend.png"></p>The area between the Monongohela and Allegheny also has some of the oldest infrastructure in Pittsburg built in 1940s, 50s or even earlier. This implies that the storm water drainage systems incorporated in them are out-dated. Since these systems were designed based on the requirements almost 70-80 years ago they do not have the capacity to deal with the increased amount of rainfall and storms in the recent decades due to climate change. Flooding in the area is hence inevitable.',
            location: {
                center: [-80.0507119, 40.4314779],
                zoom: 11,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'Infrastructure age',
                   opacity: 1,
                     duration: 1500
                 }
            ],
            onChapterExit: [
                {
                    layer: 'Infrastructure age',
                    opacity: 0
                }
            ]
        },
        {
            id: 'fourth-chapter',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: '<h2 style="text-align:center;">Social Equity factor : MEDIAN FAMILY INCOME</h2><img src="images/Income legend.png">If flooding has to be avoided in areas with old infrastructure, accommodations need to be made. The mantainence and repair of these buildings would involve increasing the capacity of the drainage, which in itself is an expensive procedure. Unfortunately the area impacted the most also has some of the lowest median family income. So clearly the population of these areas have not had suitable financial resources to overcome the issue.',
            location: {
                center: [-80.0507119, 40.4314779],
                zoom: 11,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'Income',
                   opacity: 1,
                     duration: 1500
                 },
                 {
                    layer: 'white-population-pitts-only',
                    opacity: 0
                },
                {
                    layer: 'permiable-surfaces',
                    opacity: 0
                },
            ],
            onChapterExit: [ ]    
        },
        {
            id: 'Exit 1',
            alignment: 'Full',
            hidden: false,
            title: '',
            image: '',
            description: '<h2 style="text-align:center;">Social Equity as an ever-present factor.</h2> When Hurricane Katrina hit Louisiana in 2005, low-income African American neighborhoods suffered the most damage. Hurricane Harvey, 2017, in Houston had a similar pattern. Between 2007 and 2016, communities of color paid 87 percent of flood insurance claims in Chicago. So cleary, the accessible resources that inform flood risks are falling short of providing critical information.<img src="images/se.png"> </p>',
            location: {
                center: [-79.99579, 40.44537],
                zoom: 9.5,
                pitch: 0,
                bearing: 0,
               
            },
            onChapterEnter: [{
                layer: 'pittsburg-shape',
               opacity: 1,
                 duration: 1
             },
             {
                 layer: 'bg',
                opacity: 1,
                  duration: 1
              },
              {
                layer: 'Income',
               opacity: 0,
                 duration: 1500
             }
            ],
            onChapterExit: []
        },
        {
            id: 'Exit 2',
            alignment: 'Full',
            hidden: false,
            title: '',
            image: '',
            description: '<h2 style="text-align:center;">Addressing FEMAs inconsistencies.</h2>The FEMA Maps lacks because they are outdated and incomplete. Flood risk is constantly evolving and hence the maps need to as well. But FEMA as an organization is responsible for approximately 22,000 community maps, which forces them to focus on areas with higher population. Flood plain mapping is also expensive which makes federal financial support crucial. Unfortunately, these FEMA maps are used to determine insurances. A lot high risk areas go uninsured due to poor documentation and these are usually habituated by the underprivileged as constantly highlighted by mapping explorations. <p>The First street foundation, an independent research Organization developed its own flood model which identified 1.7x more properties under substantial flooding risks as compared to the FEMA maps. This means 5.9 million properties out od the 14.6 million are underestimating their flooding risks.</p><img src="images/fema1.png">.',
            location: {
                center: [-79.99579, 40.44537],
                zoom: 9.5,
                pitch: 0,
                bearing: 0,
               
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Exit 3',
            alignment: 'Full',
            hidden: false,
            title: '',
            image: '',
            description: 'Specifically with respect to the state of Pennsylvania, FEMA maps identify 194,400 properties as having substantial risk .In comparison, the First Street Foundation Flood Model identifies 2.9 times the number of properties as facing this same level of risk. This discrepancy exists because the Foundation uses the current climate data, maps precipitation as a stand-alone risk, and includes areas that FEMA has not mapped. These new methods uncover an additional 370,200 properties currently not identified by FEMA as having substantial risk. When adjusting for future environmental changes, the FEMA gap further widens to 393,000 by the year 2050.</p> <img src="images/fema2.png">The First street foundation’s National flood assessment report states that snowmelt and rainfall are causing flooding in Pittsburgh. Winter ice jams cause and exacerbate backwater flooding along the Allegheny and Monongahela rivers upstream tributaries. Upstream dams try to control their flows. Hurricanes and tropical storms cause riverine, storm surge, and high tide flooding in Philadelphia. It has concentrated on stream stabilization and infrastructure improvement to reduce flood risk.',
            location: {
                center: [-79.99579, 40.44537],
                zoom: 9.5,
                pitch: 0,
                bearing: 0,
               
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'conclusion',
            alignment: 'center',
            hidden: false,
            title: '',
            image: 'images/conclusion.png',
            description: '',
            location: {
                center: [-80.0507119, 40.4314779],
                zoom: 9.5,
                pitch: 0,
                bearing: 0,
               
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'conclusion',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: '<h2 style="text-align:center;">References.</h2><img src="images/ref.png">',
            location: {
                center: [-80.0507119, 40.4314779],
                zoom: 9.5,
                pitch: 0,
                bearing: 0,
               
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'video',
            alignment: 'full',
            hidden: false,
            title: '',
            image: '',
            description: '<h2>Also Watch: </h2><iframe width="1217" height="685" align="center" src="https://www.youtube.com/embed/jY2eWJ-U_VQ" title="Climate Justice is Social Justice" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            location: {
                center: [-80.0507119, 40.4314779],
                zoom: 11,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: [{
                layer: 'Income',
                opacity: 1
            }
        ]    
        },
        
        
    ]
};
