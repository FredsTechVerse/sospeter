//lendering portfolios

//serices object
var portfolios = [
              {   id:1,
                  category:"FEA",
                  image:"../portfolios/a.png",
                  title:"ABAQUS FEA Analysis"
              },
              {   id:2,
                category:"CFD",
                image:"../portfolios/b.png",
                title:" CFD ANALYSIS"
            },

            {   id:3,
              category:"CAD",
              image:"../portfolios/c.jpeg",
              title:"Manual Cabro Molding Machine"
          },

          {   id:4,
            category:"CAD",
            image:"../portfolios/d.jpg",
            title:"Rendered Jaw Crusher"
          },

          {   id:5,
            category:"CAD",
            image:"../portfolios/e.jpeg",
            title:"Solidworks Chair Design"
          },

          {   id:6,
            category:"MODELLING",
            image:"../portfolios/f.jpg",
            title:"Solidworks Jaw Crusher"
          }    
    ]
    //mapping the object to DOM

    var categoryselected;

    function renderAll(){
    
    document.getElementById('portfolios').innerHTML = portfolios.map(portfolio => 
        `
        <div class="row portfolios-body" id="portfolios">

        <img src="${portfolio.image}" alt="Avatar" class="image">
        <div class="overlay">
          <div class="text">
            <h6 class="category">${portfolio.category}</h6>
            <h4 class="titl">${portfolio.title}</h4>
          </div>
        </div>
  </div>
`
    ).join('')
  }
renderAll();


function renderClicked(){
  renderAll=false;
  document.getElementById('portfolios').innerHTML = portfolios.filter(portfolio=>portfolio.category===categoryselected).map(portfolio => 
    `
    <div class="row portfolios-body" id="portfolios">

    <img src="${portfolio.image}" alt="Avatar" class="image">
    <div class="overlay">
      <div class="text">
        <h6 class="category">${portfolio.category}</h6>
        <h4 class="titl">${portfolio.title}</h4>
      </div>
    </div>
</div>
`
).join('')

}
function hello(){
  console.log("hello")
}


function renderCad(){

  categoryselected="CAD";

  renderClicked();
}
function renderCfd(){
  categoryselected="CFD";
  renderClicked();

}
function renderFea(){
  categoryselected="FEA";
  renderClicked();

}
function renderMod(){
  categoryselected="MODELLING";
  renderClicked();

}

function renderAgain(){
  renderAll=true;
  document.getElementById('portfolios').innerHTML = portfolios.map(portfolio => 
    `
    <div class="row portfolios-body" id="portfolios">

    <img src="${portfolio.image}" alt="Avatar" class="image">
    <div class="overlay">
      <div class="text">
        <h6 class="category">${portfolio.category}</h6>
        <h4 class="titl">${portfolio.title}</h4>
      </div>
    </div>
</div>
`
).join('')
}

  
    


    
    