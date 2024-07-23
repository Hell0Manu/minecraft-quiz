const audioContainer = document.querySelector(".audio-container");
const  audioMuteContainer = document.querySelector(".audio-mute-container");
const iframe = document.getElementById("youtube-audio");

function toggleMute(){
	if(audioContainer.style.visibility == 'hidden')
	{
		audioContainer.style.visibility = 'visible';
		audioMuteContainer.style.visibility = 'hidden';
		iframe.src = iframe.src.replace("mute=1", "mute=0");
	}
	else 
	{
		audioContainer.style.visibility = 'hidden';
		audioMuteContainer.style.visibility = 'visible';
		iframe.src = iframe.src.replace("mute=0", "mute=1");
	}
}