

document.body.onclick=function(e){
	var target = e.target;
	if(target.tagName==='BUTTON' && target.name==='action' && target.value==='like'){
		var number = +target.getAttribute('data-number');
		if(target.classList.contains('active')){
			target.classList.remove('active');
			number--;
		}else{
			target.classList.add('active');
			number++;
		}
		target.setAttribute('data-number',number);

		// e.preventDefault();
	}
};

(function(contents){
	if(contents.length!==2){
		return;
	}
	if(contents[0].offsetTop!==contents[1].offsetTop){
		return;
	}

	var imgs1 = contents[0].querySelectorAll('img');
	var imgs2 = contents[1].querySelectorAll('img');

	if(!imgs1.length){
		return;
	}
	if(imgs1.length!==imgs2.length){
		return;
	}

	var simpleP=document.createElement('p');
	simpleP.innerHTML='
';

	for(var index = 0;index0){
			p = imgs2[index].parentNode;

		}else{
			number*=-1;
			p = imgs1[index].parentNode;
		}
		while(number--)p.parentNode.insertBefore(simpleP.cloneNode(1),p);
	}
})(document.querySelectorAll('.func-anibaka-single-box .content-box'));

(function(HTML){
	var schemeSwitchBtn = document.createElement('div');
	schemeSwitchBtn.innerHTML='切换皮肤';
	schemeSwitchBtn = schemeSwitchBtn.children[0];

	document.body.appendChild(schemeSwitchBtn);



	if(window.localStorage){
		if(localStorage.schemeName){
			HTML.setAttribute('data-color-scheme',localStorage.schemeName);
		}
	}

	schemeSwitchBtn.onclick=function(){
		var nowSchemeName = HTML.getAttribute('data-color-scheme');
		var newSchemeName = nowSchemeName==='default'?'dark':'default';

		HTML.setAttribute('data-color-scheme',newSchemeName);

		if(window.localStorage){
			localStorage.schemeName = newSchemeName;
		}
	}
})(document.documentElement);

var GET={};
if(location.search.substr(1)){
	location.search.substr(1).split('&').forEach(function(i){
		i=i.split(/=/);
		GET[decodeURIComponent(i[0])]=decodeURIComponent(i[1]);
	});
}


(function(select){
	if(!select){
		return;
	}
	var padStart=(str)=>{
		var pad = "00";
		return pad.substring(0, pad.length - String(str).length) + str
	};

	var yymmList = [
		{ yy: 19, mmList: [ 7, 6, 5, 4, 3, 2, 1 ] },
		{ yy: 18, mmList: [ 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ] },
		{ yy: 17, mmList: [ 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ] },
		{ yy: 16, mmList: [ 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ] },
		{ yy: 15, mmList: [ 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ] },
		{ yy: 14, mmList: [ 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ] },
		{ yy: 13, mmList: [ 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ] }
	];

	yymmList.forEach(function(yy){
		yy.mmList.forEach(function(mm){
			var optionEl = document.createElement('option');
			optionEl.value = padStart(yy.yy)+padStart(mm);
			optionEl.innerHTML = yy.yy+'年'+mm+'月';
			select.appendChild(optionEl);
		})
	});

	if(GET['yymm']){
		select.value = GET['yymm'];
	}

	select.onchange=function(){
		select.parentNode.submit()
	};

})(document.querySelector('select[name="yymm"]'))

window._hmt = [];
(function(s) {
	s.src = "https://hm.baidu.com/hm.js?dc0a8c9ef246f1ed5f47784daa3da199";
	document.body.appendChild(s);
})(document.createElement('script'));


window.dataLayer = [];
(function(s){
	s.src='https://www.googletagmanager.com/gtag/js?id=UA-158832202-1';
	s.onload=function(){
		function gtag(){dataLayer.push(arguments)}
		gtag('js', new Date());
		gtag('config', 'UA-158832202-1');
	};
	document.body.appendChild(s);
})(document.createElement('script'))


