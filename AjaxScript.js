$.ajax({    
    type: "GET",
    url: "backend-script.php",             
    dataType: "html",                  
    success: function(data){                    
        $("#job").html(data); 
    }
});