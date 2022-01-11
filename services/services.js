//lendering services

//serices object
var services = [
    {   id:1,
        icon:"fa-flag",
        title:"Title",
        body:"Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy"
    },
    {   id:1,
        icon:"fa-flag",
        title:"Title",
        body:"Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy"
    },
    {   id:1,
        icon:"fa-flag",
        title:"Title",
        body:"Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy"
    },
    {   id:1,
        icon:"fa-flag",
        title:"Title",
        body:"Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy"
    },
    {   id:1,
        icon:"fa-flag",
        title:"Title",
        body:"Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy"
    },
    {   id:1,
        icon:"fa-flag",
        title:"Title",
        body:"Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy"
    }
    
    
    
    
    ]
    //mapping the object to DOM
    
    document.getElementById('serve').innerHTML = services.map(service => 
        `<div class="service">
        <i class="fa ${service.icon} "></i>
        <div>
        <div class="service-in">
         <h5>${service.title}</h5></div>
        <div class="service-body"> <p>${service.body}</p></div>
    
        </div>
        </div>`
    ).join('')
    
    