/*
$(document).ready(function(){
   
});

(function ($) {    
    "use strict";
    
    $('.inputTxt').each(function(){        
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    });    

   
    
    let name = $('.validate-input input[name="name"]');
    let email = $('.validate-input input[name="email"]'); 
    let firstName = $('.validate-input input[name="firstName"]'); 
    let secondName = $('.validate-input input[name="secondName"]'); 
    let company = $('.validate-input input[name="company"]'); 
    let position  = $('.validate-input input[name="position"]');    
    let tel = $('.validate-input input[name="tel"]');     
    
    $('.validate-form').on('submit',function(){        
        var check = true;

        if($(name).val().trim() == ''){
            showValidate(name);
            check=false;
        }

        if($(firstName).val().trim() == ''){
            showValidate(firstName);
            check=false;
        }

        if($(secondName).val().trim() == ''){
            showValidate(secondName);
            check=false;
        }
        
        if($(company).val().trim() == ''){
            showValidate(company);
            check=false;
        }

        if($(position).val().trim() == ''){
            showValidate(position);
            check=false;
        }
       
        if($(tel).val().trim() == ''){
            showValidate(tel);
            check=false;
        }
       
        if($(email).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
            showValidate(email);
            check=false;
        }        
        return check;
    });


    $('.validate-form .inputTxt').each(function(){
        $(this).focus(function(){
           hideValidate(this);
       });
    });

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);*/

$(function(){
    $("form[name='contact-form']").validate({
        rules: {

            
        }
      
    });
})

   

