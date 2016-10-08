$("document").ready(function(){
	$(".bcctoolboxtoggle").toggle(
		function(){
			$('#bcctoolbox').animate({
				left: '-=92',
			  }, 500, function() {
				// Animation complete.
			  });
			  $(this).removeClass("icon-chevron-left").addClass("icon-chevron-right");
			  $('#bccbody').animate({
				marginLeft: '0',
			  }, 500, function() {
				// Animation complete.
			  });
			  $('.bccbody_editor').css("border-left-width","0");
			  $("#bccwidgetlist").hide();
		},
		function() {
			$('#bcctoolbox').animate({
				left: '+=92',
			  }, 525, function() {
				// Animation complete.
			  });
			  $(this).removeClass("icon-chevron-right").addClass("icon-chevron-left");
			  $('#bccbody').animate({
				marginLeft: '125px',
			  }, 500, function() {
				// Animation complete.
			  });
			  $('.bccbody_editor').css("border-left-width","3px");
			  $('#bccwidgetlist').show();
		}
	);
	/******   Site Properties resizable ****/
	$("#bccproperties").resizable({
		handles:'w',
		maxWidth:450,
		minWidth:245,
		resize: function(event, ui) {
		  $("#bccbody").css("margin-right",ui.size.width+"px");
		}
	});
	/*********************************/
	$(".bccexpandecollapse").toggle(
		function(){
			$(this).parent().parent().next('div .bccblockcontent').slideUp();
			  $(this).removeClass("icon-chevron-down").addClass("icon-chevron-up");
		}, 
		function() {
			$(this).parent().parent().next('div .bccblockcontent').slideDown();
			  $(this).removeClass("icon-chevron-up").addClass("icon-chevron-down");
		}
	);
	/********* Date Picker ************/
	$('.bcccolorpickercontainer').jPicker(
				{
					images:
					  {
						clientPath: 'img/picker/', // Path to image files
						colorMap: // colorMap size and arrow icon
							{
							  width: 120, // Map width - don't override unless using a smaller image set
							  height: 120, // Map height - don't override unles using a smaller image set
							  arrow:
							  {
								file: 'mappoint.gif', // Arrow icon image file
								width: 15, // Arrow icon width
								height: 15 // Arrow icon height
							  }
							},
						colorBar: // colorBar size and arrow icon
							{
							  width: 20, // Bar width - don't override unless using a smaller image set
							  height: 120, // Bar height - don't override unless using a smaller image set
							  arrow:
							  {
								file: 'rangearrows.gif', // Arrow icon image file
								width: 20, // Arrow icon width
								height: 9 // Arrow icon height
							  }
							},
						picker: // picker icon and size
							{
							  file: 'picker.gif', // Picker icon image file
							  width: 25, // Picker width - don't override unless using a smaller image set
							  height: 24 // Picker height - don't override unless using a smaller image set
							}
					  },
				},
				function(color, context){ },
				function(color, context) {
				  var hex = color.val('hex');
				  $(".bccpreviewblock .bccpreviewblockcontent").css({"color": hex && '#' + hex || 'transparent'});
				  $(".bcccolorpicker input[name='text_color_style_val']").val(hex && '#' + hex || 'transparent');
				  
				  // prevent IE from throwing exception if hex is empty
				}
	);
	
	/**********  Enable Full Screen  **********/
	$(".fullscreen").click(function(){
		var docElm = document.documentElement;
		if (docElm.requestFullscreen) {
			docElm.requestFullscreen();
		}
		else if (docElm.mozRequestFullScreen) {
			docElm.mozRequestFullScreen();
		}
		else if (docElm.webkitRequestFullScreen) {
			docElm.webkitRequestFullScreen();
		}
		else {
			return false;	
		}
	});
	

	/********* End Date Picker*********/
	
	/******   BCC Editor Modal Properties   *******/
	$('.style-tabs li').live("click", function (e) {
		e.preventDefault();
		$(this).tab('show');
		$('.style-tabs li').removeClass("active");
		$(this).addClass("active");
		var reps = {
		  data_gotted: " ",
		  active: " "
		};
		var style_option_choosed = $(this).attr('class').replace(/(\w+)/g, function(s, key) {return reps[key] || s;}).trim();
		if(!$(this).hasClass("data_gotted")) {
			console.log("clicked " + style_option_choosed);
			get_tab_content(style_option_choosed);	
		} else {
			$(".bccstyleoptioncontainer").hide();
			var get_choosed_container = $('.style-tabs li.'+style_option_choosed+' a').attr("href").replace("#","");
			$(".bccmodalstylebody ."+get_choosed_container+"").show();
			switch (style_option_choosed) {
				case "style_color":
					
					break;
				case "style_layout_dimension":
					
					break;
				case "style_font":
					/********* Call jQuery Slider UI **************/
					/****  Text Shadow Horizontal  ***/
					var horizontal_amount = $(".text_shadow_slider input[name='shadow_horizontal_amount']").val();
					$( ".text_shadow_slider .text_shadow_horizontal" ).slider({
						range: "min",
						value: horizontal_amount,
						min: -50,
						max: 50,
						slide: function( event, ui ) {
							var initial_color = $(".bccborderproperties input[name='border_style_color_val']").val();
							$(".bccpreviewblock .bccpreviewblockcontent").css("text-shadow", ""+ui.value+"px "+$(".text_shadow_slider input[name='shadow_vertical_amount']").val()+"px "+$(".text_shadow_slider input[name='shadow_blur_amount']").val()+"px "+initial_color+"");
							$( "input[name='shadow_horizontal_amount']" ).val( $( ".text_shadow_slider .text_shadow_horizontal" ).slider( "value" ) );
						}
					});
					
					/****  Text Shadow Vertical ****/
					$( ".text_shadow_slider .text_shadow_vertical" ).slider({
						range: "min",
						value: 0,
						min: -15,
						max: 15,
						slide: function( event, ui ) {
							var initial_color = $(".bccborderproperties input[name='border_style_color_val']").val();
							$(".bccpreviewblock .bccpreviewblockcontent").css("text-shadow", ""+$(".text_shadow_slider input[name='shadow_horizontal_amount']").val()+"px "+ui.value+"px "+$(".text_shadow_slider input[name='shadow_blur_amount']").val()+"px "+initial_color+"");
							$( "input[name='shadow_vertical_amount']" ).val( $( ".text_shadow_slider .text_shadow_vertical" ).slider( "value" ) );
						}
					});
					
					/**** Text Shadow Blur  ****/
					$( ".text_shadow_slider .text_shadow_blur" ).slider({
						range: "min",
						value: 0,
						min: -10,
						max: 20,
						slide: function( event, ui ) {
							var initial_color = $(".bccborderproperties input[name='border_style_color_val']").val();
							$(".bccpreviewblock .bccpreviewblockcontent").css("text-shadow", ""+$(".text_shadow_slider input[name='shadow_horizontal_amount']").val()+"px "+$(".text_shadow_slider input[name='shadow_vertical_amount']").val()+"px "+ui.value+"px "+initial_color+"");
							$( "input[name='shadow_blur_amount']" ).val( $( ".text_shadow_slider .text_shadow_blur" ).slider( "value" ) );
						}
					});			
					break;
				case "style_border":
					var selected_border_color = $(".bccborderproperties input[name='border_style_color_val']").val();
					$(".border_style_color").wColorPicker({
						initColor: ""+selected_border_color+"",
						color: "blue",
						mode: "hover",
						showSpeed: 200,
						hideSpeed: 200,
						opacity: 0.95,
						onSelect: function(color2){
							$(".bccborderproperties input[name='border_style_color_val']").val(""+color2+"");
							$(".bccpreviewblock .bccpreviewblockcontent").css("border-color", ""+$(".bccborderproperties input[name='border_style_color_val']").val()+"");
						}	
					});
					break;
				case "style_round_corner":
					
					break;
				case "style_shadow":
					
					break;
				case "style_background":
					
					break;
				case "style_list":
					
					break;
				case "style_link":
					
					break;
				default:
					break;
			}
		}
    });
	
	/***** End Modal Properties  *****/
	
	/****************  Start Increment / Decrement Value Field *****************/
		$("input[type='text'].incr_decr_num").live("keydown", function(e) {
			if(!e)
			var e = event;
			var key = e.which ? e.which : e.keyCode;
			if(key == 38) { // up key
			 this.value = parseInt(this.value)+1;
			} else if(key == 40) { // down key
			 if(parseInt(this.value) > 0)
			   this.value = parseInt(this.value)-1;
			} else if(key == 13)  // enter key
			 return true;
			
			return true;
		});
	/***************   End Increment / Decrement Value Field ******************/
	
});

