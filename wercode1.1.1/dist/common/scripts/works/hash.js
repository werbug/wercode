define(["jquery"],function($){
	//事先保存好所有的 hash 值
	var route_url = {};
	var route_reg = [];
	function hash(){
		
		function hashchange(){
			//把 hash 值总的 # 号开头的字符给去掉，剩下的就是需要的值
			var str = location.hash.replace(/^#/,"");
			//标识符
			var state = false;
			//判断字符串路由是否存在
			if(route_url[str]){
				route_url[str](str);
				state = true; //把状态 设置为 true 表示在字符串中的路由找到了匹配结果
			}
			if(state == false){
				//循环遍历 正则路由数据对象
				for(var i=0,len = route_reg.length;i<len;i++){
					var item = route_reg[i];
					//正则测试
					if(item.reg.test(str)){
						item.callback(str);
						break;
					}
				}
			}
		}
		//监听地址栏中的 hash 改变
		$(window).on("hashchange",hashchange);
		
		
		/**
		 * 添加路由
		 * url ： 路由地址
		 * callback ： 触发这个路由所执行的回调函数
		 */
		this.addroute = function(url,callback){
			switch(typeof url){
				case "string":
					//给对象动态添加 key value
					route_url[url] = callback;
					break;
				//正则
				case "object":
					route_reg.push({
						"reg" : url,
						"callback" : callback
					});
					break;
			}
			
		};
		//主动刷新地址栏的值，目的是触发已经绑定的路由事件
		//需求 ： 页面刷新后在显示刷新前的内容
		this.refresh = function(){
			hashchange();
		};
	}
	
	return new hash();
});
