const converter=()=>{
    // value get stores here
    var in_val = document.querySelector("#in_val").value;
    var in_unit = document.querySelector("#in_unit").value;
    var out_val = document.querySelector("#out_val");
    var out_unit = document.querySelector("#out_unit").value;

    // conversion 
    // 1 . meter and centimeter
    if(in_unit == "meter" && out_unit=="centimeter"){
        
       let output_val=in_val*100;
       out_val.value = output_val;
    } 
    // 2. centimter and meter
    else if(in_unit == "centimeter" && out_unit=="meter"){
        
        let output_val=in_val/100;
        out_val.value = output_val;
     } 
     // 3  KM -> Meter
     else if(in_unit == "kilometer" && out_unit=="meter"){
        
        let output_val=in_val*1000;
        out_val.value = output_val;
     } 
     // 4 . Meter -> Km
    else if(in_unit == "meter" && out_unit=="kilometer"){
        
        let output_val=in_val/1000;
        out_val.value = output_val;
     } 
     // 5. km -> cm
     else if(in_unit == "kilometer" && out_unit=="centimeter"){
        
        let output_val=in_val*100000;
        out_val.value = output_val;
     }
      // 5. cm -> km
      else if(in_unit == "centimeter" && out_unit=="kilometer"){
        
        let output_val=in_val/100000;
        out_val.value = output_val;
     } 
      // 5. meter -> inch
      else if(in_unit == "meter" && out_unit=="inch"){
        
        let output_val=in_val*39.37;
        out_val.value = output_val;
     } 
      // 5.  inch -> meter
      else if(in_unit == "inch" && out_unit=="meter"){
        
        let output_val=in_val/39.37;
        out_val.value = output_val;
     } 
      // 5. yard -> feet
      else if(in_unit == "yard" && out_unit=="feet"){
        
        let output_val=in_val*3;
        out_val.value = output_val;
     } 
     // 5. feet -> yard
     else if(in_unit == "yard" && out_unit=="feet"){
        
        let output_val=in_val/3;
        out_val.value = output_val;
     } 
     

}
