//Navar Header Effect
const textHeader=document.querySelector("h1");
const textContent=textHeader.textContent;
const split=textContent.split("");
textHeader.textContent="";

    for(var i=0;i<split.length;i++){
   
    textHeader.innerHTML+="<span >"+split[i]+"</span>";
    }
    
let char=0;
let timer=setInterval(onTick,100);

function onTick(){
    const span=textHeader.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;
    if(char===split.length){
        complete();
       
      
    }
    
    
    
  
}

function complete(){
    clearInterval(timer);
 
}
//Nav Bar Effect Home About Contact
const div=document.querySelector('.bar');
window.addEventListener("load",()=>{
    var listItems=document.querySelectorAll("li");
    listItems.forEach(list=>{
        list.addEventListener("mouseover",()=>{
        div.style.height=100+"%";
        div.style.left=list.offsetLeft+14+"px";
        
        })
        list.addEventListener("mouseout",()=>{
        div.style.height=4+"px";
        div.style.left=list.offsetLeft+14+"px";
        })
        })
    })
// SKills Header Animation
const skillsHeader=document.getElementById('Header');


const skillLetters=skillsHeader.textContent.split("");
     skillsHeader.textContent="";

for(var i=0;i<skillLetters.length;i++){
    skillsHeader.innerHTML+="<span>"+skillLetters[i]+"</span>"
}




window.addEventListener("load",()=>{
    const skillLetters=document.querySelectorAll(".Header span");
    const underDiv=document.createElement('div');
    skillsHeader.appendChild(underDiv);
    underDiv.style.transition="all 0.6s ease";
    skillsHeader.addEventListener("mouseover",()=>{
        underDiv.style.height="4px";
        underDiv.style.width="100%";
        underDiv.style.background="#000";
    });
    skillsHeader.addEventListener("mouseout",()=>{
        underDiv.style.width="0%";
        
    });

    skillLetters.forEach(item=>{
        item.addEventListener("mouseover",()=>{
            item.style.color="red";
            item.style.transform="scale(3) rotateY(360deg)";
        })
        item.addEventListener("mouseout",()=>{
            item.style.color="#000";
            item.style.transform="scale(1)";
        }
        )
    })
});
//Project Header Animation
const projectHeader=document.querySelector('.Project__Header');

const projectLetters=projectHeader.textContent.split("");
projectHeader.textContent="";

for(var i=0;i<projectLetters.length;i++){
    projectHeader.innerHTML+="<span>"+projectLetters[i]+"</span>"
}

window.addEventListener("load",()=>{
    const projectLetters=document.querySelectorAll(".Project__Header span");
    
    const underDiv=document.createElement('div');
    projectHeader.appendChild(underDiv);
    underDiv.style.transition="all 0.6s ease";


    projectHeader.addEventListener("mouseover",()=>{
        underDiv.style.height="4px";
        underDiv.style.width="100%";
        underDiv.style.background="#000";
    });
    projectHeader.addEventListener("mouseout",()=>{
        underDiv.style.width="0%";
        
    });

    projectLetters.forEach(item=>{
        console.log(item)
        
        
        item.addEventListener("mouseover",()=>{
            item.style.color="red";
            item.style.transform="scale(2.5) rotateY(360deg)";
         })
        item.addEventListener("mouseout",()=>{
            item.style.color="#000";
            item.style.transform="scale(1)";
            underDiv.style.width="0%";
            
        }
        )
    })
});
