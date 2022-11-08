import "plyr";
const player = new Plyr("#videoplayer");
console.log(player);
player.on("play", emitPlayerEvent);

function emitPlayerEvent(event) {
  document.getElementById("teststring").innerHTML = !event.detail.plyr
    ? "The plyr object DOES NOT exist!"
    : "The plyr object exists!";
  console.log(event);
}
