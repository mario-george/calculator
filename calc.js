  let buffer="0";
        
        let PreviousOperator=null;
        let PrevNum=0;
        let a = document.querySelectorAll('.calc-button');
        const screen = document.querySelector(".screen");
         a.forEach(function(element){
            element.addEventListener('click',function(event){
            Clicked(event.target.innerText);
            console.log(event.target.innerText);



         })})
        // document.querySelector('.calcallbuttons').addEventListener('click',function(event){
        //    Clicked(event.target.innerText);
        //    console.log(event.target.innerText);
        //  })
        function Clicked(button){
            if(isNaN(parseInt(button))){//NaN =Not a Number
                HandleSymbol(button);
            }
            else{
                HandleNum(button);
            }
            rerender();
            if(key==1){
                key=0
                buffer="0"
            }
        }
        function HandleNum(number){
            if(buffer==="0"){
                buffer=number;
                
            }
            else{
                buffer+=number;
            }
           
        }
        function rerender(){
            
            screen.innerText = buffer;
        }
        let key=0;
        function HandleSymbol(button){
            switch(button){
                case "=":
                    if(PreviousOperator===null){
                        return;
                    }
                    else{
                        flushOperation(PreviousOperator);
                        PrevNum=0;
                        key=1
                        
                        
                    }
                    break;
                case "C":
                    buffer="0";
                    PrevNum=0;
                    PreviousOperator=null;
                    break;
                    
                case "←":
                    if(buffer.length==1){
                        buffer="0";
                        break;
                    }
                    else{
                        buffer=buffer.substring(0,buffer.length-1)
                        break;
                    }
                default:
                    HandleMath(button);
                    
                   


            }
            
        }
        function HandleMath(value){
            PrevNum=parseInt(buffer);
             switch(value){
                case "+":
                    PreviousOperator="+";
                    console.log("plus")
                    break;
                case "-":
                    PreviousOperator="-";
                    console.log("minus")
                    break;
                case "x":
                    PreviousOperator="x";
                    console.log("multiply")
                    break;
                case "÷":
                    PreviousOperator="÷";   
                    console.log("divide") 
                    break;
                default:
                    return;                 
            }
            buffer="0";
            
        }
        function flushOperation(PreviousOperator){
            intBuffer=parseInt(buffer);
            switch(PreviousOperator){
                case "+":
                    intBuffer+=PrevNum;
                    break;
                case "-":
                    intBuffer=PrevNum-intBuffer;
                    break;
                case "x":
                    intBuffer*=PrevNum;
                    break;
                case "÷":
                    intBuffer=PrevNum/intBuffer; 
                    break;
               

             
            }
            console.log(intBuffer);
            console.log(buffer);
            buffer=""+ intBuffer;
            
            
        }