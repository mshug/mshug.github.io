var config = {
    style: 'mapbox://styles/hgabe21/cl4yreyr8000l14ow4xs5u9so',
    accessToken: 'pk.eyJ1IjoiaGdhYmUyMSIsImEiOiJjbDR5cjE3bXkydHdqM2RuczVxZXBqaHdwIn0.Wt2fB-LjQZo5U7mGiITBPw',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'Redlining in Richmond, VA',
    subtitle: 'Redlining discrimination and how it caused continuing disparities',
    byline: 'By Skye Hankins',
    footer: 'Data from Census and mapping inequality. Research from VPM, Forbes, and Heritage.org <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'full',
            hidden: false,
            title: 'Introduction',
            image: 'https://vpm.org/sites/default/files/inline-images/richmond_districts_web.jpg',
            description: 'Segregation in the United States led to drastic disparities in outcomes among people that bleeds into the modern day. One of the most prominent forms of segregation was redlining. Redlining was a way to prevent loans from being provided to non-white communities in almost every major US city. This resulted in major divisions in demographics of communities creating almost entirely white and almost entirely black communities in American Cities. This allowed discrimination to be more easily targeted by neighborhood. This resulted in largely differing economic outcomes among white and non-white americans. Despite redlining policies being ended with the fair housing act during the civil rights movement, there are continuing disparities as a result of these policies. The median household wealth for a white family is 10 times that of a black family and there is a large disparity in house ownership among black and white families as well (Komp). White families are much more likely to own their own homes than a black family because redlining prevented purchases of housing which has become steadily more difficult due to modern housing issues. Home value of a greenlined neighborhood is near double that of a redlined one causing a great disparity in wealth ownership (Komp). Redlined families have gained under half of the generational wealth of a greenlined family (Richardson). Housing is directly linked to the quality of education and schooling due to how schools are funded. This means that people in poorer communities have a harder time gaining wealth since wealth and education are linked. As a result, people in redlined areas face lower quality education and higher difficulties in surmounting wealth inequalities (Burke and Schwalbach). This creates a feedback loop causing poor families to stay poor as very few people are able to advanced to a higher income bracket between generations. These problems are linked to redlining as they all are neighborhood problems that are concentrated in non-white communities due to redlining and a history of dicrimination and segregation.',
            location: {
                center: [-77.4357850918906, 37.54033797216012],
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                     layer: 'redlining-data',
                     opacity: 0,
                     duration: 5000
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Redlining in history',
            description: 'Redlining in Richmond affected a large part of the city with a major exception for the western parts of the city. The people in these areas struggled to get loans to move from these poor neighborhoods preventing them from entering areas of the city with more economic opportunity. These maps were redlined based on many factors, including if they had a non-white population present. As a result, you can see demographics of the city through the redlining map. In this map, as you go west, the population gets increasingly white. Redlining policies in the eastern areas prevented the movement of people into the western parts of the city, creating a strong divide between white dominated west and non-white east.',
            location: {
                center: [-77.4357850918906, 37.54033797216012],
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
                    layer: 'redlining-data',
                    opacity: .50,
                    duration: 5000
               }
            ],
            onChapterExit: [
                {
                    layer: 'percent-non-white',
                    opacity: 1,
                    duration: 5000
               }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: true,
            title: 'Redlining in history',
            description: 'The redlined areas match up very closely to demographics of the city today. The suppression of non-white movement was very successful leading to this strong divide. The northwest part of the city is the whitest area of the city and therefore has seen the most prosperity since they had the least resistance to economic prosperity during the cold war that many non-white Americans were prevented from achieving. Income, poverty, and home ownership disparities can be found between these communities. The white population has had the advantage of positive factors on their development that much of the non-white communities have not.',
            location: {
                center: [-77.4357850918906, 37.54033797216012],
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
                    layer: 'percent-non-white',
                    opacity: 1,
                    duration: 5000
               }
            ],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'The Distribution of population',
            description: 'The redlined areas match up very closely to demographics of the city today. The suppression of non-white movement was very successful leading to this strong divide. The northwest part of the city is the whitest area of the city and therefore has seen the most prosperity since they had the least resistance to economic prosperity during the cold war that many non-white Americans were prevented from achieving. Income, poverty, and home ownership disparities can be found between these communities. The white population has had the advantage of positive factors on their development that much of the non-white communities have not.',
            location: {
                center: [-77.4357850918906, 37.54033797216012],
                zoom: 12,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'percent-non-white',
                opacity: 1,
                duration: 5000
                },
                {
                    layer: 'redlining-data',
                    opacity: 0,
                    duration: 5000
                 }
            ],
            onChapterExit: [
                {
                    layer: 'redlining-data',
                    opacity: 0,
                    duration: 5000
                 }
            ]
        },
        {
            id: 'Blank page',
            alignment: 'left',
            hidden: true,
            title: 'The Distribution of population',
            description: 'The poverty in richmond is primarily found outside of the majority white areas of the city. The greenlined areas of the city have lower poverty rates than the redlined areas. This means that likely the income of these areas are also lower than the green areas. The disparity between the green and redlined areas continue to show the disparity of income and wealth between the white and non-white areas of the city. Due to the obstacles to improve income and wealth, these areas have continued to remain poor over the decades.',
            location: {
                center: [-77.4357850918906, 37.54033797216012],
                zoom: 12,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'percent-non-white',
                    opacity: 0,
                    duration: 5000
                 },
                 {
                    layer: 'poverty-data',
                    opacity: 1,
                    duration: 5000
                } 

            ],
            onChapterExit: [
                
            ]
        },
        {
            id: 'fourth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Poverty in Richmond',
            description: 'The poverty in richmond is primarily found outside of the majority white areas of the city. The greenlined areas of the city have lower poverty rates than the redlined areas. This means that likely the income of these areas are also lower than the green areas. The disparity between the green and redlined areas continue to show the disparity of income and wealth between the white and non-white areas of the city. Due to the obstacles to improve income and wealth, these areas have continued to remain poor over the decades',
            location: {
                center: [-77.4357850918906, 37.54033797216012],
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'percent-non-white',
                    opacity: 0,
                    duration: 5000
               },
               {
                layer: 'poverty-data',
                opacity: 1,
                duration: 5000
              }
            ],
            onChapterExit: []
        },
        {
            id: 'Blank slide 2',
            alignment: 'right',
            hidden: true,
            title: 'Redlining in history',
            description: ' Show the map of redlining while zoomed into Richmond and compare the map of redlining to the locations of current minority groups. Describe how the redlining limited movement of people making them unable to move from the places where redlining was prevalent            ',
            location: {
                center: [-77.4357850918906, 37.54033797216012],
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
                    layer: 'percent-non-white',
                    opacity: 0,
                    duration: 5000
               }
            ],
            onChapterExit: []
        },
        {
            id: 'Income page',
            alignment: 'right',
            hidden: false,
            title: 'Income in Richmond',
            description: 'The division of richmond becomes especially clear in the division of income between the greenlined and redlined areas. The greenlined area has seen the largest income bracket while the largely non-white and redlined areas have seen the lowest income in the city. The suburbs in the west are prosperous in comparison to the rest of the city. The wealthy communities are able to more easily afford higher education that keeps their families wealthy and continue to prosper. The eastern areas will struggle to afford housing and will have cheaper housing than the greenlined white areas due to the disparity in income.',
            location: {
                center: [-77.4357850918906, 37.54033797216012],
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'median-income',
                    opacity: 1,
                    duration: 5000
               },
               {
                layer: 'poverty-data',
                opacity: 0,
                duration: 5000
              }    
            ],
            onChapterExit: [
                {
                    layer: 'median-income',
                    opacity: 0,
                    duration: 5000
               }
            ]
        },
        {
            id: 'Home ownership page',
            alignment: 'right',
            hidden: false,
            title: 'Home ownership disparities',
            description: 'The most common way for people to build wealth in the United States is through home ownership. Renting a home does not generate wealth as they are not paying for the property, but the ability to use the property. When someone owns a property they can then sell that property to gain wealth for their family. The greenlined communities have a much higher ownership of their properties than their redlined counterparts. This means these families have the ability to increase their wealth and prosperity rather than merely survive while a renting family likely does not have enough wealth to follow pursuits outside of home ownership to build wealth. This furthers the division between the white and non-white communities of the city.',
            location: {
                center: [-77.4357850918906, 37.54033797216012],
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'home-ownership',
                    opacity: 1,
                    duration: 5000
               }
            ],
            onChapterExit: [
                {
                    layer: 'home-ownership',
                    opacity: 0,
                    duration: 5000
               }
            ]
        },
        {
            id: 'Home ownership',
            alignment: 'fully',
            hidden: true,
            title: 'How Richmond is effected by Redlining',
            description: 'Show a layer where the worst of the factors are and talk about how it connects to the locations of redlining. Finalize the scrolly with a image of VA and further explanations of why I think redlining caused many of these disparities.            ',
            location: {
                center: [-77.4357850918906, 37.54033797216012],
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'home-ownership',
                    opacity: 1,
                    duration: 5000
               },
               {
                layer: 'redlining-data',
                opacity: .6,
                duration: 5000
           }
            ],
            onChapterExit: [
                {
                    layer: 'home-ownership',
                    opacity: 0,
                    duration: 5000
               }
            ]
        },
        {
            id: 'Blank poverty',
            alignment: 'fully',
            hidden: true,
            title: 'How Richmond is effected by Redlining',
            description: 'Show a layer where the worst of the factors are and talk about how it connects to the locations of redlining. Finalize the scrolly with a image of VA and further explanations of why I think redlining caused many of these disparities.            ',
            location: {
                center: [-77.4357850918906, 37.54033797216012],
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'poverty-data',
                    opacity: 1,
                    duration: 5000
               },
            ],
            onChapterExit: [
                {
                    layer: 'poverty-data',
                    opacity: 0,
                    duration: 5000
               }
            ]
        },
        {
            id: 'Final Blank page',
            alignment: 'fully',
            hidden: true,
            title: 'How Richmond is effected by Redlining',
            description: 'Show a layer where the worst of the factors are and talk about how it connects to the locations of redlining. Finalize the scrolly with a image of VA and further explanations of why I think redlining caused many of these disparities.            ',
            location: {
                center: [-77.4357850918906, 37.54033797216012],
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'median-income',
                    opacity: 1,
                    duration: 5000
               },
            ],
            onChapterExit: [
                {
                    layer: 'median-income',
                    opacity: 0,
                    duration: 5000
               }
            ]
        },
        {
            id: 'Final page',
            alignment: 'fully',
            hidden: false,
            title: 'How Richmond is effected by Redlining',
            description: 'As shown, the opposite ends of the spectrums of each map are found between the redlined and green areas. This shows a very strong correlation between redlining and economic outcomes in the modern day. The majority white area to the west of the city has faced large prosperity that is not found in majority non-white areas of the city. The policies of redlining has caused brought some prosperity while shutting others out entirely despite ending in the 60’s. This problem of redlining is one that will not naturally go away and will be within Richmond, and the United States as a whole, for many years to come.',
            location: {
                center: [-77.4357850918906, 37.54033797216012],
                zoom: 8,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               {
                layer: 'redlining-data',
                opacity: 0,
                duration: 5000
              }
            ],
            onChapterExit: []
        }
        
    ]
};
