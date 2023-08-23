var config = {
    style: 'mapbox://styles/zixi-li/cljazabcf00hn01qz4oip8tm5',
    accessToken: 'pk.eyJ1Ijoieml4aS1saSIsImEiOiJjbGpjNXFnY24xcXUyM2RxZzRoZjkxYnRqIn0.VaDnnt4usVi15DvrcSJL8Q',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Heat in the City',
    subtitle: 'Mapping in the Heat Island Effect in Richmond, VA',
    byline: 'By Zixi Li',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'intro',
            alignment: 'left',
            hidden: false,
            title: 'Introduction of Richmond, VA',
            image: 'images/Richmond.jpg',
            description: 'Richmond is the capital city of Virginia in the United States. It is located in the central part of the state, situated along the James River. With a rich history, vibrant culture, and diverse community, Richmond has become a dynamic urban center in the region.',
            location: {
                center: [-77.43368, 37.53735],
                zoom: 6.70,
                pitch: 43.50,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'boundary',
                    opacity: 1,
                    duration: 5000
                }
            ],
            // onChapterExit: [
            //     {
            //         layer: 'boundary',
            //         opacity: 0
            //     }
            // ]
        },
        {
            id: 'heat in richmond',
            alignment: 'right',
            hidden: false,
            title: 'Heat in Richmond',
            image: 'images/temperature.png',
            description: 'The rapid urbanization and increasing urban population in Richmond have led to more buildings, squares, and roads, while green spaces and water bodies have diminished. And previously undeveloped land, agricultural areas, are now turned into urbanized zones, including housing developments, and industrial areas. </p> This weakening of the ability to alleviate the heat island effect is particularly noticeable in communities with limited green spaces and a prevalence of concrete surfaces.',
            location: {
                center: [-77.43496, 37.53698],
                zoom: 10.18,
                pitch: 30,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'boundary',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'boundary',
                    opacity: 0
                }
            ]
        },
        {
            id: 'urban heat island effect intro',
            alignment: 'left',
            hidden: false,
            title: 'Urban Heat Island Effect',
            image: 'images/diagram.png',
            description: 'The urban heat island effect is an urban microclimate phenomenon caused by human activities, leading to changes in local temperature, humidity, and air convection. It is characterized by higher temperatures in urban areas compared to surrounding suburbs. So understanding the relationship between land use patterns and the urban heat island effect is crucial for urban planning and sustainable development efforts.',
            location: {
                center: [-77.43556, 37.53688],
                zoom: 18,
                pitch: 85,
                bearing: 0.00
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
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'urban heat island effect in Richmond',
            alignment: 'left',
            hidden: false,
            title: 'Urban Heat Island Effect in Richmond',
            image: 'images/heatDays.jpeg',
            description: 'This graph from the Climate Explorer shows observed and projected annual number of days above 95°F in Richmond.',
            location: {
                center: [-77.43556, 37.53688],
                zoom: 18,
                pitch: 85,
                bearing: 0.00
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
                    layer: 'boundary',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: [

            ]
        },
        {
            id: 'heating effect in Richmond',
            alignment: 'full',
            hidden: false,
            title: 'Urban Heat Island Effect in Richmond',
            image: 'images/image.png',
            description: 'Richmond experiences elevated temperatures during the day, which is a characteristic of the urban heat island effect. The phenomenon occurs due to various factors, including the abundance of impervious surfaces such as concrete and asphalt, which absorb and retain heat, and the limited availability of green spaces that provide natural cooling and shade.</p>Richmond also experiences relatively warm nights, which can also be attributed to the urban heat island effect. The heat absorbed by the city infrastructure during the day is slowly released during the night, resulting in elevated nighttime temperatures compared to nearby rural areas. This phenomenon reduces the cooling potential and can contribute to discomfort for residents, especially during heatwaves.',
            location: {
                center: [-77.43496, 37.53698],
                zoom: 10.18,
                pitch: 30,
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
                    layer: 'boundary',
                    opacity: 1,
                    duration: 500
                }
                
            ],
            
            onChapterExit: [
                
                {
                    layer: 'boundary',
                    opacity: 0
                },
            ]
        },
        {
            id: 'industries',
            alignment: 'right',
            hidden: false,
            title: 'Industries and Urban Heat Island Effect in Richmond',
            // image: 'images/industries.png',
            description: 'The development of industries in Richmond can have a significant impact on the urban heat island effect. Industrial activities often generate a significant amount of heat as a byproduct.  Processes such as manufacturing, energy production, and transportation associated with industries can release substantial heat into the surrounding environment.  This excess heat contributes to higher temperatures in urban areas, exacerbating the urban heat island effect. </p>Besides, industries often involve the construction of large buildings and structures made of materials that can absorb and retain heat, such as concrete and asphalt.  These materials have high thermal mass and can absorb solar radiation during the day, releasing it slowly at night.  As a result, urban areas with industrial developments tend to retain heat more effectively, leading to increased temperatures.</p><img src = "images/industries.jpeg"  style = "width: 50%">',
            location: {
                center: [-77.43496, 37.53698],
                zoom: 11.00,
                pitch: 30,
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
                    layer: 'pm',
                    opacity: 1,
                    duration: 500
                    
                },
                {
                    layer: 'industrial',
                    opacity: 1,
                    duration: 500
                },
                // {
                //     layer: 'boundary',
                //     opacity: 1,
                //     duration: 5000
                // }
                
            ],
            onChapterExit: [
                // {
                //     layer: 'industrial',
                //     opacity: 0
                // },
                // {
                //     layer: 'boundary',
                //     opacity: 0
                // },
                {
                    layer: 'pm',
                    opacity: 0
                }
            ]
            
        },
        {
            id: 'industries zoom',
            alignment: 'left',
            hidden: false,
            title: 'Industries and Urban Heat Island Effect in Richmond',
            // image: 'images/industries.png',
            description: 'This graph shows the temperature in the afternoon in Richmond. In this zoom-in area where the main motorway and railway intersect, it is evident that there are many industrial facilities. These industries contribute significantly to the urban heat island effect in this specific location. The concentration of industrial activities releases heat into the surrounding environment, contributing to elevated temperatures in the area. The constant movement of vehicles on the motorway and the railway increases the heat generation through exhaust emissions.  This added heat further contributes to the overall temperature rise in the vicinity.</p><img src = "images/industries.jpeg" style = "width: 50%">',
            location: {
                center: [-77.47225, 37.56996],
                zoom: 13.20,
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
                    layer: 'industrial',
                    opacity: 1,
                    duration: 500
                    
                },
                {
                    layer: 'af',
                    opacity: 1,
                    duration: 500
                },
                // {
                //     layer: 'boundary',
                //     opacity: 1,
                //     duration: 5000
                // }
                
            ],
            onChapterExit: [
                // {
                //     layer: 'industrial',
                //     opacity: 0
                // },
                // {
                //     layer: 'boundary',
                //     opacity: 0
                // },
                {
                    layer: 'af',
                    opacity: 0
                }
            ]
            
        },
        {
            id: 'industries zoom2',
            alignment: 'left',
            hidden: false,
            title: 'Industries and Urban Heat Island Effect in Richmond',
            // image: 'images/industries.png',
            description: 'The temperature in this particular area remains high during the afternoon and can persist into the evening hours. The building facades in the area, particularly those of the industrial structures, often consist of materials that have high thermal mass, such as concrete or metal. And the road surfaces, which are often made of asphalt or concrete, absorb and store heat during the day. These surfaces release the accumulated heat gradually, leading to extended periods of elevated temperatures even after sunset. </p><img src = "images/industries.jpeg" style = "width: 50%">',
            location: {
                center: [-77.47225, 37.56996],
                zoom: 13.20,
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
                    layer: 'pm',
                    opacity: 1,
                    duration: 500
                    
                },
                {
                    layer: 'industrial',
                    opacity: 1,
                    duration: 500
                },
                // {
                //     layer: 'boundary',
                //     opacity: 1,
                //     duration: 5000
                // }
                
            ],
            onChapterExit: [
                {
                    layer: 'industrial',
                    opacity: 0
                },
                // {
                //     layer: 'boundary',
                //     opacity: 0
                // },
                // {
                //     layer: 'pm',
                //     opacity: 0
                // }
            ]
            
        },
        {
            id: 'industries and green land',
            alignment: 'right',
            hidden: false,
            title: 'Industries and Urban Heat Island Effect in Richmond',
            //image: 'images/image.png',
            description: 'Industrial development may result in the removal of vegetation and reduction in green spaces.  Trees, plants, and open green areas help mitigate the urban heat island effect by providing shade, evaporative cooling, and reducing surface temperatures through transpiration.  When industrial development replaces these natural features, it decreases the cooling effect, contributing to higher temperatures in the area.</p><img src = "images/green.jpeg" style = "width: 50%">',
            location: {
                center: [-77.43496, 37.53698],
                zoom: 11.30,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'green',
                    opacity: 1,
                    duration: 500
                },
                {
                    layer: 'pm',
                    opacity: 1,
                    duration: 500
                    
                },
                {
                    layer: 'industrial',
                    opacity: 1,
                    duration: 500
                    
                },
                // {
                //     layer: 'boundary',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                {
                    layer: 'green',
                    opacity: 0
                },
                // {
                //     layer: 'boundary',
                //     opacity: 0
                // },
                {
                    layer: 'industrial',
                    opacity: 0
                },
                // {
                //     layer: 'pm',
                //     opacity: 0
                // }
                
            ]
        },
        {
            id: 'parking',
            alignment: 'right',
            hidden: false,
            title: 'Parking and Urban Heat Island Effect',
            //image: 'images/image.png',
            description: 'Parking areas without proper mitigation measures can intensify the urban heat island effect and contribute to higher temperatures in urban environments. The high concentration of vehicles in parking areas could generate heat when engine running.  And large expanses of impervious surfaces could absorb and radiate heat.</p><img src = "images/parking.jpeg" style = "width: 50%">',
            location: {
                center: [-77.43496, 37.53698],
                zoom: 11.30,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'parking',
                    opacity: 1,
                    duration: 500
                },
                {
                    layer: 'pm',
                    opacity: 1,
                    duration: 500
                }
            ],
            onChapterExit: [
                {
                    layer: 'parking',
                    opacity: 0
                },
                {
                    layer: 'pm',
                    opacity: 0
                }
                
            ]
        },
        {
            id: 'redlinging',
            alignment: 'full',
            hidden: false,
            title: 'Impact of Redlining',
            //image: 'images/image.png',
            description: '</p><iframe width="560" height="315" src="https://www.youtube.com/embed/nzQyKwsVWME" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></p>Redline involved the marking of certain neighborhoods or areas on maps with red lines, indicating that they were considered high-risk for mortgage lending.  This practice was based on racial and ethnic characteristics, leading to the exclusion of predominantly minority communities from access to loans, insurance, and other financial services.  The consequences of redlining have had lasting impacts on these marginalized communities, perpetuating economic and social disparities.',
            location: {
                center: [-77.43496, 37.53698],
                zoom: 10.18,
                pitch: 30,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'redline-87vt9z',
                    opacity: 1,
                    duration: 500
                },
                {
                    layer: 'boundary',
                    opacity: 1,
                    duration: 500
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'redline-87vt9z',
                //     opacity: 0
                // },
                {
                    layer: 'boundary',
                    opacity: 0
                }
            ]
        },
        {
            id: 'redlinging2',
            alignment: 'right',
            hidden: false,
            title: 'Impact of Redlining',
            //image: 'images/image.png',
            description: '</p>So these areas often have limited access to green spaces, tree cover, and other urban amenities. The lack of green spaces and tree canopy exacerbates heat retention, as these areas have fewer shadings, evaporative cooling, and heat dissipation.  Therefore, the historical impact of redlining has indirectly contributed to the disproportionate exposure of marginalized communities to the urban heat island effect, resulting in higher temperatures and reduced livability in these areas. </p> <img src = "images/redlineLegend.jpeg" style = "width: 50%">',
            location: {
                center: [-77.43496, 37.53698],
                zoom: 10.18,
                pitch: 30,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'redline-87vt9z',
                    opacity: 1,
                    duration: 500
                },
                {
                    layer: 'pm',
                    opacity: 1,
                    duration: 500
                    
                },
                // {
                //     layer: 'boundary',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                {
                    layer: 'redline-87vt9z',
                    opacity: 0
                },
                // {
                //     layer: 'boundary',
                //     opacity: 0
                // },
                {
                    layer: 'pm',
                    opacity: 0
                }
            ]
        },
        {
            id: 'solution',
            alignment: 'left',
            hidden: false,
            title: 'Possible Solutions',
            //image: 'images/image.png',
            description: '- Increase Urban Green Spaces: It helps improve the urban heat island effect by reducing temperatures through shade, evaporative cooling, and heat absorption. Green spaces can also act as natural filters, improving air quality, and mitigate the heat buildup by storing and slowly releasing excess heat.  </p>- Advocate for the use of cool pavement technologies and reflective surfaces on roads, sidewalks, and buildings. Promote energy-efficient building design and construction practices that minimize heat gain and maximize naturalventilation. </p>- Incorporate water features into urban design: Features such as fountains, ponds, and lakes increase evaporation rates, which cools the surrounding air. The evaporative cooling process can offset the heat absorbed by buildings and surfaces, thereby reducing overall temperatures. </p>- Incorporating Shade Structures for Parking. Implementing green parking lots, using permeable surfaces, and creating rooftop green spaces. ',
            location: {
                center: [-77.43496, 37.53698],
                zoom: 10.18,
                pitch: 30,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'green',
                    opacity: 1,
                    duration: 500
                },
                {
                    layer: 'boundary',
                    opacity: 1,
                    duration: 500
                }
            ],
            onChapterExit: [
                {
                    layer: 'green',
                    opacity: 0
                },
                {
                    layer: 'boundary',
                    opacity: 0
                }
            ]
        },
        {
            id: 'citation',
            alignment: 'full',
            hidden: false,
            title: 'Citation',
            //image: 'images/image.png',
            description: 'Climate Explorer. "Where Do We Need Shade? Mapping Urban Heat Islands in Richmond, Virginia." Last modified March 28, 2018. Accessed June 25, 2023.https://toolkit.climate.gov/case-studies/where-do-we-need-shade-mapping-urban-heat-islands-richmond-virginia  </p> VPM. (2019, July 29). Mapping projects show lasting impact of redlining, racial covenants in Virginia. Retrieved from https://www.vpm.org/listen/2019-07-29/mapping-projects-show-lasting-impact-of-redlining-racial-covenants-in-virginia </p> Richmond.com. "Richmond Urban Heat Islands - Scott Addition, Jackson Ward, Manchester." Accessed June 25, 2023.https://richmond.com/news/local/richmonds-urban-heat-islands----scotts-addition-jackson-ward-manchester---/article_ 9b712c7f-5395-512c-a485-9a4ba92a292e.html </p> World Meteorological Organization. "Urban Heat Island." Accessed June 25, 2023. https://community.wmo.int/en/activity-areas/urban/urban-heat-island </p> WorldAtlas. "Richmond, Virginia." Accessed June 25, 2023. https://www.worldatlas.com/cities/richmond-virginia.html </p> Sightline Institute. (2022, January 11). To stop building heat islands, stop overbuilding parking lots. Retrieved from https://www.sightline.org/2022/01/11/to-stop-building-heat-islands-stop-overbuilding-parking-lots/',
            location: {
                center: [-77.43496, 37.53698],
                zoom: 10.18,
                pitch: 30,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            // onChapterEnter: [
            //     {
            //         layer: 'redline-87vt9z',
            //         opacity: 1,
            //         duration: 5000
            //     }
            // ],
            // onChapterExit: [
            //     {
            //         layer: 'redline-87vt9z',
            //         opacity: 0
            //     }
            // ]
        },
    ]
};
