var config = {
    style: 'mapbox://styles/smithan9/cl2gjbqvk003814nrwrb1rwb3',
    accessToken: 'pk.eyJ1Ijoic21pdGhhbjkiLCJhIjoiY2wwYTI0NmNwMGo4cDNwbWc2MHVpYzlhZCJ9.YKeULamzf1gUwA9sQ8t2qQ',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'Economy and Landuse in Henderson County, North Carolina',
    subtitle: 'Mapping economic character and landuse of three towns in Henderson County, NC',
    byline: 'Ariana Smith',
    footer: 'Sources: <p> American Community Survey and Puerto Rico Community Survey ... (n.d.). Retrieved March 24, 2022, from https://www2.census.gov/programs-surveys/acs/tech_docs/subject_defini- tions/2020_ACSSubjectDefinitions.pdf  </p> Appalachian Regional Commission (ARC), 1965. Mapping Appalachia. (n.d.). Retrieved March 24, 2022, from https://mapappalachia.geography.vt.edu/about/arc/ </p> Explore census data. (n.d.). Retrieved March 24, 2022, from https://data.census.gov/cedsci/table?g=0500000US37089%241500000 </p> Flat Rock NC things to do. Cottages of Flat Rock. (n.d.). Retrieved March 24, 2022, from https://thecottagesofflatrock.com/flat-rock-nc-things-to-do/ </p> Henderson County courthouse. Henderson County North Carolina. (n.d.). Retrieved March 24, 2022, from https://www.hendersoncountync.gov/gis/page/welcome-gomaps-hender- son-countys-online-gis-mapping-system Henderson County. </p> Henderson County NC.gov. (n.d.). Retrieved from https://www.hendersoncountync.gov/sites/default/files/fileattachments/planning/page/38521/05_brief_history. pdf </p> Hendersonville’s past. Hendersonville Historic Preservation Commission. (2009, April 7). Retrieved April 2, 2022, from http://www.hendersonvillehpc.org/hendersonville </p> History of Fletcher. Town of Fletcher, North Carolina. (2021, October 13). Retrieved April 5, 2022, from https://www.fletchernc.org/about-us/history-of-fletcher/ </p> Post-civil-war Flat Rock ; North Carolina. - jstor.org. (n.d.). Retrieved March 24, 2022, from https://www.jstor.org/stable/41446547?item_view=read_online Search for public school districts - district detail for Henderson County Schools. National Center for Education Statistics (NC). ',
    chapters: [
        {
            id: 'introduction',
            alignment: 'left',
            hidden: false,
            title: 'Introduction',
            image: 'images/Museum.jpg',
            description: 'Henderson County, North Carolina contains a diverse array of industries, including the resource-extraction and manufacturing industries commonly associated with rural Appalachia, but also robust tourism and vacation industries. These industries have grown very distinctly, and occupy separate portions of the county. <p> We will analyze three towns in Henderson County--Hendersonville, Flat Rock and Fletcher--to explore how these towns developed their own industries and landuse through history. We aim to identify how the centuries-old tourism industry in this region has shaped the industry and local economy, and how these factors have evolved.',
            location: {
                center: [-82.56177, 35.31789],
                zoom: 6,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'henderson-county-border',
                     opacity: 1,
                     duration: 0
                 },
                 {
                    layer: 'north-carolina-fill',
                    opacity: 1,
                    duration: 1000
                 },
                 {
                    //layer: 'LAYER 3',
                    //opacity: 0,
                    //duration: 0
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'henderson-county-border',
                     opacity: 1,
                     duration: 100
                 },
                 {
                    layer: 'north-carolina-fill',
                    opacity: 0
                 },
                 {
                    //layer: 'LAYER 3',
                    //opacity: 0,
                 }
            ]
        },
        {
            id: 'henderson-county-1',
            alignment: 'left',
            hidden: false,
            title: 'Henderson County - History',
            image: 'images/apples.jpg',
            description: 'Henderson County, North Carolina is a semi-rural county located in the Appalachian Region of western North Carolina. <p> Hendersonville was founded in the eighteenth century by William Mills and his family who would go on to create an apple industry in the area.',
            location: {
                center: [-82.66177, 35.31789],
                zoom: 9.5,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'henderson-county-border',
                     opacity: 1,
                     duration: 100
                 },
                 {
                    layer: 'henderson-county-shade',
                    opacity: 1,
                    duration: 100
                 },
                 {
                    layer: 'fletcher-town-boundary',
                    opacity: 1,
                    duration: 100
                 },
                 {
                    //layer: 'LAYER 4',
                    //opacity: 1,
                    //duration: 0
                 },
                 {
                    //layer: 'LAYER 5',
                    //opacity: 1,
                    //duration: 0
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'henderson-county-border',
                     opacity: 1,
                    duration: 100
                 },
                 {
                    layer: 'henderson-county-shade',
                    opacity: 0,
                    duration: 0
                 },
                 {
                    layer: 'fletcher-town-boundary',
                    opacity: 1,
                    duration: 100
                 },
                 {
                    //layer: 'LAYER 4',
                    //opacity: 0
                 },
                 {
                    //layer: 'LAYER 5',
                    //opacity: 0
                 }
            ]
        },
        {
            id: 'Legend',
            alignment: 'left',
            hidden: false,
            title: 'Legend',
            image: 'images/legend.jpg',
            description: 'There is a noticeable concentration of outdoor recreation attractions in southwestern Henderson County. Three major parks overlap the county to the south and west – Pisgah National Forest, Dupont State Forest, and Green River Gamelands. Additional outdoor recreation attractions are generally concentrated between these parks.This includes seven golf courses and several outdoor nature parks and camps, both private and public. The following maps will examine land use in Hendersonville, Flat Rock, and Fletcher.',
            location: {
                center: [-82.49056, 35.26395],
                zoom:9.5,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'FLATROCK',
                    opacity: 1,
                    duration: 100
                },
                {
                   layer: 'flatrock-apron',
                   opacity: 1,
                   duration: 100
                },
                {
                   layer: 'land-use-industrial-86uh6r',
                   opacity: 1,
                   duration: 100
                },
                {
                   layer: 'RECREATION',
                   opacity: 1,
                   duration: 100
                },
                {
                    layer: 'fletcher-town-boundary',
                    opacity: 1,
                    duration: 100
                }
           ],
           onChapterExit: [
                {
                    layer: 'FLATROCK',
                    opacity: 1
                },
                {
                   layer: 'flatrock-apron',
                   opacity: 1
                },
                {
                   layer: 'land-use-industrial-86uh6r',
                   opacity: 1
                },
                {
                   layer: 'RECREATION',
                   opacity: 1
                },
                {
                    layer: 'fletcher-town-boundary',
                    opacity: 1,
                }
           ]
        },
         {
            id: 'henderson-county-2',
            alignment: 'full',
            hidden: false,
            title: '',
            image: 'images/Map.png',
            description: 'The county seat, Hendersonville, was formally established in 1847, following the formation of Henderson County. In the late 1870s, the Spartanburg and Asheville Railroad was built, bringing visitors to the region from far and wide. Soon new businesses, parlors, saloons, mercantiles, and hotels started to open along main street catering to visitors, and Hendersonville developed a reputation as a regional tourist destination. By the late 1800s, the county seat had become a bustling commercial center, with a wide variety of businesses.',
            location: {
               center: [-82.66177, 35.31789],
               zoom: 9.5,
               pitch: 0.00,
               bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'henderson-county-border',
                     opacity: 1,
                     duration: 0
                 },
                 {
                    layer: 'henderson-county-shade',
                    opacity: 0,
                    duration: 100
                 },
                 {
                    layer: 'fletcher-town-boundary',
                    opacity: 1,
                    duration: 100
                 },
                 {
                    //layer: 'LAYER 4',
                    //opacity: 1,
                    //duration: 0
                 },
                 {
                    //layer: 'LAYER 5',
                    //opacity: 1,
                    //duration: 0
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'henderson-county-border',
                     opacity: 1
                 },
                 {
                    layer: 'henderson-county-shade',
                    opacity: 0,
                    duration: 0
                 },
                 {
                    layer: 'fletcher-town-boundary',
                    opacity: 1,
                    duration: 100
                 },
                 {
                    //layer: 'LAYER 4',
                    //opacity: 0
                 },
                 {
                    //layer: 'LAYER 5',
                    //opacity: 0
                 }
            ]
        }, 
         {
            id: 'henderson-county-3',
            alignment: 'left',
            hidden: true,
            title: '',
            image: '',
            description: '',
            location: {
               center: [-82.66177, 35.31789],
               zoom: 9.5,
               pitch: 0.00,
               bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'henderson-county-border',
                     opacity: 1,
                     duration: 100
                 },
                 {
                    layer: 'all-towns',
                    opacity: 1,
                    duration: 100
                 },
                 {
                    layer: 'fletcher-town-boundary',
                    opacity: 1,
                    duration: 100
                 },
                 {
                    //layer: 'LAYER 4',
                    //opacity: 1,
                    //duration: 0
                 },
                 {
                    //layer: 'LAYER 5',
                    //opacity: 1,
                    //duration: 0
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'henderson-county-border',
                     opacity: 1
                 },
                 {
                    layer: 'all-towns',
                    opacity: 1
                 },
                 {
                    layer: 'fletcher-town-boundary',
                    opacity: 1,
                    duration: 100
                 },
                 {
                    //layer: 'LAYER 4',
                    //opacity: 0
                 },
                 {
                    //layer: 'LAYER 5',
                    //opacity: 0
                 }
            ]
        }, 
        {
           id: 'henderson-county-4',
           alignment: 'left',
           hidden: false,
           title: 'Recreation in Henderson County',
           image: '',
           description: '<iframe width=”560” height=”315” src="https://www.youtube.com/embed/5t-6FSr3YJA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe> </p> There is a noticeable concentration of outdoor recreation attractions in southwestern Henderson County, immediately south of Hendersonville and surrounding Flat Rock. This includes seven golf courses and several outdoor nature parks and camps, both private and public. The following maps will examine landuse in Hendersonville, Flat Rock, and Fletcher.',
           location: {
              center: [-82.66177, 35.31789],
              zoom: 9.5,
              pitch: 0.00,
              bearing: 0.00
           },
           mapAnimation: 'flyTo',
           rotateAnimation: false,
           callback: '',
           onChapterEnter: [
                {
                    layer: 'henderson-county-border',
                    opacity: 1,
                    duration: 100
                },
                {
                   layer: 'all-towns',
                   opacity: 1,
                   duration: 100
                },
                {
                   layer: 'RECREATION',
                   opacity: 1,
                   duration: 100
                },
                {
                    layer: 'fletcher-town-boundary',
                    opacity: 1,
                    duration: 100
                },
                {
                   //layer: 'LAYER 5',
                   //opacity: 1,
                   //duration: 0
                }
           ],
           onChapterExit: [
                {
                    layer: 'henderson-county-border',
                    opacity: 1
                },
                {
                   layer: 'fletcher-town-boundary',
                   opacity: 1
                },
                {
                   layer: '',
                   opacity: 0
                },
                {
                    layer: '',
                    opacity: 1,
                    duration: 100
                },
                {
                   //layer: 'LAYER 5',
                   //opacity: 0
                }
           ]
       },
       {   
         id: 'hendersonville-1',
         alignment: 'right',
         hidden: false,
         title: 'Hendersonville',
         image: 'images/hendersonville outside.jpg',
         description: 'The county seat, Hendersonville, was formally established in 1847 after the delineation of Henderson County from Buncombe County. In the late 1870s, the Spartanburg and Asheville Railroad was built, bringing visitors to the region from far and wide. Soon new businesses, parlors, saloons, mercantiles, and hotels started to open along main street catering to visitors, and Hendersonville developed a reputation as a regional tourist destination. </p> Hendersonville is characterized by a robust tourism-driven commercial economy centered around the central historic district. And stretching north-south along the town. There is also a concentration of commercial properties on the east-west route which connects the downtown region to the highway. A small collection of industrial properties hug the railroad as well; these are largely isolated from the residential portions of the town by the commercial zones. The district is not diverse; most businesses cater to tourist populations.',
         location: {
             center: [-82.45757, 35.31490],
             zoom: 15.675,
             pitch: 60,
             bearing: 0,
             // flyTo additional controls-
             // These options control the flight curve, making it move
             // slowly and zoom out almost completely before starting
             // to pan.
             speed: 2, // make the flying slow
             curve: 1, // change the speed at which it zooms out
         },
         mapAnimation: 'flyTo',
         rotateAnimation: true,
         callback: '',
         onChapterEnter: [
             {
                 layer: 'HENDERSONVILLE',
                 opacity: 1,
                 duration: 0
             },
             {
                layer: 'hendersonville-apron',
                opacity: 1,
                duration: 5000
             },
             {
                layer: 'fletcher-town-boundary',
                    opacity: 1,
                    duration: 100
             },
             {
                layer: 'RECREATION',
                opacity: 1,
                duration: 0
             },
             {
                //layer: 'LAYER 5',
                //opacity: 1,
                //duration: 0
             }
        ],
        onChapterExit: [
             {
                 layer: 'HENDERSONVILLE',
                 opacity: 1
             },
             {
                layer: 'hendersonville-apron',
                opacity: 1,
                duration: 0
             },
             {
                layer: 'fletcher-town-boundary',
                opacity: 1,
                duration: 100
             },
             {
                layer: 'RECREATION',
                opacity: 1
             },
             {
                //layer: 'LAYER 5',
                //opacity: 0
             }
        ]
     },
        {   
            id: 'hendersonville-2',
            alignment: 'right',
            hidden: true,
            title: 'Hendersonville',
            image: 'images/Hendersonville.png',
            description: '<p> The county seat, Hendersonville, was formally established in 1847 after the delineation of Henderson County from Buncombe County. In the late 1870s, the Spartanburg and Asheville Railroad was built, bringing visitors to the region from far and wide. Soon new businesses, parlors, saloons, mercantiles, and hotels started to open along main street catering to visitors, and Hendersonville developed a reputation as a regional tourist destination. </p> Hendersonville is characterized by a robust tourism-driven commercial economy centered around the central historic district. And stretching north-south along the town. There is also a concentration of commercial properties on the east-west route which connects the downtown region to the highway. A small collection of industrial properties hug the railroad as well; these are largely isolated from the residential portions of the town by the commercial zones. The district is not diverse; most businesses cater to tourist populations.',
            location: {
                center: [-82.42520, 35.32402],
                zoom: 12.675,
                pitch: 0.00,
                bearing: 0.00,
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
                    layer: 'HENDERSONVILLE',
                    opacity: 1,
                    duration: 100
                },
                {
                    layer: 'fletcher-town-boundary',
                    opacity: 1,
                    duration: 100
                },
                {
                   layer: 'HCO-res-prop-val',
                   opacity: 1,
                   duration: 0
                },
                {
                   layer: 'RECREATION',
                   opacity: 1,
                   duration: 100
                },
                {
                   //layer: 'LAYER 5',
                   //opacity: 1,
                   //duration: 0
                }
           ],
           onChapterExit: [
                {
                    layer: 'HENDERSONVILLE',
                    opacity: 1
                },
                {
                   layer: 'hendersonville-apron',
                   opacity: 1,
                   duration: 100
                },
                {
                    layer: 'fletcher-town-boundary',
                    opacity: 1,
                    duration: 100
                },
                {
                   layer: 'RECREATION',
                   opacity: 1
                },
                {
                   //layer: 'LAYER 5',
                   //opacity: 0
                }
           ]
        },
        {
            id: 'flat-rock',
            alignment: 'left',
            hidden: false,
            title: 'Flat Rock',
            image: 'images/FlatRock.png',
            description: 'Flat Rock was settled in 1827 and quickly picked up the nickname “Little Charleston of the Mountains” due to the influx of wealthy Charlestons and European summer residents trying to escape the hot, muggy, South Carolina summers. The summerers of Flat Rock brought their many slaves with them, many of which fled North for new opportunities after the emancipation. This town has continued its reputation as an expensive vacation destination for southerners to this day.</p>Flat Rock is removed from both the highway and the railroad, features no industrial properties and very few commercial properties. The commercial properties do not constitute a formal town center, although they are concentrated on the east side of the town.',
            location: {
                center: [-82.49056, 35.26395],
                zoom: 12.675,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'FLATROCK',
                    opacity: 1,
                    duration: 100
                },
                {
                   layer: 'flatrock-apron',
                   opacity: 1,
                   duration: 100
                },
                {
                   layer: 'land-use-industrial-86uh6r',
                   opacity: 1,
                   duration: 100
                },
                {
                   layer: 'RECREATION',
                   opacity: 1,
                   duration: 100
                },
                {
                    layer: 'fletcher-town-boundary',
                    opacity: 1,
                    duration: 100
                }
           ],
           onChapterExit: [
                {
                    layer: 'FLATROCK',
                    opacity: 1
                },
                {
                   layer: 'flatrock-apron',
                   opacity: 1
                },
                {
                   layer: 'land-use-industrial-86uh6r',
                   opacity: 1
                },
                {
                   layer: 'RECREATION',
                   opacity: 1
                },
                {
                    layer: 'fletcher-town-boundary',
                    opacity: 1,
                }
           ]
        },
        {
            id: 'fletcher',
            alignment: 'left',
            hidden: false,
            title: 'Fletcher',
            image: 'images/sign.jpg',
            description: 'Fletcher was first settled in 1795, and became an industrial center with the establishment of several limestone mines in the early 1800s. The town maintained this status through the 19th century, owing to its convenient location between Asheville and Hendersonville. An airport was built in the early 1900s, which facilitated the growth of the manufacturing industries here. To this day, Fletcher continues to mine limestone, and is home to several manufacturing plants and office parks. </p> Fletcher has a large hard industry sector, including industries typically associated with Appalachia. Commercial and Industrial land uses are clustered in the center of Fletcher, and on the western side of town.',
            location: {
                center: [-82.50180, 35.43061],
                zoom: 12.675,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'FLATROCK',
                    opacity: 1,
                    duration: 100
                },
                {
                   layer: 'flatrock-apron',
                   opacity: 1,
                   duration: 100
                },
                {
                   layer: 'land-use-industrial-86uh6r',
                   opacity: 1,
                   duration: 100
                },
                {
                   layer: 'RECREATION',
                   opacity: 1,
                   duration: 100
                },
                {
                    layer: 'fletcher-town-boundary',
                    opacity: 1,
                    duration: 100
                }
           ],
           onChapterExit: [
                {
                    layer: 'FLATROCK',
                    opacity: 1,
                    duration: 100
                },
                {
                   layer: 'flatrock-apron',
                   opacity: 1,
                   duration: 100
                },
                {
                   layer: 'land-use-industrial-86uh6r',
                   opacity: 1,
                   duration: 100
                },
                {
                   layer: 'RECREATION',
                   opacity: 1,
                   duration: 100
                },
                {
                    layer: 'fletcher-town-boundary',
                    opacity: 1,
                    duration: 100
                }
           ]
        },
        {
            id: 'conclusion',
            alignment: 'left',
            hidden: false,
            title: 'Conclusion',
            image: '',
            description: 'The three towns we examined in Hendersonville each have their own stories, which are inextricably tied to their foundings, various industries, and rich histories. Each of these three towns has its own very distinct history and corresponding industry. The region was initially settled for its ideal weather conditions, perfect for apple and orchard farming, and for it’s natural resources and proximity to other Appalachian cities, so it is unsurprising that there continues to be extensive outdoor recreation, agriculture, and resource-extractive industries. The agriculture industries have brought a fair amount of diversity to the town of Hendersonville, from a bustling main street to fields of crops. Fletcher was settled for the limestone quarries that continue to be mined to this day. The town has shaped its economy around its industrial past and has brought more diversity due to the type of work. Correspondences can be found between the economy in Flat Rock, the urban fabric, and the economic stature of the community. This industrial economy has had an impact on local housing where many people live in manufactured or tract housing. Flat Rock was settled as a vacation town for rich, white residents to avoid the terrible southern summer weather and has continued this reputation to this day. The Little Charleston of the Mountains is still very well known for their large seasonal tourism industry. The attractive tourism industry has brought in residents who are more wealthy, with more expensive homes, who are predominantly of retirement age, further fueling the amenity based local economy. In conclusion, the history of these three towns has evidently crafted their economies and continues to do so to this day.',
            location: {
                center: [-82.66177, 35.31789],
                zoom: 9.5,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'FLATROCK',
                    opacity: 1,
                    duration: 100
                },
                {
                   layer: 'flatrock-apron',
                   opacity: 1,
                   duration: 100
                },
                {
                   layer: 'land-use-industrial-86uh6r',
                   opacity: 1,
                   duration: 100
                },
                {
                   layer: 'RECREATION',
                   opacity: 1,
                   duration: 100
                },
                {
                    layer: 'fletcher-town-boundary',
                    opacity: 1,
                    duration: 100
                }
           ],
           onChapterExit: [
                {
                    layer: 'FLATROCK',
                    opacity: 1
                },
                {
                   layer: 'flatrock-apron',
                   opacity: 1
                },
                {
                   layer: 'land-use-industrial-86uh6r',
                   opacity: 1
                },
                {
                   layer: 'RECREATION',
                   opacity: 1
                },
                {
                    layer: 'fletcher-town-boundary',
                    opacity: 1,
                }
           ]
        }
    ]
};

