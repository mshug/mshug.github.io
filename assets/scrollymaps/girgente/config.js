var config = {
    style: 'mapbox://styles/ggirgente/cl4dawpym002i15qedoxoyt0s',
    accessToken: 'pk.eyJ1IjoiZ2dpcmdlbnRlIiwiYSI6ImNsNHE4a2JzZjAwbWszY2xtdGl2Z2llbTQifQ.4-iQmECqMkP5EkLx_ptLPg',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'A Story of Scranton, Pennsylvania',
    subtitle: 'Discover how this once small mining town has kept a secret for years from the people moving to it',
    byline: 'By Gina Girgente',
    footer: 'Sources: Biagioni, K. (n.d.). The Public Health Effects Of Abandoned Coal Mine Workings On Residents In South Wellington, Nanaimo. Retrieved June 26, 2022, from https://www.yorku.ca/bunchmj/ICEH/proceedings/Biagioni_K_ICEH_papers_23to31.pdf\
    Bureau, U. S. C. (2021, December 16). Tiger/line shapefiles. Census.gov. Retrieved June 26, 2022, from https://www.census.gov/geographies/mapping-files/time-series/geo/tiger-line-file.html\
    Bureau, U. S. C. (2022, June 14). Data. Census.gov. Retrieved June 26, 2022, from https://www.census.gov/data.html\
    Coal mines. AbandonedMines. (n.d.). Retrieved June 26, 2022, from https://www.abandonedmines.gov/about_coal_mines\
    Coelho P, Silva S, Roma-Torres J, Costa C, Henriques A, Teixeira J, Gomes M, Mayan O. Health impact of living near an abandoned mine--case study: Jales mines. Int J Hyg Environ Health. 2007 May;210(3-4):399-402. doi: 10.1016/j.ijheh.2007.01.004. Epub 2007 Feb 23. PMID: 17321206.\
    Encyclopædia Britannica, inc. (n.d.). Scranton. Encyclopædia Britannica. Retrieved June 26, 2022, from https://www.britannica.com/place/Scranton-Pennsylvania\
    History. scrantontomorrow. (n.d.). Retrieved June 26, 2022, from https://www.scrantontomorrow.org/history#:~:text=Prior%20to%20being%20named%20Scranton%20in%201851%2C%20the,the%20title%20of%20%E2%80%9CAnthracite%20Capital%20of%20the%20World.%E2%80%9D\
    pennlive. (2018, July 20). Why is the water orange? abandoned coal mines in Northeastern Pennsylvania discharge tainted runoff. YouTube. Retrieved June 26, 2022, from https://www.youtube.com/watch?v=GQSXEpzEqfU\
    Pennsylvania has the most abandoned coal mines in the U.S., how $245 million will help? WITF. (2022, February 10). Retrieved June 26, 2022, from https://www.witf.org/2022/02/10/pennsylvania-has-the-most-abandoned-coal-mines-in-the-u-s-how-245-million-will-help/\
    Top mines in Lackawanna County, PA. (n.d.). Retrieved June 26, 2022, from https://www.anyplaceamerica.com/directory/pa/lackawanna-county-42069/mines/\
    U.S. Census Bureau quickfacts: Scranton City, Pennsylvania. (n.d.). Retrieved June 25, 2022, from https://www.census.gov/quickfacts/scrantoncitypennsylvania\
    Watershed Wednesday: Lackawanna River Corridor Association (Lackawanna County, PA..). Chesapeake Bay Program. (n.d.). Retrieved June 26, 2022, from https://www.chesapeakebay.net/news/blog/watershed_wednesday_lackawanna_river_corridor_association ',
    chapters: [
        {
            id: 'ch1',
            alignment: 'left',
            hidden: false,
            title: 'An Intro to Scranton',
            image: 'https://i5.walmartimages.com/asr/d421cc07-d18a-4ac4-9f45-878853a3ea32_1.34ef284e21e6a0809e75d12729c05d88.jpeg',
            description: '<p style="color: black; font-weight: bold">Picture: coal miners in the Lackawanna Coal Mine<p>\
            As much land was, Scranton was inhabited originally by Native Americans. After settlers from New England \
            immigrated, however, this piece of land was named Slocum Hollow and became a steel and iron manufacturing city. After \
            multiple name changes, the city became Scranton in 1851 after the family who established the Lackawanna Iron and Coal \
            Company in 1840. <p> Now it\'s home to around 75,000 people who most likely live unsuspecting of any danger that is \
            right under their feet. This scrollymap will delve into what this secret is and the demographics of the people\
            moving into the said danger.',
            location: {
                center: [-75.6624122,41.4089690],
                zoom: 5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'ch1.5',
            alignment: 'right',
            hidden: false,
            title: 'Abandoned Coal Mines',
            image: '',
            description: 'While living near an abandoned coal mine isn\'t as dangerous as a Uranium site or active coal mining site, \
            it can still pose health problems. Trash deposits that haven\'t been treated can leach into water sources, not only depositing\
            heavy metals into organisms in the water, but also people drinking it. The orange points here show locations of abandoned mines\
             within 2-3 miles of Scranton. Scrolling further down will show the buildings near these mine locations.\
            <p> <p style="color: orange; font-weight: bold">Youtube video:\
            "Why is the water orange? Abandoned coal mines in eastern Pennsylvania discharge tainted runoff" by PennLive.com <p>\
            <iframe width="380" height="315" src="https://www.youtube.com/embed/GQSXEpzEqfU" title="YouTube video player" frameborder="0" \
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\
            <p style="color: black; font-weight: bold">Summary: billions of gallons of water has built up in mines underneath Scranton \
            and began to leak into buildings, sewer systems, etc. The high iron content of the toxic water spilled into clean waterways\
            making them orange. Scranton doesn\'t have the appropriate funding to clean the water (millions of dollars), especially for\
            the smaller streams. "It took almost 150 years to create the environmental mess. I may take 150 years to clean it up."<p>',
            location: {
                center: [-75.6624122,41.4089690],
                zoom: 12,
                pitch: 60,
                bearing: 32
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'abandoned-mines',
                     opacity: 1,
                     duration: 5000
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'abandoned-mines',
                     opacity: 1
                 }
            ]
        },
        {
            id: 'ch2', //HIDDEN CHPTR OF 3D BUILDINGS
            alignment: 'left',
            hidden: true,
            title: '',
            image: '',
            description: '',
            location: {
                center: [-75.6624122,41.4089690],
                zoom: 16,
                pitch: 70,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'abandoned-mines',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'abandoned-mines',
                    opacity: 0
                }
            ]
        },
        {
            id: 'ch2.5',
            alignment: 'full',
            hidden: false,
            title: 'Problems with the abandoned mines',
            image: '',
            description: 'Pennsylvania has the most abandoned coal mining sites in the United States. Since most abandoned \
            sites are state-owned, residential housing can be built on top of them, causing health risks. In Vancouver, the EPA has confirmed \
            suspicion of organic petroleum and solvent compounds still in the water, some of which may be carcinogenic, and the elements making\
            their water toxic is most likely similar to those in Scranton, especially since it\'s surrounded by the Lackawanna River.',
            location: {
                center: [-75.6624122,41.4089690],
                zoom: 16,
                pitch: 70,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'abandoned-mines',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'abandoned-mines',
                    opacity: 0
                }
            ]
        },
        {
            id: 'ch3',
            alignment: 'left',
            hidden: false,
            title: '2020 Health Insurance: ACS 5 year comparison',
            image: 'images/health-insurance.JPG',
            description: ' <p>\
            <img src="https://www.chesapeakebay.net/images/blog/oct_24_big1.jpg"> <p><p style="color: black; font-weight: bold">Picture: \
            iron-filled sludge from a waterway in Scranton.<p> Underneath the heart of Scranton lies built up water\
            in the anthracite mines- about 100 billion gallons according to Bernie McGurl in an interview with the Chesapeake Bay Program.\
            The water was released into the Lackawanna River in only 2012 in order to prevent buildings being flooded, which created a hypoxic, orange\
            waterbody with no life in it. <p> Because of the imposing risks associated with water built up in the mines, looking at what\
            areas have an increased amount of people getting health insurance may show correlation between knowledge of dangers from the\
            mines and precautionary actions. Over the past five years, the outskirts of Scranton and a small part of the center of the city\
            seem to have increased the most.',
            location: {
                center: [-75.6624122,41.4089690],
                zoom: 12,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'health-insurance-2020',
                     opacity: 1,
                     duration: 5000
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'health-insurance-2020',
                     opacity: 0
                 }
            ]
        },
        {
            id: 'ch4',
            alignment: 'right',
            hidden: false,
            title: 'Population Change',
            image: 'images/total-pop.JPG',
            description: 'An ACS 5 year comparison for 2020 shows an increase of population towards the outer edges of the city and\
            in the center. Because there is an increase of population in the same areas there is an increase of health care, there is\
            more cause for correlation. Demographics will be focused on next to see what types of people are moving in (single people,\
            families, minorities, etc.)',
            location: {
                center: [-75.6624122,41.4089690],
                zoom: 13,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: '2020-total-pop',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: '2020-total-pop',
                    opacity: 0,
                }
            ]
        },
        {
            id: 'ch5',
            alignment: 'full',
            hidden: false,
            title: 'Focus question 1: is the increase of population consisting of primarily family/married households or single \
            living households?',
            image: '',
            description: '',
            location: {
                center: [-75.6624122,41.4089690],
                zoom: 11,
                pitch: 8.01,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                ],
            onChapterExit: [
            ]
        },
        {
            id: 'ch5.1',
            alignment: 'left',
            hidden: false,
            title: 'A 2020 ACS 5 year comparison of married/family households.',
            image: 'images/married-fam.JPG',
            description: 'There has been an increase of almost 1110 in the heart of Scranton, and almost an increase of 500 households\
            between the outskirts and center of Scranton.',
            location: {
                center: [-75.6624122,41.4089690],
                zoom: 13,
                pitch: 30,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: '2020-married-only',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: '2020-married-only',
                    opacity: 0
                }
            ]
        },
        {
            id: 'ch5.2',
            alignment: 'right',
            hidden: false,
            title: 'An ACS 2020 5 year comparison of single living households.',
            image: 'images/single-living.JPG',
            description: 'Looking at single households over the past five years, the pattern of increase is around 500-600 in most areas\
            along the outskirts of the city.',
            location: {
                center: [-75.6624122,41.4089690],
                zoom: 13,
                pitch: 30,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: '2020-single-living',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: '2020-single-living',
                    opacity: 0
                }
            ]
        },
        {
            id: 'ch6',
            alignment: 'full',
            hidden: false,
            title: 'Focus question 2: is there a correlation between the increase of population and a certain race? Is this race a \
            minority?',
            image: '',
            description: '',
            location: {
                center: [-75.6624122,41.4089690],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                ],
            onChapterExit: [
            ]
        },
        {
            id: 'ch6.1',
            alignment: 'left',
            hidden: false,
            title: 'Looking at a Change in African American/Black Population',
            image: 'images/black-afam.JPG',
            description: 'An ACS 5 year comparison of 2020 shows no real pattern similar to those of other data, even though there is a \
            very slight increase is some areas.',
            location: {
                center: [-75.6624122,41.4089690],
                zoom: 12.52,
                pitch: 41.39,
                bearing: 80.32
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'race-2020-afam_black',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'race-2020-afam_black',
                    opacity: 0,
                }
            ]
        },
        {
            id: 'ch6.2',
            alignment: 'right',
            hidden: false,
            title: 'Looking at a Change in Asian Population',
            image: 'images/asian.JPG',
            description: 'An ACS 5 year comparison of 2020. <p> The center of Scranton and the outer edges look to be increasing\
            by around 300-425 people. This pattern follows that of the population and health insurance increase. There could also be a \
            loose correlation between this data and the married/family household increase. The Asian population is also the smallest\
            population increasing in Scranton, according to this data, so it can be classified as a minority.',
            location: {
                center: [-75.6624122,41.4089690],
                zoom: 12.52,
                pitch: 41.39,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'race-2020-asian',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'race-2020-asian',
                    opacity: 0,
                }
            ]
        },
        {
            id: 'ch6.3',
            alignment: 'left',
            hidden: false,
            title: 'White Population',
            image: 'images/white.JPG',
            description: 'An ACS 5 year comparison of 2020. The white population is still the majority out of the three races selected\
            and is increasing on the outer edges of the city the most. This pattern matches that of the health insurance, population\
            , and single person household increases.',
            location: {
                center: [-75.6624122,41.4089690],
                zoom: 12.52,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'race-2020-white',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'race-2020-white',
                    opacity: 0,
                }
            ]
        },
        {
            id: 'ch7',
            alignment: 'full',
            hidden: false,
            title: 'Conclusion',
            image: '',
            description: 'As the population of Scranton increases, it seems to be attracting single households rather than couples\
            or families. The city is mainly white, so a solid increase of Black/African American people is great to see, and I wonder \
            if more minorities will continue to move here as environmental conditions become worse since minorities don\'t usually have\
            the same lifestyle that white people do. However, since there is no clear pattern of different areas holding the majority of different\
            races, it\'s not possible to compare this subject to that of income or occupation. <p> With Scranton growing, water quality will \
            most likely be an issue if it isn\'t already due to the increased demand for it, and being surrounded by toxic water sources\
            due to abandoned mine drainage. Since Scranton is also situated in a valley between two mountains, I would infer that the\
            polluted water will collect in the city creating more harm than usual. Like the video said, with the pollution already \
            infecting small streams coming off of the Lackawanna River, clean up will be a long and strenuous process- if Scranton is \
            able to acquire funding to do so.',
            location: {
                center: [-75.6624122,41.4089690],
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                ],
            onChapterExit: [
            ]
        }
    ]
};