$(window).load(function () {

/****** Preview Mode *******/
	/**** Layout Dimenstion ****/
	$(".bcclayoutdimensions .bccsitelayoutheaderproperties input").live("keydown change", function(e){
		var key = e.which ? e.which : e.keyCode;
		if(key == 38 || key == 40 || key == 13) {
			var get_focused_element = $(".bcclayoutdimensions .bccsitelayoutheaderproperties input:focus").attr("name");
			var layout_width = $(".bcclayoutdimensions .bccsitelayoutheaderproperties input[name='"+get_focused_element+"']").val();
			var get_unit_layout = $("select[name='"+get_focused_element+"_unit'] option:selected").val();
			$(".bccpreviewblock .bccpreviewblockcontent").css(""+get_focused_element+"", ""+layout_width+""+get_unit_layout+"");
		} else {
			return true;
		}
	});
	$(".bcclayoutdimensions .bccsitelayoutheaderproperties .bccsiteposition span").live("click",function(){
		var bcc_layout_position = $(this).attr("class");
		switch(bcc_layout_position) {
			case "right": case "left":
				$(".bccpreviewblock .bccpreviewblockcontent").css({"float":""+bcc_layout_position+"","margin":"0"});
			break;
			case "center":
				$(".bccpreviewblock .bccpreviewblockcontent").css({"margin":"0 auto","float":"none"});	
			break;
			default:
			break;
		}
		$(".bcclayoutdimensions .bccsitelayoutheaderproperties .bccsiteposition span").removeClass("on");
		$(this).addClass("on");
	});
	$(".bcclayoutdimensions .bccsitelayoutheaderproperties select").live("change", function(e){
		var get_selected_unit = $(this).attr("name").slice(0,-"_unit".length);
		var get_selected_value = $(".bcclayoutdimensions .bccsitelayoutheaderproperties input[name='"+get_selected_unit+"']").val();
		var get_selected_unit_value = $(this).val();
		$(".bccpreviewblock .bccpreviewblockcontent").css(""+get_selected_unit+"", ""+get_selected_value+""+get_selected_unit_value+"");
	});
	
	/************  Layout Spacing Preview ************/
	$(".bcclayoutdimensions .bccsitespacingproperties .tab_spacing_content .active input:focus").live("keydown", function(e){
		var key = e.which ? e.which : e.keyCode;
		var get_active_spacing = $(this).parents(".tab-pane").attr("id");
		if ( get_active_spacing == "inner-spacing") {  // Padding
			var active_padding =  $(this).attr("name").slice("padding_".length,$(".bcclayoutdimensions .bccsitespacingproperties .tab_spacing_content .active input:focus").attr("name").length);
			console.log("active_padding::::"+active_padding);
			if(key == 38 || key == 40 || key == 13) {
				var get_padding_unit = $(this).val();
				console.log("get_padding_unit::::"+get_padding_unit);
				$(".bccpreviewblock .bccpreviewblockcontent").css("padding-"+active_padding+"", ""+get_padding_unit+"px");
			} else {
				return true;
			}
			
		} else if ( get_active_spacing == "outer-spacing") {
			var active_margin =  $(this).attr("name").slice("margin_".length,$(".bcclayoutdimensions .bccsitespacingproperties .tab_spacing_content .active input:focus").attr("name").length);
			console.log("active_margin::::"+active_margin);
			if(key == 38 || key == 40 || key == 13) {
				var get_margin_unit = $(this).val();
				console.log("get_margin_unit::::"+get_margin_unit);
				$(".bccpreviewblock .bccpreviewblockcontent").css("margin-"+active_margin+"", ""+get_margin_unit+"px");
			} else {
				return true;
			}
			
		} else {
			return true;
		}
	});
	/***********************  BCC Font Style Preview  ************/
	$(".bccfontproperties .bccicon-block").live("click", function(){
		var font_style_action = $(this).children("i").attr("class").replace("icon-","");
		//var indent_count = 0;
		switch (font_style_action) {
			case "align-left": case "align-center": case "align-right":
				$(".bccfontproperties .bccicon-block").removeClass("active");
				$(this).addClass("active");
				$(".bccpreviewblock .bccpreviewblockcontent").css("text-align", ""+font_style_action.replace("align-","")+"");
				break;
			case "underline": case "line-through":
				if($(this).hasClass("active")) {
					$(this).removeClass("active");
					$(".bccpreviewblock .bccpreviewblockcontent").css("text-decoration", "none");
				} else {
					$(".bccfontproperties .bccicon-block.font_decoration_style").removeClass("active");
					$(this).addClass("active");
					$(".bccpreviewblock .bccpreviewblockcontent").css("text-decoration", ""+font_style_action.replace("align-","")+"");
				}
				break;
			case "indent-left": case "indent-right":
				var indent_val = $(".bccpreviewblock .bccpreviewblockcontent").css("text-indent");
				if ( indent_val == "0px" || indent_val == NaN ) {
					indent_count = 0;
				}
				if(font_style_action == "indent-right") {
					indent_count -=10;
				} else {
					indent_count +=10;
				}
				$(".bccfontproperties .bccicon-block.font_indent_style").removeClass("active");
				$(this).addClass("active");
				$(".bccpreviewblock .bccpreviewblockcontent").css("text-indent", ""+indent_count+"px");
			default:
				break;
		}
		
	});
	$("select[name='text_transform']").live("change", function() {
			$(".bccpreviewblock .bccpreviewblockcontent").css("text-transform", ""+$(this).val()+"");
	});
	/***********************  BCC Border Layout  *****************************/
	$(".bccborderproperties .bccborderblock input:focus").live("keydown", function(e){
		var key = e.which ? e.which : e.keyCode;
		var active_border =  $(this).attr("name").slice("border_".length,$(".bccborderproperties .bccborderblock input:focus").attr("name").length);
		console.log("sdfsdfd "+active_border+" dfdsfdsfs");
		if(key == 38 || key == 40 || key == 13) {
			var get_border_unit = $(this).val();
			$(".bccpreviewblock .bccpreviewblockcontent").css("border-" + active_border + "-width" , ""+get_border_unit+"px")
			$(".bccpreviewblock .bccpreviewblockcontent").css("border-style" , $("select[name='border_style_option'] option:selected").val());
		} else {
			return true;
		}
	});
	$("select[name='border_style_option']").live("change", function(e){
			$(".bccpreviewblock .bccpreviewblockcontent").css({"border-style":""+$("select[name='border_style_option'] option:selected").val()+""});
	});
	/********/
	/***********************  BCC Border Radius Layout  *****************************/
	$(".bccroundcornerscontainer input:focus").live("keydown", function(e){
		var key = e.which ? e.which : e.keyCode;
		var active_border_radius =  $(this).attr("name").slice("radius_".length,$(".bccroundcornerscontainer input:focus").attr("name").length);
		if(key == 38 || key == 40 || key == 13) {
			var get_border_radius_unit = $(this).val();
			console.log(active_border_radius+"+++++++++++++++++++++++++")
			if (active_border_radius == "top-left" && $(".bccroundcornerscontainer input[name='roundcornersstyleall']:checked").length > 0 ) {
				$(".bccpreviewblock .bccpreviewblockcontent").css("border-radius" , "" + $(".bccroundcornerscontainer input[name='radius_top-left']").val() + "px");
				$(".bccroundcornerscontainer input[name='radius_top-right'], .bccroundcornerscontainer input[name='radius_bottom-right'], .bccroundcornerscontainer input[name='radius_bottom-left']").attr("readonly", true);
				$(".bccroundcornerscontainer input").val($(".bccroundcornerscontainer input[name='radius_top-left']").val());
			} else {
				$(".bccpreviewblock .bccpreviewblockcontent").css("border-" + active_border_radius + "-radius" , "" + get_border_radius_unit + "px");	
				$(".bccroundcornerscontainer input[name='radius_top-right'], .bccroundcornerscontainer input[name='radius_bottom-right'], .bccroundcornerscontainer input[name='radius_bottom-left']").attr("readonly", false);
			}
		} else {
			return true;
		}
	});
	$(".bccroundcornerscontainer input[name='roundcornersstyleall']").live("click", function(e){
		if ( !$(this).is(":checked") ) {
			$(".bccroundcornerscontainer input[name='radius_top-right'], .bccroundcornerscontainer input[name='radius_bottom-right'], .bccroundcornerscontainer input[name='radius_bottom-left']").attr("readonly", false);
		}
	});
	$(".bccroundcornerscontainer input[name='roundcornersstyleall']").live("click", function(){
		var border_radius_all_checked = $(this).is(":checked");
		if (border_radius_all_checked) {
			$(".bccroundcornerscontainer input").val($(".bccroundcornerscontainer input[name='radius_top-left']").val());
			$(".bccpreviewblock .bccpreviewblockcontent").css("border-radius" , "" + $(".bccroundcornerscontainer input[name='radius_top-left']").val() + "px");
		} else {
			$(".bccpreviewblock .bccpreviewblockcontent").css("border-radius" , "0px");
		}
	});
	/***********************  Box Shadow Preview **************************/
	$(".bccshadowproperties input[name='shadowpropertiesinner']").live("click", function(e){
		if ( $(this).is(":checked") ) {
			$(".bccpreviewblock .bccpreviewblockcontent").css("box-shadow", "inset "+$(".bccshadowproperties input[name='box_shadow_horizontal_amount']").val()+"px "+$(".bccshadowproperties input[name='box_shadow_vertical_amount']").val()+"px "+$(".bccshadowproperties input[name='box_shadow_blur_amount']").val()+"px "+$(".bccshadowproperties input[name='shadowpropertiescolor_val']").val()+"");
		} else {
			$(".bccpreviewblock .bccpreviewblockcontent").css("box-shadow", ""+$(".bccshadowproperties input[name='box_shadow_horizontal_amount']").val()+"px "+$(".bccshadowproperties input[name='box_shadow_vertical_amount']").val()+"px "+$(".bccshadowproperties input[name='box_shadow_blur_amount']").val()+"px "+$(".bccshadowproperties input[name='shadowpropertiescolor_val']").val()+"");
		}
	});
	/***********************  BCC List Style  *****************************/
	$(".bcclistproperties select[name='listpropertiesstyle']").live("change", function(){
		$(".bccpreviewblock .bccpreviewblockcontent ul, .bccpreviewblock .bccpreviewblockcontent ol").css("list-style" , ""+$(this).val()+"");
	});
	$(".liststyleoptions li a").live("click", function(){
		var blt_class = $(this).attr("class").replace("list_","");
		if (blt_class == "none") {
			$(".bccpreviewblock .bccpreviewblockcontent ul, .bccpreviewblock .bccpreviewblockcontent ol").removeAttr("class");
		} else {
			$(".bccpreviewblock .bccpreviewblockcontent ul, .bccpreviewblock .bccpreviewblockcontent ol").removeAttr("class");
			$(".bccpreviewblock .bccpreviewblockcontent ul, .bccpreviewblock .bccpreviewblockcontent ol").addClass(blt_class);		
		}
	});
	$(".bcclistproperties select[name='listpropertiesposition']").live("change", function(){
		$(".bccpreviewblock .bccpreviewblockcontent ul, .bccpreviewblock .bccpreviewblockcontent ol").css("list-style-position" , ""+$(this).val()+"");
	});
	/***********************  BCC Link Style  *****************************/
	$(".bcclinkproperties .bccstylelinknormal select[name='link_font_weight']").live("change", function(){
		$(".bccpreviewblock a").css("font-weight" , ""+$(this).val()+"");
	});
	$(".bcclinkproperties .bccstylelinknormal .bccicon-block").live("click", function(){
		if ($(this).hasClass("active")) {
			$(this).removeClass("active");
			$(".bccpreviewblock a").css("text-decoration" , "none");
		} else {
			$(this).addClass("active");
			$(".bccpreviewblock a").css("text-decoration" , "underline");
		}
	});
	$(".bcclinkproperties .bccstylelinkhover select[name='link_font_weight']").live("change", function(){
		if ($(this).val() == "bold") {
			$(".bccpreviewblock a").addClass("link_hover_bold");
		} else {
			$(".bccpreviewblock a").removeClass("link_hover_bold");
		}
	});
	$(".bcclinkproperties .bccstylelinkhover select[name='link_hover_color']").live("change", function(){
			$(".bccpreviewblock a").removeClass();
			$(".bccpreviewblock a").addClass(""+$(this).val()+"");
	});
	$(".bcclinkproperties .bccstylelinkhover .bccicon-block").live("click", function(){
		if ($(this).hasClass("active")) {
			$(this).removeClass("active");
			$(".bccpreviewblock a").addClass("link_hover_remove_decoration");
		} else {
			$(this).addClass("active");
			$(".bccpreviewblock a").removeClass("link_hover_remove_decoration");
		}
	});
	
	/***********************  BCC Background Style  *****************************/
	$(".bccbackgroundproperties select[name='backgroundpropertiesrepeat']").live("change", function(){
		$(".bccpreviewblock .bccpreviewblockcontent").css("background-repeat" , ""+$(this).val()+"");
	});
	$(".bccbackgroundproperties select[name='backgroundpropertiesattachment']").live("change", function(){
		$(".bccpreviewblock .bccpreviewblockcontent").css("background-repeat" , ""+$(this).val()+"");
	});
	$(".bccbackgroundproperties select[name='backgroundpropertiesposition']").live("change", function(){
		$(".bccpreviewblock .bccpreviewblockcontent").css("background-repeat" , ""+$(this).val()+"");
	});
	$(".bccbackgroundproperties .bccicon-block").live("click", function(){
		var background_direction = $(this).children("i").attr("class").replace("icon-","");
		$(".bccbackgroundproperties .bccicon-block").removeClass("active");
		$(this).addClass("active");
		var start_color = $(".bccbackgroundproperties input[name='background_start_gradient_val']").val();
		var end_color = $(".bccbackgroundproperties input[name='background_end_gradient_val']").val();
		if (background_direction == "resize-horizontal") {
			$(".bccpreviewblock .bccpreviewblockcontent").css("background-image", "-moz-linear-gradient(top left, "+start_color+" 0%, "+end_color+" "+$(".bccbackgroundproperties input[name='background_gradient_focus_val']").val()+"%)");
		} else {
			$(".bccpreviewblock .bccpreviewblockcontent").css("background-image", "-moz-linear-gradient(top, "+start_color+" 0%, "+end_color+" "+$(".bccbackgroundproperties input[name='background_gradient_focus_val']").val()+"%)");
		}
	});
	/***********************       **************************************/
	
	$("select[name='border_style_option']").live("change", function(e){
			$(".bccpreviewblock .bccpreviewblockcontent").css({"border-style":""+$("select[name='border_style_option'] option:selected").val()+""});
	});
	$(".bccfontproperties select").live("change", function(){
		var font_style_options = $(this).attr("name");
		$(".bccpreviewblock .bccpreviewblockcontent").css(""+font_style_options+"", ""+$(this).val()+"");
		
	});
	/***********************  BCC Style Option Modal  ***********/
	$("a.bccstylemodalproperties").live("click", function(e){
		var style_option = $(this).data("modaloption");
		var modal_id_html = $(this).attr("href").substr(1);// to remove "#" charatcter
		console.log("style_option>>>>"+style_option+"   <<<<modal_id_html>>>>:"+modal_id_html);
		if ( style_option ) {
			$("div#"+modal_id_html+" .tabbable ul li").hide();
			//$("div#"+modal_id_html+" .tab-content .bccmodalstylebody").html("");
			var options_list = new Array();
			options_list = style_option.split(" ");
			for (var i = 0; i < options_list.length; i++) {
				if ( i == 0 ) {
					$("div#"+modal_id_html+" .tabbable ul li.style_"+options_list[i]+"").show().addClass("active");
					if ( !$(".style-tabs li.style_" + options_list[i]).hasClass("data_gotted")) {
						console.log(">>>>> "+"style_"+options_list[i]);
						get_tab_content("style_"+options_list[i]);
					}
				}
				$("div#"+modal_id_html+" .tabbable ul li.style_"+options_list[i]+"").show();
			}
		}
	});
	
	
	/*******************  Reset Modal OPtions On Esc Key ************/
	$( document ).on( 'keydown click', function ( e ) {
		if ( e.keyCode === 27 ) { // ESC
			if ($(".modal").is(":visible")) {
				$(".modal").hide();
				$("div.modal .tabbable ul li").show();
				$("div.modal .tabbable ul li").removeClass("active");
				$("div.modal .tabbable ul li:first").addClass("active");
				//get_tab_content("style_color");
			}
		}
		$(".modal-header .close, .modal-footer .cancel_action").click(function(){
			if ($(".modal").is(":visible")) {
				$(".modal").hide();
				$("div.modal .tabbable ul li").show();
				$("div.modal .tabbable ul li").removeClass("active");
				$("div.modal .tabbable ul li:first").addClass("active");
			}
			//get_tab_content("style_color");
		});
		
	});
	
});


