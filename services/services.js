//lendering services

//serices object
var services = [
                                {   id:1,
                                    title:"CAD DESIGN",
                                   image:"../services/a.png",
                                    body:"I create all CAD designs, 2D and 3D parametric, at your timeline and specifications and to your satisfaction."
                                },
                                {   id:2,
                                    title:"COMPUTATIONAL FLUID DYNAMIC",
                                    image:"../services/b.png",
                                    body:"I am Pushing the boundaries of what next. I conduct CFD which turns the next gen fluid flow concept into reality, faster and more efficient."
                                },
                                {   id:3,
                                    title:"Engineering Design Analysis",
                                    image:"../services/c.png",
                                    body:"I create excellently analyzed engineering design from static analysis, vibration analysis to dynamic analysis to ensure the designed components and system withstand real word performance loads and conditions."
                                },
                                {   id:4,
                                    title:"Topology Optimization",
                                    image:"../services/d.png",
                                    body:
                                    "I do topology optimization of all design parts to ensure the parts withstand all loads that they are imposed to while using minimum material size for cost optimization."                                },
                                {   id:5,
                                    title:"CAM Works",
                                    image:"../services/e.png",
                                    body:
                                    "I provide computer Aided Manufacturing Designs and Machining Codes including Part setup and G&M Codes, and tool selection."
                                },


    
    
    
    ]
    //mapping the object to DOM
    
   document.getElementById('serve').innerHTML = services.map(service => 
    `
    <div class="row services-body" id="service" data-aos="fade-right" data-aos-easing="ease-in-back"
    data-aos-duration="1500"">
    <h5 class="titles-s d-none d-md-block">${service.title}</h5>


    <img src="${service.image}" alt="Avatar" class="image">
    <div class="overlay1">
      <div class="text1">
      <h5 class="category1">${service.title}</h5>

        <p class="titl1">${service.body}</p>

      </div>
    </div>
</div>
`
        
    ).join('')

    


    //
    
    