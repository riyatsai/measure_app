function header(left,mid='',right=''){
  return left+mid+right;
}
function indexNav(color,target,text){
  return '<a class="btn '+color+'" href="#'+target+'">'+text+'</a><br><br>';
}
(function(){
	Router = (function(){
		var $router;
		$router = void 0;
		function Router(){
			$router=$('#switchView');
		}

		Router.prototype.page = function(){
		  let tag = (window.location.href.match(/#[a-zA-Z]*/g)==null?null:window.location.href.match(/#[a-zA-Z]*/g)[0].substr(1));
			let text = '';
			var switchView = {
				index:function(){
          let header = window.header('<label style="color:#000;">首頁</label>');
          let body   = '<article style="background:#fafafa;">'+
                          '<center class="indexCenter">'+
                            '<div style="color:#000; width:80%; text-align:left; margin-top:30px;"></div>'+
                            window.indexNav('btn-g','settings','高度設定')+
                            window.indexNav('btn-g','record','記錄')+
                            window.indexNav('btn-p','upload','照片資料檢視')+
                            window.indexNav('btn-p','rawInertia','慣性資料檢視')+
                            window.indexNav('btn-b','view','產出平面、立體圖')+
                            window.indexNav('btn-b','stitch','縫合')+
                          '</center>'+
                        '</article>';
          let footer = '';
          return {header:header,body:body+footer};
				},
				settings:function(){
          let header = window.header('<label class="headerLeft"><a href="#index">< 首頁</a></label>'
                                    ,'<label style="margin-left:-73px; color:#000;">設定參數</label>');
          let body   = '<article style="background:#fafafa;">'+
                          '<center class="indexCenter" style="margin-top:50px;">'+
                           '<label style="color:#000;">身高:<input id="define_height" type="text" value="'+glAllData.height+'" /></label>'+
                           '<label style="color:#000;">機高:<input id="define_mobile_height" type="text" value="'+glAllData.phoneHeight+'" /></label>'+
                           '<button class="btn btn-b" onclick="setHeight()">設定</button>'+
                          '</center>'+
                       '</article>';
          let footer = '';
          return {header:header,body:body+footer};
				},
				inertia:function(){
				} ,
        rawInertia:function(){
          let header = window.header('<label class="headerLeft"><a href="#index">< 首頁</a></label>'
                                    ,'<label style="margin-left:-73px; color:#000;">慣性資料檢視</label>');
          let body   = '<article style="background:#fafafa; color:#000; height:602px; overflow-y:auto;"></article>';
          let footer = '';
          return {header:header,body:body+footer};
        },
				record:function(){
          if(glAllData['height']==''
          || glAllData['height']==null
          || glAllData['height']==undefined){
            navigator.notification.alert('請設定身高才能使用相機功能',function(){
              window.location.href = '#index';
              //switchView['index'].apply();
            },'錯誤訊息','確定');
          }
          else{
            let header = window.header(''
                                      ,'<label style="margin-left:80px; color:#000;">擷取資料</label>'
                                      ,'<button class="btn btn-b" style="float:right; margin-top:22px; margin-right:25px;" onclick="endSpace()">完成</button>');
            let body   ='<div class="aim"><label>+</label></div>'+
                        '<article>'+
                          '<section class="flex">'+
                          '<ul>'+
                            '<li>Orientation</li>'+
                            '<li>alpha:<span id="alpha"></span></li>'+
                            '<li>beta:<span id="beta"></span></li>'+
                            '<li>gamma:<span id="gamma"></span></li>'+
                          '</ul>'+
                          '<ul>'+
                            '<li>Acceleration</li>'+
                            '<li>X:<span id="x2"></span></li>'+
                            '<li>Y:<span id="y2"></span></li>'+
                            '<li>Z:<span id="z2"></span></li>'+
                          '</ul>'+
                          '<ul>'+
                            '<li>Acceleration(G)</li>'+
                            '<li>X:<span id="x"></span></li>'+
                            '<li>Y:<span id="y"></span></li>'+
                            '<li>Z:<span id="z"></span></li>'+
                          '</ul>'+
                        '</section>'+
                        '<div id="time"></div>'+
                        '</br></br>'+
                      '</article>';
              let footer = '<footer>'+
                            '<a class="pictures" onclick="endSpace()"><img id="originalPicture" height="70px" /></a>'+
                            '<button class="btn btn-g" style="margin-top:29px; margin-left:25px" id="takePictureButton">take picture</button>'+
                            '<button class="btn btn-b" style="margin-top:29px; float:right; margin-right:40px;" onclick="nextSpace()">下一間</a>'+
                           '</footer>';
              return {header:header,body:body+footer};
          }
				},
        upload:function(){
            let header = window.header('<label class="headerLeft"><a href="#index">< 首頁</a></label>'
                                      ,'<label style="color:#000;">照片資料檢視</label>'
                                      ,'<button class="btn btn-b" style="float:right; margin-top:22px; margin-right:25px;" onclick="fileUpload()">上傳</button>');
            let body   = '<article id="fileList" style="background:#fafafa; color:#000; height:602px; overflow-y:auto;"></article>';
            let footer = '';
            return {header:header,body:body+footer};
				},
        view:function(){
            let header = window.header('<label class="headerLeft"><a href="#index">< 首頁</a></label>'
                                      ,'<label style="color:#000;">產出平面、立體圖</label>'
                                      ,'<button class="btn btn-b" style="float:right; margin-top:22px; margin-right:25px;" onclick="fileCalculate()">計算</button>');
            let body   = '<article id="fileList" style="background:#fafafa; color:#000; height:602px; overflow-y:auto;">'+
                            createCanvas()+
                          '</article>';
            let footer = '';
            return {header:header,body:body+footer};
        },
        stitch:function(){
            let header = window.header('<label class="headerLeft"><a href="#index">< 首頁</a></label>');
            let body   = JSON.stringify(glAllData);
            let footer = '';
            return {header:header,body:body+footer};
        }
			};
			text = (switchView[tag]==undefined?switchView['index'].call():switchView[tag].call());
      $('header').html(text['header']);
      $router.fadeOut('slow',function(){
					$router.fadeIn('slow').html(text['body']);
          if(tag=='record'){
             fileData.init();
             gyro.init();
             camera.init();
          }
          else{
            camera.stopCamera();
          }
          if(tag=='upload'){
            fileData.init();
          }
			});
			return true;
		};

		Router.prototype.currentPage = function(){
		    return (window.location.href.match(/#[a-zA-Z]*/g)==null?null:window.location.href.match(/#[a-zA-Z]*/g)[0].substr(1));
		}

		return Router;
	})();
    $(function() {
		window.router = new Router();
	});
}).call(this);

$(document).ready(function(){
    router.page();
});
$(window).on('hashchange', function() {
	router.page();
});

function nextSpace(){
  sessionStorage.setItem('index',parseInt(glAllData.space.length));
  window.location.href = "#inertia";
}
function endSpace(){
  sessionStorage.setItem('index',parseInt(glAllData.space.length));
  window.location.href = "#upload";
}
function createCanvas(){
    let l = glAllData.space.length;
    let str = '';
    for(let i=0;i<l;i++){
      str+='<center style="background:#4286f4; color:#fff;">GROUP '+(i+1)+'</center>'+
           '<canvas id="2d_canvas_'+i+'" width="337.5" height="253"></canvas>'+
           '<canvas id="3d_canvas_'+i+'" width="337.5" height="253"></canvas>';
    }
    return str;
}
function setHeight(){
  glAllData.height = $('#define_height').val();
  glAllData.phoneHeight = $('#define_mobile_height').val();
  fileData.export(glFileEntry,JSON.stringify(glAllData));
  window.location.href = "#index";
}

function DOMfileBlock(data,index,index2){
  return '<div class="domBlock">'+
            DOMfileImg(data.img)+
            DOMfileData(data)+
            DOMfileProcess(index,index2)+
         '</div>';
}
function DOMfileImg(path){
  return '<img src="data:image/jpeg;base64,'+path+'"/>';
}
function DOMfileData(data){
  return    '<ul>'+
              '<li>Acceleration</li>'+
              '<li>X:<span>'+data.x+'</span></li>'+
              '<li>Y:<span>'+data.y+'</span></li>'+
              '<li>Z:<span>'+data.z+'</span></li>'+
            '</ul>'+
            '<ul>'+
              '<li>Acceleration(G)</li>'+
              '<li>X:<span>'+data.xG+'</span></li>'+
              '<li>Y:<span>'+data.yG+'</span></li>'+
              '<li>Z:<span>'+data.zG+'</span></li>'+
            '</ul>'+
            '<ul>'+
              '<li>Orientation</li>'+
              '<li>alpha:<span>'+data.a+'</span></li>'+
              '<li>beta:<span>'+data.b+'</span></li>'+
              '<li>gamma:<span>'+data.g+'</span></li>'+
            '</ul>'+
            '<ul>'+
              '<li>Coordinate</li>'+
              '<li>X:<span>'+data.real.cx+'</span></li>'+
              '<li>Y:<span>'+data.real.cy+'</span></li>'+
              '<li>dis:<span>'+data.real.distance+'</span></li>'+
            '</ul>';
}
function DOMfileProcess(index,index2){
  return '<center><button class="btn btn-danger" onclick="fileRemove('+index+','+index2+')">刪除</button></center>';
}