function get_tab_content(tab_id) {
		var modal_style = (tab_id);
		console.log(modal_style);
		function onSuccess(data, status){
			$(".bccstyleoptioncontainer").hide();
			if(!$(".style-tabs li."+tab_id).hasClass("data_gotted")) {
				$(this).addClass("data_gotted");
				$(".bccmodalstylebody").append(data);
			}
			return true;
		}
		function onError(data, status){
		   console.log("error Ajax"+data);
		   return false;
		}
		$.ajaxSetup({async: false});
		$.ajax({
			type: "POST",
			url: "modal_property_manager.php",
			data: 'modal_style='+modal_style,
			dataType: "html",
			success: onSuccess,
			error: onError
		});
		$.ajaxSetup({async: true});
			switch (tab_id) {
				case "style_color":
					
					break;
				case "style_color":
					
					break;
				case "style_layout_dimension":
					
					break;
				case "style_font":
					/********* Call jQuery Slider UI **************/
					/****  Text Shadow Horizontal  ***/
					$( ".text_shadow_slider .text_shadow_horizontal" ).slider({
						range: "min",
						value: 0,
						min: -50,
						max: 50,
						slide: function( event, ui ) {
							var initial_color = $(".text_shadow_color_picker ._wColorPicker_customTarget").css("backgroundColor");
							$(".bccpreviewblock .bccpreviewblockcontent").css("text-shadow", ""+ui.value+"px "+$(".text_shadow_slider input[name='shadow_vertical_amount']").val()+"px "+$(".text_shadow_slider input[name='shadow_blur_amount']").val()+"px "+$(".text_shadow_slider input[name='text_shadow_color_picker_val']").val()+"");
							$( "input[name='shadow_horizontal_amount']" ).val( $( ".text_shadow_slider .text_shadow_horizontal" ).slider( "value" ) );
						}
					});
					/****  Text Shadow Vertical ****/
					$( ".text_shadow_slider .text_shadow_vertical" ).slider({
						range: "min",
						value: 0,
						min: -15,
						max: 15,
						slide: function( event, ui ) {
							var initial_color = $(".text_shadow_color_picker ._wColorPicker_customTarget").css("backgroundColor");
							$(".bccpreviewblock .bccpreviewblockcontent").css("text-shadow", ""+$(".text_shadow_slider input[name='shadow_horizontal_amount']").val()+"px "+ui.value+"px "+$(".text_shadow_slider input[name='shadow_blur_amount']").val()+"px "+$(".text_shadow_slider input[name='text_shadow_color_picker_val']").val()+"");
							console.log();
							$( "input[name='shadow_vertical_amount']" ).val( $( ".text_shadow_slider .text_shadow_vertical" ).slider( "value" ) );
						}
					});
					/**** Text Shadow Blur  ****/
					$( ".text_shadow_slider .text_shadow_blur" ).slider({
						range: "min",
						value: 0,
						min: -10,
						max: 20,
						slide: function( event, ui ) {
							$(".bccpreviewblock .bccpreviewblockcontent").css("text-shadow", ""+$(".text_shadow_slider input[name='shadow_horizontal_amount']").val()+"px "+$(".text_shadow_slider input[name='shadow_vertical_amount']").val()+"px "+ui.value+"px "+$(".text_shadow_slider input[name='text_shadow_color_picker_val']").val()+"");
							$( "input[name='shadow_blur_amount']" ).val( $( ".text_shadow_slider .text_shadow_blur" ).slider( "value" ) );
						}
					});
					$(".text_shadow_color_picker").wColorPicker({
						initColor:""+$(".text_shadow_slider input[name='text_shadow_color_picker_val']").val()+"",
						color: "blue",
						mode: "hover",
						showSpeed: 200,
						hideSpeed: 200,
						opacity: 0.95,
						onSelect: function(color){
							$(".bccpreviewblock .bccpreviewblockcontent").css("text-shadow", ""+$(".text_shadow_slider input[name='shadow_horizontal_amount']").val()+"px "+$(".text_shadow_slider input[name='shadow_vertical_amount']").val()+"px "+$(".text_shadow_slider input[name='shadow_blur_amount']").val()+"px "+color+"");
							$(".text_shadow_slider input[name='text_shadow_color_picker_val']").val(""+color+"");
						}	
					});			
					break;
				case "style_border":
					init_color = $(".bccborderproperties input[name='border_style_color_val']").val();
					$(".border_style_color").wColorPicker({
						initColor: ""+init_color+"",
						color: "blue",
						mode: "hover",
						showSpeed: 200,
						hideSpeed: 200,
						opacity: 0.95,
						onSelect: function(color){
							$(".bccborderproperties input[name='border_style_color_val']").val(""+color+"");
							$(".bccpreviewblock .bccpreviewblockcontent").css("border-color", ""+color+"");
						}	
					});
					break;
				case "style_round_corner":
					
					break;
				case "style_shadow":
					/********* Call jQuery Slider UI **************/
					/****  Text Shadow Horizontal  ***/
					
					$( ".bccshadowproperties .box_shadow_horizontal" ).slider({
						range: "min",
						value: 0,
						min: -50,
						max: 50,
						slide: function( event, ui ) {
							var initial_color = $(".bccshadowproperties input[name='shadowpropertiescolor_val']").val();
							$(".bccpreviewblock .bccpreviewblockcontent").css("box-shadow", ""+ui.value+"px "+$(".bccshadowproperties input[name='box_shadow_vertical_amount']").val()+"px "+$(".bccshadowproperties input[name='box_shadow_blur_amount']").val()+"px "+initial_color+"");
							$( "input[name='box_shadow_horizontal_amount']" ).val( $( ".bccshadowproperties .box_shadow_horizontal" ).slider( "value" ) );
						}
					});
					
					/****  Text Shadow Vertical ****/
					$( ".bccshadowproperties .box_shadow_vertical" ).slider({
						range: "min",
						value: 0,
						min: -15,
						max: 15,
						slide: function( event, ui ) {
							var initial_color = $(".bccshadowproperties input[name='shadowpropertiescolor_val']").val();
							$(".bccpreviewblock .bccpreviewblockcontent").css("box-shadow", ""+$(".bccshadowproperties input[name='box_shadow_horizontal_amount']").val()+"px "+ui.value+"px "+$(".bccshadowproperties input[name='box_shadow_blur_amount']").val()+"px "+initial_color+"");
							console.log();
							$( "input[name='box_shadow_vertical_amount']" ).val( $( ".bccshadowproperties .box_shadow_vertical" ).slider( "value" ) );
						}
					});
					
					/**** Text Shadow Blur  ****/
					$( ".bccshadowproperties .box_shadow_blur" ).slider({
						range: "min",
						value: 0,
						min: -10,
						max: 20,
						slide: function( event, ui ) {
							var initial_color = $(".bccshadowproperties input[name='shadowpropertiescolor_val']").val();
							$(".bccpreviewblock .bccpreviewblockcontent").css("box-shadow", ""+$(".bccshadowproperties input[name='box_shadow_horizontal_amount']").val()+"px "+$(".bccshadowproperties input[name='box_shadow_vertical_amount']").val()+"px "+ui.value+"px "+initial_color+"");
							$( "input[name='box_shadow_blur_amount']" ).val( $( ".bccshadowproperties .box_shadow_blur" ).slider( "value" ) );
						}
					});
					init_color = $(".bccshadowproperties input[name='shadowpropertiescolor_val']").val();
					$(".shadowpropertiescolor").wColorPicker({
						initColor: ""+init_color+"",
						color: "blue",
						mode: "hover",
						showSpeed: 200,
						hideSpeed: 200,
						opacity: 0.95,
						onSelect: function(color3){
							$(".bccshadowproperties input[name='shadowpropertiescolor_val']").val(""+color3+"");
							$(".bccpreviewblock .bccpreviewblockcontent").css("box-shadow", ""+$(".bccshadowproperties input[name='box_shadow_horizontal_amount']").val()+"px "+$(".bccshadowproperties input[name='box_shadow_vertical_amount']").val()+"px "+$(".bccshadowproperties input[name='box_shadow_blur_amount']").val()+"px "+color3+"");
						}	
					});
					break;
				case "style_background":
					var initial_color1 = $(".bccbackgroundproperties input[name='backgroundpropertiescolor_val']").val();
					$(".backgroundpropertiescolor").wColorPicker({
						initColor:""+initial_color1+"", 
						color: "blue",
						mode: "hover",
						showSpeed: 200,
						hideSpeed: 200,
						opacity: 0.95,
						onSelect: function(color4){
							$(".bccbackgroundproperties input[name='backgroundpropertiescolor_val']").val(""+color4+"");
							$(".bccpreviewblock .bccpreviewblockcontent").css("background-color", ""+color4+"");
						}	
					});
					var initial_color2 = $(".bccbackgroundproperties input[name='background_start_gradient_val']").val();
					$(".background_start_gradient").wColorPicker({
						initColor:""+initial_color2+"", 
						color: "blue",
						mode: "hover",
						showSpeed: 200,
						hideSpeed: 200,
						opacity: 0.95,
						onSelect: function(color5){
							var end_color = $(".bccbackgroundproperties input[name='background_end_gradient_val']").val();
							$(".bccbackgroundproperties input[name='background_start_gradient_val']").val(""+color5+"");
							$(".bccpreviewblock .bccpreviewblockcontent").css("background-image", "-moz-linear-gradient(top, "+color5+" 0%, "+end_color+" "+$(".bccbackgroundproperties input[name='background_gradient_focus_val']").val()+"%)");
							
						}	
					});
					var initial_color3 = $(".bccbackgroundproperties input[name='background_end_gradient_val']").val();
					$(".background_end_gradient").wColorPicker({
						initColor:""+initial_color3+"",
						color: "blue",
						mode: "hover",
						showSpeed: 200,
						hideSpeed: 200,
						opacity: 0.95,
						onSelect: function(color6){
							var start_color = $(".bccbackgroundproperties input[name='background_start_gradient_val']").val();
							$(".bccbackgroundproperties input[name='background_end_gradient_val']").val(""+color6+"");
							$(".bccpreviewblock .bccpreviewblockcontent").css("background-image", "-moz-linear-gradient(top, "+start_color+" 0%, "+color6+" "+$(".bccbackgroundproperties input[name='background_gradient_focus_val']").val()+"%)");
						}	
					});
					$( ".bccbackgroundproperties .background_gradient_focus" ).slider({
						range: "min",
						value: 80,
						min: 0,
						max: 100,
						slide: function( event, ui ) {
							$(".bccpreviewblock .bccpreviewblockcontent").css("background-image", "-moz-linear-gradient(top, "+$(".bccbackgroundproperties input[name='background_start_gradient_val']").val()+" 0%, "+$(".bccbackgroundproperties input[name='background_end_gradient_val']").val()+" "+ui.value+"%)");
							$( "input[name='background_gradient_focus_val']" ).val( $( ".bccbackgroundproperties .background_gradient_focus" ).slider( "value" ) );
						}
					});
					break;
				case "style_list":
					
					break;
				case "style_link":
					$(".link_style_color").wColorPicker({
						color: "blue",
						mode: "hover",
						showSpeed: 200,
						hideSpeed: 200,
						opacity: 0.95,
						onSelect: function(color7){
							$(".bcclinkproperties input[name='link_style_color_val']").val(""+color7+"");
							$(".bccpreviewblock .bccpreviewblockcontent a").css("color", ""+color7+"");
						}	
					});
					break;
				default:
					break;
			}
		/***************************/
}
function DrawModalInMiddle(element){
	var getElementWidth = $(element).width();
	var getElementHeight = $(element).height();
	var getScreenWidth = document.documentElement.clientWidth;
	var getScreenHeight = document.documentElement.clientHeight;
	
	var leftDistance = Math.floor((getScreenWidth - getElementWidth)/2) + $(document).scrollLeft();
	var topDistance = Math.floor((getScreenHeight - getElementHeight)/2) + $(document).scrollTop();
	if(getElementHeight > getScreenHeight){
		topDistance += 50;
	}
	$(element).css({left:leftDistance,top:topDistance});
}

function colorToHex(color) {
    if (color.substr(0, 1) === '#') {
        return color;
    }
    var digits = /(.*?)rgb\((\d+), (\d+), (\d+)\)/.exec(color);
    
    var red = parseInt(digits[2]);
    var green = parseInt(digits[3]);
    var blue = parseInt(digits[4]);
    
    var rgb = blue | (green << 8) | (red << 16);
    return digits[1] + '#' + rgb.toString(16);
};
