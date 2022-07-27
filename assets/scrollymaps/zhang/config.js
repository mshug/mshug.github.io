var config = {
    style: 'mapbox://styles/quyngina/cl1zpaq7n000e14pdtidw13yh',
    accessToken: 'pk.eyJ1IjoicXV5bmdpbmEiLCJhIjoiY2wyNmo3bnR2MGdvczNqbXY0MjVtZXBhcCJ9.q7y_OE9xATYHoQjdN4sN8A',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'Gwinnett County, GA',
    subtitle: 'Multigenerational Housing: A look at Demographic and Economic Trends',
    byline: 'Quyngina Zhang',
    footer: 'Data from 2016 and 2020 American Community Surveys<br><p style="font-weight: bold">References:</p>Bernstein, Jared, et al. “Housing Prices and Inflation.” The White House, 9 Sept. 2021, https://www.whitehouse.gov/cea/written-materials/2021/09/09/housing-prices-and-inflation/. Accessed 28 Apr. 2022. </p>Cohn, D’Vera, and Jeffrey S. Passel. “Record 64 Million Americans Live in Multigenerational Households.” Pew Research Center, 27 July 2020.<br>Fry, Richard, et al. “A Majority of Young Adults in the U.S. Live with Their Parents for the First Time since the Great Depression.” Pew Research Center, 9 Sept. 2020.<br>Joint Center For Housing Studies Of Harvard University. “The State of the Nation\'s Housing 2020.” Harvard Graduate Sschool Of Design | Harvard Kennedy School, 2020.<br>LOFQUIST, DAPHNE. “Multigenerational Households.” US Census Bureau, 8 Oct. 2021.<br>“The Return of the Multi-Generational Family Household.” Pew Research Center\'s Social & Demographic Trends Project, Pew Research Center, 30 May 2020.</p> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'Intro 1',
            alignment: 'left',
            hidden: false,
            title: 'About Multigenerational Households',
            image: '',
            description: 'My interest in this topic came from my upbringing; my grandparents raised me, and I grew up with my extended family under one roof. The recent comments I saw about rising rental rates and how the pandemic laid-off a bunch of people from their jobs and compelled them to move back in with their parents made me interested in seeing what this overall trend has looked like and where it seems to be going.<img src="images/chart 2.png"><small><b>Source:</b> Pew Research Center analysis of 2009 and 2016 American Community Surveys (IPUMS).</small></p>The number of multigenerational households in the U.S. has been increasing over the past 50 years, in which today, roughly 20% of all Americans live in multigenerational households, which consists of at least two adult generations or grandparents and grandchildren living under one roof. This is in response to both an increase in the U.S.’s foreign-born population, as well as rising housing costs, so that families can alleviate both economic and personal hardship. The hegemonic individualist culture of the U.S. that values privacy and independence contributes to a stigma surrounding adults who live with older generations of their families, such as their parents and grandparents.<img src="images/chart 1_edit.png"><small><b>Source:</b> Pew Research Center analysis of 2009 and 2016 American Community Surveys (IPUMS).</small></p>In other more collectivist cultures, notably Asian, Hispanic, and African among others, values and norms centered around the extended family are more common.</p><small><b>Note:</b> Multigenerational households consist of at least two adult generations or grandparents and grandchildren living under one roof.</small>',
            location: {
                center: [-97.9539686,38.5306828],
                zoom: 4,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Intro 2',
            alignment: 'left',
            hidden: false,
            title: 'About Gwinnett County',
            image: '',
            description: 'Gwinnett county is one of the most diverse counties in the U.S.. Of its total population of 926,414 in 2020, 506,194 (54.64%) make up its non-white population. Within the state of Georgia, Gwinnett county also holds one of the highest concentrations of multigenerational households, making up 25% of its total households.',
            location: {
                center: [-84.0517336,33.9725517],
                zoom: 5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'gwinnett-county-58n7ro',
                     opacity: 1,
                     duration: 2000
                 },
                 {
                     layer: 'georgia-d0ndl6',
                     opacity: 0.5
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'gwinnett-county-58n7ro',
                     opacity: 0
                 },
                 {
                     layer: 'georgia-d0ndl6',
                     opacity: 0
                 }
            ]
        },
        {
            id: 'chapter-one',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: '2016</p>% of Non-white Population<img src="images/legend_nonwhite_gradient.png">',
            location: {
                center: [-84.0517336,33.9725517],
                zoom: 9,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: '2016-nonwhite-esri-deb8ac',
                     opacity: 1
                 }
            ],
            onChapterExit: [
                 {
                     layer: '2016-nonwhite-esri-deb8ac',
                     opacity: 0
                 }
            ]
        },
        {
            id: 'chapter-two',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: '2020</p>% of Non-white Population<img src="images/legend_nonwhite_gradient.png"><img src="images/chart 6.png"></p>Higher concentrations of the non-white population are generally located in central and south-eastern portions of Gwinnett county and have overall grown between 2016 and 2020 in most of the census tracts. The overall increase of Gwinnett county’s non-white population is 6.34% in this period.',
            location: {
                center: [-84.0517336,33.9725517],
                zoom: 9,
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
                layer: '2020-nonwhite-esri-4uzpum',
                opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: '2020-nonwhite-esri-4uzpum',
                    opacity: 0
                }
            ]
        },
        {
            id: 'chapter-three',
            alignment: 'right',
            hidden: false,
            title: '',
            image: 'images/chart 8.png',
            description: '<small>Source: Pew Research Center analysis of decennial census 1900-1990: Current Population Survey annual averages 2000-2019; 2020 Current Population Survey monthly files (IPUMS)</small></p>Young adults between the ages of 18-29 are a group notably affected by today’s rising housing costs. In 2020, 52% of all young adults 18-29 live with their parents; the highest measured value before this was 48% in 1940 at the end of the Great Depression.</p>2016</p>% of Young Adults Living With Their Parents<img src="images/legend_young adult_gradient.png"></p>Young adults between the ages of 18-29 are a group notably affected by today’s rising housing costs. In 2020, 52% of all young adults 18-29 live with their parents; the highest measured value before this was 48% in 1940 at the end of the Great Depression.',
            location: {
                center: [-84.0517336,33.9725517],
                zoom: 9,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: '2016-young-adults-7ciq2l',
                opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: '2016-young-adults-7ciq2l',
                    opacity: 0
                }
            ]
        },
        {
            id: 'chapter-four',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: '2020</p>% of Young Adults Living With Their Parents<img src="images/legend_young adult_gradient.png"><img src="images/chart 7.png"></p>Most of the highest concentrations of young adults living with their parents are in the general central and south portions of Gwinnett county, which roughly lines up with the non-white population map. In the north portion of Gwinnett county, there are visibly high concentrations within the area in which non-white populations are more in the minority. This could indicate more of a financial influence in the decision of these adults to live with their parents. </p><small><b>Note:</b> Young adults defined in this map are those between ages 18 and 34 as provided by the American Community Survey.</small>',
            location: {
                center: [-84.0517336,33.9725517],
                zoom: 9,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: '2020-young-adults-esri-8seuwt',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: '2020-young-adults-esri-8seuwt',
                    opacity: 0
                }
            ]
        },
        {
            id: 'chapter-five',
            alignment: 'left',
            hidden: false,
            title: 'Persistent Housing Unaffordability',
            image: '',
            description: 'According to Harvard University\'s State of the Nation\'s Housing Report 30.2% of all households nationwide are considered cost-burdened. Renters are more cost-burdened than homeowners, with 46% of renters cost-burdened compared to 21% of homeowners.</p>2016</p>Cost Burdened Households As A % Of Total Households<img src="images/legend_cost burdened_gradient.png">',
            location: {
                center: [-84.0517336,33.9725517],
                zoom: 9,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: '2016-cost-burdened-households-9kod7j',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: '2016-cost-burdened-households-9kod7j',
                    opacity: 0
                }
            ]
        },
        {
            id: 'chapter-six',
            alignment: 'left',
            hidden: false,
            title: 'Persistent Housing Unaffordability (cont\'d)',
            image: '',
            description: '2020</p>Cost Burdened Households As A % Of Total Households<img src="images/legend_cost burdened_gradient.png"><img src="images/chart 5.png"></p>The percentage of cost-burdened households remained relatively constant between 2016 and 2020. At least 40% of households in a majority of census tracts are cost-burdened. Roughly 50% of all households in Gwinnett are cost-burdened, which indicates high housing costs relative to household income. These numbers indicate that cost-burdened housing is seemingly the norm, which may incline people to change their lifestyles to adapt.</p><small><b>Note:</b> Cost-burdened households are those that spend more than 30% of their income on housing. Cost-burdened households have a lower quality of life and are less equipped to navigate unexpected financial crises.</small>',
            location: {
                center: [-84.0517336,33.9725517],
                zoom: 9,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: '2020-cost-burdened-households-a9se2k',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: '2020-cost-burdened-households-a9se2k',
                    opacity: 0
                }
            ]
        },
        {
            id: 'chapter-seven',
            alignment: 'right',
            hidden: false,
            title: 'A Closer Look',
            image: '',
            description: 'Gwinnett County\'s Most Populous Cities:</p><p style="font-weight: bold">Norcross, Duluth, Lawrenceville</p>Characterized by suburban neighborhoods.',
            location: {
                center: [-84.1034488,33.9617945],
                zoom: 11.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'norcross-7adxvh',
                    opacity: 1
                },
                {
                    layer: 'lawrenceville-2ml9et',
                    opacity: 1
                },
                {
                    layer: 'duluth-2l7k34',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'norcross-7adxvh',
                    opacity: 0
                },
                {
                    layer: 'lawrenceville-2ml9et',
                    opacity: 0
                },
                {
                    layer: 'duluth-2l7k34',
                    opacity: 0
                }
            ]
        },
        {
            id: 'chapter-eight',
            alignment: 'right',
            hidden: false,
            title: '2020',
            image: '',
            description: '% of Non-white Population<img src="images/legend_nonwhite_gradient.png">',
            location: {
                center: [-84.1034488,33.9617945],
                zoom: 11,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'clipped-2020-nonwhite-cbjz28',
                    opacity: 0.5
                },
                {
                    layer: 'norcross-7adxvh',
                    opacity: 1
                },
                {
                    layer: 'lawrenceville-2ml9et',
                    opacity: 1
                },
                {
                    layer: 'duluth-2l7k34',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'clipped-2020-nonwhite-cbjz28',
                    opacity: 0
                },
                {
                    layer: 'norcross-7adxvh',
                    opacity: 0
                },
                {
                    layer: 'lawrenceville-2ml9et',
                    opacity: 0
                },
                {
                    layer: 'duluth-2l7k34',
                    opacity: 0
                }
            ]
        },
        {
            id: 'chapter-nine',
            alignment: 'right',
            hidden: false,
            title: '2020',
            image: '',
            description: '% of Young Adults Living With Their Parents<img src="images/legend_young adult_gradient.png">',
            location: {
                center: [-84.1034488,33.9617945],
                zoom: 11,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'clipped-2020-young-adults-2acged',
                    opacity: 0.5
                },
                {
                    layer: 'norcross-7adxvh',
                    opacity: 1
                },
                {
                    layer: 'lawrenceville-2ml9et',
                    opacity: 1
                },
                {
                    layer: 'duluth-2l7k34',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'clipped-2020-young-adults-2acged',
                    opacity: 0
                },
                {
                    layer: 'norcross-7adxvh',
                    opacity: 0
                },
                {
                    layer: 'lawrenceville-2ml9et',
                    opacity: 0
                },
                {
                    layer: 'duluth-2l7k34',
                    opacity: 0
                }
            ]
        },
        {
            id: 'chapter-ten',
            alignment: 'right',
            hidden: false,
            title: '2020',
            image: '',
            description: 'Cost Burdened Households As A % Of Total Households<img src="images/legend_cost burdened_gradient.png">',
            location: {
                center: [-84.1034488,33.9617945],
                zoom: 11,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'clipped-2020-cost-burdened-dnelgr',
                    opacity: 0.5
                },
                {
                    layer: 'norcross-7adxvh',
                    opacity: 1
                },
                {
                    layer: 'lawrenceville-2ml9et',
                    opacity: 1
                },
                {
                    layer: 'duluth-2l7k34',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'clipped-2020-cost-burdened-dnelgr',
                    opacity: 0
                },
                {
                    layer: 'norcross-7adxvh',
                    opacity: 0
                },
                {
                    layer: 'lawrenceville-2ml9et',
                    opacity: 0
                },
                {
                    layer: 'duluth-2l7k34',
                    opacity: 0
                }
            ]
        },
        {
            id: 'conclusion',
            alignment: 'full',
            hidden: false,
            title: 'Conclusion',
            image: '',
            description: 'Knowing that cost-burdened households have remained relatively constant within the county but with more young adults living with their parents and overall growth in the non-white population we can make assumptions such that because more adults choose to live with other adult generations of their family that the rate of cost-burdened households have remained constant because of the added household income contributions. In moving forward, the 2021 housing cost data might be interesting to look at when it becomes more available, having seen more recent discussions about higher rates in the past year. Zillow, a real estate company, has charts comparing different consumer price indexes on shelter and housing prices showing that they’ve increased to over 18% near the end of 2020, which they said is the strongest year-long growth within their series. In 2021, they looked at rental prices, and have found that in 2020 the prices have dipped, but by May 2021 prices have increased above their previous trend, meaning that rent has gone up at a higher rate than before the pandemic. With regard to current circumstances, it’s something that’s worth keeping an eye on and acknowledging.',
            location: {
                center: [-84.1034488,33.9617945],
                zoom: 11,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
