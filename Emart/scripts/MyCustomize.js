function preview() {
    //slider1_text1_color
    var var_Slider1_Text1_Color;
    var_Slider1_Text1_Color = String(document.getElementById('Code').value);
    $('#Slider1_Text1_Color_Hidden').attr('value', var_Slider1_Text1_Color);
    var_Slider1_Text1_Color = 'color:' + var_Slider1_Text1_Color;
    $('#Slider1_Text1').attr('style', var_Slider1_Text1_Color)
    var_Slider1_Text1_Color = 'float: right;  color:white; background-' + var_Slider1_Text1_Color;
    $('#button-popup').attr('style', var_Slider1_Text1_Color)
    //slider1_text2_color
    var var_Slider1_Text2_Color;
    var_Slider1_Text2_Color = String(document.getElementById('Code1').value);
    $('#Slider1_Text2_Color_Hidden').attr('value', var_Slider1_Text2_Color);
    var_Slider1_Text2_Color = 'color:' + var_Slider1_Text2_Color;
    $('#Slider1_Text2').attr('style', var_Slider1_Text2_Color)
    var_Slider1_Text2_Color = 'float: right;  color:white; background-' + var_Slider1_Text2_Color;
    $('#button-popup1').attr('style', var_Slider1_Text2_Color)

    var var_Slider1_Text1;
    var_Slider1_Text1 = String(document.getElementById('Slider1_Text1_Input').value);
    document.getElementById('Slider1_Text1').innerHTML = var_Slider1_Text1;
    $('#Slider1_Text1_Hidden').attr('value', var_Slider1_Text1)
    //alert(var_Slider1_Text1);
    var var_Slider1_Text2;
    var_Slider1_Text2 = String(document.getElementById('Slider1_Text2_Input').value);
    document.getElementById('Slider1_Text2').innerHTML = var_Slider1_Text2;
    $('#Slider1_Text2_Hidden').attr('value', var_Slider1_Text2)
    var var_Slider1_Text3;
    var_Slider1_Text3 = String(document.getElementById('Slider1_Text3_Input').value);
    document.getElementById('Slider1_Text3').innerHTML = var_Slider1_Text3;
    $('#Slider1_Text3_Hidden').attr('value', var_Slider1_Text3)
    var var_Slider2_Text1;
    var_Slider2_Text1 = String(document.getElementById('Slider2_Text1_Input').value);
    document.getElementById('Slider2_Text1').innerHTML = var_Slider2_Text1;
    $('#Slider2_Text1_Hidden').attr('value', var_Slider2_Text1)
    //alert(var_Slider1_Text1);
    var var_Slider2_Text2;
    var_Slider2_Text2 = String(document.getElementById('Slider2_Text2_Input').value);
    document.getElementById('Slider2_Text2').innerHTML = var_Slider2_Text2;
    $('#Slider2_Text2_Hidden').attr('value', var_Slider2_Text2)
    var var_Slider2_Text3;
    var_Slider2_Text3 = String(document.getElementById('Slider2_Text3_Input').value);
    document.getElementById('Slider2_Text3').innerHTML = var_Slider2_Text3;
    $('#Slider2_Text3_Hidden').attr('value', var_Slider2_Text3)
    var var_Slider3_Text1;
    var_Slider3_Text1 = String(document.getElementById('Slider3_Text1_Input').value);
    document.getElementById('Slider3_Text1').innerHTML = var_Slider3_Text1;
    $('#Slider3_Text1_Hidden').attr('value', var_Slider3_Text1)
    //alert(var_Slider1_Text1);
    var var_Slider3_Text2;
    var_Slider3_Text2 = String(document.getElementById('Slider3_Text2_Input').value);
    document.getElementById('Slider3_Text2').innerHTML = var_Slider3_Text2;
    $('#Slider3_Text2_Hidden').attr('value', var_Slider3_Text2)
    var var_Slider3_Text3;
    var_Slider3_Text3 = String(document.getElementById('Slider3_Text3_Input').value);
    document.getElementById('Slider3_Text3').innerHTML = var_Slider3_Text3;
    $('#Slider3_Text3_Hidden').attr('value', var_Slider3_Text3)
}