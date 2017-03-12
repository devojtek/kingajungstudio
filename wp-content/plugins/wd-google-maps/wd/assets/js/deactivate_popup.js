////////////////////////////////////////////////////////////////////////////////////////
// Events                                                                             //
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
// Constants                                                                          //
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
// Variables                                                                          //
////////////////////////////////////////////////////////////////////////////////////////
var deactivated = false;
var additionalInfo = "";
var btnVal = 3;
////////////////////////////////////////////////////////////////////////////////////////
// Constructor & Destructor                                                           //
////////////////////////////////////////////////////////////////////////////////////////	
jQuery(document).ready(function () {
	jQuery(document).on("click", "." + WDDeactivateVars.deactivate_class, function(){
		jQuery(".wd-" + WDDeactivateVars.prefix + "-opacity").show();
		jQuery(".wd-" + WDDeactivateVars.prefix  + "-deactivate-popup").show();
		if(jQuery(this).attr("data-uninstall") == "1"){
			btnVal = 2 ;
		}
		
		return false;
	});
	
	jQuery(document).on("change", "[name=" + WDDeactivateVars.prefix + "_reasons]", function(){	

		jQuery("." + WDDeactivateVars.prefix +  "_additional_details_wrap").html("");
		jQuery(".wd-" + WDDeactivateVars.prefix + "-deactivate-popup").removeClass("wd-popup-active1 wd-popup-active2");
		if(jQuery(this).val() == "reason_plugin_is_hard_to_use_technical_problems"){

			additionalInfo = '<div class="wd-additional-active"><div><strong>Please describe your issue.</strong></div><br>' +
							'<textarea name="' + WDDeactivateVars.prefix + '_additional_details" cols = "70" rows = "4"></textarea><br>' + 
							'<div>Our support will contact <input type="text" name="' + WDDeactivateVars.prefix + '_email" value="' +WDDeactivateVars.email + '"> shortly.</div>'+
							'<br><div><button class="button button-primary wd-' + WDDeactivateVars.prefix + '-deactivate" data-val="' + btnVal + '">Submit support ticket</button></div></div>';
			jQuery("." + WDDeactivateVars.prefix +  "_additional_details_wrap").append(additionalInfo);
			jQuery(".wd-" + WDDeactivateVars.prefix + "-deactivate-popup").addClass("wd-popup-active1");
			
		}
		else if(jQuery(this).val() == "reason_free_version_limited"){
			additionalInfo = '<div class="wd-additional-active">' + 
								'<div><strong>We believe our premium version will fit your needs.</strong></div>' +
								'<div><a href="' + WDDeactivateVars.plugin_wd_url+ '" target="_blank">Try with 30 day money back guarantee.</a></div>';

			jQuery("." + WDDeactivateVars.prefix +  "_additional_details_wrap").append(additionalInfo);
			jQuery(".wd-" + WDDeactivateVars.prefix + "-deactivate-popup").addClass("wd-popup-active2");			
		}
		else if(jQuery(this).val() == "reason_premium_expensive"){
			additionalInfo = '<div class="wd-additional-active">' + 
								'<div><strong>We have a special offer for you.</strong></div>' +
								'<div>Submit this form to get the offer to <input type="text" name="' + WDDeactivateVars.prefix + '_email" value="' + WDDeactivateVars.email + '"></div>' +
								'<br><div><button class="button button-primary wd-' + WDDeactivateVars.prefix + '-deactivate" data-val="' + btnVal + '">Submit</button></div></div>';

			jQuery("." + WDDeactivateVars.prefix +  "_additional_details_wrap").append(additionalInfo);
			jQuery(".wd-" + WDDeactivateVars.prefix + "-deactivate-popup").addClass("wd-popup-active2");			
		}		

		jQuery("#wd-" + WDDeactivateVars.prefix + "-deactivate").hide();
		jQuery("#wd-" + WDDeactivateVars.prefix + "-submit-and-deactivate").show();

	});
	jQuery(document).on("keyup", "[name=" + WDDeactivateVars.prefix + "_additional_details]", function(){		
		if(jQuery(this).val().trim() || jQuery("[name=" + WDDeactivateVars.prefix + "_reasons]:checked").length > 0){
			jQuery("#wd-" + WDDeactivateVars.prefix + "-deactivate").hide();
			jQuery("#wd-" + WDDeactivateVars.prefix + "-submit-and-deactivate").show();			
		}
		else{
			jQuery("#wd-" + WDDeactivateVars.prefix + "-deactivate").show();
			jQuery("#wd-" + WDDeactivateVars.prefix + "-submit-and-deactivate").hide();			
		}

	});
	jQuery(document).on("click", ".wd-" + WDDeactivateVars.prefix + "-deactivate", function(){
		jQuery("[name=" + WDDeactivateVars.prefix + "_submit_and_deactivate]").val(jQuery(this).attr("data-val"));
		jQuery("#" + WDDeactivateVars.prefix + "_deactivate_form").submit();
 		return false;
	});	

	jQuery(document).on("click", ".wd-" + WDDeactivateVars.prefix + "-cancel, .wd-opacity", function(){
		jQuery(".wd-" + WDDeactivateVars.prefix + "-opacity").hide();
		jQuery(".wd-" + WDDeactivateVars.prefix  + "-deactivate-popup").hide();
		return false;		
	});
});

////////////////////////////////////////////////////////////////////////////////////////
// Public Methods                                                                     //
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
// Getters & Setters                                                                  //
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
// Private Methods                                                                    //
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
// Listeners                                                                          //
////////////////////////////////////////////////////////////////////////////////////////