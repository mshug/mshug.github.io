var config = {
    style: 'mapbox://styles/connorsheridan/cl4b3y56t000g15qoishxz8aq',
    accessToken: 'pk.eyJ1IjoiY29ubm9yc2hlcmlkYW4iLCJhIjoiY2w0YWxhMnY5MWQ0dzNrbnNsM2M1cDl2MSJ9.r7Ericf9LJqWK_iy_EXuXQ',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: true, //set true for enabling 3D maps.
    title: 'Is Roanoke Ignoring its Most Vulnerable Communities?',
    subtitle: 'How a city built on healthcare is furthering poverty-based disparities.',
    byline: 'By Connor Sheridan',
    footer: 'Sources</p>[1] History. (n.d.). RoanokeCountyVa. Retrieved Jun. 29, 2022, from https://www.roanokecountyva.gov/805/History</p>[2] Our History (n.d.). CarilionClinic. Retrieved Jun. 29, 2022, from https://www.carilionclinic.org/news/our-history/preview/5180385c574a73bbb125f36d1023d916ddc2c3cf </p>[3] Workforce| Leading Employers (n.d.) RoanokeRegionalPartnership. Retrieved Jun. 29, 2022, from https://roanoke.org/data/workforce/leading-employers/ </p>[4] Cowell, B. (2019, May 15). How Roanoke, Virginia, Is Addressing Income Disparities And Their Impact On Health Outcomes. HealthAffairs. https://www.healthaffairs.org/do/10.1377/forefront.20190513.588162/full/ </p>[5] Davila, A. (2022, May 5). Pop-up clinic offers free healthcare services to Roanoke’s homeless community. WSLS. https://www.wsls.com/news/local/2022/05/06/pop-up-clinic-offers-free-healthcare-services-to-roanokes-homeless-community/ </p>[6] Roanoke College News (2022, Jun. 29). Roanoke College and Carilion Clinic partner to serve the growing health care sector. RoanokeCollege. https://www.roanoke.edu/about/news/carilion_clinic_partnership     <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Brief History of Roanoke',
            image: '',
            description: 'European settlers arrived in the Roanoke valley area in the 18th Century, imposing themselves on the land of existing Native Americans. The area remained relatively unpopulated by Europeans (with the exception of some German immigrants following the Great Road west) until 1852, when the Norfolk and Western Railroad chose to locate headquarters in the valley area, leading to the city’s industrialization.[1] </p><img src = https://bloximages.newyork1.vip.townnews.com/roanoke.com/content/tncms/assets/v3/editorial/c/a6/ca6b188d-7923-51ed-bfd6-43faf94ca943/5e4c45c76d15e.image.jpg?resize=1828%2C1134> </p>Image: </p>https://roanoke.com/gallery/photos-glimpses-of-roanokes-railroad-heritage-from-the-n-w-to-norfolk-southern/collection_04d5c73b-4399-5375-b2b3-5dfb5e377d50.html#1 ',
            location: {
                center: { lon: -79.9348, lat: 37.2704},
                zoom: 12,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: '',
                     opacity: 1,
                     duration: 5000
                 }
            ],
            onChapterExit: [
                 {
                     layer: '',
                     opacity: 0
                 }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Arrival of Carilion Clinic',
            image: '',
            description: 'Carilion Clinic first arrived in Roanoke in 1900 with the opening of the Roanoke Memorial Hospital. The hospital was formed in response to the industrial growth from the railroad industry [2]. Advancements in transportation and infrastructure led to a decline in Roanoke’s economic growth from the industrial sector. It was likely this economic gap which led to Carilion Clinic becoming a much larger contributor to Roanoke’s economy. </p>NOTE: Buildings in red symbolize anything classified as "clinic", "doctor", or "hospital" by OSM.</p> <img src = https://www.carilionclinic.org/themes/custom/cc_theme/cc-front-end/src/images/graduate-medical-education/heros/building3.jpg </p>Image: </p>https://www.carilionclinic.org/gme/surgical-critical-care-fellowship </p>Data layer from OSM',
            location: {
                center: { lon: -79.942262, lat: 37.251264},
                zoom: 15,
                pitch: 80,
                
               
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'Healthcare',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'Healthcare',
                    opacity: 1
                }
            ]
        },
        {
            id: 'third-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Location v. Income',
            image: 'images/income.png',
            description: 'Roanoke faces greater disparities in poverty in comparison to most of Virginia [4]. There is a clear geographic divide between Northern and Southern Roanoke. The area impacted most by low income is Northwestern Roanoke. This correlates with the lack of medical facilities in the area including the Roanoke Memorial Hospital which is located in Southern Roanoke </p>Data from ACS 2020',
            location: {
                center: { lon: -79.9348, lat: 37.2704},
                zoom: 12,
                pitch: 0,
                bearing: 0
               
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                
                {
                    layer: 'Median Income',
                    opacity: .8,
                    duration: 5000
                    
                },
                {
                    layer: 'Healthcare',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'Median Income',
                    opacity: 0
                   
                },
                {
                    layer: 'Healthcare',
                    opacity: 0
                }
            ]
        },
        {
            id: 'fourth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Influence on Occupation and Education',
            image: 'images/healthcarea.png',
            description: 'The link between Carilion Clinic and income should be highlighted because of the company’s stronghold on the economy. A survey from the Virginia Employment Commission in 2021 found Carilion Clinic to be the top employer of Roanoke area residents [3]. An additional survey from the same year found 17.8% of Roanoke’s population is employed within the health care and social assistance industry [3]. Carilion Clinic’s reach also spreads to many of the surrounding universities including Roanoke College and Virginia Tech. </p>Data from ACS 2020',
            location: {
                center: { lon: -79.9348, lat: 37.2704},
                zoom: 12,
                pitch: 0,
                
               
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'County Occupation', 
                    opacity: .8,
                    duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'County Occupation', 
                    opacity: 0
                }
            ]
        },
        {
            id: 'fifth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Healthcare Employment at State Level',
            image: 'images/healthcareb.png',
            description: 'Data from ACS 2020',
            location: {
                center: { lon: -79.36749, lat: 37.70898},
                zoom: 6.8,
                pitch: 0,
                bearing: 0
               
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'State Occupation',
                    opacity: .8,
                    duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'State Occupation',
                    opacity: 0
                }
            ]
        },
        {
            id: 'sixth-identifier',
            alignment: 'fully',
            hidden: false,
            title: 'The Health Divide',
            image: '',
            description: 'These geographic patterns between Roanokes Healthcare industry and the citys poverty rates extend to other aspects of the communtys health. Ironically, a city based on healthcare is failing to support areas which are at the greatest risk of facing health problems',
            location: {
                center: { lon: -79.9348, lat: 37.2704},
                zoom: 12,
                pitch: 60,
                bearing: 10
               
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: '',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: '',
                    opacity: 0
                }
            ]
        },
        {
            id: 'seventh-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Disability Rates',
            image: 'images/disability.png',
            description: 'Individuals which have identified a disability on the census are most concentrated in Western Roanoke. Few medical facilities are located in this part of the city which also suffers from lower incomes. </p>Data from ACS 2020',
            location: {
                center: { lon: -79.9348, lat: 37.2704},
                zoom: 12,
                pitch: 0,
                bearing: 10
               
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'Disability Rates',
                    opacity: .8,
                    duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'Disability Rates',
                    opacity: 0
                }
            ]
        },
        {
            id: 'eighth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Social Vulnerability Index',
            image: 'images/SVI.png',
            description: '<img src=images/SVIL.png></p>In all, the Roanoke area was ranked low in the CDCs SVI. There was no notable discern between Roanoke City and Roanoke County. This provides little information on the different areas of the city. However, it does suggest that Roanoke County has more resources than most of the surrounding area. Given this, the county should be better equip to support its more vulnerable communities.</p>Centers for Disease Control and Prevention/ Agency for Toxic Substances and Disease Registry/ Geospatial Research, Analysis, and Services Program. CDC/ATSDR Social Vulnerability Index 2018 Database Virginia',
            location: {
                center: { lon: -79.9348, lat: 37.2704},
                zoom: 11,
                pitch: 0,
                bearing: 0
               
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'SVI',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'SVI',
                    opacity: 0
                }
            ]
        },
        {
            id: 'eighthish-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Social Vulnerability Index County Level',
            image: 'images/SVI.png',
            description: '<img src=images/SVIL.png></p>Looking at the SVI on a County level, we can see how exaggerated these disparities become across the city.</p>Centers for Disease Control and Prevention/ Agency for Toxic Substances and Disease Registry/ Geospatial Research, Analysis, and Services Program. CDC/ATSDR Social Vulnerability Index 2018 Database Virginia',
            location: {
                center: { lon: -79.9348, lat: 37.2704},
                zoom: 12,
                pitch: 0,
                bearing: 0
               
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'SVI COUNTY',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'SVI COUNTY',
                    opacity: 0
                }
            ]
        },
        {
            id: 'ninth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Population without Health Insurance',
            image: 'images/insurance.png',
            description: 'Populations without health insurance are once again located in areas with the lowest income, and located far from any medical facilities</p>Data from ACS 2020',
            location: {
                center: { lon: -79.9348, lat: 37.2704},
                zoom: 12,
                pitch: 0,
                bearing: 10
               
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'Uninsured population',
                    opacity: .8,
                    duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'Uninsured population',
                    opacity: 0
                }
            ]
        },
        {
            id: 'tenth-identifier',
            alignment: 'fully',
            hidden: false,
            title: 'Who Lives in these Areas?',
            image: '',
            description: 'A breakdown of demographics provided by the US Census',
            location: {
                center: { lon: -79.9348, lat: 37.2704},
                zoom: 12,
                pitch: 60,
                bearing: 10
               
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'boarders-mapbox-5b1240',
                    opacity: .33,
                    duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'boarders-mapbox-5b1240',
                    opacity: 0
                }
            ]
        },
        {
            id: 'eleventh-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Non-white population',
            image: 'images/race.png',
            description: 'Percentage breakdown of Non-white population by group block</p>Data from ACS 2020',
            location: {
                center: { lon: -79.9348, lat: 37.2704},
                zoom: 12,
                pitch: 0,
                bearing: 10
               
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'Non White Population',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'Non White Population',
                    opacity: 0
                }
            ]
        },
        {
            id: 'twelfth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Population by Median Age',
            image: 'images/age.png',
            description: 'Data from ACS 2020',
            location: {
                center: { lon: -79.9348, lat: 37.2704},
                zoom: 12,
                pitch: 0,
                bearing: 10
               
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'Median Age',
                    opacity: .8,
                    duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'Median Age',
                    opacity: 0
                }
            ]
        },
        {
            id: 'thirteenth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Conclusion',
            image: '',
            description: 'Fortunately, Roanoke City is not unaware of these issues, and is making efforts towards greater access to healthcare services.</p>Learn more about city initiatives at: https://www.wsls.com/news/local/2022/05/06/pop-up-clinic-offers-free-healthcare-services-to-roanokes-homeless-community/</p>Additionally, Carilion Clinic is partnering with the city and Roanoke College to mobilize available health resources through a utilization of the University’s public health surveys. More information on this project can be found at: https://www.roanoke.edu/about/news/carilion_clinic_partnership',
            location: {
                center: { lon: -79.9348, lat: 37.2704},
                zoom: 12,
                pitch: 60,
                bearing: 10
               
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'boarders-mapbox-5b1240',
                    opacity: .33,
                    duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: '',
                    opacity: 0
                }
            ]
        },
    ]
};
