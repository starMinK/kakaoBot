app.listen(3000, () => console.log('node on 3000'));
// room: 채팅이 수신괸 방의 이름
// msg: 수신된 채팅 내용
// sender: 채팅을 보낸 사람의 카톡 닉네임
// isGroupChat: 채팅이 수신된 방이 단체이면 참, 1:1이면 거짓
// replier: 답장에 사용되는 객체
function response(room, msg, sender, isGroupChat, replier) {
if(msg === "!!테스트"){
    replier.reply("테스트 문구입니다.")
}

}