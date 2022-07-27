var config = {
    style: 'mapbox://styles/tmattson/cl32ggbvx000014t9vbp1cxat',
    accessToken: 'pk.eyJ1IjoidG1hdHRzb24iLCJhIjoiY2wwYmM0bWgxMGd3NzNicG9oZ2JzZmlhYyJ9.dYslypfFMYoKb-g2sYlWgg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'Race, Economy, and Housing Conditions in Henderson County, North Carolina',
    subtitle: 'Mapping racial demographics, local economies, and housing characteristics of three towns in Henderson County, North Carolina',
    byline: 'Michael Mattson',
    footer: 'Sources: <p><p style=font-weight:italic;font-size:8px>Appalachian Regional Commission (ARC), 1965. Mapping Appalachia. (n.d.). Retrieved March 24, 2022, from https://mapappalachia.geography.vt.edu/about/arc/ <p><p style=font-weight:italic;font-size:8px>American Community Survey and Puerto Rico Community Survey ... (n.d.). Retrieved March 24, 2022, from https://www2.census.gov/programs-surveys/acs/tech_docs/subject_definitions/2020_ACSSubjectDefinitions.pdf <p><p style=font-weight:italic;font-size:8px>Explore census data. (n.d.). Retrieved March 24, 2022, from https://data.census.gov/cedsci/ <p><p style=font-weight:italic;font-size:8px>Flat Rock NC things to do. Cottages of Flat Rock. (n.d.). Retrieved March 24, 2022, from https://thecottagesofflatrock.com/flat-rock-nc-things-to-do/ <p><p style=font-weight:italic;font-size:8px>Henderson County GIS Services (n.d.). Retrieved March 24, 2022, from https://www.hendersoncountync.gov/gis <p><p style=font-weight:italic;font-size:8px> A BRIEF HISTORY OF HENDERSON COUNTY. Henderson County NC.gov. (n.d.). Retrieved from https://www.hendersoncountync.gov/sites/default/files/fileattachments/planning/page/38521/05_brief_history.pdf <p><p style=font-weight:italic;font-size:8px>Hendersonville’s past. Hendersonville Historic Preservation Commission. (2009, April 7). Retrieved April 2, 2022, from http://www.hendersonvillehpc.org/hendersonville <p><p style=font-weight:italic;font-size:8px>Historic Hendersonville Railroad Depot - Visitors Information Center: Hendersonville, NC. Visitors Information Center | Hendersonville, NC. (2018, March 25). Retrieved March 24, 2022, from https://visithendersonvillenc.org/attractionshttps://www.journal-topics.com/articles/historic-hendersonville/ <p><p style=font-weight:italic;font-size:8px>History of Fletcher. Town of Fletcher, North Carolina. (2021, October 13). Retrieved April 5, 2022, from https://www.fletchernc.org/about-us/history-of-fletcher/ <p><p style=font-weight:italic;font-size:8px>Jump Off Rock, Hendersonville. Jump Off Rock, NC. (n.d.). Retrieved March 24, 2022, from https://www.romanticasheville.com/jump-off-rock <p><p style=font-weight:italic;font-size:8px>Jones Giles, J., Jones, J. P., Cheadle, R. (n.d.). Black History Post-Civil War to 1900. Henderson Heritage. Retrieved April 2, 2022, from https://hendersonheritage.com/black-history-post-civil-war-to-1900/ <p><p style=font-weight:italic;font-size:8px>NC onemap. NC OneMap. (n.d.). Retrieved March 24, 2022, from https://assets.nconemap.gov/pages/hub/ncom-contours-dd.htm <p><p style=font-weight:italic;font-size:8px>NC onemap. NC OneMap. (n.d.). Retrieved March 24, 2022, from https://www.nconemap.gov/datasets?group_ids=b9b315766efe43a5bedf542093188c51 <p><p style=font-weight:italic;font-size:8px>North Carolina School Report Cards. (n.d.). Retrieved March 24, 2022, from https://ncreports.ondemand.sas.com/src/district?district=450LEA&year=2019&lng=en <p><p style=font-weight:italic;font-size:8px>Post-civil-war Flat Rock ; North Carolina. - jstor.org. (n.d.). Retrieved March 24, 2022, from https://www.jstor.org/stable/41446547?item_view=read_online <p><p style=font-weight:italic;font-size:8px> Search for public school districts - district detail for Henderson County Schools. National Center for Education Statistics (NCES) Home Page, a part of the U.S. Department of Education. (n.d.). Retrieved March 24, 2022, from https://nces.ed.gov/ccd/districtsearch/district_detail.asp?Search=2&ID2=3702100 <p><p style=font-weight:italic;font-size:8px>Directory - Henderson County Chamber of Commerce. Hendersonville, NC - Henderson County Chamber. (n.d.). Retrieved April 28, 2022, from https://www.hendersoncountychamber.org/contact-us/14-structure/directory.html <p><br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'introduction',
            alignment: 'left',
            hidden: false,
            title: 'Introduction',
            image: 'images/FlatRock.png',
            description: 'Henderson County, North Carolina contains a diverse array of industries, including the resource-extraction and manufacturing industries commonly associated with rural Appalachia, but also robust tourism and vacation industries. These industries have developed separately over time, and occupy separate portions of the county. <p> The goal of this project has been to use QGIS and MapBox to analyze three towns in Henderson County--Hendersonville, Flat Rock and Fletcher--to explore how these towns have developed their own industries and identities over time, and how the historical narratives which shaped their development in past centuries persist into the present day. I have specifically focused on how the centuries-old tourism industry in this region has fostered and preserved a culture of exclusivity in the southern half of the county which still informs settlement patterns and spatial-demographic trends today, as evidenced through selected housing characteristics.</p><p style=font-weight:italic;font-size:8px>Image source: Beverly-Hanks Realtors https://www.beverly-hanks.com/blog/little-charleston-of-the-mountains/',
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
                     layer: 'henderson-county-NEW-border',
                     opacity: 1,
                     duration: 0
                 },
                 {
                    layer: 'north-carolina-fill',
                    opacity: 1,
                    duration: 1000
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'henderson-county-NEW-border',
                     opacity: 0,
                 },
                 {
                    layer: 'north-carolina-fill',
                    opacity: 0
                 }         
            ]
        },
        {
            id: 'henderson-county-1',
            alignment: 'left',
            hidden: false,
            title: 'Henderson County - History',
            image: '',
            description: 'Henderson County, North Carolina is a semi-rural county located in the Appalachian Region of western North Carolina. <p> The first American settlers entered the region in the 1780s, and Henderson County was officialy delineated from Buncombe County in 1847.',
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
                  layer: 'henderson-county-NEW-border',
                  opacity: 1,
                  duration: 0
               },
               {
                  layer: 'north-carolina-fill',
                  opacity: 1,
                  duration: 1000
               }
            ],
          onChapterExit: [
               {
                 layer: 'henderson-county-NEW-border',
                 opacity: 0,
               },
               {
                  layer: 'north-carolina-fill',
                  opacity: 0
               }         
            ]
        },
        {
         id: 'henderson-county-ADD-IN1',
         alignment: 'left',
         hidden: false,
         title: 'Henderson County - Regional Networks',
         image: '',
         description: 'Henderson County is situated on the North-Carolina/South Carolina border. Asheville, NC is 30 miles north of the County Seat; Greenville and Spartanburg, are approximately 40 miles south and 50 miles southeast of the County Seat, respectively.<p>The growth of regional trade relationships between these three cities at the beginning of the 19th century inspired traders to develop trade roads through the lands that would one day become Henderson County.<p> The Buncombe Turnpike, completed in 1827, established a connection between Greenville and Asheville, and quickly became the most common interstate route in the region. The Spartanburg and Asheville Railroad, completed in 1872, further spurred development in the fledgeling Henderson County.<p> <img src=images/KeyReg.png>',
         location: {
             center: [-82.66177, 35.31789],
             zoom: 8.5,
             pitch: 0.00,
             bearing: 0.00
         },
         mapAnimation: 'flyTo',
         rotateAnimation: false,
         callback: '',
         onChapterEnter: [
            {
               layer: 'henderson-county-NEW-border',
               opacity: 1,
               duration: 0
            },
            {
               layer: 'roadxxx',
               opacity: 1,
               duration: 1000
            },
            {
               layer: 'train',
               opacity: 1,
               duration: 1000
            },
            {
               layer: 'REGION-CITIES',
               opacity: 1,
               duration: 1000
            }
       ],
       onChapterExit: [
         {
            layer: 'henderson-county-NEW-border',
            opacity: 0,
        },
            {
               layer: 'roadxxx',
               opacity: 0
            },
            {
               layer: 'train',
               opacity: 0
            },
            {
               layer: 'REGION-CITIES',
               opacity: 0
            }          
         ]
     },
         {
            id: 'henderson-county-3',
            alignment: 'left',
            hidden: false,
            title: 'Muncipalities of Interest',
            image: '',
            description: '<img src=images/KeyMOI.png>',
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
                  layer: 'henderson-county-NEW-border',
                  opacity: 1,
                  duration: 0
              },
                 {
                    layer: 'all-towns',
                    opacity: 1,
                    duration: 0
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'henderson-county-NEW-border',
                     opacity: 0
                 },
                 {
                  layer: 'all-towns',
                  opacity: 0,
              },
            ]
        }, 
         {
            id: 'henderson-county-2',
            alignment: 'full',
            hidden: false,
            title: '',
            image: 'images/Map.png',
            description: '<p style=color:maroon;font-size:18px>Hendersonville<p/>The county seat, Hendersonville, was formally established in 1847, following the formation of Henderson County. In the late 1870s, the Spartanburg and Asheville Railroad was built, bringing visitors to the region from far and wide. Soon new businesses, parlors, saloons, mercantiles, and hotels started to open along main street catering to visitors, and Hendersonville developed a reputation as a regional tourist destination. by the late 1800s, the county seat had become a bustling commercial center, with a wide variety of businesses.</p><p style=font-weight:italic;font-size:8px>Image source: Library of Congress https://www.loc.gov/item/75694900/',
            location: {
               center: [-82.66177, 35.31789],
               zoom: 9.5,
               pitch: 0.00,
               bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: ''
        }, 
        {
         id: 'henderson-county-3_2',
         alignment: 'left',
         hidden: false,
         title: 'Muncipalities of Interest (Continued).',
         image: '',
         description: '<p style=color:orange;font-size:18px>Fletcher</p>Fletcher, a small town on the northern edge of Henderson County, was first settled in 1795, and became an industrial center with the establishment of several limestone mines in the early 1800s. The town maintained this status through the 19th century, owing to its convenient location between Asheville and Hendersonville. An airport was built in the early 1900s, which facilitated the growth of the manufacturing industries here. To this day, Fletcher continues to mine limestone, and is home to several manufacturing plants and office parks. <p><p style=color:darkblue;font-size:18px>Flat Rock</p> Flat Rock, south of Hendersonville, was settled in 1827 and quickly picked up the nickname “Little Charleston of the Mountains” due to the influx of wealthy Charlestons and European summer residents trying to escape the hot, muggy, South Carolina summers. Planters with summer estates in Flat Rock brought their many slaves with them, many of whom left the region looking for new opportunities in the North and West following their emancipation. This town has continued its reputation as an expensive vacation destination for southerners to this day.',
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
               layer: 'henderson-county-NEW-border',
               opacity: 1,
               duration: 0
           },
              {
                 layer: 'all-towns',
                 opacity: 1,
                 duration: 0
              }
         ],
         onChapterExit: [
            {
               layer: 'henderson-county-NEW-border',
               opacity: 0,
           },
              {
                 layer: 'all-towns',
                 opacity: 0
              }
         ]
     }, 
        {
           id: 'henderson-county-4',
           alignment: 'left',
           hidden: false,
           title: 'Recreation in Henderson County',
           image: '',
           description: 'There is a noticeable concentration of outdoor recreation attractions in southwestern Henderson County, immediately south of Hendersonville and surrounding Flat Rock. This includes seven golf courses and several outdoor nature parks and camps, both private and public. The following maps will examine propery values in Hendersonville, Flat Rock and Fletcher to idenfify correlations between general proximity to outdoor attractions and various residential property characteristics.<p> <img src=images/KeyRec.png>',
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
               layer: 'henderson-county-NEW-border',
               opacity: 1,
               duration: 0
           },
                {
                   layer: 'all-towns',
                   opacity: 0.0625,
                   duration: 0
                },
                {
                   layer: 'RECREATION',
                   opacity: 1,
                   duration: 0
                }
           ],
           onChapterExit: [
            {
               layer: 'henderson-county-NEW-border',
               opacity: 0,
           },
                {
                   layer: 'all-towns',
                   opacity: 0
                },
                {
                   layer: 'RECREATION',
                   opacity: 0
                }
           ]
       },
       {   
         id: 'hendersonville-1',
         alignment: 'right',
         hidden: false,
         title: 'Hendersonville',
         image: 'images/Hendersonville.png',
         description: 'Downtown Hendersonville has long held a reputation as a touristy area. With roots as a highway town, it has long catered to travelers and visitors. Today, the downtown district has many restaurants and gift shops catering to vacationers.<p><p style=font-weight:italic;font-size:8px>Image source: VisitNC https://www.visitnc.com/',
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
                layer: 'RECREATION',
                opacity: 1,
                duration: 0
             }
        ],
        onChapterExit: [
             {
                 layer: 'HENDERSONVILLE',
                 opacity: 0
             },
             {
                layer: 'RECREATION',
                opacity: 0
             }
        ]
     },
        {   
            id: 'hendersonville-2',
            alignment: 'right',
            hidden: false,
            title: 'Hendersonville - Property Values',
            image: '',
            description: 'Properties in Hendersonville range from less than $100000 to $550000. This wide variety is distributed evenly across the city, with the exception of a few expensive enclaves on the northwest side of town and a single cluster of low-value properties immediately east of the train tracks. <p> <img src=images/KeyPropVal2.png>',
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
                    duration: 0
                },
                {
                   layer: 'PropvalHendersonville',
                   opacity: 1,
                   duration: 0
                }
           ],
           onChapterExit: [
                {
                    layer: 'HENDERSONVILLE',
                    opacity: 0
                },
                {
                   layer: 'PropvalHendersonville',
                   opacity: 0
                }
           ]
        },
        {   
         id: 'hendersonville-3',
         alignment: 'right',
         hidden: false,
         title: 'Hendersonville - Selected Housing Characteristics',
         image: '',
         description: ' Some manufactured housing neighborhoods can be seen dispersed throughout the town, with concentrations in the south part of town and west of the highway. Generally, though, the vast majority of the sf-residential parcels in Hendersonville hold site-built homes. Few of these houses are larger than ~3,000 square feet, which is the 90th percentile threshold for heated floor area among single-family residences in Henderson County. <p> <img src=images/KeySHC2.png>',
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
                 duration: 0
             },
             {
                layer: '3000Hendersonville',
                opacity: 1,
                duration: 0
             },
             {
                layer: 'ManufHendersonville',
                opacity: 1,
                duration: 0
             }
        ],
        onChapterExit: [
             {
                 layer: 'HENDERSONVILLE',
                 opacity: 0
             },
             {
                layer: '3000Hendersonville',
                opacity: 0
             },
             {
                layer: 'ManufHendersonville',
                opacity: 0
             }
        ]
     },
     {   
      id: 'flatrock-1',
      alignment: 'left',
      hidden: false,
      title: 'Flat Rock',
      image: 'images/FlatRock.png',
      description: 'Flat Rock has a very loose structure; winding roads snake through the hilly landscape and lakes dot the countryside. The houses are spread out here, and stand back in the forest at the ends of long, stately drives',
      location: {
         center: [-82.44163,35.27137],
         zoom: 15.675,
         pitch: 60.00,
         bearing: 0.00,
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
              layer: 'FLATROCK',
              opacity: 1,
              duration: 0
          },
          {
             layer: 'RECREATION',
             opacity: 1,
             duration: 0
          }
     ],
     onChapterExit: [
          {
              layer: 'FLATROCK',
              opacity: 0
          },
          {
             layer: 'RECREATION',
             opacity: 0
          }
     ]
  },
     {   
         id: 'flatrock-2',
         alignment: 'left',
         hidden: false,
         title: 'Flat Rock - Property Values',
         image: '',
         description: 'The property values in Flat Rock are the highest of the three towns with a majority of properties valued at more than $550000. The higher value properties are located near the various parks and outdoor attractions, with the highest-dollar properties in the south, surrounding the Kenmure Golf Course south of the Carl Sandburg NHS.<p><img src=images/KeyPropVal2.png> ',
         location: {
            center: [-82.49056, 35.26395],
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
                 layer: 'FLATROCK',
                 opacity: 1,
                 duration: 0
             },
             {
                layer: 'PropvalFlatrock',
                opacity: 1,
                duration: 0
             }
        ],
        onChapterExit: [
             {
                 layer: 'FLATROCK',
                 opacity: 0
             },
             {
                layer: 'PropvalFlatrock',
                opacity: 0
             }
        ]
     },
     {   
      id: 'flatrock-3',
      alignment: 'left',
      hidden: false,
      title: 'Flat Rock - Selected Housing Characteristics',
      image: '',
      description: ' <p> The map of selected housing characteristics is nearly as homogneous as the map of property value in Flat Rock. Flat Rock Houses, some of the most expensive in the county, are equally large-Most of the houses in Flat Rock fall into the 90th percentile for home size in Henderson County, with most being over 3,000 square feet.<p> <p> <img src=images/KeySHC2.png>',
      location: {
         center: [-82.49056, 35.26395],
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
              layer: 'FLATROCK',
              opacity: 1,
              duration: 0
          },
          {
             layer: '3000Flatrock',
             opacity: 1,
             duration: 0
          },
          {
             layer: 'ManufFlatrock',
             opacity: 1,
             duration: 0
          }
     ],
     onChapterExit: [
          {
              layer: 'FLATROCK',
              opacity: 0
          },
          {
             layer: '3000Flatrock',
             opacity: 0
          },
          {
             layer: 'ManufFlatrock',
             opacity: 0
          }
     ]
  },
  {   
   id: 'fletcher-1',
   alignment: 'left',
   hidden: false,
   title: 'Fletcher',
   image: 'images/Fletcher.png',
   description: 'Fletcher is the industrial center of Henderson County, and it is significantly less affluent than Flat Rock. There is virtually no tourism- or retirment-economy-based activity in Fletcher. Whereas Hendersonville had an abundance of block-parks and larger recreational facilities, and whereas Flat Rock is wooded, low density, in close proximity to top-notch national park facilities including the Carl Sandberg Home National Historic Site, and appears to otherwise contain several walking trails around the various lakes, Fletcher appears only to have one large recreational facility--Bill Moore Community Park-- which is removed from most of the residential developments. The town contains a golf course as well, but this amenity is also distended from the community, isolated on the other side of the highway.',
   location: {
      center: [-82.50180, 35.43061],
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
           layer: 'FLETCHER',
           opacity: 1,
           duration: 0
       },
       {
          layer: 'RECREATION',
          opacity: 1,
          duration: 0
       }
  ],
  onChapterExit: [
       {
           layer: 'FLETCHER',
           opacity: 0
       },
       {
          layer: 'RECREATION',
          opacity: 0
       }
  ]
},
{   
    id: 'fletcher-1.5',
    alignment: 'left',
    hidden: false,
    title: 'Fletcher - Industry',
    image: '',
    description: 'As established above, Fletcher is the industrial center of the county. The town is home to a quarry, an airport, a substantial office park, as well as a number of manufacturing and materials processing plants. <p> <img src=images/KeyCOM.png> <p> The image below features the Vulcan Material Company quarry in the foreground and the Fletcher Office Park in the background. The industrial and commercial centers in Fletcher are situated among residential areas.<p> <img src=images/fletchermine.jpg> <p> (Image source: Google Earth)',
    location: {
       center: [-82.52180, 35.43061],
              zoom: 12.675,
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
            layer: 'FLETCHER',
            opacity: 1,
            duration: 0
        },
        {
           layer: 'INDCOM',
           opacity: 1,
           duration: 0
        }
   ],
   onChapterExit: [
        {
            layer: 'FLETCHER',
            opacity: 0
        },
        {
           layer: 'INDCOM',
           opacity: 0
        }
   ]
},
  {   
      id: 'fletcher-2',
      alignment: 'left',
      hidden: false,
      title: 'Fletcher - Property Values',
      image: '',
      description: 'Fletcher contains low and moderate value properties, and relatively few high-value properties. The moderate and low-value properties in fletcher are extemely isolated from one another; the moderate-value properties are contained within several large recently-developed cookie-cutter neighborhoods, while the properties outside of these neighborhoods are generally low-value. The average property value in Fletcher is half the Average property value of Flat Rock Properties in Fletcher are, on average, only half as expensive as Flat Rock’s properties. <p> <img src=images/KeyPropVal2.png>',
      location: {
         center: [-82.52180, 35.43061],
                zoom: 12.675,
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
              layer: 'FLETCHER',
              opacity: 1,
              duration: 0
          },
          {
             layer: 'PropvalFletcher',
             opacity: 1,
             duration: 0
          }
     ],
     onChapterExit: [
          {
              layer: 'FLETCHER',
              opacity: 0
          },
          {
             layer: 'PropvalFletcher',
             opacity: 0
          }
     ]
  },
  {   
   id: 'fletcher-3',
   alignment: 'left',
   hidden: false,
   title: 'Fletcher - Selected Housing Characteristics',
   image: '',
   description: 'Fletcher features a large quantity of manufactured housing--independently sited on privately-owned properties, and concentrated in mobile home parks. Few of the properties in Fletcher are among the largest in the town, although some of the larger newly-developed tract homes fall into the 90th percentile for Heated Floor Area.<p> <img src=images/KeySHC2.png>',
   location: {
      center: [-82.52180, 35.43061],
                zoom: 12.675,
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
           layer: 'FLETCHER',
           opacity: 1,
           duration: 0
       },
       {
          layer: '3000Fletcher',
          opacity: 1,
          duration: 0
       },
       {
          layer: 'ManufFletcher',
          opacity: 1,
          duration: 0
       }
  ],
  onChapterExit: [
       {
           layer: 'FLETCHER',
           opacity: 0
       },
       {
          layer: '3000Fletcher',
          opacity: 0
       },
       {
          layer: 'ManufFletcher',
          opacity: 0
       }
    ]
  },
  {
   id: 'conclusion',
   alignment: 'left',
   hidden: false,
   title: 'Conclusion',
   image: '',
   description: 'Having taken a look at these three towns, we can see a correlation between local industry and living conditions. Where the economy is geared toward recreation and tourism, properties are more expensive and houses are larger. There are fewer mobile homes in these regions as well. In towns which are more aligned with the hard industries we conventionally associate with Appalachia, residences--even in new developments--are smaller and more affordable, and generally there is a larger conentration of manufactured housing on private lots and in mobile home parks, whose residents are increasingly becoming vulnerable to eviction and displacement as mobile home parks across the country are sold out from under their residents. The next step is to begin to examine more critically whether residents of Flat Rock and perhaps Hendersonville enjoy more resources and opportunities than do County and Fletcher resident. Are the schools near Flat Rock better-funded? Higher performing? These are only some of the questions that we might invesigate in an effort to determine how pervasive the ineqalities between areas with recreation-based economies and the municipalities with hard-industry based local economies truly are.',
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
           layer: 'all-towns',
           opacity: 1,
           duration: 0
        }
   ],
   onChapterExit: [
        {
            layer: 'henderson-county-border',
            opacity: 0
        },
        {
           layer: 'all-towns',
           opacity: 0
        },
     ]
  },
 ]
};