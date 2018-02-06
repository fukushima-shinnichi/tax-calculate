////////   tax calculate   //////////////

////   each country value
var JPN = document.getElementById("JPN").getAttribute("value");
var USA = document.getElementById("USA").getAttribute("value");
var UK = document.getElementById("UK").getAttribute("value");
var PRC = document.getElementById("PRC").getAttribute("value");
var SGP = document.getElementById("SGP").getAttribute("value");
var SWE = document.getElementById("SWE").getAttribute("value");
var countryArray = [JPN, USA, UK, PRC, SGP, SWE];

////   each country tax rate
var JPN_rate = parseFloat(document.getElementById("JPN").getAttribute("data-tax"));
var USA_rate = parseFloat(document.getElementById("USA").getAttribute("data-tax"));
var UK_rate = parseFloat(document.getElementById("UK").getAttribute("data-tax"));
var PRC_rate = parseFloat(document.getElementById("PRC").getAttribute("data-tax"));
var SGP_rate = parseFloat(document.getElementById("SGP").getAttribute("data-tax"));
var SWE_rate = parseFloat(document.getElementById("SWE").getAttribute("data-tax"));


//////   show tax rate function   /////////////
function calculate_tax(){

  var btn = document.getElementById("btn");
  var countryList = document.getElementById("inputArea");
  var countryName = countryList.country;
  
  btn.addEventListener("click",function(){
    var choice_country = countryName.value;
    countryList.setAttribute("choice_country_val", choice_country);
    switch_country();
  });
  
  //////   show tax rate to each country function   ////////////////
  function switch_country(){
    if(countryList.getAttribute("choice_country_val") == countryArray[0]){
      document.getElementById("tax_rate").textContent = JPN_rate*100 + ".0%";
      
    }else if(countryList.getAttribute("choice_country_val") == countryArray[1]){
      document.getElementById("tax_rate").textContent = USA_rate*100 + "%";
      
    }else if(countryList.getAttribute("choice_country_val") == countryArray[2]){
      document.getElementById("tax_rate").textContent = UK_rate*100 + ".0%";
      
    }else if(countryList.getAttribute("choice_country_val") == countryArray[3]){
      document.getElementById("tax_rate").textContent = PRC_rate*100 + ".0%";
      
    }else if(countryList.getAttribute("choice_country_val") == countryArray[4]){
      document.getElementById("tax_rate").textContent = parseInt(SGP_rate*100) + ".0%";
      
    }else if(countryList.getAttribute("choice_country_val") == countryArray[5]){
      document.getElementById("tax_rate").textContent = SWE_rate*100 + ".0%";
      
    }else{
      console.log("other.");
    };
    
  };

};

///////////   calculate sum function   //////////////
function calculate_sum(){
  
  ////   trigger   /////////
  document.getElementById("calculate_start").addEventListener("click",function(){
     
    var price = document.getElementById("inputPriceArea").price;
    var price_val = parseFloat(price.value);
    var choice_country = document.getElementById("inputArea").country.value;
      
      show_price_taxIN();
      
    
    function show_price_taxIN(){
      if(choice_country == countryArray[0]){
        document.getElementById("sum").textContent = "¥ "+parseInt(price_val + (price_val*JPN_rate));
      }else if(choice_country == countryArray[1]){
        document.getElementById("sum").textContent = "¥ "+parseInt(price_val + (price_val*USA_rate));
      }else if(choice_country == countryArray[2]){
        document.getElementById("sum").textContent = "¥ "+parseInt(price_val + (price_val*UK_rate));
      }else if(choice_country == countryArray[3]){
        document.getElementById("sum").textContent = "¥ "+parseInt(price_val + (price_val*PRC_rate));
      }else if(choice_country == countryArray[4]){
        document.getElementById("sum").textContent = "¥ "+parseInt(price_val + (price_val*SGP_rate));
      }else if(choice_country == countryArray[5]){
        document.getElementById("sum").textContent = "¥ "+parseInt(price_val + (price_val*SWE_rate));
      }else{
        console.log("error");
      };
    };
      
  });
    
};

//////////   main background image change function   ////////////
function main_background_change_search_btn(){
  
  document.getElementById("btn").addEventListener("click",function(){
    
    var countryName = document.getElementById("inputArea").country.value;
    var body = document.getElementById("body");
    
    if(countryName == countryArray[0]){
      body.style.backgroundImage = "url(css/tax_calculate/img/JPN.png)";
      
    }else if(countryName == countryArray[1]){
      body.style.backgroundImage = "url(css/tax_calculate/img/USA.jpg)";
      
    }else if(countryName == countryArray[2]){
      body.style.backgroundImage = "url(css/tax_calculate/img/UK.png)";
      
    }else if(countryName == countryArray[3]){
      body.style.backgroundImage = "url(css/tax_calculate/img/PRC.png)";
      
    }else if(countryName == countryArray[4]){
      body.style.backgroundImage = "url(css/tax_calculate/img/SGP.png)";
      
    }else if(countryName == countryArray[5]){
      body.style.backgroundImage = "url(css/tax_calculate/img/SWE.jpg)";
      
    }else{
      console.log("error");
    };
    
  });
  
};

function main_background_change_calculate_btn(){
  
  document.getElementById("calculate_start").addEventListener("click",function(){
    
    var countryName = document.getElementById("inputArea").country.value;
    var body = document.getElementById("body");
    
    if(countryName == countryArray[0]){
      body.style.backgroundImage = "url(css/tax_calculate/img/JPN_calculate.jpg)";
      
    }else if(countryName == countryArray[1]){
      body.style.backgroundImage = "url(css/tax_calculate/img/USA_calculate.jpg)";
      
    }else if(countryName == countryArray[2]){
      body.style.backgroundImage = "url(css/tax_calculate/img/UK_calculate.jpg)";
      
    }else if(countryName == countryArray[3]){
      body.style.backgroundImage = "url(css/tax_calculate/img/PRC_calculate.jpg)";
      
    }else if(countryName == countryArray[4]){
      body.style.backgroundImage = "url(css/tax_calculate/img/SGP_calculate.jpg)";
      
    }else if(countryName == countryArray[5]){
      body.style.backgroundImage = "url(css/tax_calculate/img/SWE_calculate.jpg)";
      
    }else{
      console.log("error");
    };
    
  });
  
};


///////   function start   //////////////

calculate_tax();

calculate_sum();

main_background_change_search_btn();

main_background_change_calculate_btn();