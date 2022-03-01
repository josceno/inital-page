// Seus scripts aqui
function datetime() {
  var title = document.getElementById('Data');
  var now = new Date();
  
  title.innerHTML = title.innerHTML + ' (' + now.toLocaleTimeString() + ')';
}


datetime();
D = new Date 
dia = D.getDate()
mes = D.getMonth()+1
ano= D.getFullYear()
console.log(dia)
console.log(mes)
console.log(ano)
data = document.getElementById("Data")
data.min = ano+"-"+mes+"-"+dia;  
data.value = ano+"-"+mes+"-"+dia;  
DI= new Date(data.value)
outrodia= DI.getDate()+1
console.log(outrodia)
outromes= DI.getMonth()+1
      
console.log(outromes)
      
outroano= DI.getFullYear()
      
console.log(outroano)
      
console.log(document.getElementById("Data").value)
    
     


function aparescercampo(){
  var cb = document.getElementById("check1");
  var inputo = document.getElementById("txt");
  var inputo2 = document.getElementById("txt2");
  var btninput = document.getElementById("btn")
  var txt2label= document.getElementById("txt2title")
  if(cb.checked==true){
    inputo.style.display="block";
    inputo2.style.display="block";
    btninput.style.display="block";
    txt2label.style.display="block";

  } 
  else{
    inputo.style.display="none";
    inputo2.style.display="none";
    btninput.style.display="none";
    txt2label.style.display="";
  }
}
function clicar()
{
  let gender = document.forms[0];
  let txt = "";
  
      txt = txt+ gender[0].value + "";
      document.getElementById("txt").value = "nome: "+  txt +"\n"
  

  let gender1 = document.getElementById("idade")
  let txt1 = "";
  
  
      txt1 = txt1+ gender1.value + "";
      document.getElementById("txt").value = "nome: "+  txt +"\n"+" idade: "+ txt1 
      
      
    let hollowvalue = 0
    console.log(`hollow value: ${hollowvalue}`)
    
      let gender2 = document.getElementById("Data")
      let Retxt2 = "";
      DI= new Date(data.value)
outrodia= DI.getDate()+1
console.log(outrodia)
outromes= DI.getMonth()+1
      
console.log(outromes)
      
outroano= DI.getFullYear()
      
console.log(outroano)
      
console.log(document.getElementById("Data").value)
if(outrodia == NaN|| outrodia == "[object HTMLTextAreaElement]"){
  alert("data invalida0")
}

      if(outroano>=ano ) {
        console.log("passou")
        hollowvalue = 1
        console.log(`hollow value: ${hollowvalue}`)
        console.log(ano)
        console.log(outroano)
        if(outroano>ano ){
          console.log("passou direto")
          console.log(outroano)
          gender2 = document.getElementById("Data")
             Retxt2 = ""; 
            console.log("passou")
              Retxt2 = Retxt2+ gender2.value + "";
              txt2 = Retxt2.split('-').reverse().join('-')     
              document.getElementById("txt").value = "nome: "+  txt +"\n"+" idade: "+ txt1 +"\n"+ " data de registro " + txt2 
        }
        else{if(outromes>=mes){
          console.log("passou")
          console.log(outromes)
          if(outrodia>= dia){
             gender2 = document.getElementById("Data")
             Retxt2 = ""; 
            console.log("passou")
              Retxt2 = Retxt2+ gender2.value + "";
              txt2 = Retxt2.split('-').reverse().join('-')     
              document.getElementById("txt").value = "nome: "+  txt +"\n"+" idade: "+ txt1 +"\n"+ " data de registro " + txt2 
              
          }
          else{
              alert("errou o dia")
              Retxt2 = Retxt2+ gender2.value + "";
              Retxt2= " "
              txt2 = Retxt2.split('-').reverse().join('-')     
              document.getElementById("txt").value = "nome: "+  txt +"\n"+" idade: "+ txt1 +"\n"+ " data de registro " + txt2 
          }
      }
      else{
          console.log("errou o mes")
          alert("errou o mes")
          txt2 = " "
      }}
        
      }
    else{
        if(outroano<ano){
        console.log("ano menor")
        txt2 = " "
        }  
      }
      document.getElementById("txt").value = "nome: "+  txt +"\n"+" idade: "+ txt1 +"\n"+ " data de registro " + txt2
      
      
      let genderi = document.forms[0];
      let txt3 = "";
      let i;

      for(i=0; i <genderi.length; i++)
      {
          if(genderi[i].checked){
          txt3 = txt3+ genderi[i].value + "";
          }

      }
      document.getElementById("txt").value = "---nome: "+  txt +"\n"+"idade: "+ txt1 +"\n"+" data de registro: " + txt2 +"\n"+" Genero: " + txt3 
      
      let gender4= document.getElementById("txt2")
      let txt4 = "";
     
  
      txt4 = txt4+ gender4.value + "";
      document.getElementById("txt").value = "---nome: "+  txt +"\n"+"idade: "+ txt1 +"\n"+" data de registro: " + txt2 +"\n"+" Genero: " + txt3 +"\n"+ txt4
      
      let self = document.getElementById("txt2")
        //self.value = " "+self.value+ " ";
        

        alfa =['a','e','i','o','u','y']
        beto = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','z']
        var quoti = self.value
      //console.log(quoti.normalize('NFD').replace(/[\u0300-\u036f]/g,""))
      console.log(quoti.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,""))

      let quote = quoti.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"")
 
      var vogal = 0
      var consonant = 0 

      var count = []
      var wordo =[]
      var word = quote.split(/\W+/)
    //console.log(word)
      
    //wordo.push(word[0]) 
    for (var A = 0; A< word.length; A++){
        //console.log(word[A])
    
    wordo = []
    //console.log(wordo)
    for (i = 0; i < word[A].length; i++){
        //console.log(word[A].charAt(i))
        wordo.push(word[A].charAt(i))
        
    }
    //console.log(wordo)
    for (var j =0; j <wordo.length; j++)
    {
        //console.log(wordo[j],alfa.indexOf(wordo[j]))
        if(alfa.indexOf(wordo[j])>=0)
        {
            vogal =1 
            //console.log(alfa.indexOf(wordo[j]), `vogalnum: ${vogal}`, `vogal: ${wordo[j]}` ) 
        }
        if(beto.indexOf(wordo[j])>=0)
        {
            consonant =1 
            //console.log(beto.indexOf(wordo[j]), `consonat: ${consonant}`,`consonat: ${wordo[j]}`)          
        }      
    }
    if(consonant + vogal == 2)
    {
        count.push(word[A])
        //console.log(count)
        vogal = 0
        consonant = 0
    }else{
        vogal = 0
        consonant = 0
    }   

console.log(count)
console.log(`numero de palavras ${count.length}`)
//if(alfa.indexOf(wordo))

       /* var dito = self.value.match(/ a(?=ao |ai |au |ae |aO |aI |aU |aE )\S+/g);
        var ditO = self.value.match(/ A(?=Ao |Ai |Au |Ae |AO |AI |AU |AE )\S+/g);
        var dite = self.value.match(/ e(?=eo |ei |eu |ea )\S+/g);
        var ditE = self.value.match(/ E(?=Eo |Ei |Eu |Ea |EO |EI |EU |EA )\S+/g);
        var diti = self.value.match(/ i(?=io |ie |iu |ia )\S+/g);
        var ditI = self.value.match(/ I(?=Io |Ia |Iu |Ie |IO |IA |IU |IE )\S+/g);
        var dita = self.value.match(/ o(?=oi |oe |ou |oa )\S+/g);
        var ditA = self.value.match(/ O(?=oa |oi |ou |oe |oA |oI |oU |oE )\S+/g);
        var ditu = self.value.match(/ u(?=ui |ue |uo |ua )\S+/g);
        var ditU = self.value.match(/ U(?=Ua |Ui |Uo |Ue |UO |UI |UA |UE )\S+/g);
        
        var num = self.value.match(/\S+[a,á,ã,e,é,ê,i,í,o,ó,ô,õ,u,ú,A,Á,Ã.E,Ê.É,I,Ì,O,Ó,Ô,Õ,U,Ú,Y]/g);
        var tirdone = self.value.match(/\S+[a,e,i,o,u,A,E,I,O,U,Y]/g);  
        var spaces = self.value.match(/[a,á,ã,e,é,ê,i,í,o,ó,ô,õ,,u,ú,A,Á,Ã.E,Ê.É,I,Ì,O,Ó,Ô,Õ,U,Ú,Y]\S+/g);
       
        /// checkpoint para não perda de arquivo III agr vai
        var ao = dito ? dito.length: 0;
        var Ao = ditO ? ditO.length: 0;
        var oo = dita ? dita.length: 0;
        var Oo = ditA ? ditA.length: 0;
        var eo = dite ? dite.length: 0;
        var Eo = ditE ? ditE.length: 0;
        var io =  diti ? diti.length: 0;
        var Io =  ditI ? ditI.length: 0;
        var uo =  ditu ? ditu.length: 0;       
        var Uo =  ditU ? ditU.length: 0;
        console.log("duas letras",ao, Ao)
        console.log("duas letrase",eo)
        console.log("duas letrase",io)
        console.log("duas letrase",oo)
        console.log("duas letrasu",uo)
        var word = num ? num.length: 0;
        console.log("NUM",word)
        var tirdw = tirdone ? tirdone.length: 0;
        console.log("terceir",tirdw)
        var words = (spaces ? spaces.length: 0); 
        console.log("palavras",words)
        var finalwarudo = word + words - (tirdw + ao + eo + io + oo + uo+ Ao +Oo+ Eo+ Io+ Uo);
        
        console.log("final result",finalwarudo)
        if(words>word){
          var somaT= word -words;
          finalwarudo = words 
          console.log("final result2",finalwarudo)
        }
       


        if(finalwarudo<0){finalwarudo= finalwarudo*-1;}
        
        if(txt2 == " "){
          alert("data invalida")
        }
        */
        document.getElementById("txt").value = "---nome: "+  txt +"\n"+"---idade: "+ txt1 +"\n"+ "---data: " + txt2 +"\n"+ "---Genero: " + txt3   +"\n"+"-----------------------------------"+"\n"+"    "+ txt4 +"\n"+"-----------------------------------"+"\n"+ "---numero de palavras é: " + count.length;


} 
  




  






  




  



  


  


  
}
