$(document).ready(function(){
    const roomTargetDOM = $("#myRoom"),
        myRoom = Object.create( Room );
    myRoom.init(roomTargetDOM);
});
const Room = {
    data:{adultNum:1,calMethod:"6000-500=5500",checkIn:1508428800000,checkOut:1508515200000,childNum:0,discount:500,email:null,flightNote:"",hLandDate:null,hLandTime:null,hTakeoffDate:null,hTakeoffTime:null,inHarbourNum:null,inboundNum:null,infoId:null,isRead:"N",landDate:null,landTime:null,mobile:null,notPayAmount:5000,orderAmount:5500,orderDesc:"1间半独立沙滩木屋",orderName:"半独立沙滩木屋",orderSn:"2017082901",orderSrc:"TB",outHarbourNum:null,outboundNum:null,payAccount:null,payAmount:500,payStatus:2,peopleNum:1,pinyinName:null,present:"",productAmount:6000,readTime:null,roomInfoList:[{bedType:null,customerInfoList:[{passportNo:1123,nationality:"CHINA",chineseName:"你好",pinyinName:"nihao",gender:1,birthday:-410256000000,mobile:15976713287,email:"455544554@qq.com",isDive:"N",divingRank:null,divingCount:null,lastDiveTime:null,divingNo:null,anamnesis:null}],iceEmail:null,iceMobile:null,iceName:null,iceRelation:null,infoId:null,roomId:null,}],roomNum:3,signName:null,takeoffDate:null,takeoffTime:null,template:1},
    init:function(roomTargetDOM) {
        let roomNav_DOM = this.createNavDOM(),
        Room_DOM = this.createRoomDOM();
        let selectId = 0;
        roomTargetDOM.append(roomNav_DOM).append(Room_DOM);
        roomNav_DOM.find('.room-Nav-div').map((Nav_num,Nav_val)=>{
            $(Nav_val).click(function(){
                let myKey = parseInt($(this).attr("data-key"));
                Room_DOM.find('.room-Main-div').map((room_num,room_val)=>{
                if (room_num == myKey) {
                        $(room_val).addClass("selectRoom");
                    }else {
                        $(room_val).removeClass("selectRoom");
                    }
                });
            });
        });
    },
    createRoomDOM:function() {
        let room_Num = this.data.roomNum,
            roomMainDOM = $('<div class="room-Main"></div>');
        for (let i = 0;i < room_Num;i++) {
            let className = i == 0 ? "room-Main-div selectRoom" : "room-Main-div";

            let tempRoom = $('<div id="mainRoom'+i+'"  class="'+className+'">房间'+(i+1)+'</div>');

            let myInput = Object.create( Input );
            myInput.constructor(check.num);
            tempRoom.append(myInput.init());

            roomMainDOM.append(tempRoom);
        }
        return roomMainDOM;
    },
    createNavDOM:function() {
        let nav_Num = this.data.roomNum,
            navContent = $('<div class="room-Nav"></div>');
        for (let i = 0;i < nav_Num;i++) {
            let mynavblock = $('<div class="room-Nav-div" data-key="'+i+'">房间'+(i+1)+'</div>');
            navContent.append(mynavblock);
        }
        return navContent;
    }
};
const Input = {
    verifyFun:null,
    myInputDOM:null,
    constructor:function(verifyFun) {
        this.verifyFun = verifyFun;
        this.myInputDOM;
    },
    createDOM:function() {
        let tempDOM = $('<input type="text">');
        return tempDOM;
    },
    initverify:function() {
        let _this = this,
            myInputDOM = this.myInputDOM;
        myInputDOM.change(function(event){
            let value = event.target.value;
            if (_this.verifyFun(value)) {
                alert('输入正确');
            }else {
                console.log('输入错误');
            }
        });
    },
    init:function() {
        this.myInputDOM = this.createDOM();
        this.initverify();
        return this.myInputDOM;
    }
}
const check = {
    num:function num(val) {
        if (val == "111") {
            return true
        }else {
            return false
        }
    }
}