

    var ul=document.getElementById("con")        // selecting the ul 
    
    var input = document.getElementById("input")    // selecting the input box

    function add(){

        
        var n = document.createElement("li")           
        // creating a new element --> li  

        n.innerHTML= input.value + "  <button onclick='del(event)'>  &#10006 </button> " 
        // adding innner html as input value and a close button 

        ul.append(n) // appending

    }
    
    function del(event){

        event.target.parentElement.remove()     
        // removing the parentelement of the button---> li removed when button is clicked
    }
