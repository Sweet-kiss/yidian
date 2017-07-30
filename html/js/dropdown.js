	$(function(){
		var _this1=null;
		$('.menu_y>li').hover(function(){
			console.log("hh");
			_this1=$(this);
			_this1.find('.drop_down').show();
			var _this2=null;
			_this1.find('.drop_down').find('li').hover(function(){
				_this2=$(this);
				_this2.find('.drop_down').show();
				_this2.find('.drop_down').hover(function(){
					$(this).show();
				},function(){
					$(this).hide();
				});
			},function(){
				_this2.find('.drop_down').hide();
			});
		},function(){
			_this1.find('.drop_down').hide();
		});
	});