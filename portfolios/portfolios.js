/*//lendering portfolios

//serices object
var portfolios = [
              {   id:1,
                  category:"FEA",
                  image:"../portfolios/ABAQUS FEA Analysis",
                  title:"Title"
              },
              {   id:1,
                category:"CFD",
                image:"../sos1.png",
                title:"Title"
            },

            {   id:1,
              category:"CAD",
              image:"../portfolios/fea1.png",
              title:"Title"
          },

          {   id:1,
            category:"CAD",
            image:"../sos1.png",
            title:"Title"
          },

          {   id:1,
            category:"CAD",
            image:"../sos1.png",
            title:"Title"
          },

          {   id:1,
            category:"MODELLING",
            image:"../sos1.png",
            title:"Title"
          }    
    ]
    //mapping the object to DOM
    
    document.getElementById('portfolios').innerHTML = portfolios.filter(portfolio=>portfolio.category==="CAD").map(portfolio => 
        `
        <div class="col portfolio-container col-12" style="background: url(${portfolio.image});
        background-size: contain;
        background-repeat: no-repeat;);">
        <div class=" portfolio ">
          <h5 class="ph5" >${portfolio.category}</h5>
          <h4 class="ph4">${portfolio.title}</h4>

        </div>

      </div>
`
    ).join('')

    */
    


    
    