
function textEffect(){
    var addText = ['boost','level up', 'enhance', 'refine']
    var i = 0
    console.log(addText[0][1]);
    var ispause = false
    var j = 0    
    setInterval(() => {
        if(!ispause){
            if(document.getElementById('txt-sec3')){

                
                var b = document.getElementById('txt-sec3').innerText
                document.getElementById('txt-sec3').innerHTML = b + addText[i][j]
                j++;
                if(j == addText[i].length){
                    ispause = true 
                    
                }
            }         
        }else{   
            document.getElementById('txt-sec3').innerHTML = ""
            i++
            j=0 
            ispause = false
            if(i == addText.length) i = 0      
        }
    }, 600);

    
 
    
}