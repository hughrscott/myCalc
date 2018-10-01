

/*function f_thca_per_portion(_flower_weight ,_thc_percentage,_conversion_rate,extraction_percentage,_butter_weight,_butter_in_recipe,_number_of_portions){

_thc_in_butter =  _flower_weight*_thc_percentage*_conversion_rate*extraction_percentage*1000;

_thc_per_gram = _thc_in_butter/_butter_weight;

return (_thc_per_gram/_number_of_portions)*_butter_in_recipe;

};
*/

document.getElementById("output").value=1;

function f_dosage(){

    let _thc_percentage = document.getElementById('_thc_percentage').value
    let _flower_weight = document.getElementById('_flower_weight').value;
    
    let _conversion_rate = document.getElementById('_conversion_rate').value;
    let _extraction_percentage = document.getElementById('extraction_percentage').value;
   
    let _butter_weight = document.getElementById('_butter_weight').value;
    
    let _number_of_portions = document.getElementById('_number_of_portions').value;

    let _thc_in_butter =  (_flower_weight*_thc_percentage*_conversion_rate*_extraction_percentage)/10;

     let _thc_per_gram = _thc_in_butter/_butter_weight;

    let answer = _thc_per_gram*(_butter_weight/_number_of_portions);

    document.getElementById("output").value=answer+"mg";

return 0;

}



