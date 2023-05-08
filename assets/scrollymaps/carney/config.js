var config = {
    style: 'mapbox://styles/mackenzie3/clae8efhg000514n7irfy7zsr',
    accessToken: 'pk.eyJ1IjoibWFja2VuemllMyIsImEiOiJjbGFlZWVra24wN3JoM29vMXdxanl6YWQ1In0.fhDLVWKK5vrBiGtETdX1Jg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    // images: 
        // in text: <p><img src = "images/housinggrades.jpg"><p>
        // in image location: "images/housinggrades.jpg"
    inset: false,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'Tree Canopy in Washington, DC',
    subtitle: '',
    byline: 'By Mackenzie Carney',
    footer: 'Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'first-identifier', // 1
            alignment: 'left',
            hidden: true,
            title: 'Display Title',
            // image: './path/to/image/source.png',
            description: '',
            location: {
                center: [-77.0327735,38.8930655],
                zoom: 6.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'CityBoundary',
                    opacity: 1
                }
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [

                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'one-and-a-half', //1.5
            hidden: true,
            location: {
                center: [-77.0327735,38.8930655],
                zoom: 6.5,
                pitch: 0,
                bearing: 0   
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: [
                {
                    layer: 'CityBoundary',
                    opacity: 0
                }
            ]  
        },
        {
            id: 'second-identifier', // 2
            alignment: 'left',
            hidden: false,
            title: 'THE IMPORTANCE OF URBAN TREES: TREE CANOPY IN WASHINGTON, DC (% COVERAGE 2020)',
            image: "images/legend_tree.png",
            description: 'Higher tree canopy percentage, which is measured as the proportion of land area covered by tree tops, is associated with better environmental and human health. Heat islands, which typically refer to the higher temperatures in urban areas as compared to their surrounding suburban and rural areas, can occur within cities, too. As rising temperatures drive up energy costs, trees can help to lower temperatures (Ziter et al., 2019). They can also help to reduce air pollution, especially near heavily-trafficked and industrial sites (Bottome & Gardner, 2021). This is an important consideration for older populations and those with health concerns, such as obesity and asthma, as they can be more sensitive to heat and poor air quality (Hola Cultura, 2021).<p><img src = "images/trees.jpg"><p>Image reference: U.S. National Arboretum / The DCist. https://dcist.com/story/19/06/26/where-to-find-the-most-unusual-trees-in-d-c/<p>Data sources: Open Street Maps, Open Data DC, US Census 2010 ',
            location: {
                center: [-77.1143835,38.8976373],
                zoom: 11,
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
                    layer: 'TreeCanopy2020',
                    opacity: 1
                }
            ],
            onChapterExit: []
        },
        {
            id: 'third-identifier', // 3
            alignment: 'left',
            hidden: false,
            title: 'TREE CANOPY AND URBAN HEAT ISLANDS: CANOPY AND SUMMER TEMPERATURE (DEGREES F)',
            image: "images/legend_temp.png",
            description: 'The effect of tree canopy on urban temperatures is nonlinear; there are increasingly larger temperature drops in areas that have greater than 40% tree cover for larger tracts of land (Ziter et al., 2019). In DC, we see that the summer temperature ranges by as much as 8 degrees (F) between census block groups, and the correlation is relatively consistent between temperature and canopy. The neighborhoods with the most canopy certainly have the coolest temperatures, and the lower tree canopy areas in the Northeast have the highest temperatures, but the downtown zones with the lowest tree canopy may be partially cooled by the rivers (U. of Sheffield 2015).<p>Data sources: Open Street Maps, Open Data DC, US Census 2010',
            location: {
                center: [-77.1143835,38.8976373],
                zoom: 11,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'TreeCanopy2020',
                    opacity: 1
                },
                {
                    layer: 'Temp',
                    opacity: .4,
                    duration: 1500
                }
            ],
            onChapterExit: [
                {
                    layer: 'Temp',
                    opacity: 0,
                    duration: 1500
                }
            ]
        },
        {
            id: 'three-and-a-half', //3.5
            hidden: true,
            location: {
                center: [-77.1143835,38.8976373],
                zoom: 11,
                pitch: 0,
                bearing: 0   
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'TreeCanopy2020',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'TreeCanopy2020',
                    opacity: 0,
                    duration: 1500
                }
            ]  
        },
        {
            id: 'fourth-chapter', // 4
            alignment: 'left',
            hidden: false,
            title: 'COMPARING TREE CANOPY AND HEAT VULNERABILTIY WITH SOCIAL PATTERNS: RACE (% NON-WHITE)',
            image: "images/legend_race.png",
            description: 'In the U.S., less tree canopy is typically associated with lower-income and less white neighborhoods (Schwartz, et al., 2015). However, DC is somewhat different. While many of the wealthiest and whitest neighborhoods do have the most trees, “some of the District’s leafiest neighborhoods” are in predominantly Black and low-income neighborhoods as well (Fenston, 2021). As indicated by the maps below, some wealthy census blocks in the center of the city have less tree canopy than those in either Northwest or Southeast DC. Meanwhile, the coolest temperatures are spread across neighborhoods with vastly different racial demographics and income levels.<p>Data sources: Open Data DC, American Community Survey 2019, US Census 2010',
            location: {
                center: [-77.1143835,38.8976373],
                zoom: 11,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'Race2019',
                    opacity: 1,
                    duration: 1500
                }
            ],
            onChapterExit: [
                {
                    layer: 'Race2019',
                    opacity: 0,
                    duration: 1500
                }
            ]
        },
        {
            id: 'fifth-chapter', // 5
            alignment: 'left',
            hidden: false,
            title: 'COMPARING TREE CANOPY AND HEAT VULNERABILTIY WITH SOCIAL PATTERNS: MEDIAN FAMILY INCOME ($/YEAR)',
            image: "images/legend_mfi.png",
            description: 'In the U.S., less tree canopy is typically associated with lower-income and less white neighborhoods (Schwartz, et al., 2015). However, DC is somewhat different. While many of the wealthiest and whitest neighborhoods do have the most trees, “some of the District’s leafiest neighborhoods” are in predominantly Black and low-income neighborhoods as well (Fenston, 2021). As indicated by the maps below, some wealthy census blocks in the center of the city have less tree canopy than those in either Northwest or Southeast DC. Meanwhile, the coolest temperatures are spread across neighborhoods with vastly different racial demographics and income levels.<p>Data sources: Open Data DC, American Community Survey 2019, US Census 2010',
            location: {
                center: [-77.1143835,38.8976373],
                zoom: 11,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'MFI2019',
                    opacity: 1,
                    duration: 3500
                }
            ],
            onChapterExit: [
                {
                    layer: 'MFI2019',
                    opacity: 0,
                    duration: 1500
                },
                {
                    layer: 'Race2019',
                    opacity: 0,
                    duration: 1500
                }
            ]
        },
        {
            id: 'sixth-chapter', // 6
            alignment: 'left',
            hidden: false,
            title: 'COMPARING PAST SEGREGATION WITH TREE CANOPY TODAY',
            // image: 'image/DC housing grades map.jpg',
            description: 'Despite complexity between current social trends and tree canopy, looking at the past tells a different story. Below is a graded map for DC, created by the FHA in 1937. Notably, areas with higher Black populations received lower grades, and homes in those areas were considered risky investments (Shoenfeld, 2019). “Low-grade” neighborhoods were associated with decades of “neglect and underinvestment,” including a lack of green space (Hola Cultura, 2021). While these social structures can change relatively quickly, trees take time to grow (Scwhartz et al., 2015). Even as previously “low-grade” areas are becoming wealthier, the tree canopy has not caught up.<p><img src = "images/housinggrades.jpg"><p></p>Image reference: National Archives / DC Policy Center. https://www.dcpolicycenter.org/publications/mapping-segregation-fha/<p>Data sources: Open Street Maps, Open Data DC, US Census 2010',
            location: {
                center: [-77.1143835,38.8976373],
                zoom: 11,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'TreeCanopy2020',
                    opacity: 1,
                    duration: 2500
                }
            ],
            onChapterExit: []
        },
        {
            id: 'seventh-chapter', // 7
            alignment: 'left',
            hidden: false,
            title: 'TREE INEQUITY CAN BE DIFFICULT TO SPOT ON A MAP: WARD 8 WOODS',
            // image: './path/to/image/source.png',
            description: 'Despite relatively consistent tree canopy percentages with regard to race and income, patterns of disinvestment still persist in the District today - they are just more difficult to spot on a map.<p>In addition to mitigating heat and air pollution, trees are good for our overall health. Urban greenness, which includes tree canopy as well as other forms of vegetation, is associated with lower rates of childhood obesity, lower rates of mental fatigue, and better mental health (Schwartz et al., 2015). However, in DC, access to high quality forested areas is inconsistent across race and income.<p>While Wards 7 and 8, with predominantly non-white and lower-income populations, do have significant tree cover (Fenston, 2021), these forests are poorly maintained in comparison to those in wealthier parts of the city. Nathan Harrington, founder of the Ward 8 Woods Conservancy, notes that the Ward 8 woods “are generally considered a no-man’s land” (Bottome & Gardner, 2021). He notes that they are “littered, overrun by invasive species and all but closed to people,” which is due to the city’s unwillingness to invest in the area (Popkin, 2020).<p>Ward 8 Woods has only 1.5 miles of hiking trails and splits a budget of $17 million with 13 sites.<p><img src = "images/ward8.png"><p>Image reference: Matt McClain / The Washington Post. https://www.washingtonpost.com/local/dc-ward-8-parks-cleanup/2020/12/05/1d34f078-260f-11eb-8672-c281c7a2c96e_story.html <p>Sources: Open Data DC, American Commuity Survey 2019, US Census 2010.',
            location: {
                center: [-77.0738674,38.8567819],
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'Ward8',
                    opacity: 1,
                    duration: 500
                }
            ],
            onChapterExit: [
                {
                    layer: 'Ward8',
                    opacity: 0,
                    duration: 500   
                }
            ]
        },
        {
            id: 'eigth-chapter', // 8
            alignment: 'left',
            hidden: false,
            title: 'TREE INEQUITY CAN BE DIFFICULT TO SPOT ON A MAP: ROCK CREEK PARK',
            // image: './path/to/image/source.png',
            description: 'Rock Creek Park has 36 miles of hiking trails and a dedicated budget of $9 million per year <p><img src = "images/rockcreekpark.png"><p>Image reference:<p>K Cain / National Park Service. https://www.nps.gov/rocr/planyourvisit/hiking.html',
            location: {
                center: [-77.0730081,38.9536472],
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'RockCreek',
                    opacity: 1,
                    duration: 500
                }
            ],
            onChapterExit: [
                {
                    layer: 'RockCreek',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'TreeCanopy2020',
                    opacity: 0,
                    duration: 2500
                }
            ]
        },
        {
            id: 'ninth-chapter', // 9
            alignment: 'left',
            hidden: false,
            title: "DC'S LOFTY TREE GOALS: TREE CANOPY LOSS (% CHANGE 2011-2020)",
            image: "images/legend_change.png",
            description: 'Concerns for both environmental impacts and equity have caught the attention of the DC government. In 2011, the city set a goal to increase the city-wide tree canopy to 40% by 2032 in order to help mitigate heat islands and heat risk. Since 2016, city arborists have especially focused on planting trees in the historically underserved neighborhoods of Southeast DC (Harden, 2020; Fenston, J., 2021). However, the city had no net gain in tree coverage between 2011 and 2020 (DDOT Urban Forestry, 2022). A fine-grained view of tree canopy change indicates that, while some neighborhoods have increased tree canopy, many lost it.<p><img src = "images/planting.png"><p><p>Image reference: Will Newton / The Washington Post. https://www.washingtonpost.com/dc-md-va/2020/03/27/tough-place-tree-live-dc-planted-nearly-80-trees-day-reach-canopy-target-its-running-out-space/<p> Data sources: Open Data DC, US Census 2010',
            location: {
                center: [-77.1143835,38.8976373],
                zoom: 11,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'TreeCanopyChange_11_20',
                    opacity: 1,
                    duration: 2500
                }
            ],
            onChapterExit: []
        },
        {
            id: 'tenth-chapter', // 10
            alignment: 'left',
            hidden: false,
            title: 'CONSTRUCTION AND TREE CANOPY (BUILDING PERMITS PER SQ. KM. 2011-2020)',
            image: "images/legend_permits.png",
            description: 'Some journalists and city officials are pointing towards development as the crux of the tree canopy problem. Between 2011 and 2020, medium- and high-density residential and commercial districts saw the largest decreases in canopy while single-family neighborhoods saw moderate increases (DDOT Urban Forestry, 2022). As John Harden writes for The Washington Post (2020), “the same economic successes that ushered in new residents” are also threatening its tree canopy. The population has boomed over the past two decades (DDOT Urban Forestry, 2022), and developers in the District argue that tree protection initiatives make it more difficult for them to keep up with housing demand (Fenstion, 2022). Thus, some local journalists have insisted that increasing the tree canopy and increasing the supply of affordable housing, two important goals to the city of DC, are in competition (Harden, 2020). However, canopy and permit data indicate that higher densities of building permits are not correlated with canopy loss. The data show an inconsistent relationship between canopy loss and building permit density. In some cases, more building permits are even associated with canopy gains. Instead, the 2021 Casey Trees report card suggests that tree loss is due to a mix of factors. Development plays a role, but so do the relatively low fees for cutting trees, as well as a pattern of illegal removal of heritage trees.<p>Data sources: Open Data DC, US Census 2010',
            location: {
                center: [-77.1143835,38.8976373],
                zoom: 11,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [,
                {
                    layer: 'TreeCanopyChange_11_20',
                    opacity: 1,
                    duration: 1500
                },
                {
                    layer: 'BuildingPermits',
                    opacity: 1,
                    duration: 1500
                }
            ],   
            onChapterExit: [
                {
                    layer: 'TreeCanopyChange_11_20',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'BuildingPermits',
                    opacity: 0,
                    duration: 500
                }
            ]
        },
        {
            id: 'eleventh-identifier', // 11
            alignment: 'fully',
            hidden: false,
            title: 'BEYOND THE MAP',
            // image: './path/to/image/source.png',
            description: 'Diving into the complex relationships between Washington, DC’s tree canopy demonstrates what we’ve been discussing this whole semester - there is always a story beyond the map. For example, the nonprofit American Forests has given DC a Tree Equity Score of 91 out of 100 for tree quantity, based on factors such as race, ethnicity, employment, income, age, and population density (Fenston, 2021). However, we know from folks on the ground that tree quality is still far from equal. We also learned that, despite suggestions from local papers that pro-tree and pro-development goals struggle to coexist, most of the District’s canopy gain and loss are the result of a complex mix of factors. As with any urban question, it’s important to recognize that both data and local knowledge are valid, and in fact they are both critical.<p><img src = "images/dc.jpg"><p>Image reference: Todd Henson. https://toddhensonphotography.com/blog/autumn-cherry-trees-washington-dc',
            location: {
                center: [-77.0327735,38.8930655],
                zoom: 6.5,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'CityBoundary',
                    opacity: 1,
                    duration: 500,
                }
            ],
            onChapterExit: [
                {
                    layer: 'CityBoundary',
                    opacity: 0,
                    duration: 500,
                }
            ]
        },
        {
            id: 'twelfth-identifier', // 12
            alignment: 'fully',
            hidden: false,
            title: 'CITATIONS:',
            // image: './path/to/image/source.png',
            description: 'Bottome, B. & Gardner, A. (2021). Organizations tackle lack of accessible recreational spaces in Wards 7 and 8. The Georgetown Voice. https://georgetownvoice.com/2021/12/01/organizations-tackle-accessible-rec-spaces/<p>Casey Trees (2021). The 14th Annual Tree Report Card: The State of DCs Trees 2021. Casey Trees.v<p>DDOT Urban Forestry. (2022). Washington DC’s Urban Tree Canopy in 2020. https://storymaps.arcgis.com/stories/62580ba81fc34563b1bae8e8416ee16d<p>Fenston, J. (2021). D.C. Gets High Marks For Tree Equity — A ‘National Success Story’. DCist. https://dcist.com/story/21/06/22/dc-tree-equity-pollution-climate-change/<p>Fenston, J. (2022). Developer Seeks Exemption To Heritage Tree Protections, Citing D.C.’s Housing Crunch. DCist. https://dcist.com/story/22/05/16/developer-exemption-heritage-tree-dc-housing-crunch/<p>Harden, J. (2020). D.C. planted nearly 80 trees a day to reach a canopy target. It’s running out of space. The Washington Post. https://www.washingtonpost.com/dc-md-va/2020/03/27/tough-place-tree-live-dc-planted-nearly-80-trees-day-reach-canopy-target-its-running-out-space/<p>Hola Cultura S.P.E.L. Team (2021). Temperatures in D.C.’s Heat Islands, Can Register Ten to Twenty Degrees Hotter Than in Leafy Neighborhoods. Washington City Paper. https://washingtoncitypaper.com/article/528645/temperatures-in-d-c-s-heat-islands-can-register-ten-to-twenty-degrees-hotter-than-in-leafy-neighborhoods/<p>Popkin, G. (2020). A fight for forest equity in Southeast D.C. takes on new urgency amid pandemic. The Washington Post. https://www.washingtonpost.com/local/dc-ward-8-parks-cleanup/2020/12/05/1d34f078-260f-11eb-8672-c281c7a2c96e_story.html<p>Schwarz K., Fragkias M., Boone CG., Zhou W., McHale M., Grove JM., et al. (2015) Trees Grow on Money: Urban Tree Canopy Cover and Environmental Justice. PLoS ONE 10(4): e0122051. doi:10.1371/journal.pone.0122051<p>Shoenfeld, S. (2019). Mapping segregation in DC. The DC Policy Center. https://www.dcpolicycenter.org/publications/mapping-segregation-fha/<p>Ziter, C.D., Pedersen, E.J., Kucharik, C.J., and Turner, M.G. (2019) Scale-dependent interactions between tree canopy cover and impervious surfaces reduce daytime urban heat during summer. Proceedings of the National Academy of Sciences, 116(15), p. 7575-7580.<p>U. of Sheffield (2015). Rivers may aid climate control in cities. Phys.org. https://phys.org/news/2011-11-rivers-aid-climate-cities.html',
            location: {
                center: [-77.0327735,38.8930655],
                zoom: 6.5,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'CityBoundary',
                    opacity: 1,
                    duration: 500
                }
            ],
            onChapterExit: [
                {
                    layer: 'CityBoundary',
                    opacity: 0,
                    duration: 500
                }
            ]
        }

    ]
};
