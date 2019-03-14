{
    let writeCode = function (prefix, code, callback) {
        let styleTag = document.querySelector('#styleTag')
        let container = document.querySelector('#code')
        let codeWrapper = document.querySelector('.code-wrapper')
        styleTag.innerHTML = ''
        container.innerHTML = ''
        let n = 0
        let id = setInterval(() => {
            styleTag.insertAdjacentHTML('beforeend', code[n])
            container.insertAdjacentHTML('beforeend', code[n])
            codeWrapper.scrollTop = 10000
            n++
            if (n >= code.length) {
                clearInterval(id)
                callback()
            }
        }, 1);
    }
    let code = `
    .preview{
        position: relative;width:100%;height: 100%;
        border:1px solid black;
    }
    .head{
        overflow: hidden;
        height: 280px;width:280px;
        background:rgb(21, 158, 255);
        border:3px solid black;
        border-radius:200px/216px;
        position: absolute;top:35px;left:50%;margin-left: -140px;
    }
    .face{
          overflow: hidden;
        width:246px;height:246px;
        background: white;
        border-radius:50%;
        position: absolute;top:70px;left:50%;margin-left:-123px;
        border:2px solid black;
    }
    .eye{
        width:60px;height:60px;
        border-radius:50%;background: white;
        position: absolute;top:45px;
        border:2px solid black;
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
    .nose{
        width:36px;height:36px;
        border-radius:50%;background: rgb(254, 0, 0);
        position: absolute;top:94px;left:50%;margin-left:-18px;
        border:2px solid black;
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
        position: absolute;top:124px;left:50%;margin-left: -120px;
        border:2px solid black;
        border-right:transparent;
        border-top:transparent;
        width:120px;height:40px;
        background: #fff;
        border-bottom-left-radius:33px 30px;
        transform:rotate(-8deg);
    }
    .lip.right{
        position: absolute;top:124px;right:50%;margin-right: -120px;
        border:2px solid black;
        border-left:transparent;
        border-top:transparent;
        width:120px;height:40px;
        background: #fff;
        border-bottom-right-radius:33px 30px;
        transform:rotate(8deg);
    }
    .lip.left::after{
        content:'';display: block;
        height:20px;width:38px;
        position: absolute;top:-51%;right:69.4%;
        border:2px solid black;
        border-right:transparent;
        border-bottom:transparent;
        border-top-left-radius:20px 20px;
        transform:rotate(0deg);
        background: #fff;
    }
    .lip.right::after{
        content: '';
        display: block;
        height: 20px;
        width: 38px;
        position: absolute;
        top: -51%;
        left: 69.4%;
        border: 2px solid black;
        border-left: transparent;
        border-bottom: transparent;
        border-top-right-radius: 20px 20px;
        transform: rotate(0deg);
        background: #fff;
    }
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
    .mouse{
        height: 700px;
        width: 200px;
        border-radius: 270px/378px;
        position: absolute;
        top: -576px;
        left: 50%;
        margin-left: -100px;
        background: rgb(254, 0, 0);
        border: 2px solid black;
    }
    .mouse-wrapper{
        height: 140px;width: 230px;
        position: absolute;top:155px;left: 50%;margin-left: -115px;
        overflow: hidden;
    }
    .tongue{
        position: absolute;top:236px;left:50%;margin-left: -40px;
        width: 80px;height: 40px;
        border: 2px solid black;
        border-top:transparent;
        z-index:2;
        border-radius: 0 0 100px 100px;
        background: rgb(255, 110, 55);
    }
    .tongue::after{
        content: '';display: block;
        height: 30px;width: 30px;
        position: absolute;top:-40%;left:6%;
        border: 2px solid black;
        border-left:transparent;border-bottom: transparent;
        border-top-right-radius:89px 64px;
        transform: rotate(-45deg);
        background: rgb(255, 110, 55);
    }
    .tongue::before{
        content: '';display: block;
        height: 30px;width: 30px;
        position: absolute;top:-40%;right:5%;
        border: 2px solid black;
        border-right:transparent;border-bottom: transparent;
        border-top-left-radius:89px 64px;
        transform: rotate(45deg);
        background: rgb(255, 110, 55);
    }`
    writeCode('',code)
}   