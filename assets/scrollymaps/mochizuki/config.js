var config = {
    style: 'mapbox://styles/tmochizuki/cla1rdn4v000e14pwlbsaisch',
    accessToken: 'pk.eyJ1IjoidG1vY2hpenVraSIsImEiOiJjbGFicndqdW8wM2ZsM3dvMnd0d3RweXJ6In0.zSiaUmyhkkd9IqJNeeldbA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'URBAN FOOD DESERTS',
    subtitle: 'ANALYZING FOOD INSECURITY THROUGH MAPPING FOOD ACCESS AND SOCIAL AND ECONOMIC INEQUALITY IN ROANOKE, VIRGINIA',
    byline: 'TYLER MOCHIZUKI',
    picture: '</p> <image src="images/Healthy and Unhealthy Food.jpg" width = 500 justify-content = center> </p>',
    footer: 'DATA SOURCE: U.S. Census and American Community Survey <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'first-identifier',
            alignment: 'left',
            hidden: false,
            title: 'WHAT IS A FOOD DESERT?',
            description: '</p> <image src="images/Virginia Percent Pop in Food Deserts_07.jpg"> </p> FOOD DESERTS ARE USED TO SPATIALLY ANALYZE VULNERABILITY TO AND SEVERITY OF FOOD INSECURITY. THE U.S. DEPARTMENT OF AGRICULTURE DEFINES THEM AS CENSUS TRACTS THAT MEET BOTH LOW INCOME AND LOW ACCESS THRESHOLDS. </p> LOW INCOME: A POVERTY RATE OF 20% OR GREATER, OR A MEDIAN FAMILY INCOME AT OR BELOW 80% OF THE STATEWIDE OR METROPOLITAN AREA MEDIAN FAMILY INCOME. </p> LOW ACCESS: AT LEAST 500 PERSONS AND/OR AT LEAST 33% OF THE POPULATION LIVES MORE THAN 1 MILE FROM A SUPERMARKET OR LARGE GROCERY STORE IN URBAN CENSUS TRACTS AND MORE THAN 10 MILES IN RURAL CENSUS TRACTS. </p> NEARLY 1.2 MILLION OR 14.83 PERCENT OF VIRGINIANS LIVE IN FOOD DESERT CENSUS TRACTS. THE MAP TO THE RIGHT SHOWS THE PERCENTAGE OF PEOPLE IN EACH COUNTY WHO LIVE IN FOOD DESERT CENSUS TRACTS.',
            location: {
                center: [-82.1569, 37.9316],
                zoom: 6,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'VA_Percent_Pop_in_Food_Deserts',
                    opacity: 1,
                    duration: 1000,  
                },
            ],
            onChapterExit: [
                {
                    layer: 'VA_Percent_Pop_in_Food_Deserts',
                    opacity: 0,
                 },
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'INTRODUCTION TO ROANOKE',
            image: 'images/Roanoke Intro.jpg',
            description: 'image source: City of Roanoke </p/> ROANOKE IS THE LARGEST VIRGINIAN CITY IN APPALACHIA. FOUNDED IN 1882 AS A KEY TRANSFER POINT FOR TRAINS MOVING COAL FROM THE APPALACHIAN REGION TO THE EAST COAST, ROANOKE IS NOW A CITY OF NEARLY 100,000 PEOPLE. </p> THE RAILROADS PLAYED A SUBSTANTIAL ROLE IN PHYSICALLY SHAPING THE CITY\’S NEIGHBORHOODS AND THEY STILL HOLD GREAT ECONOMIC AND CULTURAL SIGNIFICANCE TODAY. HOWEVER, MOST OF THE POPULATION LIVES OUTSIDE OF THE DOWNTOWN NEIGHBORHOOD. ROANOKE\’S SPRAWLING DEVELOPMENT PRESENTS SEVERAL CHALLENGES THAT EXIST IN CAR-CENTRIC CITIES RELATING TO PROXIMITY AND ACCESS TO RESOURCES, SPECIFICALLY FOR LOW-INCOME AND UNDERSERVED POPULATIONS.',
            location: {
                center: [-79.9364, 37.2700],
                zoom: 15,
                pitch: 60,
                bearing: 30,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'Roanoke Railways',
                    opacity: 1,
                    duration: 5000,  
                },
                {
                    layer: 'Building Extrusions',
                    opacity: 1,
                    duration: 500,
                },
            ],
            onChapterExit: [
                {
                    layer: 'Roanoke Railways',
                    opacity: 0,
                    duration: 500,
                 },
                {
                    layer: 'Building Extrusions',
                    opacity: 0,
                 },
            ]
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'ROANOKE QUADRANTS: A DIVIDED HISTORY',
            image: 'images/Redlining Map_Roanoke.jpg',
            description: 'image source: HOLC </p> THE CITY OF ROANOKE IS ORGANIZED BY FOUR QUADRANTS: NORTHWEST (NW), NORTHEAST (NE), SOUTHWEST (SW), AND SOUTHEAST (SE). THESE BOUNDARIES WERE DRAWN DURING THE SEGREGATION ERA AND DIVIDED THE CITY LARGELY ALONG RACIAL LINES. BANKS USED THE FOUR QUADRANTS TO INFORM PREDATORY REDLINED LOAN LENDING PRACTICES IN THE EARLY 1900s (SEE ABOVE IMAGE). THE EFFECTS OF REDLINING ARE STILL VISIBLE IN ROANOKE\’S RACIAL AND ECONOMIC COMPOSITION TODAY.',
            location: {
                center: [-80.0114, 37.2710],
                zoom: 12,
                pitch: 45,
                bearing: 10
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
                    layer: 'Roanoke Quadrants',
                    opacity: 1,
                    duration: 1000
                }
            ],
            onChapterExit:[
                {
                    layer: 'Roanoke Quadrants',
                    opacity: 0,  
                },
            ]
        },
        {
            id: 'fourth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'FOOD DESERTS IN ROANOKE',
            image: '',
            description: 'THIS ANALYSIS USES FOUR INDICATORS TO SIGNIFY POTENTIAL VULNERABILITY TO FOOD INSECURITY FOR CENSUS TRACTS IN ROANOKE. THEY ARE </p> 1). RACIAL DEMOGRAPHICS </p> 2). POVERTY RATES </p> 3). FOOD STAMP USAGE </p> 4). NO VEHICLE OWNERSHIP </p> WHILE EACH INDICATOR IS NOT ENOUGH TO SHOW A SIGNIFICANT CORRELATION TO FOOD INSECURITY ON ITS OWN, THEIR DATA TRIANGULATED TOGETHER IDENTIFIES A NEAR IRREFUTABLE CONNECTION TO FOOD DESERTS IDENTIFIED BY THE USDA-DEFINED PARAMETERS OF LOW INCOME AND LOW ACCESS.',
            location: {
                center: [-79.9004, 37.2630],
                zoom: 12,
                pitch: 45,
                bearing: 10,
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
                    layer: 'Roanoke Food Deserts',
                    opacity: 1,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'Roanoke Food Deserts',
                    opacity: 0
                 }
            ]
        },
        {
            id: 'fifth-identifier',
            alignment: 'left',
            hidden: false,
            title: '1). RACIAL DEMOGRAPHICS',
            image: 'images/Non-White Percentage.jpg',
            description: 'THE NON-WHITE POPULATION IN ROANOKE IS CONCENTRATED IN NORTHWEST. THESE CENSUS TRACTS ARE COMPOSED OF HISTORICALLY AFRICAN AMERICAN NEIGHBORHOODS, INCLUDING GAINESBORO. THERE IS A STRONG CORRELATION BETWEEN FOOD DESERTS AND HIGH CONCENTRATIONS OF NON-WHITE RESIDENTS.',
            location: {
                center: [-80.0114, 37.2710],
                zoom: 12,
                pitch: 45,
                bearing: 10,
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
                    layer: 'Race Data',
                    opacity: 1,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'Race Data',
                    opacity: 0
                 }
            ]
        },
        {
            id: 'sixth-identifier',
            alignment: 'left',
            hidden: false,
            title: '2). SNAP FOOD STAMPS PERCENTAGE',
            image: 'images/Food Stamps Percentage.jpg',
            description: 'THIS MAP SHOWS THE PERCENTAGE OF PEOPLE IN EACH CENSUS TRACT WHO USED FOOD STAMPS FROM THE SUPPLEMENTAL NUTRITION ASSISTANCE PROGRAM (SNAP) IN 2019. THOSE MAKING 130% OF THE FEDERAL POVERTY RATE, LESS THAN $16,237 GROSS ANNUALLY, WITH ASSETS LESS WORTH THAN $2750 WERE ELIGIBLE TO RECEIVE FOOD STAMPS FROM SNAP. CENSUS TRACTS WITH HIGH RATES OF FOOD STAMP USAGE ARE PARTICULARLY VULNERABLE TO FOOD INSECURITY. WHILE SNAP PROVIDES SOME ASSISTANCE TO THOSE STRUGGLING TO AFFORD FOOD, IT IS GENERALLY NOT ENOUGH TO SUSTAIN CONSISTENTLY HEALTHY FOOD PURCHASES.',
            location: {
                center: [-80.0114, 37.2710],
                zoom: 12,
                pitch: 45,
                bearing: 10
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
                    layer: 'Food Stamps Data',
                    opacity: 1,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'Food Stamps Data',
                    opacity: 0
                 }
            ]
        },
        {
            id: 'seventh-identifier',
            alignment: 'left',
            hidden: false,
            title: '3). POVERTY RATES',
            image: 'images/Poverty Rate_03.jpg',
            description: 'THIS MAP DEPICTS THE PERCENTAGE OF PEOPLE IN EACH CENSUS TRACT WHOSE INDIVIDUAL INCOME WAS LESS THAN OR EQUAL TO THE FEDERAL POVERTY RATE IN 2019 ($12,490 GROSS ANNUALLY). POVERTY RATES ARE USEFUL IN IDENTIFYING AREAS THAT MAY STRUGGLE TO AFFORD FRESH AND HEALTHY FOOD OPTIONS. </p> THE LASTING EFFECTS OF TWENTIETH CENTURY REDLINING PRACTICES ARE MOST CLEARLY SHOWN THROUGH POVERTY RATES IN THE CITY. TODAY, CENSUS TRACTS IN NORTHWEST ALONG THE RAILROADS AND PARTS OF NORTHEAST AND SOUTHEAST NEAR DOWNTOWN ARE HISTORICALLY REDLINED AREAS WHERE POVERTY RATES REMAIN HIGHER.',
            location: {
                center: [-80.0114, 37.2710],
                zoom: 12,
                pitch: 45,
                bearing: 10
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
                    layer: 'Poverty Rate',
                    opacity: 1,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'Poverty Rate',
                    opacity: 0
                 }
            ]
        },
        {
            id: 'eighth-identifier',
            alignment: 'left',
            hidden: false,
            title: '4). NO VEHICLE OWNERSHIP',
            image: 'images/Vehicle Ownership Percentage.jpg',
            description: 'IN GENERAL, POPULATIONS LIVING CLOSER TO A CITY\’S DOWNTOWN HAVE LOWER RATES OF VEHICLE OWNERSHIP BECAUSE OF THE PROXIMITY TO JOBS, RESOURCES, AND AMENITIES THAT DOWNTOWN CENTERS TYPICALLY OFFER. WHILE ROANOKE LOOSELY FOLLOWS THIS MODEL, TRENDS IN VEHICLE OWNERSHIP ARE MORE CLOSELY ALIGNED WITH THE RACIAL AND ECONOMIC DIFFERENCES IDENTIFIED BY THE PREVIOUS THREE INDICATORS. </p> POPULATIONS LIVING IN SEVERAL CENSUS TRACTS WITHIN SOUTHWEST AND SOUTHEAST HAVE MORE THAN DOUBLE THE VEHICLE OWNERSHIP RATE THAN THOSE LIVING EQUAL DISTANCES FROM DOWNTOWN IN NORTHWEST AND NORTHEAST. </p> THE VALLEY METRO BUS SYSTEM—ROANOKE\’S ONLY PUBLIC TRANSPORTATION—IS AVERAGE AT BEST. STATIONS RECEIVE BUSSES ONCE PER HOUR AND MOST LINES ARE CLOSED ON SUNDAYS. THIS IS A PIVOTAL ISSUE WHEN THOSE WITHOUT CARS NEED TO TRAVEL FAR DISTANCES TO REACH SUPERMARKETS.',
            location: {
                center: [-80.0114, 37.2710],
                zoom: 12,
                pitch: 45,
                bearing: 10
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
                    layer: 'Vehicle Ownership',
                    opacity: 1,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'Vehicle Ownership',
                    opacity: 0
                 }
            ]
        },
        {
            id: 'nineth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'LOW-INCOME CENSUS TRACTS',
            image: '',
            description: 'LOW-INCOME CENSUS TRACTS ARE ONE OF TWO PARAMETERS USED TO CLASSIFY FOOD DESERTS AND ARE DETERMINED BY THE FEDERAL POVERTY RATE. IT IS CLEAR THAT THE DATA SHOWS A CONVINCING ALIGNMENT BETWEEN THE AREAS WITH HIGH NON-WHITE POPULATIONS, HIGH FOOD STAMP USAGE, AND LOW VEHICLE ACCESS CONCENTRATED IN AREAS OF NORTHEAST, AND SOUTHEAST AROUND DOWNTOWN AND A MAJORITY OF NORTHWEST. </p> THE USDA DEFINES LOW-INCOME CENSUS TRACTS AS THOSE WITH A POVERTY RATE OF 20% OR GREATER, OR A MEDIAN FAMILY INCOME AT OR BELOW 80% OF THE STATEWIDE OR METROPOLITAN AREA MEDIAN FAMILY INCOME.',
            location: {
                center: [-80.0114, 37.2710],
                zoom: 12,
                pitch: 45,
                bearing: 10
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
                    layer: 'Low Income',
                    opacity: 1,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'Low Income',
                    opacity: 0
                 }
            ]
        },
        {
            id: 'tenth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'SUPERMARKET LOCATIONS IN ROANOKE',
            image: 'images/Supermarket_02.jpg',
            description: 'image source: The Shelby Report </p> EACH GREEN POINT REPRESENTS A SUPERMARKET, WHICH IS DEFINED AS A STORE WITH OVER $2 MILLION ANNUAL SALES AND CONTAINS ALL THE MAJOR FOOD DEPARTMENTS INCLUDING FRESH PRODUCE, DAIRY, AND MEAT, DRY AND PACKAGED FOODS, AND FROZEN FOODS (USDA).',
            location: {
                center: [-79.9314, 37.2430],
                zoom: 11.5,
                pitch: 60,
                bearing: 20,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'Grocery Stores',
                    opacity: 1,
                    duration: 1000,
                },
                {
                    layer: 'Roanoke Quadrants',
                    opacity: .25,
                    duration: 1000,
                },
            ],
            onChapterExit: [
                {
                    layer: 'Grocery Stores',
                    opacity: 0,
                },
                {
                    layer: 'Roanoke Quadrants',
                    opacity: 0,
                },
            ],
        },
        {
            id: 'eleventh-identifier',
            alignment: 'right',
            hidden: false,
            title: 'SUPERMARKET CATCHMENT AREAS',
            image: '',
            description: 'TO VISUALIZE ACCESS TO SUPERMARKETS IN ROANOKE, EACH CIRCLE\’S CATCHMENT DIAMETER IS SET TO ONE MILE. THUS EVERYWHERE INSIDE THE GREEN ZONES IS WITHIN ONE MILE OF A SUPERMARKET AND EVERYWHERE OUTSIDE OF A GREEN ZONE IS BEYOND ONE MILE OF A SUPERMARKET AND IS CLASSIFIED AS LOW-ACCESS. </p> ONE FACTOR THAT SHOULD BE ACCOUNTED FOR THAT THIS ANALYSIS DID NOT HAVE THE CAPACITY TO DO IS TOPOGRAPHIC INFLUENCES ON ROAD STEEPNESS OR CURVINESS. THIS IS MAINLY IN REFERENCE TO MANY AREAS IN SOUTHEAST THAT ARE IN THE HILLS. WHILE THEY MAY BE GEOGRAPHICALLY WITHIN THE CATCHMENT AREA, THE CONTRASTING TOPOGRAPHY RESULTS IN LONGER TRAVEL DISTANCES TO SUPERMARKETS.',
            location: {
                center: [-79.8914, 37.2730],
                zoom: 11,
                pitch: 10,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'Grocery Stores 0.5mi Radius',
                    opacity: .5,
                    duration: 2000,
                },
                {
                    layer: 'Grocery Stores',
                    opacity: 1,
                    duration: 1000,
                },
                {
                    layer: 'Roanoke Quadrants',
                    opacity: .25,
                    duration: 1000,
                },
            ],
            onChapterExit: [
                {
                    layer: 'Grocery Stores 0.5mi Radius',
                    opacity: 0,
                },
                {
                    layer: 'Grocery Stores',
                    opacity: 0,
                },
                {
                    layer: 'Roanoke Quadrants',
                    opacity: 0,
                },
            ],
        },
        {
            id: 'twelveth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'ROANOKE LOW FOOD ACCESS',
            image: '',
            description: 'THE CENSUS TRACTS IN YELLOW ARE DESIGNATED LOW ACCESS TRACTS BECAUSE OF MORE THAN 500 RESIDENTS OR 33% OF THE POPULATION LIVES MORE THAN ONE MILE AWAY FROM A SUPERMARKET. CENSUS TRACTS DESIGNATED AS LOW ACCESS ARE CONSIDERED VULNERABLE TO FOOD INSECURITY SINCE FOOD ACCESS IS ONE OF THE TWO PARAMETERS USED TO CLASSIFY FOOD DESERTS.',
            location: {
                center: [-80.0114, 37.2710],
                zoom: 12,
                pitch: 45,
                bearing: 10
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'Roanoke Food Low Access',//replace with Food Deserts once you get the data
                    opacity: 1,
                    duration: 1000,
                },
            ],
            onChapterExit: [
                {
                    layer: 'Roanoke Food Low Access',
                    opacity: 0,

                }
            ],
        },
        {
            id: 'thirteenth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'LOW ACCESS + LOW INCOME = FOOD DESERT',
            image: '',
            description: 'WHEN THE LOW ACCESS CENSUS TRACTS ARE OVERLAID ON THE LOW INCOME CENSUS TRACTS, THE CENSUS TRACTS THAT OVERLAP ARE FOOD DESERTS.',
            location: {
                center: [-80.0114, 37.2710],
                zoom: 12,
                pitch: 45,
                bearing: 10
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'Roanoke Food Low Access',//replace with Food Deserts once you get the data
                    opacity: .85,
                    duration: 1000,
                },
                {
                    layer: 'Low Income',//replace with Food Deserts once you get the data
                    opacity: .55,
                    duration: 1000,
                },
            ],
            onChapterExit: [
                {
                    layer: 'Roanoke Food Low Access',
                    opacity: 0,
                },
                {
                    layer: 'Low Income',
                    opacity: 0,
                }
            ],
        },
        {
            id: 'fourteenth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'FOOD DESERTS IN ROANOKE',
            image: 'images/Roanoke Percent Pop in Food Deserts_01.jpg',
            description: 'OVER 20,000 OF ROANOKE\’S 100,000 RESIDENTS LIVE IN FOOD DESERTS.',
            location: {
                center: [-79.9204, 37.2530],
                zoom: 12,
                pitch: 45,
                bearing: 10,
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
                    layer: 'Roanoke Food Deserts',
                    opacity: 1,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'Roanoke Food Deserts',
                    opacity: 0
                 }
            ]
        },
        {
            id: 'fifteenth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'FOOD DESERT POPULATION COMPOSITION',
            image: 'images/Quadrants Food Deserts.jpg',
            description: 'WHEN DIVIDED BY QUADRANT, THE INEQUITY AMONGST THE NUMBER OF PEOPLE LIVING IN FOOD DESERT CENSUS TRACTS BECOMES EVIDENT. CENSUS TRACTS FROM NORTHWEST MAKE UP NEARLY HALF OF THE FOOD DESERT POPULATION IN ROANOKE, WHILE SOUTHWEST DOES NOT HAVE ANY FOOD DESERT CENSUS TRACTS DESPITE BEING NEARLY EQUAL IN POPULATION (36,149 AND 31,705 RESPECTIVELY).',
            location: {
                center: [-79.9204, 37.2530],
                zoom: 12,
                pitch: 45,
                bearing: 10,
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
                    layer: 'Roanoke Food Deserts',
                    opacity: 1,
                    duration: 1000
                },
                {
                    layer: 'Roanoke Quadrants',
                    opacity: .35,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'Roanoke Food Deserts',
                    opacity: 0
                 },
                 {
                    layer: 'Roanoke Quadrants',
                    opacity: 0
                 }
            ]
        },
        {
            id: 'sixteenth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'ENDING THE DROUGHT: SOLUTIONS AND CONCLUSIONS',
            image: 'images/Bus Stop Pop Up Market.jpg',
            description: 'image source: Johnson, C. </p> LOCATING FOOD DESERT CENSUS TRACTS IS USEFUL IN IDENTIFYING THE AREAS THAT ARE IN THE MOST IMMEDIATE NEED OF SOLUTIONS. TWO SOLUTIONS THAT WOULD BE GREAT STARTS TOWARD ALLEVIATING FOOD INSECURITY ARE THE IMPLEMENTATION OF URBAN FOOD GARDENS AND LOCAL BUS STOP FOOD MARKETS. BOTH ARE SMALL-SCALE INTERVENTIONS THAT ARE MORE FINANCIALLY LOW-RISK THAN LARGE SUPERMARKETS, WHICH WOULD ALLOW THEM TO BE IMPLEMENTED QUICKER.',
            location: {
                center: [-79.9514, 37.2790],
                zoom: 15.5,
                pitch: 70,
                bearing: 90
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'Roanoke Food Deserts',//replace with Food Deserts once you get the data
                    opacity: 0.5,
                    duration: 1000,
                },
                {
                    layer: 'Grocery Stores 0.5mi Radius',
                    opacity: 1,
                    duration: 3000,
                },
                {
                    layer: 'Grocery Stores',
                    opacity: 1,
                    duration: 1000,
                },
            ],
            onChapterExit: [
                {
                    layer: 'Roanoke Food Deserts',
                    opacity: 0,
                },
                {
                    layer: 'Grocery Stores 0.5mi Radius',
                    opacity: 0,
                },
                {
                    layer: 'Grocery Stores',
                    opacity: 0,
                },
            ],
        },
        {
            id: 'seventeenth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'FURTHER STUDIES ON EFFECTIVE IMPLEMENTATION',
            image: 'images/Urban Garden.jpg',
            description: 'image source: Barringer, D. </p> STRATEGIC PLACEMENT OF URBAN FOOD GARDENS AND LOCAL BUS STOP FOOD MARKETS WOULD BE A LOGICAL NEXT STEP OF STUDY. POTENTIAL GOOD LOCATIONS COULD INCLUDE BUSY BUS STOPS, OR OUTSIDE OF OTHER COMMUNITY GATHERING PLACES SUCH AS CHURCHES AND SCHOOLS.',
            location: {
                center: [-79.9414, 37.2740],
                zoom: 15.5,
                pitch: 70,
                bearing: 240
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'Roanoke Food Deserts',//replace with Food Deserts once you get the data
                    opacity: 0.5,
                    duration: 1000,
                },
                {
                    layer: 'Grocery Stores 0.5mi Radius',
                    opacity: 1,
                    duration: 3000,
                },
                {
                    layer: 'Grocery Stores',
                    opacity: 1,
                    duration: 1000,
                },
            ],
            onChapterExit: [
                {
                    layer: 'Roanoke Food Deserts',
                    opacity: 0,
                },
                {
                    layer: 'Grocery Stores 0.5mi Radius',
                    opacity: 0,
                },
                {
                    layer: 'Grocery Stores',
                    opacity: 0,
                },
            ],
        },
        {
            id: 'eighteenth-identifier',
            alignment: 'center',
            hidden: false,
            title: 'WORKS CITED',
            image: '',
            description: 'Maps made with data from the U.S. Census and American Community Survey </p> A Quick Guide to SNAP Eligibility and Benefits. (2022). Center on Budget and Policy Priorities. https://www.cbpp.org/research/food-assistance/a-quick-guide-to-snap-eligibility-and-benefits. </p> Barringer, D. (2019). Community Gardens Day. Natural Lands. https://natlands.org/community-gardens-day/. </p> City of Roanoke. (2021). Image of Roanoke. https://www.wdbj7.com/2021/07/15/roanoke-receives-grants-dept-criminal-justice-services-reducing-gun-violence/. </p> Definitions of Food Security (2022). U.S. Department of Agriculture, Economic Research Service. https://www.ers.usda.gov/topics/food-nutrition-assistance/food-security-in-the-u-s/definitions-of-food-security/. </p> P. Dutko, M. Ver Ploeg, T. Farrigan. (2012). “Characteristics and Influential Factors of Food Deserts.” U.S. Department of Agriculture. </p> Access and Proximity to Grocery Store. (2015). U.S. Department of Agriculture, Economic Research Service. https://www.ers.usda.gov/webdocs/DataFiles/80526/archived_documentation_August2015.pdf?v=0. </p> Food Insecurity. Healthy People 2030. U.S. Department of Health and Human Services, Office of Disease Prevention and Health Promotion. https://health.gov/healthypeople/priority-areas/social-determinants-health/literature-summaries/food-insecurity. </p> HOLC. “Redlining map of Roanoke, Virginia,” Redlining Virginia. http://www.redliningvirginia.org/items/show/19. </p> Johnson, C. (2016). Bus Stop Farmers Markets Get Fresh Produce into Food Deserts. Shareable. https://www.shareable.net/bus-stop-farmers-markets-get-fresh-produce-into-food-deserts/. </p> M. Ver Ploeg, D. Nulph, R. Williams. (2011). Mapping Food Deserts in the United States. U.S. Department of Agriculture, Economic Research Service. </p> Maderer, J. (2016). People in Food Deserts Eat Much Differently than the Rest of America. Georgia Tech News Center. https://news.gatech.edu/news/2016/02/25/people-food-deserts-eat-much-differently-rest-america. </p> A. Rhone. M.Ver Ploeg, R. Williams, V. Breneman. (2019). Understanding Low-Income and Low-Access Census Tracts Across the Nation: Subnational and Subpopulation Estimates of Access to Healthy Food. U.S. Department of Agriculture, Economic Research Service. </p> State-Level Estimates of Low Income and Low Access Populations. (2019). U.S. Department of Agriculture, Economic Research Service. https://www.ers.usda.gov/data-products/food-access-research-atlas/state-level-estimates-of-low-income-and-low-access-populations/. </p> The Shelby Report. (2020). Image of New Rouses Market. https://www.theshelbyreport.com/2020/12/09/new-rouses-market-in-south-lake-charles-now-open/.',
            location: {
                center: [-77.1569, 37.4316],
                zoom: 6,
                pitch: 10,
                bearing: 0
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
                    layer: '',
                    opacity: 1,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: '',
                    opacity: 0,
                 }
            ]
        },
        
    ]
};
