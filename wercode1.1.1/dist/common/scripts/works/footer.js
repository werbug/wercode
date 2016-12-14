define(["jquery","hash"],function($,hash){
	function footer(){
		
	/*$("body").get[0].addEventListener('ontouchstart', function(){ });*/
	$("footer").on("click","div",function(){
		$(this).css("color","#6DDB4F").siblings().css("color","#333")
	});

	$("#index").on("click",function(){
		window.location.href ="/";
	});
	$("#demo").on("click",function(){
		window.location.href ="#/demo";
	});
	$("#blog").click(function(){
		window.location.href = "#/blog";
	});
	$("#scrawl").click(function(){
		window.location.href = "#/scrawl";
	});
	


//监听window 地址上的 hash 值是否发生改变
	/*hash.addroute("/",function(){
		$("#mainWrapper").load("/index/views/main.html");
		$("#index").css("color","#6DDB4F").siblings().css("color","#333")
	});
*/
	//向 hash 中加入一个自定义的路由地址
	hash.addroute("/demo",function(){
		$("#mainWrapper").load("/demo/html/demoindex.html");
		$("#demo").css("color","#6DDB4F").siblings().css("color","#333")
	});
				
    //向 hash 中加入一个自定义的路由地址
	hash.addroute("/blog",function(){
		$("#mainWrapper").load("/html/user.html");
		$("#blog").css("color","#6DDB4F").siblings().css("color","#333")
	});
				
	//向 hash 中加入一个自定义的路由地址
	hash.addroute("/scrawl",function(){
		$("#mainWrapper").load("/html/other.html");
		$("#scrawl").css("color","#6DDB4F").siblings().css("color","#333")
	});
	
	//   /html/a.html
	//   /html/b.html
	/*hash.addroute("/^\/.*\.html/i",function(){
		$("#wrap").html("最新消息");
	});*/
	
	//主动刷新一次 页面地址栏 hash 值得变化
	hash.refresh();


}// fn footer end
	return new footer();

});

