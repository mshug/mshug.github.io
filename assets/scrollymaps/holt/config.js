var config = {
    style: 'mapbox://styles/hellen01/cl4n619s9002u14qlu9anlqwn',
    accessToken: 'pk.eyJ1IjoiaGVsbGVuMDEiLCJhIjoiY2w0b3AxYnAwMDIzdjNjb2UxMXpmYTR4NCJ9.FMrccKwC-j6d7EPoaP2KJg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    inset: false,
    theme: 'dark',
    use3dTerrain: false,
    title: 'Historic Heat: Redlining and the Urban Heat Island in Atlanta',
    subtitle: 'How is the pattern of historic redlining in Atlanta reflected today?',
    byline: 'By Ellen Holt',
    footer: 'Data Sources: US Census Bureau, CAPA Strategies, Open Street Maps, ESRI, University of Richmond <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'chapter_one',
            alignment: 'fully',
            hidden: false,
            title: 'What is the Urban Heat Island Effect (UHI)?',
            image: '',
            description: '<center><iframe width="100%" height="300px" overflow="hidden" src="https://www.youtube.com/embed/Y-bVwPRy_no" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center><center><p style="font-size: 9px";>Video: NPR overview of the UHI, "Why It’s Usually Hotter In A City | Lets Talk" (https://www.youtube.com/watch?v=Y-bVwPRy_no&ab_channel=NPR)</p></center><br>The Urban Heat Island Effect is the phenomenon where urban areas retain more heat than suburban and rural areas and release it throughout the day. This is largely due to the presence of dark impervious surfaces such as asphalt in urban areas, the design of buildings, how close they are, and the large-scale use of air conditioning systems. Excess heat can cause heat stroke or make existing medical conditions worsen. Children and the elderly are most vulnerable to heat related illness/death.Tree cover, other vegetation, extra space, and different materials used in suburban and rural areas can prevent this heat from building up.<br>Often, the UHI has an uneven effect within urban areas, and some people are more affected than others. With rising temperatures due to climate change, the UHI can prove to be very harmful and even fatal to those experiencing higher temperatures. ',
            location: {
                center: [-94.233,39.050],
                zoom: 3.68,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'Top50Cities',
                    opacity: 1,
                    duration: 1000    
                },
            ],
            onChapterExit: [
                {
                    layer: 'Top50Cities',
                    opacity: 0
                },
            ]
        },
        {
            id: 'chapter_two',
            alignment: 'right',
            hidden: false,
            title: 'Welcome to Atlanta, Georgia',
            image: './images/atl_skyline.jpg',
            description: '<center><p style="font-size: 9px";>Image: An Atlanta skyline (https://www.tripsavvy.com/where-to-stay-in-atlanta-4070343)</p></center><image src= "./images/city_road_L.png"><p style="font-weight: bold">Total Population (2020): 497,642 </p> The entire Atlanta metro area covers about 10 counties in Georgia. We will explore its urban core along administrative city limits, where the UHI is most concentrated. As a Southern city, Atlanta already faces higher average temperatures than other cities in the United States. Understanding where and who is affected most allows us to plan strategies to mitigate the UHI and protect those who are vulnerable.',
            location: {
                center: [-84.315,33.767],
                zoom: 10.47,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'cityboundaryline',
                    opacity: 1,
                    duration: 2000    
                },
                {
                    layer: 'atl_roads',
                    opacity: 1,
                    duration: 2000    
                }
                
            ],
            onChapterExit: [
                {
                    layer: 'atl_roads',
                    opacity: 0
                }
            ]
        },
        {
            id: 'chapter_three',
            alignment: 'left',
            hidden: false,
            title: 'History of Redlining',
            image: './images/RedliningPhoto.jpg',
            description: '<center><p style="font-size: 9px";>Image: Historic redlining maps of Atlanta (https://www.simpleshowing.com/blog/affordable-atlanta-suburbs)</p></center><image src= "./images/redline_L.png">Redlining was an effort begun in the 1930s by a government sponsored program called the Home Owners Loan Corporation that enforced segregation by preventing people of color who were potential homeowners from getting loans or insurance that would allow them to do so. Neighborhoods with large populations of people of color were marked with red and deemed "hazardous" to lend to, hence the term redlining. On the other hand, white and well-off neighborhoods were marked as "best" by the HOLC. This practice was banned in the 1960s, but the effect it had on where people live in a city and what their lives are like persists today. <br><p style="font-weight: bold">To examine the relationship between historic redlining and the UHI, let&#x27s take a look at race, income, land use, temperature, and building density.',
            location: {
                center: [-84.527,33.765],
                zoom: 10.47,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'redlining',
                    opacity: 1,
                    duration: 2000    
                }
            ],
            onChapterExit: []
        },
        {
            id: 'chapter_four',
            alignment: 'left',
            hidden: false,
            title: 'Racial Division in Atlanta',
            image: '',
            description: '<image src= "./images/redline_L.png"><image src= "./images/race_L.png">A strong north-south division exists running through the center of downtown Atlanta, with the majority of non-white residents to the south, and white residents to the north. Of the historically redlined districts that existed in Atlanta, most were on what is now the non-white section of Atlanta. Segregation used to keep black and other non-white residents to the southeastern part of the city, and many people have stayed where their families lived through the generations. Other historically black neighborhoods expanded from these areas out into the metro Atlanta area.',
            location: {
                center: [-84.527,33.765],
                zoom: 10.47,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'population_race',
                    opacity: 1,
                    duration: 2000    
                }
            ],
            onChapterExit: [
                {
                    layer: 'population_race',
                    opacity: 0,  
                }
            ]
        }, 
        {
            id: 'chapter_five',
            alignment: 'left',
            hidden: false,
            title: 'Income Disparity',
            image: '',
            description: '<image src= "./images/redline_L.png"><image src= "./images/income_L.png">The pattern of being lower income follows the same north-south division as race. Several of the block groups with the lowest incomes just west of downtown Atlanta also align with historically redlined districts. This is due to generational poverty and a consistent lack of investment from local and federal governments over the decades both from redlining and other racist practices. There are other sections of Atlanta outside the administrative city limits with very wealthy black residents and a greater upward mobility, but here in the inner part of Atlanta, things have remained stagnant.',
            location: {
                center: [-84.527,33.765],
                zoom: 10.47,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'median_income',
                    opacity: 1,
                    duration: 3000                
                }    
            ],
            onChapterExit: [
                {
                    layer: 'median_income',
                    opacity: 0,  
                }
            ]
        },
        {
            id: 'chapter_six',
            alignment: 'right',
            hidden: false,
            title: 'Daily Temperatures: Morning',
            image: '', 
            description: '<image src= "./images/redline_L.png"><image src= "./images/daytemp_L.png">By looking at the progression of heat throughout a day in Atlanta, we can see which areas are first to trap heat in the morning, get hottest in peak afternoon temperatures, and retain heat into the evening. <br><p style="font-weight: bold"> In the morning, the downtown area and locations both within and just outside historically redlined districts begin to hold heat',
            location: {
                center: [-84.284,33.788],
                zoom: 10.86,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'am_t_image8',
                    opacity: 1,
                    duration: 2000                
                },
                {
                    layer: 'redlining',
                    opacity: 1,
                    duration: 2000                
                }
            ],
            onChapterExit: [
                {
                    layer: 'am_t_image8',
                    opacity: 0,  
                }
            ]
        },
        {
            id: 'chapter_seven',
            alignment: 'right',
            hidden: false,
            title: 'Daily Temperatures: Afternoon Peak',
            image: '', 
            description: '<image src= "./images/redline_L.png"><image src= "./images/daytemp_L.png">By looking at the progression of heat throughout a day in Atlanta, we can see which areas are first to trap heat in the morning, get hottest in peak afternoon temperatures, and retain heat into the evening. <br><p style="font-weight: bold"> In the afternoon, things get hot. We can see hotspots in and around historically redlined districts and overall higher temperatures in the southern portion of the city. Although there are hotspots to the north, peak temperatures are largely affecting those to the south, where we now know is mostly residents who are lower income and people of color.',
            location: {
                center: [-84.284,33.788],
                zoom: 10.86,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'af_t_image8',
                    opacity: 1,
                    duration: 2000                
                },
                {
                    layer: 'redlining',
                    opacity: 1,
                    duration: 2000                
                }
            ],
            onChapterExit: [
                {
                    layer: 'af_t_image8',
                    opacity: 0,  
                }
            ]
        },
        {
            id: 'chapter_eight',
            alignment: 'right',
            hidden: false,
            title: 'Daily Temperatures: Evening',
            image: '', 
            description: '<image src= "./images/redline_L.png"><image src= "./images/daytemp_L.png">By looking at the progression of heat throughout a day in Atlanta, we can see which areas are first to trap heat in the morning, get hottest in peak afternoon temperatures, and retain heat into the evening. <br><p style="font-weight: bold"> In the evening, temperatures reduce again, but the areas that were hottest in the afternoon retain that heat. This means there would be little respite for those who were dealing with peak temperatures earlier.',
            location: {
                center: [-84.284,33.788],
                zoom: 10.86,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'pm_t_image8',
                    opacity: 1,
                    duration: 2000                
                },
                {
                    layer: 'redlining',
                    opacity: 1,
                    duration: 2000                
                }
            ],
            onChapterExit: [
                {
                    layer: 'pm_t_image8',
                    opacity: 0,  
                },
                {
                    layer: 'redlining',
                    opacity: 0             
                }
            ]
        },
        {
            id: 'chapter_nine',
            alignment: 'right',
            hidden: false,
            title: 'The Effect of Greenspace',
            image: './images/park.jpg', 
            description: '<center><p style="font-size: 9px";>Image: Entrance to Atlanta Memorial Park, shaded by trees (https://www.buckhead.com/neighborhoods/atlanta-memorial-park/)</p></center><image src= "./images/af_temp_L.png"><p style="color: #8FFFA0; font-weight: bold"> Green areas represent "greenspace" land use- areas partially or completely covered with vegetation like parks, fields, community gardens, and more. </p> Greenspace reflects heat away from an area rather than absorbing it; the strongest cooling effect is in shade areas where trees are present. The cooling effect can be seen where the greenspace areas overlap with cooler temperatures throughout the city. The city center and areas along large highways have sparse patches of greenspace, and are much warmer by comparison. However, much of the area to the north is cool despite having a large gap with little greenspace. We will explore this later.',
            location: {
                center: [-84.284,33.788],
                zoom: 10.86,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'af_t_image8',
                    opacity: 1,
                    duration: 2000                
                },
                {
                    layer: 'atl_greenspace',
                    opacity: 0.42,
                    duration: 2000                
                }
            ],
            onChapterExit: [
                {
                    layer: 'atl_greenspace',
                    opacity: 0             
                }
            ]
        },
        {
            id: 'chapter_ten',
            alignment: 'right',
            hidden: false,
            title: 'A Closer Look: Highway Hotspots',
            image: './images/atl_traffic.jpg', 
            description: '<center><p style="font-size: 9px";>Image: Traffic jam in Atlanta (https://www.wsbradio.com/news/study-atlanta-traffic-7th-worst-nation/pAIeAYMj0oiJZdKWMfXJxO/)</p></center><image src= "./images/af_temp_L.png">A major contributing factor to areas of surplus heat is multi-lane highways. Atlanta, known for some of the worst traffic in the nation, has several 3-4+ lane highways running through it. Expanding highways is a common tactic by highly populated cities to attempt to alleviate traffic congestion, but it rarely succeeds. Instead, these large swaths of asphalt absorb excessive amounts of heat and emit it to the surrouding areas. This heat can be seen following highway lines in darker oranges moving away from the downtown area.',
            location: {
                center: [-84.372,33.803],
                zoom: 12.23,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'af_t_image8',
                    opacity: 1,
                    duration: 2000                
                },
                {
                    layer: 'atl_roads',
                    opacity: 0.42,
                    duration: 2000                
                }
            ],
            onChapterExit: [
                {
                    layer: 'atl_roads',
                    opacity: 0             
                }
            ]
        },
        {
            id: 'chapter_eleven',
            alignment: 'left',
            hidden: false,
            title: 'A Closer Look: Parking Lots',
            image: './images/parkinglot.jpg', 
            description: '<center><p style="font-size: 9px";>Image: Empty parking lot in The Gulch development area, Atlanta (https://saportareport.com/cash-from-gulch-deals-affordable-housing-trust-fund-allocated-toward-offsetting-rising-property-taxes/sections/reports/seankeenan/)</p></center><image src= "./images/af_temp_L.png">Another major factor in surplus heat is parking lots. Zoning laws encourage a layout of separate commercial areas from residential areas in most US cities, leading to large commercial sections, each store with its own parking lot. Atlanta is no exception. Shopping centers just off the highway have very large, uninterrupted parking lots that collect and emit heat the same way highways do.',
            location: {
                center: [-84.41448, 33.74013],
                zoom: 18.82,
                pitch: 70.50,
                bearing: -139.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'af_t_image8',
                    opacity: 0.42,
                    duration: 2000                
                }
            ],
            onChapterExit: []
        },
        {
            id: 'chapter_elevenpoint5',
            alignment: 'right',
            hidden: true,
            title: '',
            image: '', 
            description: '',
            location: {
                center: [-84.41250, 33.73564],
                zoom: 15.18,
                pitch: 47.00,
                bearing: -152.69
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'af_t_image8',
                    opacity: 0.42,
                    duration: 2000                
                },
                {
                    layer: 'redlining',
                    opacity: 1,
                    duration: 2000                
                }
            ],
            onChapterExit: [
                {
                    layer: 'redlining',
                    opacity: 0               
                }
            ]
        },
        {
            id: 'chapter_twelve',
            alignment: 'right',
            hidden: false,
            title: 'A Closer Look: Building Density and Housing Cost',
            image: './images/closehouse.jpg', 
            description: '<center><p style="font-size: 9px";>Image: Houses in historically black neighborhood Old Fourth Ward (https://www.theguardian.com/cities/2018/oct/23/nowhere-for-people-to-go-who-will-survive-the-gentrification-of-atlanta)</p></center><image src= "./images/af_temp_L.png">Building density also plays a large part in heat retention. Neighborhoods with houses and apartment buildings close together, like the one seen here in a historically redlined area, reduce the airflow in the neighborhood. With less of a breeze to mix the air, the area stays warmer throughout the day. Smaller land parcels per house also means there is little room for trees to provide shade over the neighborhood streets collecting heat. These houses are more affordable for their low income, non-white residents than a house futher in the suburbs.',
            location: {
                center: [-84.40336, 33.73157],
                zoom: 18.85,
                pitch: 62.42,
                bearing: 143.56
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'af_t_image8',
                    opacity: 0.42,
                    duration: 2000                
                }
            ],
            onChapterExit: []
        },
        {
            id: 'chapter_twelvepoint5',
            alignment: 'right',
            hidden: true,
            title: '',
            image: '', 
            description: '',
            location: {
                center: [-84.39629, 33.82075],
                zoom: 13.40,
                pitch: 40.49,
                bearing: 65.85
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'af_t_image8',
                    opacity: 0.42,
                    duration: 2000                
                },
                {
                    layer: 'redlining',
                    opacity: 1,
                    duration: 2000                
                }
            ],
            onChapterExit: [
                {
                    layer: 'redlining',
                    opacity: 0               
                }
            ]
        },
        {
            id: 'chapter_thirteen',
            alignment: 'right',
            hidden: false,
            title: 'A Closer Look: Building Density and Housing Cost',
            image: './images/farhouse.jpg', 
            description: '<center><p style="font-size: 9px";>Image: Open suburban area(https://www.simpleshowing.com/blog/affordable-atlanta-suburbs)</p></center><image src= "./images/af_temp_L.png">A short drive from the previous neighborhood, we can see the opposite effect. This HOLC "best" neighborhood to the north has homes with much more space between them, allowing for more airflow, grass, and trees to cool things down. The people living here are white and more affluent, and they can afford to live in these spacious neighborhoods, perhaps not knowing the conditions of people just a handful of miles away in the same city.',
            location: {
                center: [-84.39803, 33.83513],
                zoom: 17.58,
                pitch: 59.94,
                bearing: -35.85
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'af_t_image8',
                    opacity: 0.42,
                    duration: 2000                
                }
            ],
            onChapterExit: []
        },
        {
            id: 'chapter_fourteen',
            alignment: 'fully',
            hidden: false,
            title: 'Why is this happening?',
            image: '', 
            description: 'As we have seen, living in or near Atlanta&#x27s historically redlined districts means you are more likely to experience hotter temperatures. Despite the HOLC&#x27s practices being banned in the 60s, people of color&#x27s lives are still impacted by it. Generational poverty has held people down and prevented upward mobility in this area. These redlined locations have continued to be disproportionately negatively affected by things largely out of the control of low income and non-white residents&#x27.<br> This effect also extends beyond the redlined neighborhoods. It is more affordable to live in denser neighborhoods near highways and parking lots, but this does not mean anyone deserves to be at higher risk of heatstroke or otherwise have their health degraded by excessive heat.',
            location: {
                center: [-84.38242, 33.85261],
                zoom: 15.65,
                pitch: 66.01,
                bearing: -140.17
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'af_t_image8',
                    opacity: 0.64,
                    duration: 2000                
                }
            ],
            onChapterExit: []
        },
        {
            id: 'chapter_fourteenpoint5',
            alignment: 'right',
            hidden: true,
            title: '',
            image: '', 
            description: '',
            location: {
                center: [-84.39629, 33.82075],
                zoom: 13.40,
                pitch: 40.49,
                bearing: 65.85
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'af_t_image8',
                    opacity: 0.42,
                    duration: 2000                
                },
                {
                    layer: 'redlining',
                    opacity: 1,
                    duration: 2000                
                }
            ],
            onChapterExit: [
                {
                    layer: 'redlining',
                    opacity: 0               
                }
            ]
        },
        {
            id: 'chapter_fifteen',
            alignment: 'fully',
            hidden: false,
            title: 'What comes next?',
            image: '', 
            description: 'As climate change progresses, average temperatures will rise and days over 100 degrees will increase, creating a positive feedback loop that makes urban heat islands worse. Knowing where and who is affected most is key to protecting those who are vulnerable and reversing the UHI. While it is not easy to rip out parking lots or change how close buildings are, adding tree cover and other shade has been shown to have a great impact on reducing surface temperatures. In a perfect world, the city government would take direct action and invest in these vulnerable communities, but oftentimes this kind of action is slow. Making this kind of data open access and widely available can enable community members to take action themselves if their city government will not.<br><br> If you are interested in how other cities around the world are combatting the UHI, check out the video below. <br><center><iframe width="100%" height="300px" overflow="hidden" src="https://www.youtube.com/embed/V4Y7VYVVD68" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center><center><p style="font-size: 9px";>Video: A look at 3 strategies other cities use to mitigate the UHI from B1M, "3 Cool Ways to Cool Our Cities" (https://www.youtube.com/watch?v=V4Y7VYVVD68&t=19s&ab_channel=TheB1M)</p></center>',
            location: {
                center: [-84.39061, 33.76494],
                zoom: 15.98,
                pitch: 59.00,
                bearing: 133.43
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'af_t_image8',
                    opacity: 0.64,
                    duration: 2000                
                }
            ],
            onChapterExit: []
        },
        {
            id: 'chapter_sixteen',
            alignment: 'fully',
            hidden: false,
            title: 'Further Reading and Image Sources',
            image: '', 
            description: 'Further Reading:<br><br>Van Dam, Derek, and Haley Brink. “Urban heat islands in Atlanta highlight areas impacted by redlining.” CNN, 2 October 2021, https://www.cnn.com/2021/09/18/weather/extreme-urban-heat-environmental-racism-climate/index.html. Accessed 12 June 2022.<br><br>CAPA Strategies, LLC. “Heat Watch Report: Atlanta, Georgia.” 2021, https://osf.io/b6t7w/.<br><br>Stirgus, Eric. “Atlanta and black wealth: Success for many, but not for all.” Atlanta Journal-Constitution, 22 February 2020, https://www.ajc.com/news/special-reports/atlanta-and-black-wealth-success-for-many-but-not-for-all/OaxgNw8hUuOuusrwFhShbP/. Accessed 29 June 2022.<br><br> Ivan Allen College of Liberal Arts. “In the Conversation About Redlining, Details Matter.” Georgia Tech, 2 June 2021, https://iac.gatech.edu/news/item/647879/conversation-about-redlining-details-matter. Accessed 30 June 2022.<br><br>Image Sources:<br><br>Malones, Ligaya. “A Guide to Atlantas Best Hotels.” TripSavvy, Dotdash Meredeth, 18 February 2021, https://www.tripsavvy.com/where-to-stay-in-atlanta-4070343. Accessed 29 June 2022.<br><br>Black, Jay. “Study: Atlanta traffic 7th worst in nation.” WSB Radio, 5 February 2013, https://www.wsbradio.com/news/study-atlanta-traffic-7th-worst-nation/pAIeAYMj0oiJZdKWMfXJxO/. Accessed 29 June 2022.<br><br>Hirsh Real Estate Group. “Atlanta Memorial Park.” Buckhead, https://www.buckhead.com/neighborhoods/atlanta-memorial-park/. Accessed 29 June 2022.<br><br>Keenan, Sean. “Cash from Gulch deals affordable housing trust fund allocated toward offsetting rising property taxes.” Saporta Report, 20 October 2020, https://saportareport.com/cash-from-gulch-deals-affordable-housing-trust-fund-allocated-toward-offsetting-rising-property-taxes/sections/reports/seankeenan/. Accessed 29 June 2022.<br><br>Lartey, Jamiles. “Nowhere for people to go: who will survive the gentrification of Atlanta?” The Guardian, 23 October 2018, https://www.theguardian.com/cities/2018/oct/23/nowhere-for-people-to-go-who-will-survive-the-gentrification-of-atlanta. Accessed 29 June 2022.<br><br>SimpleShowing. “9 Affordable Atlanta Suburbs.” SimpleShowing, 4 June 2021, https://www.simpleshowing.com/blog/affordable-atlanta-suburbs. Accessed 29 June 2022.',
            location: {
                center: [-84.39061, 33.76494],
                zoom: 15.98,
                pitch: 59.00,
                bearing: 133.43
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'af_t_image8',
                    opacity: 0.64,
                    duration: 2000                
                }
            ],
            onChapterExit: [
                {
                    layer: 'af_t_image8',
                    opacity: 0,  
                }
            ]
        }
    ]
};
