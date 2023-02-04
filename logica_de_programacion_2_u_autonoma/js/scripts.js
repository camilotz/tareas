function tablas() {
   var multiplicando =1;
   var multiplicador =1;

   for (multiplicando =1;multiplicando<=3;multiplicando++){
    for(multiplicador=1;multiplicador<=10;multiplicador++){
        var resultado = multiplicando*multiplicador;
        console.log(multiplicando + "X" + multiplicador + "="+ resultado);
    }
    console.log('<br>')
   }
    }



    function dividir_numeros() {
        var dividiendo =1;
        var dividir =1;
     
        for (dividiendo =1;dividiendo<=10;dividiendo++){
         for(dividir=1;dividir<=10;dividir++){
             var resultado = dividiendo/dividir;
             console.log(dividiendo + "/" + dividir + "="+ resultado);
         }
         console.log('<br>')
        };
         }
     


           
         function suma() {
            var num1 = document.getElementById("num1").value;
            var numreal= parseInt(num1);

            var num2 = document.getElementById("num2").value;
            var numreal2= parseInt(num2); 

            var res = numreal + numreal2;
            console.log("resultado : " + res);
         }
          
         
         function resta() {
            var num1 = document.getElementById("num1").value;
            var numreal= parseInt(num1);

            var num2 = document.getElementById("num2").value;
            var numreal2= parseInt(num2); 

            var res = numreal - numreal2;
            console.log("resultado : " + res);
         }

         function multiplicacion() {
            var num1 = document.getElementById("num1").value;
            var numreal= parseInt(num1);

            var num2 = document.getElementById("num2").value;
            var numreal2= parseInt(num2); 

            var res = numreal * numreal2;
            console.log("resultado : " + res);
         }
          
         function divicion() {
            var num1 = document.getElementById("num1").value;
            var numreal= parseInt(num1);

            var num2 = document.getElementById("num2").value;
            var numreal2= parseInt(num2); 

            var res = numreal / numreal2;
            console.log("resultado : " + res);
         }
    

    


    
