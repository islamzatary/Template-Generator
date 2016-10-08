<?php
/******************
Style Chooser Blocks & 
******************/
if (isset($_POST['modal_style'])) {
	$modal_style = $_POST['modal_style'];
	switch($modal_style) {
		case "style_color":
			echo '
				<div class="bccstyleoptioncontainer bcccolorpicker">
					<div class="bcccolorpickercontainer"></div>
					<input type="hidden" name="text_color_style_val" value="#333333" />
				</div>
			';
			break; 
		case "style_layout_dimension":
			echo '
				<div class="bccstyleoptioncontainer bcclayoutdimensions">
					<div class="bccsitelayoutheaderproperties">
						<span>Width</span>
						<input type="text" maxlength="4" value="0" name="width" class="incr_decr_num" />
						<select name="width_unit">
							<option value="px">px</option>
							<option value="%">%</option>
						</select>
						&nbsp;&nbsp;&nbsp;
						<span>Height</span>
						<input type="text" maxlength="4" value="0" name="height" class="incr_decr_num"  />
						<select name="height_unit">
							<option value="px">px</option>
							<option value="%">%</option>
						</select>
						 &nbsp;&nbsp;&nbsp;
						<span>Site Position</span>
						<span class="bccsiteposition">
							<span class="left">L</span>
							<span class="on center">C</span>
							<span class="right">R</span>
						</span>    
					</div>
					<div class="bccsitespacingproperties">
						<div class="tabbable"> <!-- Only required for left/right tabs -->
							<ul class="nav nav-tabs tab_spacing_list">
								<li class="active tab_inner-spacing"><a href="#inner-spacing" data-toggle="tab">Inner Spacing</a></li>
								<li class="tab_outer-spacing"><a href="#outer-spacing" data-toggle="tab">Outer Spacing</a></li>
							</ul>
							<div class="tab-content tab_spacing_content">
								<div class="tab-pane active" id="inner-spacing">
									<div class="bccspacingview">
										<span><input type="text" name="padding_left" value="0" maxlength="3" class="incr_decr_num" /></span>
										<span><img src="img/spacing.jpg" alt="" /></span>
										<span><input type="text" name="padding_right" value="0" maxlength="3" class="incr_decr_num" /></span>
										<span style="top:0px;position:absolute;left:40%;"><input type="text" name="padding_top" value="0" maxlength="3" class="incr_decr_num" /></span>
										<span style="position:absolute;bottom:0px;left:40%;"><input type="text" name="padding_bottom" value="0" maxlength="3" class="incr_decr_num" /></span>
									</div>
								</div>
								<div class="tab-pane" id="outer-spacing">
									<div class="bccspacingview">
										<span><input type="text" name="margin_left" value="0" maxlength="3" class="incr_decr_num" /></span>
										<span><img src="img/spacing.jpg" alt="" /></span>
										<span><input type="text" name="margin_right" value="0" maxlength="3" class="incr_decr_num" /></span>
										<span style="top:0px;position:absolute;left:40%;"><input type="text" name="margin_top" value="0" maxlength="3" class="incr_decr_num" /></span>
										<span style="position:absolute;bottom:0px;left:40%;"><input type="text" name="margin_bottom" value="0" maxlength="3" class="incr_decr_num" /></span>
									</div>
								</div>
							</div>
						</div>
					</div>
					
				</div>
			'; 
			break;
		case "style_font":
			echo '
				<div class="bccstyleoptioncontainer bccfontproperties">
					<div class="bccfontpropertiesheader bottom-dotted-border">
						<span class="bccicon-block font_align_style active"><i class="icon-align-left"></i></span><span class="bccicon-block font_align_style">
						<i class="icon-align-center"></i></span><span class="bccicon-block font_align_style">
						<i class="icon-align-right"></i></span><span class="bccicon-block">
						<i class="icon-text-height"></i></span><select name="text_height">
							<option value="12px" selected="selected">12px</option>
							<option value="13px">13px</option>
							<option value="12px">14px</option>
							<option value="12px">15px</option>
							<option value="12px">16px</option>
							<option value="12px">17px</option>
							<option value="12px">18px</option>
						</select><span class="bccicon-block">
						<i class="icon-text-width"></i></span><select name="text_width">
							<option value="12px" selected="selected">12px</option>
							<option value="13px">13px</option>
							<option value="12px">14px</option>
							<option value="12px">15px</option>
							<option value="12px">16px</option>
							<option value="12px">17px</option>
							<option value="12px">18px</option>
						</select><span class="bccicon-block font_decoration_style active">
						<i class="icon-underline"></i></span><span class="bccicon-block font_decoration_style">
						<i class="icon-line-through"></i></span><span class="bccicon-block font_indent_style">
						<i class="icon-indent-left"></i></span><span class="bccicon-block font_indent_style">
						<i class="icon-indent-right"></i></span>
					</div>
					<div class="bottom-dotted-border">
						<div class="bccblocksfield-cols">
							<label>Font Family</label>
							<select name="font-family">
								<option value="Arial">Arial</option>
								<option value="Courier New">Courier New</option>
								<option value="Times New Roman">Times New Roman</option>
								<option value="Comic Sans">Comic Sans</option>
								<option value="Impact">Impact</option>
								<option value="Georgia">Georgia</option>
								<option value="Trebuchet">Trebuchet</option>
								<option value="Verdana">Verdana</option>
								<option value="Tahoma">Tahoma</option>							
							</select>
						</div>
						<div class="bccblocksfield-cols">
							<label>Font Style</label>
							<select name="font-style">
								<option value="normal">Normal</option>
								<option value="italic">Italic</option>
							</select>
						</div>
						<div class="bccblocksfield-cols">
							<label>Font Size</label>
							<select name="font-size">
								<option value="10px">10px</option>
								<option value="11px">11px</option>
								<option value="12px" selected="selected">12px</option>
								<option value="13px">13px</option>
								<option value="14px">14px</option>
								<option value="16px">16px</option>
								<option value="18px">18px</option>
								<option value="20px">20px</option>
								<option value="24px">24px</option>
							</select>
						</div>
						<div class="bccblocksfield-cols">
							<label>Font Weight</label>
							<select name="font-weight">
								<option value="normal" selected="selected">Normal</option>
								<option value="bold">Bold</option>
							</select>
						</div>       
					</div>
					<div class="bottom-dotted-border" style="overflow:visible;padding:0 0 15px 0;">
						<div class="text_shadow_slider">
							<p>Text Shadow:</p>
							<span class="l" style="width:33%;">
								Horizontal
								<input type="text" value="0" name="shadow_horizontal_amount" class="incr_decr_num" readonly="readonly" />
								<span class="text_shadow_horizontal" style="display:inline-block;width:72px;"></span>
							</span>
							<span class="l" style="width:30%;">
								Vertical
								<input type="text" value="0" name="shadow_vertical_amount" class="incr_decr_num" readonly="readonly" />
								<span class="text_shadow_vertical" style="display:inline-block;width:72px;"></span>
							</span>
							<span class="l" style="width:27%;">
								Blur
								<input type="text" value="0" name="shadow_blur_amount" class="incr_decr_num" readonly="readonly" />
								<span class="text_shadow_blur" style="display:inline-block;width:72px;"></span>
							</span>
							<span class="l" style="width:10%;">
								<span class="text_shadow_color_picker color_picker"></span>
								<input type="hidden" name="text_shadow_color_picker_val" value="#333333" />
							</span>
						</div>
						<br />
					</div>
					<div class="bccblockmarginbottom">
						Text Transform: &nbsp;
						<select name="text_transform">
							<option value="none">none</option>
							<option value="lowercase">Lowercase</option>
							<option value="uppercase">Uppercase</option>
							<option value="capitalize">Capitalize</option>
						</select>
					</div>
					
				</div>
			';
			break;
		case "style_border":
			echo '
				<div class="bccstyleoptioncontainer bccborderproperties">
					<div class="bccborderpropertiescontainer">
						<fieldset>
							<div>
								<h4>Style</h4>
								<p>
									<select name="border_style_option">
										<option value="solid">Solid</option>
										<option value="dotted">Dotted</option>
										<option value="dashed">Dashed</option>
									</select>
								</p>
							</div>
							<div>
								<h4>Color</h4>
								<p>
									<span class="border_style_color color_picker"></span>
									<input type="hidden" name="border_style_color_val" value="#999999" />
								</p>
							</div>
							<div class="hide">
								<h4>Top-Width</h4>
								<p>
									<select name="border_top_width">
										<option value="1">1px</option>
										<option value="2">2px</option>
										<option value="3">3px</option>
										<option value="4">4px</option>
										<option value="5">5px</option>
										<option value="6">6px</option>
									</select>
								</p>
							</div>
							<div class="hide">
								<h4>Right-Width</h4>
								<p>
									<select name="border_top_width">
										<option value="1">1px</option>
										<option value="2">2px</option>
										<option value="3">3px</option>
										<option value="4">4px</option>
										<option value="5">5px</option>
										<option value="6">6px</option>
									</select>
								</p>
							</div>
							<div class="hide">
								<h4>Bottom-Width</h4>
								<p>
									<select name="border_top_width">
										<option value="1">1px</option>
										<option value="2">2px</option>
										<option value="3">3px</option>
										<option value="4">4px</option>
										<option value="5">5px</option>
										<option value="6">6px</option>
									</select>
								</p>
							</div>
							<div class="hide">
								<h4>Left-Width</h4>
								<p>
									<select name="border_top_width">
										<option value="1">1px</option>
										<option value="2">2px</option>
										<option value="3">3px</option>
										<option value="4">4px</option>
										<option value="5">5px</option>
										<option value="6">6px</option>
									</select>
								</p>
							</div>
						</fieldset>
						<div class="bccborderblock">
							<span><input type="text" name="border_left" value="0" maxlength="3" class="incr_decr_num" /></span>
							<span><img src="img/spacing.jpg" alt="" /></span>
							<span><input type="text" name="border_right" value="0" maxlength="3" class="incr_decr_num" /></span>
							<span style="top:0px;position:absolute;left:40%;"><input type="text" name="border_top" value="0" maxlength="3" class="incr_decr_num" /></span>
							<span style="position:absolute;bottom:0px;left:40%;"><input type="text" name="border_bottom" value="0" maxlength="3" class="incr_decr_num" /></span>
						</div>
						<br />
					</div>
				</div>
			';
			break;
		case "style_round_corner":
			echo '
				<div class="bccstyleoptioncontainer bccroundcorners">
					<div class="bccroundcornerscontainer bccblockmarginbottom">
						<p>
							<input type="checkbox" name="roundcornersstyleall" value="" />
							Same for all
						</p>
						<div class="c bccblockmarginbottom" style="padding:20px 0;">
							Corner1 <input type="text" name="radius_top-left" value="0" class="incr_decr_num" />px &nbsp;&nbsp;
							Corner2 <input type="text" name="radius_top-right" value="0" class="incr_decr_num" />px
							</div>
						<div class="c" style="padding:20px 0;">
							Corner3 <input type="text" name="radius_bottom-right" value="0" class="incr_decr_num" />px &nbsp;&nbsp;
							Corner4 <input type="text" name="radius_bottom-left" value="0" class="incr_decr_num" />px
						</div>
					</div>
					
				</div>
			';
			break;
		case "style_shadow":
			echo '
				<div class="bccstyleoptioncontainer bccshadowproperties">
					<div class="bccshadowpropertiescontainer bccblockmarginbottom">
						<fieldset>
							<div>
								<h4>Color</h4>
								<p>
									<span class="shadowpropertiescolor"></span>
									<input type="hidden" name="shadowpropertiescolor_val" value="#999999" />
								</p>
							</div>
							<div>
								<h4>Blur</h4>
								<div>
									<div class="box_shadow_blur" style="margin:7px 0;"></div>
									<input type="text" value="0" name="box_shadow_blur_amount" class="incr_decr_num hide" readonly="readonly" style="width:20px;" />									
								</div>
							</div>
							<div>
								<h4>Vertical Shadow</h4>
								<div>
									<div class="box_shadow_vertical" style="margin:7px 0;"></div>
									<input type="text" value="0" name="box_shadow_vertical_amount" class="incr_decr_num hide" readonly="readonly" style="width:20px;" />
								</div>
							</div>
							<div>
								<h4>Horizontal Shadow</h4>
								<div>
									<div class="box_shadow_horizontal" style="margin:7px 0;"></div>
									<input type="text" value="0" name="box_shadow_horizontal_amount" class="incr_decr_num hide" readonly="readonly" style="width:20px;" />
								</div>
							</div>
						</fieldset>
						<p>
							<input type="checkbox" name="shadowpropertiesinner" /> Inner Shadow
						</p>
					</div>
					
				</div>
			';
			break;
		case "style_background":
			echo '
				<div class="bccstyleoptioncontainer bccbackgroundproperties">
					<div class="bccbackgroundpropertiescontainer bccblockmarginbottom">
						<fieldset>
							<div>
								<h4>Background Color:</h4>
								<p>
									<span class="backgroundpropertiescolor"></span>
									<input type="hidden" name="backgroundpropertiescolor_val" value="#999999" />
								</p>
							</div>
							<div>
								<h4>Background Image:</h4>
								<p>
									<input type="file" name="backgroundpropertiesimg" />
								</p>
							</div>
							<div>
								<h4>Background Repeat:</h4>
								<p>
									<select name="backgroundpropertiesrepeat">
										<option value="no-repeat">No Repeat</option>
										<option value="repeat">Repeat</option>
										<option value="repeat-x">Horizontal Repeat</option>
										<option value="repeat-y">Vertical Repeat</option>
									</select>
								</p>
							</div>
							<div>
								<h4>Background Attachment:</h4>
								<p>
									<select name="backgroundpropertiesattachment">
										<option value="fixed">Fixed</option>
										<option value="scroll">Scroll</option>
									</select>
								</p>
							</div>
							<div>
								<h4>Background Position:</h4>
								<p>
									<select name="backgroundpropertiesposition">
										<option value="top_center">Top Center</option>
										<option value="top_left">Top Left</option>
										<option value="top_right">Top Right</option>
										<option value="center_center">Center Center</option>
										<option value="center_left">Center Left</option>
										<option value="center_right">Center Right</option>
										<option value="bottom_center">Bottom Center</option>
										<option value="bottom_left">Bottom Left</option>
										<option value="bottom_right">Bottom Right</option>
									</select>
								</p>
							</div>
							<div>
								<h4>Gradient:</h4>
								<p>
									<span class="l" style="width:32%;">Start Color:&nbsp;&nbsp;<span class="background_start_gradient"></span>
																					<input type="hidden" name="background_start_gradient_val" value="#999999" />
																					</span>
									<span class="l" style="width:31%;">End Color:&nbsp;&nbsp;<span class="background_end_gradient"></span>
																				  <input type="hidden" name="background_end_gradient_val" value="#999999" />
																				  </span>
									<span class="l" style="width:37%;">Direction:  <span class="bccicon-block"><i class="icon-resize-horizontal"></i></span>
																				   <span class="bccicon-block active"><i class="icon-resize-vertical"></i></span>
									</span>
									<span style="margin:5px 0;display:inline-block;vertical-align:top;">Focus Direction: </span>
									<span class="background_gradient_focus clear" style="width:250px;display:inline-block;margin:7px 0"></span>
									<input type="hidden" name="background_gradient_focus_val" value="80" />
									<br class="clear" />
								</p>
							</div>
						</fieldset>
					</div>
				</div>
			';
			break;
		case "style_list":
			echo '
				<div class="bccstyleoptioncontainer bcclistproperties">
					<div class="bcclistpropertiescontainer bccblockmarginbottom">
						<fieldset>
							<div>
								<h4>Bullet Style:</h4>
								<p>
									<select name="listpropertiesstyle">
										<option value="none">None</option>
										<option value="circle">Circle</option>
										<option value="disc">Disc</option>
										<option value="square">Square</option>
									</select>
								</p>
							</div>
							<div>
								<h4>Bullet Image:</h4>
								<div>
									<div class="listpropertiesstyle btn-group" style="padding:0;">
									  <button class="btn" style="padding:4px 60px;">Choose One</button>
									  <button data-toggle="dropdown" class="btn dropdown-toggle" style="padding-bottom:11px;"><span class="caret"></span></button>
									  <ul class="dropdown-menu liststyleoptions">
									    <li class="active"><a href="javascript:;" class="list_none">None</a></li>
										<li><a href="javascript:;" class="list_blt_1"><i class="icon-star"></i></a></li>
										<li><a href="javascript:;" class="list_blt_2"><i class="icon-star-empty"></i></a></li>
										<li><a href="javascript:;" class="list_blt_3"><i class="icon-ok"></i></a></li>
										<li><a href="javascript:;" class="list_blt_4"><i class="icon-move"></i></a></li>
										<li><a href="javascript:;" class="list_blt_5"><i class="icon-chevron-right"></i></a></li>
									  </ul>
									</div>
									<br class="clear" />
									<p>Or Upload Your Icon</p>
									<p style="padding:0"><input type="file" name="bullet_icon" /></p>
								 </div>
							</div>
						</fieldset>
					</div>
					
				</div>
			';
			break;
		case "style_link":
			echo '
				<div class="bccstyleoptioncontainer bcclinkproperties">
					<div class="bcclinkpropertiescontainer bccblockmarginbottom">
						<div class="l bccstylelinknormal" style="width:50%">
							<h4>Link Style</h4>
							<fieldset>
								<div>
								<h4>Font Weight:</h4>
								<p>
									<select name="link_font_weight">
										<option value="normal">Normal</option>
										<option value="bold">Bold</option>
									</select>
								</p>
								</div>
								<div>
									<h4>Color:</h4>
									<p>
										<span class="link_style_color"></span>
										<input type="hidden" value="#999999" name="link_style_color_val" />
									</p>
								</div>
								<div>
									<h4>&nbsp;</h4>
									<p><span class="bccicon-block"><i class="icon-underline"></i></span></p>
								</div>
							</fieldset>
						</div>
						<div class="l bccstylelinkhover" style="width:50%">
							<h4>Hover Style</h4>
							<fieldset>
								<div>
								<h4>Font Weight:</h4>
								<p>
									<select name="link_font_weight">
										<option value="normal">Normal</option>
										<option value="bold">Bold</option>
									</select>
								</p>
								</div>
								<div>
									<h4>Color:</h4>
									<p>
										<select name="link_hover_color">
											<option value="">None</option>
											<option value="link_hover_gray"><span class="">link_hover_gray</span></option>
											<option value="link_hover_blue"><span class="">link_hover_blue</span></option>
										</select>
									</p>
								</div>
								<div>
									<h4>&nbsp;</h4>
									<p><span class="bccicon-block active"><i class="icon-underline"></i></span></p>
								</div>
							</fieldset>
						</div>
						<br class="clear" />
					</div>
				</div>
			';
			break;
		default:
			echo "No data Found!!";
			break;
	}
}
/******************
Style Chooser Blocks & 
******************/
if (isset($_POST['template_chooser'])) {
	$template_chooser = $_POST['template_chooser'];
	switch($template_chooser) {
		case "color_block_yellow":
			echo '
				<div class="bcctemplateblock active">
					<img src="img/ready_templates/yellow/ready_template_1.jpg" alt="Template 1" width="285" height="225" />
					<a href="#chooseTemplate" data-toggle="modal" data-modaloption="yellow/ready_template_1_large.jpg" class="icon-zoom-in"></a>
				</div>
				 <div class="bcctemplateblock">
					<img src="img/ready_templates/yellow/ready_template_2.jpg" alt="Template 2" width="285" height="225" />
					<a href="#chooseTemplate" data-toggle="modal" data-modaloption="yellow/ready_template_1_large.jpg" class="icon-zoom-in"></a>
				</div>
				 <div class="bcctemplateblock">
					<img src="img/ready_templates/yellow/ready_template_1.jpg" alt="Template 1" width="285" height="225" />
					<a href="#chooseTemplate" data-toggle="modal" data-modaloption="yellow/ready_template_1_large.jpg" class="icon-zoom-in"></a>
				 </div>
				<div class="bcctemplateblock">
					<img src="img/ready_templates/yellow/ready_template_1.jpg" alt="Template 1" width="285" height="225" />
					<a href="#chooseTemplate" data-toggle="modal" data-modaloption="yellow/ready_template_1_large.jpg" class="icon-zoom-in"></a>
				</div>
				<div class="bcctemplateblock">
					<img src="img/ready_templates/yellow/ready_template_1.jpg" alt="Template 1" width="285" height="225" />
					<a href="#chooseTemplate" data-toggle="modal" data-modaloption="yellow/ready_template_1_large.jpg" class="icon-zoom-in"></a>
				</div>
			';
		break;
		default:
			echo '
				<div class="bcctemplateblock active">
					<img src="img/ready_templates/default/ready_template_1.jpg" alt="Template 1" width="285" height="225" />
					<a href="#chooseTemplate" data-toggle="modal" data-modaloption="default/ready_template_1_large.jpg" class="icon-zoom-in"></a>
				</div>
				 <div class="bcctemplateblock">
					<img src="img/ready_templates/default/ready_template_2.jpg" alt="Template 2" width="285" height="225" />
					<a href="#chooseTemplate" data-toggle="modal" data-modaloption="default/ready_template_1_large.jpg" class="icon-zoom-in"></a>
				</div>
				 <div class="bcctemplateblock">
					<img src="img/ready_templates/default/ready_template_1.jpg" alt="Template 1" width="285" height="225" />
					<a href="#chooseTemplate" data-toggle="modal" data-modaloption="default/ready_template_1_large.jpg" class="icon-zoom-in"></a>
				 </div>
				<div class="bcctemplateblock">
					<img src="img/ready_templates/default/ready_template_1.jpg" alt="Template 1" width="285" height="225" />
					<a href="#chooseTemplate" data-toggle="modal" data-modaloption="default/ready_template_1_large.jpg" class="icon-zoom-in"></a>
				</div>
				<div class="bcctemplateblock">
					<img src="img/ready_templates/default/ready_template_1.jpg" alt="Template 1" width="285" height="225" />
					<a href="#chooseTemplate" data-toggle="modal" data-modaloption="default/ready_template_1_large.jpg" class="icon-zoom-in"></a>
				</div>
			';
		break;
	}
}
?>