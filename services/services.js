//lendering services

//serices object
var services = [
                                {   id:1,
                                    title:"CAD DESIGN",
                                   image:"../services/a.png",
                                    body:"I will create your CAD design on any Required Software Tool, both 2D, 3D parametric, and give in the required form to your satisfaction."
                                },
                                {   id:2,
                                    title:"COMPUTATIONAL FLUID DYNAMIC",
                                    image:"../services/b.png",
                                    body:"I am Pushing the boundaries of what next. I will conduct CFD and this turns the next gen fluid flow concept into reality, faster and more efficient."
                                },
                                {   id:3,
                                    title:"Engineering Design Analysis",
                                    image:"../services/c.png",
                                    body:"I will provide an analyzed engineering design including static analysis, vibration analysis and dynamic analysis to ensure the designed components ."
                                },
                                {   id:4,
                                    title:"Topology Optimization",
                                    image:"../services/d.png",
                                    body:"Allow interactive topology optimization tool leveraging the gold standard product design and simulation to uncover design solutions through shape optimization, without the computational cost."
                                },
                                {   id:5,
                                    title:"CAM Works",
                                    image:"../services/e.png",
                                    body:"I will provide computer Aided Manufacturing Designs and Machining Codes including Part setup and G&M Codes, and tool selection"
                                },


    
    
    
    ]
    //mapping the object to DOM
    
   document.getElementById('serve').innerHTML = services.map(service => 
    `
    <div class="row services-body" id="service">
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
    
    