document.addEventListener("DOMContentLoaded", e=>{
    const form = document.querySelector("#frmEstadistica");
    form.addEventListener("submit", event=>{
        event.preventDefault();
  
        let de = document.getElementById("selectCalculo"),

        cantidad = document.querySelector("#numero").value;

        let $res = document.querySelector("#lblRespuesta");
        
        if (de.value == "media"){
            let lista = cantidad.split(",").map(Number);

            let sum = lista.reduce((previous, current) => current += previous);
            let avg = sum / lista.length;
            $res.innerHTML = avg;
        } else if (de.value=="mediana") {
            let lista = cantidad.split(",").map(Number);
            lista.sort((a,b)=>a-b);
            let lowmiddle = Math.floor((lista.length-1)/2);
            let highmiddle = Math.ceil((lista.length-1)/2);
            let medianaa= (lista[lowmiddle]+lista[highmiddle])/2;
            $res.innerHTML = medianaa;


           


        } else if (de.value=="moda") {
            let lista = cantidad.split(",").map(Number);
            let max=0,val=0,defmod=0;
            var counter={};
            var mode =[];
            for(var i in lista){
                if(!(lista[i] in counter))
                counter[lista[i]]=0;
                counter[lista[i]]++;
                if(counter[lista[i]]==max)
                mode.push(lista[i]);
                else if (counter[lista[i]]>max){
                    max = counter[lista[i]];
                    mode = [lista[i]];
                    $res.innerHTML = mode;
                }
            }
        


        }  else if (de.value=="armonica") {
            let lista = cantidad.split(",").map(Number);
            let ndato=0,dato=0,suma=0;

            for(let i=0;i<lista.length;i++){
              dato= 1/lista[i];
              suma+=dato;
              console.log(parseFloat(dato));
              
            }
            $res.innerHTML = `La Desviacion Estandar es:  ${(lista.length/suma)}`;

        };
  

    });
  });