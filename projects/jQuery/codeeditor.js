 $(".button").click(function(){
                      
            var panel=$(this).attr("id") +"Panel";
                   
            $("#"+panel).toggle();
               
           
           });
            
            function updateOutput(){
                
                $("iframe").contents().find("html").html("<html><head><style type=\"text/css\">" + $("#cssPanel").val() + "</style></head><body>" + $("#htmlPanel").val() + "</body></html>");
                
                document.getElementById("outputPanel").contentWindow.eval($("#jsPanel").val());
 
            }
            
            updateOutput();
            
            $("textarea").on("change keyup paste", function(){
                
                
                updateOutput();
                
            });