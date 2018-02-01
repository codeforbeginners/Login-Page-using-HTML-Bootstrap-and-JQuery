$(document).ready(function(){
	$("#signupForm").hide();
	$("#signin").addClass("btn_is_active");


	$("#signup").click(function(){
		$("#loginForm").hide();
		$("#signupForm").show();
		$("#signup").addClass("btn_is_active");
		$("#signin").removeClass("btn_is_active");
	});

	$("#signin").click(function(){
		$("#signupForm").hide();
		$("#loginForm").show();
		$("#signin").addClass("btn_is_active");
		$("#signup").removeClass("btn_is_active");
	});
});