// room: 채팅이 수신괸 방의 이름
// msg: 수신된 채팅 내용
// sender: 채팅을 보낸 사람의 카톡 닉네임
// isGroupChat: 채팅이 수신된 방이 단체이면 참, 1:1이면 거짓
// replier: 답장에 사용되는 객체
const kalingModule = require('kaling').Kakako();
const Kakao = new kalingModule;
Kakao.init("af8df8a4ad5dd330eecc63b5c8d72298")//javascript key
Kakao.login('rbals0403292@gmail.com', 'nauzu1004#')
function response(room, msg, sender, isGroupChat, replier, IamgeDB, packageName) {
if(msg==="[놀자에요]") Kakao.send(room,{
        "link_ver": "4.0"
        "template_id": 78771
        "template_args" : {

        }
    }, "custom");
}

}