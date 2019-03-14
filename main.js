{
    let duration = 50
    let writeCode = function (prefix, code, callback) {
        let styleTag = document.querySelector('#styleTag')
        let container = document.querySelector('#code')
        let codeWrapper = document.querySelector('.code-wrapper')
        styleTag.innerHTML = prefix
        let n = 0
        function fn (){
            styleTag.insertAdjacentHTML('beforeend', code[n])
            container.innerHTML = prefix + Prism.highlight(code.substring(0,n), Prism.languages.css, 'css');
            codeWrapper.scrollTop = 10000
            n++
            if (n < code.length) {
                setTimeout(fn,duration)
            }else{
                callback()
            }
        }
        setTimeout(fn,duration)
    }

   $('.action a').on('click',(x)=>{
       $(x.currentTarget).addClass('active')
        .siblings().removeClass('active')
        let speed  = $(x.currentTarget).text()
        switch(speed){
            case '慢速':
            duration = 100
            break
            case '中速':
        
            duration = 40
            break
            case '快速':
            duration = 10
        }
   })


    let prefix = `
    /*
    我想画一只哆啦A梦
    首先准备一些样式
    */
    .code-wrapper{
        background: rgb(250, 232, 232);
    }
    .preview{
        position: relative;width:100%;height: 100%;
        border:1px solid rgb(216, 38, 135);
        box-shadow:  0 0 3px 3px rgba(0, 0, 0, 0.2)
    }
    /*等等，这代码的颜色太丑了，让我高亮一下*/
    .token.selector{
        color:#690 ;
    }
    .token.punctuation{
        color:#999 ;    
    }
    .token.property{
        color:#905 ;
    }
    .token.function{
        color:#DD4A68;
    }
    /*好了，准备工作完成，我开始了*/
    `
    let code = `
    
    /*首先是蓝蓝的大头*/
    
    .head{
        overflow: hidden;
        height: 280px;width:280px;
        background:rgb(21, 158, 255);
        border:3px solid black;
        border-radius:200px/216px;
        position: absolute;top:35px;left:50%;margin-left: -140px;
    }
   
    /*白白的脸蛋*/
    
    .face{
        overflow: hidden;
        width:246px;height:246px;
        background: white;
        border-radius:50%;
        border:2px solid black;
        position: absolute;top:70px;left:50%;margin-left:-123px;
    }
    
    /*然后是笑眯眯的眼睛*/
   
    .eye{
        width:60px;height:60px;
        border-radius:50%;background: white;
        border:2px solid black;
        position: absolute;top:45px;
    }
    .eye.right{
        left:50%;
    }
    .eye.left{
        right:50%;
    }
    .eye::after{
        content:'';
        display: block;
        height:18px;width:20px;
        border-radius: 50% 50% 0 0/15px 12px 0 0;
        border:3px solid black;
        border-bottom: transparent;
        background: white;
        position: absolute;top:27%;
    }
    .eye.right::after{
        right:50%;
    }
    .eye.left::after{
        left:50%;
    }
    
    /*红彤彤的鼻子*/
   
    .nose{
        width:36px;height:36px;
        border-radius:50%;background: rgb(254, 0, 0);
        border:2px solid black;
        position: absolute;top:94px;left:50%;margin-left:-18px;
    }
    .nose::after{
        content:'';display: block;
        width:11px;height:11px;
        border-radius:50%;background:white;
        position: absolute;top:22%;left:10%
    }
    .upperLip{
        height:24px;width:0;
        background: #000;
        border:1px solid black;
        border-radius:25%;
        position: absolute;top:130px;left:50%;
    }
    .lip.left{
        border:2px solid black;
        border-right:transparent;
        border-top:transparent;
        width:120px;height:40px;
        background: #fff;
        border-bottom-left-radius:33px 30px;
        transform:rotate(-8deg);
        position: absolute;top:124px;left:50%;margin-left: -120px;
    }
    .lip.right{
        border:2px solid black;
        border-left:transparent;
        border-top:transparent;
        width:120px;height:40px;
        background: #fff;
        border-bottom-right-radius:33px 30px;
        transform:rotate(8deg);
        position: absolute;top:124px;right:50%;margin-right: -120px;
    }
    .lip.left::after{
        content:'';display: block;
        height:20px;width:38px;
        border:2px solid black;
        border-right:transparent;
        border-bottom:transparent;
        border-top-left-radius:20px 20px;
        transform:rotate(0deg);
        background: #fff;
        position: absolute;top:-51%;right:69.4%;
    }
    .lip.right::after{
        content: '';
        display: block;
        height: 20px;
        width: 38px;
        top: -51%;
        left: 69.4%;
        border: 2px solid black;
        border-left: transparent;
        border-bottom: transparent;
        border-top-right-radius: 20px 20px;
        transform: rotate(0deg);
        background: #fff;
        position: absolute;
    }
   
    /*猫咪怎么能少了胡须*/
    
    .beard{
        height: 1px;
        width: 57px;
        background: #000;
        position: absolute;
    }
      .beard.left1{
        top: 115px;
        left: 50%;margin-left: -80px;
        transform: rotate(16deg);
    }
    .beard.right1{
        top: 115px;
        right: 50%;margin-right: -80px;
        transform: rotate(-16deg);
    }
    .beard.left2{
        width: 80px;    
        top: 135px;
        left: 50%;margin-left: -105px;
    }
    .beard.right2{
        width: 80px;
        top: 135px;
        right: 50%;margin-right: -105px;
    }
    .beard.left3{
        width: 70px;    
        top: 150px;
        left: 50%;margin-left:-90px;
        transform: rotate(-10deg);
    }
    .beard.right3{
        width: 70px;    
        top: 150px;
        right: 50%;margin-right:-90px;
        transform: rotate(10deg);
    }
   
    /*最后是血盆大口*/
    
    .mouse{
        height: 700px;
        width: 200px;
        border-radius: 270px/378px;
        top: -576px;
        left: 50%;
        margin-left: -100px;
        background: rgb(254, 0, 0);
        border: 2px solid black;
        position: absolute;
    }
    .mouse-wrapper{
        height: 140px;width: 230px;
        overflow: hidden;
        position: absolute;top:155px;left: 50%;margin-left: -115px;
    }
    
    /*当然里面得有舌头*/
    
    .tongue{
        width: 80px;height: 40px;
        border: 2px solid black;
        border-top:transparent;
        z-index:2;
        border-radius: 0 0 100px 100px;
        background: rgb(255, 110, 55);
        position: absolute;top:236px;left:50%;margin-left: -40px;
    }
    .tongue::after{
        content: '';display: block;
        height: 30px;width: 30px;
        border: 2px solid black;
        border-left:transparent;border-bottom: transparent;
        border-top-right-radius:89px 64px;
        transform: rotate(-45deg);
        background: rgb(255, 110, 55);
        position: absolute;top:-40%;left:6%;
    }
    .tongue::before{
        content: '';display: block;
        height: 30px;width: 30px;
        border: 2px solid black;
        border-right:transparent;border-bottom: transparent;
        border-top-left-radius:89px 64px;
        transform: rotate(45deg);
        background: rgb(255, 110, 55);
        position: absolute;top:-40%;right:5%;
    }
    
    /*这只哆啦A梦就送给你*/    
    `
    writeCode('',prefix,()=>{
        writeCode(prefix,code,()=>{
        })
    })
}   