
(function(){


    let btn = document.getElementById("play"),
    firstBlock = document.querySelector('#first-line'),
    secondBlock = document.querySelector('#second-line'),
    thirdBlock = document.querySelector('#third-line');


//let getThreeItems=data.splice(4,data.length+1);

function getItem(){
    let getSixItems=data.splice(7);
    for(i=0; i<=getSixItems.length;i++){
        let item= getSixItems[i]; 
        let descriptProp= item.description;
        let cutDescriptProp=descriptProp.substring(15, length);
        let idProp=item.id;
        let urlProp=item.url;
        let nameProp=item.name;
        let dateProp=item.date;
        let dateConvert=new Date();
        let normDateProp=dateConvert.toUTCString();
        let signImage=idProp+": " +urlProp+" "+ nameProp+ " " + "\n" +normDateProp;
        
        return signImage;
    }   

}

 //console.log(getItem());

 function select(){
    let getValWay=document.getElementById("type-selector");
    var gotValWay = getValWay.options[getValWay.selectedIndex].value;
    
    let getValCountImage=document.getElementById("line-selector");
    var gotValCount = getValCountImage.options[getValWay.selectedIndex].value;

    if(gotValWay==0 && gotValCount==0){
        console.log("nothing");
    }
    else if(gotValWay==1 && gotValCount==0){
        // let showInfo=getItem();
        // let firstLine=document.getElementById("first-line");
        // firstLine.innerHTML=+showInfo;
        console.log("All images");


    }
    else if(gotValWay==1 && gotValCount==1){
        console.log("First way and three images");
    }  
    else if(gotValWay==1 && gotValCount==2){
        console.log("First way and six images");
    }



    function init(){
        const thirdWay=document.getElementById("third-line");
        const divOne=document.createElement('div');
        thirdWay.appendChild(divOne);
        const divSecond=document.createElement('div');
        thirdWay.appendChild(divSecond);
        const divThird=document.createElement('div');
        thirdWay.appendChild(divThird);





        const selector=document.querySelector('.third-group');
        let showHide=selector.classList.add("show");




    }
    init();


//не виконуэться умова з 6 картинок(53 str)
//не бачить властивості об'єкта, в консолі все видає без помилки,
// а от innerHTML помилка(не читає властивостей item) beginning with 16 str


// for me
// make this task with using template string , for example $name $url $date





       // let showDate=getItem();
       // firstblock=showDate.innerHTML;

   }

   btn.addEventListener("click", select)
})()











// (function(){


// let btn = document.getElementById("play"),
//     firstBlock = document.querySelector('#first-line'),
//     secondBlock = document.querySelector('#second-line'),
//     thirdBlock = document.querySelector('#third-line');

// let item = {
//     url: "http://desktopwallpapers.org.ua/mini/201507/40069.jpg",
// 	name: "CHEVROLET",
// 	description : "Lorem ipsum dolor sit amet",
// 	date : "2015/01/25 14:15"
// };

// function init() {
//     // сначала снимаете значение с селектбокса, 
//     // document.getElementById("").value
//     // определяете какой способ построения галлереи надо использовать
//     // запускаете необходимую логику

//     // код ниже дан для справки, вам нужно будет использовать тот вариан который вы выбрали в селектбоксе
//     // пример построения галлереи с помощю replace
//     var replaceItemTemplate = '<div class="col-sm-3 col-xs-6">\
//     <img src="$url" alt="$name" class="img-thumbnail">\
//     <div class="info-wrapper">\
//     <div class="text-muted">$name</div>\
//     <div class="text-muted top-padding">$description</div>\
//     <div class="text-muted">$date</div>\
//     </div>\
//     </div>';

//     let resultHTML = replaceItemTemplate
//     .replace(/\$name/gi, item.name)
//     .replace("$url", item.url)
//     .replace("$description", item.description)
//     .replace("$date", item.date);

//     firstBlock.innerHTML = resultHTML;	

//     // один из примеров как прятать блоки
//     document.querySelector('.first-group').classList.add("show");
//     document.querySelector('.second-group').classList.add("hide");
//     document.querySelector('.third-group').classList.add("hide");

//     // пример построения галлереи с помощю шаблонных строк
//     let secondItemTemplate = `<div class="col-sm-3 col-xs-6">\
//     <img src="${item.url}" alt="${item.name}" class="img-thumbnail">\
//     <div class="info-wrapper">\
//         <div class="text-muted">${item.name}</div>\
//         <div class="text-muted top-padding">${item.description}</div>\
//         <div class="text-muted">${item.date}</div>\
//     </div>\
//     </div>`;
//     //secondBlock.innerHTML = secondItemTemplate;	

// }

// btn.addEventListener("click", init);

// })()