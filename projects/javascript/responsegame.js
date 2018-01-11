                var start;
                
                
                
                function makeBlockAppear()
                
                {
                    
                    var top=(Math.random()*300)+100;
                    
                    var left=(Math.random()*300)+100;
                    
                    document.getElementById("shape").style.display="block";
                    
                    document.getElementById("shape").style.top=top+"px";
                    
                    document.getElementById("shape").style.left=left+"px";
                    
                    
                    
                    start=new Date().getTime();
                            
                }
                
                function makeBlockAppearAfterDelay()
                
                
                {
                    
                    
                    setTimeout(makeBlockAppear,Math.random()*2000);
                    
                    
                }
                
                makeBlockAppear();
            
            
            document.getElementById("shape").onclick=function(){
                
                document.getElementById("shape").style.display="none";
                
                var end=new Date().getTime();
                
                var totalTime=(end-start)/1000;
                
                document.getElementById("result").innerHTML=totalTime;
                
                makeBlockAppearAfterDelay();
                
            }