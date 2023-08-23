var config = {
    style: 'mapbox://styles/mhagberg/clj6bogje009l01qj841jhf7b',
    accessToken: 'pk.eyJ1IjoibWhhZ2JlcmciLCJhIjoiY2xqYWU3NGYwMWNtbzNkbWhka2xnbnN1bCJ9.TayEy30Gweso8lRNQ8o1Nw',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Food Access and Choice',
    subtitle: 'Lynchburg, Virginia',
    byline: 'Megan Hagberg',
    image: 'images/GroceryBagsCartsBanner.jpg',
    footer: 'Source: Google Maps, US Census Data, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'What Influences Food Choices?',
            image: './images/choice.jpg',
            description: 'Image Source:Pexels </p/> There are many reason why a person may choose to shop at a particular food retailer including: physical determinants (e.g., education and skills), biological determinants, personal preferences, economical determinants (e.g., cost, income, ailability), social determinants (e.g., culture and family), psychological factors (e.g., mood, stress, and guilt) and attidude.',
            location: {
            center: [-79.14314, 37.45496],
            zoom: 7,
            pitch: 0,
            bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                    layer: 'Virginia_Outline1',
                    opacity: .3,
                    duration: 5000
                 }
            ],
            onChapterExit: [
                {
                    layer: 'Virginia_Outline1',
                    opacity: .3
                }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'What is a Food Desert?',
            image: 'images/HungryDesertSign.png',
            description: 'Image Source: flickr </p/> During the 1990s, in the United States, the term “food desert” became a popular way to describe residential areas where access to fresh, healthy, and affordable food options were limited. To determine if a food desert was developing, researchers would investigate the area’s socioeconomic status. They would look at the distance between a neighborhood and the nearest grocery store, the income of the residents within the neighborhood, as well as access to transportation.ections to add to your story.',
            location: {
                center: [-79.14314, 37.45496],
                zoom: 7,
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
                    layer: 'Virginia_Outline1',
                    opacity: .3,
                    duration: 1000
                }
            ],
            onChapterExit: [    
                {
                    layer: 'Virginia_Outline1',
                    opacity: .3,
                }
            ],
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'What Has Changed?',
            image: "",
            description: 'By 2013, the United States Department of Agriculture stopped using the term “food desert” and began leveraging Census data to determine areas that are low income (LI) low access (LA) (Kim, 2022). Historically, researchers understood “food deserts” to be areas/neighborhoods without access to a full-service grocery store that offered fresh and healthy options. The belief was that by adding grocery stores to these areas, people’s eating habits would improve. However, with additional research and data, it is now believed that there are far more variables at play than just proximity (e.g., affordability, cultural preferences, marketing strategies, etc.) (Communications, 2019).',
            location: {
                center: [-79.14314, 37.45496],
                zoom: 7,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'Virginia_Outline1',
                    opacity: 0.3,
                    duration: 1000
                }
            ],
            onChapterExit: [
                 {
                    layer: 'Virginia_Outline1',
                    opacity: 0,
                }
            ],
        },
        {
            id: 'fourth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Lynchburg, Virginia',
            image: img = 'https://www.blueridgeparkway.org/wp-content/uploads/2020/03/Tubby-Kubik-Lynchburg-Virginia-stands-amid-the-Blue-Ridge-Mountains-and-alongside-the-James-River-scaled-e1633548688322-800x600-c-default.jpg',
            description: 'Source:Blue Ridge Parkway Association </p> Lynchburg, VA is located within the Blue Bridge Mountains and along the James River. It sits just east of Richmond, VA and south of Washington, D.C. It has a population of around 81,000 people with approximately 12,000 people living below the poverty line. (Lynchburg Economic Development Authority)',
            location: {
                center: [-79.14314, 37.45496],
                zoom: 7,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                     layer: 'Virginia_Outline1',
                     opacity: .3,
                     duration: 2000
                 },
            ],
            onChapterExit: [
                {
                     layer: 'Virginia_Outline1',
                     opacity: 0,
                },
            ]
        },
        {
            id: 'fifth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Median Income',
            description: '<img src="images/Median_Income_Legend.png" style="width:30%"> </p> This map shows the breakdown of median income within the city. The north end, or downtown region, of the city shows that the median income is lower than some of the other parts of the city. ',
            location: {
                center: [-79.14247, 37.42483],
                zoom: 11.3,
                pitch: 50,
                bearing: 30.00
        },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                     layer: 'MedianIncome',
                     opacity: 1,
                     duration: 1000
                 },
            ],
            onChapterExit: [
                {
                     layer: 'MedianIncome',
                     opacity: 0,
                },
            ]
        },
        {
            id: 'fifth',
            alignment: 'right',
            hidden: false,
            title: 'Historic Downtown',
            image: img= 'https://cdn-0.affordablehousingonline.com/ezoimgfmt/s3.amazonaws.com/images.apartmentsmart.com/67220/13753.jpg?ezimgfmt=rs:415x294/rscb8',
            description: 'Image Source: Affordable Housing Online </p> Historic downtown neighborhoods like Garland Hill, Dearington, and Rivermont hosts various housing types with compact and walkable streets that are well-connected. Residents of these neighborhoods benefit from the historic character and convenience that the neighborhood offers like schools, restaurants, and other retailers. Often the large historic homes in these areas provide affordable multi-family housing options. This study looks at the proximity of these neighborhoods to various food retailers. More specifically, how many options are within a 5-to-10-minute walk and where public transportation lines are located. It is important that moving forward the composition of the neighborhoods and the resources provided are purposeful (Chapter 8: Neighborhoods & Housing – Lynchburg). As the neighborhood changes and develops it will be important to keep in mind the needs of the residents. It is important that people have options when they shop and while it is important the provide food retail options that are more robust than convenience stores and small markets, these full-service options should be added with the purpose of providing accessible options to residents.',
            location: {
                center: [-79.14137, 37.41160],
                zoom: 16,
                pitch: 80,
                bearing: 30.00
        },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                     layer: 'MedianIncome',
                     opacity: 1,
                     duration: 2000
                 },
            ],
            onChapterExit: [
                {
                     layer: 'MedianIncome',
                     opacity: 0,
                },
            ]
        },
        {
            id: 'seventh-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Food Retail',
            image: '',
            description: '<img src="images/Type of Retailer_legend.png" style="width:30%"> </p> Five categories of food retailers are displayed on this map. They include supermarkets, markets, dollar stores, convenience stores, and restaurants. There is a concentration of convenience stores and restaurants in the north end of the city. The majority of full-service supermarkets (marked with dark blue points on this map) fan outward away from the downtown area along major roadways.',
            location: {
                center: [-79.14247, 37.42483],
                zoom: 11.3,
                pitch: 50,
                bearing: 30.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                     layer: 'Updated Grocery',
                     opacity: 1,
                     duration: 1000
                 },
            ],
            onChapterExit: [
                {
                     layer: 'Updated Grocery',
                     opacity: 1,
                },
            ]
        },
        {
            id: 'eighth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Walking Distance',
            image: '',
            description: '<img src= "images/walkingdistancelegendv2.jpg" style="width:20%"> </p> The light-blue polygons show the area around a food retailer that is within a 5-minute walk. The dark-blue polygons show the area around a food retailer that is within a 10-minute walk. Anything outside of a 10-minute walk could become too taxing for people who are carrying groceries and other purchases.',
            location: {
                center: [-79.14247, 37.42483],
                zoom: 11.3,
                pitch: 50,
                bearing: 30.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                     layer: 'GroceryandWalking',
                     opacity: 1,
                     duration: 2000
                 },
            ],
            onChapterExit: [
                {
                     layer: 'GroceryandWalking',
                     opacity: 1,
                },
            ]
        },
        {
        id: 'tenth-chapter',
        alignment: 'left',
        hidden: false,
        title: 'Walking Distance to Multiple Food Retailers - Downtown',
        image: '',
        description: 'The northern portion of the city is a low-income census designated area. At first glance, this area has many food retail options that fall within a 5 to 10-minute walk. However, most, if not all these options are either a convenience store, dollar store, or a restaurant. If someone preferred to shop at a full-service supermarket, they would have to travel beyond what is located within a 5 to 10-minute walk.',
        location: {
            center: [-79.14218, 37.41413],
            zoom: 13.28,
            pitch: 0,
            bearing: 0
        },
        mapAnimation: 'flyTo',
        rotateAnimation: false,
        callback: '',
        onChapterEnter: [
            {
                 layer: 'GroceryandWalking',
                 opacity: 1,
                 duration: 1000
             },
        ],
        onChapterExit: [
            {
                 layer: 'GroceryandWalking',
                 opacity: 1,
            },
        ]
    },
    {
        id: 'eleventh-chapter',
        alignment: 'left',
        hidden: false,
        title: 'Walking Distance to Multiple Food Retailers - Beyond Downtown',
        image: '',
        description: 'The northern portion of the city is a low-income census designated area. At first glance, this area has many foot retail options that fall within a 5 to 10-minute walk. However, most, if not all these options are either a convenience store, dollar store, or a restaurant. If someone preferred to shop at a full-service supermarket, they would have to travel beyond what is located within a 5 to 10-minute walk.',
        location: {
            center: [-79.14996, 37.40616],
            zoom: 11.00,
            pitch: 0,
            bearing: 0
        },
        mapAnimation: 'flyTo',
        rotateAnimation: false,
        callback: '',
        onChapterEnter: [
            {
                 layer: 'GroceryandWalking',
                 opacity: 1,
                 duration: 6000
             },
        ],
        onChapterExit: [
            {
                 layer: 'GroceryandWalking',
                 opacity: 1,
            },
        ]
    },
    {
        id: 'ninth-chapter',
        alignment: 'right',
        hidden: false,
        title: 'Public Transportation',
        image: '',
        description: '<img src= "images/Public Transportation legend.png" style="width:45%"> </p> Each purple circle on this map represents a public bus stop. Placed on top of the 5 to-10-minute walking distances shows which bus stops along which major roadways are accessible to multiple retail options. It appears that the bus lines run along the major roadways and any routes will hit multiple stores but not many single stops are within a short walk to multiple options. The public bus routes in Lynchburg play a large role in how many residents travel throughout the city. This is no different when traveling to food retailers. This map shows the public but stops in relation to the walking distance to stores. These two variables are important to show together because once a rider disembarks the bus, they should have multiple options within a reasonable walking distance of no more than 10 min. For the most part, it appears that there are multiple options along a single bus line but may require a rider to make multiple stops.',
        location: {
            center: [-79.14247, 37.42483],
            zoom: 12,
            pitch: 0,
            bearing: 0.00
        },
        mapAnimation: 'flyTo',
        rotateAnimation: false,
        callback: '',
        onChapterEnter: [
            {
                 layer: 'Lynchburg_Bus_Stop_Walking',
                 opacity: 1,
                 duration: 2000
             },
        ],
        onChapterExit: [
            {
                 layer: 'Lynchburg_Bus_Stop_Walking',
                 opacity: 0,
            },
        ]
    },
    {
        id: 'ninth',
        alignment: 'fully',
        hidden: false,
        title: 'Conclusion',
        image: '',
        description: '“Choice is the purest expression of free will — the freedom to choose allows us to shape our lives exactly how we wish” (Ye, 2016). A choice is “the opportunity or power to choose between two or more possibilities; the opportunity or power to make a decision” (Choice definition & meaning). Having a sense of agency and power over the decisions we make is important regardless of socioeconomic status. The series of maps on this page shows a brief snapshot of one person’s interpretation of a small piece of what Lynchburg is. Ultimately, these maps are intended to highlight some of the types of available food retailers throughout the city while focusing on the walkability and proximity to public transportation. Through this study, it was determined that at first glance, there appears to be a number retail cluster signaling a wide variety of choice within a given 5-10 min radius. However, when given a closer look, the category of retailers is generally limited to convenience stores and small markets. For people to choose where they purchase their food, regardless of their motivations, they need to have accessible options, i.e., within a reasonable walking distance. In the case of downtown Lynchburg, this likely means bringing a full-service grocery store for the purpose of providing choices rather than altering habits.',
        location: {
            center: [-79.14247, 37.42483],
            zoom: 12,
            pitch: 0,
            bearing: 0.00
        },
        mapAnimation: 'flyTo',
        rotateAnimation: false,
        callback: '',
        onChapterEnter: [
            {
                 layer: '',
                 opacity: 0,
                 duration: 2000
             },
        ],
        onChapterExit: [
            {
                 layer: '',
                 opacity: 0,
            },
        ]
    },
        {
            id: 'twelth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Works Cited',
            image: '',
            description: 'Maps made with: Google Maps and US Census Data </p> Resources and Articles: </p> Bower, K. M., Thorpe, R. J., Jr, Rohde, C., & Gaskin, D. J. (2014). The intersection of neighborhood racial segregation, poverty, and urbanicity and its impact on food store availability in the United States. Preventive medicine, 58, 33–39. https://doi.org/10.1016/j.ypmed.2013.10.010 </p City of Lynchburg. (n.d.). Chapter 8: Neighborhoods & Housing - Lynchburg. https://www.lynchburgva.gov/sites/default/files/COLFILES/Community-Development/Planning/CP%20011414AdoptedFinal_Chapter%208.pdf </p> Communications, N. W. (2019, December 10). What really happens when a grocery store opens in a “food desert”? NYU. https://www.nyu.edu/about/news-publications/news/2019/december/what-really-happens-when-a-grocery-store-opens-in-a--food-desert.html </p> George, C., &amp; Tomer, A. (2022, March 9). Beyond “Food Deserts”: America needs a new approach to mapping food insecurity. Brookings. https://www.brookings.edu/research/beyond-food-deserts-america-needs-a-new-approach-to-mapping-food-insecurity/ </p> Kim, H. (2022, November 2). Food desert: What is it, causes, effects and possible solutions. Sentient Media. https://sentientmedia.org/food-desert/#:~:text=In%20the%20United%20States%2C%20food,urban%20planning%20and%20housing%20policies. </p> Lynchburg Economic Development Authority. https://www.opportunitylynchburg.com/blueprint/ </p> Lynchburg Regional Business Alliance. (n.d.). Our history. Lynchburg Regional Business Alliance. https://www.lynchburgregion.org/our-history/ </p> Yeoman, B. (2019, February 22). The Hidden Resilience of “Food Desert” neighborhoods. Civil Eats. https://civileats.com/2018/09/14/the-hidden-resilience-of-food-desert-neighborhoods/ </p>Ye, L. (2016, July 18). The Psychology of Choice. Medium. https://thinkgrowth.org/the-psychology-of-choice-7dc0fb2c9bb8',
            location: {
                center: [-79.14247, 37.42483],
                zoom: 11.3,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                     layer: '',
                     opacity: 0,
                     duration: 1000
                 },
            ],
            onChapterExit: [
                {
                     layer: '',
                     opacity: 0,
                },
            ]
        },

    ]
};
