var config = {
    style: 'mapbox://styles/lemokr9/cl1zph9v8000314pah2yatltz',
    accessToken: 'pk.eyJ1IjoibGVtb2tyOSIsImEiOiJjbDAxc2cycnMwamwwM2pvZGNidmliZWJvIn0.pjEcZecFGAOGrzg6pOjkcQ',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'If you can read this, chances are you don´t live in Kentucky',
    subtitle: 'A story of broadband, poverty, and diversity in Appalachia',
    byline: 'By Leon Krug',
    footer: 'Data sources: American Community Survey, 5 year estimates 2016-2020; Kentucky Coal Facts, Kentucky Energy and Environment Cabinet; 2020 US census, census.gov </p> Further reading: "Broadband builds the future", ReImagineAppalachia.org; Appalachian Regional Commission, arc.gov</p> Virginia Tech, GIS for Designers, April 2022 <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'zero',
            alignment: 'left',
            hidden: true,
            title: 'Introduction',
            image: './path/to/image/source.png',
            description: '',
            location: {
                center: [-98.50384, 39.98108],
                zoom: 4.0,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: '',
                     opacity: .8,
                     duration: 2000
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
            id: 'one',
            alignment: 'left',
            hidden: false,
            title: 'Introduction',
            image: 'images/MonNatForest.jpg',
            description: 'The Appalachian region spans almost 950 miles from Mississippi in the South-West to New York state in the North-East. It includes parts of 13 states: Mississippi, Alabama, Georgia, Tennessee, Kentucky, South Carolina, North Carolina, Virginia, West Virginia, Ohio, Pennsylvania, Maryland, and New York. Roughly 25.7 million people live in Appalachia.</p> Image: https://upload.wikimedia.org/wikipedia/commons/4/4e/MonNatForest.jpg',
            location: {
                center: [-88.24402, 37.20807],
                zoom: 5.0,
                pitch: 0,
                bearing: 0,
                speed: .2, // make the flying slow
                curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'AppalachiaOutlines',
                     opacity: .8,
                     duration: 2000
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'AppalachiaOutlines',
                     opacity: 0
                 }
            ]
        },
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'The importance of being connected',
            image: 'images/Legende_01.png',
            description: 'High quality internet is today considered an essential infrastructure like access to water, heating, and electricity. In our highly digitized and globalized society, opportunities are directly tied to being able to interact with others through digital means.</p> As the Covid pandemic has proven even more drastically, this reliance on digital connections is more necessary than ever before. Students, workers, businesses, healthcare providers, government organizations are all dependent on reliable access to broadband internet.</p> The pandemic has also shown that there is a serious inequality in availability and access to internet for certain demographic groups and geographic areas - one of those places is Appalachia. ',
            location: {
                center: [-83.24402, 37.20807],
                zoom: 5.5,
                pitch: 45,
                bearing: 25,
                speed: .8, // make the flying slow
                curve: .1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'AppNoInternetFar',
                     opacity: .8,
                     duration: 2000
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'AppNoInternetFar',
                     opacity: 0
                 }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Rural areas - left behind?',
            image: 'images/Legende_01.png',
            description: 'The mapping of access to broadband internet in the region shows some clear geographic disparities. Especially rural areas in the central Appalachian states of West Virginia and Kentucky have extremely low rates of internet access of around only 50-60 percent. Urban areas on the other hand have in general a higher rate.',
            location: {
                center: [-83.01119, 36.73106],
                zoom: 6.8,
                pitch: 60,
                bearing: 27.2,
                speed: .5, // make the flying slow
                curve: .5, // change the speed at which it zooms out
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                // speed: 5, // make the flying slow
                // curve: 2, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'AppNoInternet',
                    opacity: .8,
                    duration: 2000
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
            id: 'three',
            alignment: 'left',
            hidden: false,
            title: 'Taking a closer look at Kentucky',
            image: 'images/Legende_01.png',
            description: 'The mapping of different census and economic data for Kentucky serves as a case study to analyse some aspects of the given situation and certain trends that might indicate the problems and opportunities of future developments.',
            location: {
                center: [-85.71833, 37.87629],
                zoom: 7,
                pitch: 0,
                bearing: 0,
                speed: .5, // make the flying slow
                curve: .1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'AppNoInternet',
                    opacity: .8,
                    duration: 2000
                }
           ],
           onChapterExit: [
                {
                    layer: 'AppNoInternet',
                    opacity: 0
                }
            ]
        },
        {
            id: 'chapter population',
            alignment: 'center',
            hidden: false,
            title: 'Demographics',
            //image: 'images/Legende-04.png',
            description: 'First, we are taking a look at demographic data in Kentucky. This lays the foundation to understand the general situation within the state. The unequal distribution of the population between urban and rural regions and the racial composition might have direct effects on the access to broadband, as some communities might be more affected than others.',
            location: {
                center: [-85.71833, 37.87629],
                zoom: 7,
                pitch: 0.00,
                bearing: 0.00
                
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: '',
                    opacity: .8,
                    duration: 2000
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
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Demographics - Total households',
            image: 'images/Legende-02.png',
            description: 'In 2020, 4.5 Million people lived in Kentucky. The largest cities are the state capital Louisville and Lexington.</p> The Appalachian counties in Kentucky are generally very sparcely populated with most counties having a population density between 1-100 people per square mile.',
            location: {
                center: [-85.71833, 37.87629],
                zoom: 7,
                pitch: 0.00,
                bearing: 0.00
                
            },
            mapAnimation: 'flyTo',
            speed: 10, // make the flying slow
            curve: 2000, // change the speed at which it zooms out
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'KenTotalHouseholds2',
                    opacity: .8,
                    duration: 2000
                },
                {
                    layer: 'CountyOutlines',
                    opacity: .2,
                    duration: 2000
                }
           ],
           onChapterExit: [
                {
                    layer: 'KenTotalHouseholds2',
                    opacity: 0
                },
                {
                    layer: 'CountyOutlines',
                    opacity: 0
                }
            ]
        },
        {
            id: 'fourth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Demographics - Percent non-white population',
            image: 'images/Legende-03.png',
            description: 'Kentucky has an average of 87% White and 13% Non-White population. For comparison, the US average in 2020 was roughly 61% White and 39% Non-White.</p> Most counties in the Appalachian region have a non-white population of under 1-2 percent of the total population.',
            location: {
                center: [-85.71833, 37.87629],
                zoom: 7,
                pitch: 0.00,
                bearing: 0.00
                
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'KenNonWhite',
                    opacity: .8,
                    duration: 2000
                },
                {
                    layer: 'CountyOutlines',
                    opacity: .2,
                    duration: 2000
                }
           ],
           onChapterExit: [
                {
                    layer: 'KenNonWhite',
                    opacity: 0
                },
                {
                    layer: 'CountyOutlines',
                    opacity: 0
                }
            ]
        },
        {
            id: 'chapter economic status',
            alignment: 'center',
            hidden: false,
            title: 'Economic status',
            //image: 'images/Legende-04.png',
            description: 'Diving into more data, we are taking a look at some key economic factors: unemploment rate, povety rate, and medium household income. These indicators should give us some more clues, as to if broadband access is potentially directly related to economic factors.',
            location: {
                center: [-85.71833, 37.87629],
                zoom: 7,
                pitch: 0.00,
                bearing: 0.00
                
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: '',
                    opacity: .8,
                    duration: 2000
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
            id: 'six-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Economic status - Unemployment rate',
            image: 'images/Legende-04.png',
            description: 'Kentucky´s annual unemployment rate in 2020 was roughly 5%.</p> Looking at the data on the county level shows that the unemployment rates in the Appalachian counties are generally higher than the state average with Wolfe County peaking at 25.4%.',
            location: {
                center: [-85.71833, 37.87629],
                zoom: 7,
                pitch: 0.00,
                bearing: 0.00
                
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'KenUnemployment',
                    opacity: .8,
                    duration: 2000
                },
                {
                    layer: 'CountyOutlines',
                    opacity: .2,
                    duration: 2000
                }
           ],
           onChapterExit: [
                {
                    layer: 'KenUnemployment',
                    opacity: 0
                },
                {
                    layer: 'CountyOutlines',
                    opacity: 0
                }
            ]
        },
        {
            id: 'five-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Economic status - Poverty rate',
            image: 'images/Legende-05.png',
            description: 'The poverty map further shows the extremely high poverty rate in the Appalachian region with most counties reaching a rate of 25-35 percent.</p> The poverty rate describes the ratio of people whose income falls below the national poverty line. In 2020 this threshhold was at $12,760 for individuals under 65 and $26,200 for a family of 4.',
            location: {
                center: [-85.71833, 37.87629],
                zoom: 7,
                pitch: 0.00,
                bearing: 0.00
                
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'KenPoverty',
                    opacity: .8,
                    duration: 2000
                },
                {
                    layer: 'CountyOutlines',
                    opacity: .2,
                    duration: 2000
                }
           ],
           onChapterExit: [
                {
                    layer: 'KenPoverty',
                    opacity: 0
                },
                {
                    layer: 'CountyOutlines',
                    opacity: 0
                }
            ]
        },
        {
            id: 'seven-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Economic status - Medium household income',
            image: 'images/Legende-06.png',
            description: 'The Appalachian counties also have the lowest median incomes within the state. For comparison: the median income for all of Kentucky was $56,525 in 2020, while the US average was $67,521.',
            location: {
                center: [-85.71833, 37.87629],
                zoom: 7,
                pitch: 0.00,
                bearing: 0.00
                
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'KenMedianIncome',
                    opacity: .8,
                    duration: 2000
                },
                {
                    layer: 'CountyOutlines',
                    opacity: .2,
                    duration: 2000
                }
           ],
           onChapterExit: [
                {
                    layer: 'KenMedianIncome',
                    opacity: 0
                },
                {
                    layer: 'CountyOutlines',
                    opacity: 0
                }
            ]
        },
        {
            id: 'chapter coal industry',
            alignment: 'center',
            hidden: false,
            title: 'Coal industry',
            //image: 'images/Legende-04.png',
            description: 'Since the Appalachian region, specifically West Virginia and Kentucky, are known for their coal production, I decided to look into some numbers for the coal industry to see if there are any relations to the economic status and therefor access to broadband in our observed region.',
            location: {
                center: [-85.71833, 37.87629],
                zoom: 7,
                pitch: 0.00,
                bearing: 0.00
                
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: '',
                    opacity: .8,
                    duration: 2000
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
            id: 'eight-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Coal industry - Coal production in 2016',
            image: 'images/Legende-07.png',
            description: 'Coal mining has traditionally been a big economic factor in Kentucky. In 2014, about 24,000 people were employed directly or indirectly by the coal industry. The overall economic output resulted in about $6.7 Billion.</p>For the first time ever, the total coal production in the Western part of the state surpassed the amount produced in the East in 2019.',
            location: {
                center: [-85.71833, 37.87629],
                zoom: 7,
                pitch: 0.00,
                bearing: 0.00
                
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'KenCoal',
                    opacity: 1,
                    duration: 2000
                },
                {
                    layer: 'CountyOutlines',
                    opacity: .2,
                    duration: 2000
                }
           ],
           onChapterExit: [
                {
                    layer: 'KenCoal',
                    opacity: 0
                },
                {
                    layer: 'CountyOutlines',
                    opacity: 0
                }
            ]
        },
        {
            id: 'nine-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Coal industry - Change in coal production from 2000-2016',
            image: 'images/Legende-08.png',
            description: 'The change in coal production however shows the clear downward trend of coal production in the state with most Appalachian counties having decreased production rates between 2000 and 2016 by over 90 percent.',
            location: {
                center: [-85.71833, 37.87629],
                zoom: 7,
                pitch: 0.00,
                bearing: 0.00
                
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'KenCoalChange',
                    opacity: 1,
                    duration: 2000
                },
                {
                    layer: 'CountyOutlines',
                    opacity: .2,
                    duration: 2000
                }
           ],
           onChapterExit: [
                {
                    layer: 'KenCoalChange',
                    opacity: 0
                },
                {
                    layer: 'CountyOutlines',
                    opacity: 0
                }
            ]
        },
        {
            id: 'chapter income',
            alignment: 'center',
            hidden: false,
            title: 'Income & lack of Internet access',
            //image: 'images/Legende-04.png',
            description: 'As a conclusion, the following data maps show the direct realtion between income and lack of internet access. These maps directly show a correlation between the two variables and provide an approach to possibly answering our initial question about broadband access in Kentucky and Appalachia.',
            location: {
                center: [-85.71833, 37.87629],
                zoom: 7,
                pitch: 0.00,
                bearing: 0.00
                
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: '',
                    opacity: .8,
                    duration: 2000
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
            id: 'ten-identifier',
            alignment: 'right',
            hidden: false,
            title: 'No Internet - Income under $25,000',
            image: 'images/Legende-09.png',
            description: 'The relation of income and internet access seems to be the most significant observation in this story. Lower income households throughout the state have in general higher numbers of no internet access.',
            location: {
                center: [-85.71833, 37.87629],
                zoom: 7,
                pitch: 0.00,
                bearing: 0.00
                
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'KenLowIncome',
                    opacity: 1,
                    duration: 2000
                },
                {
                    layer: 'CountyOutlines',
                    opacity: .2,
                    duration: 2000
                }
           ],
           onChapterExit: [
                {
                    layer: 'KenLowIncome',
                    opacity: 0
                },
                {
                    layer: 'CountyOutlines',
                    opacity: 0
                }
            ]
        },
        {
            id: 'eleven-identifier',
            alignment: 'right',
            hidden: false,
            title: 'No Internet - Income over $75,000',
            image: 'images/Legende-09.png',
            description: 'Higher income households on the other hand are in general connected on a much larger scale. This is true everywhere in the state, not just in the Appalachian region.',
            location: {
                center: [-85.71833, 37.87629],
                zoom: 7,
                pitch: 0.00,
                bearing: 0.00
                
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'KenHighIncome',
                    opacity: 1,
                    duration: 2000
                },
                {
                    layer: 'CountyOutlines',
                    opacity: .2,
                    duration: 2000
                }
           ],
           onChapterExit: [
                {
                    layer: 'KenHighIncome',
                    opacity: 0
                },
                {
                    layer: 'CountyOutlines',
                    opacity: 0
                }
            ]
        },
        {
            id: 'final-chapter',
            alignment: 'center',
            hidden: false,
            title: 'Conclusion',
            //image: './path/to/image/source.png',
            description: 'Internet providers are not trying to keep it a secret that it is not economically beneficial for them to deliver internet to sparsely populated rural areas. As the three maps of internet availability by household income show, the real problem lies not with geographic restrictions and low density - but rather by the affordability of internet. Here, lower incomes are at a disadvantage throughout the state, both in urban and rural areas. The higher income map proves that internet is in general available everywhere in the state - even in Appalachia.</p><p style="fontweight=bold; font=serif"> This means that internet is generally available, it is just not affordable for all economic groups. And since the Appalachian region has disproportionately more poverty and lower incomes, this results in an overall higher number of no internet access.</p> For a region that has already been struggling before the downfall of the coal industry, it is now more important than ever to bring affordable internet to these communities. If the counties in question do not find ways to improve broadband access for citizens and companies, the decline of jobs and rise of socio-economic problems will only become worse. The Appalachian region in Kentucky is at risk of going down a spiral of decay. Leaving improvements to private companies does not appear to be a valid solution.',
            location: {
                center: [-83.24402, 37.20807],
                zoom: 5,
                pitch: 60,
                bearing: -30,
                speed: .5, // make the flying slow
                curve: .2, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'AppalachiaOutlines',
                    opacity: 1,
                    duration: 2000
                }
           ],
           onChapterExit: [
                {
                    layer: 'AppalachiaOutlines',
                    opacity: 0
                }
            ]
        }
    ]
};
