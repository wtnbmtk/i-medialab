// JavaScript Document

function vidplay(target_video, target_play_btn) {
       var video = document.getElementById(target_video);
       var button = document.getElementById(target_play_btn);
       if (video.paused) {
          video.play();
          button.textContent = "||";
       } else {
          video.pause();
          button.textContent = ">";
       }
    }

function restart(target_video) {
        var video = document.getElementById(target_video);
        video.currentTime = 0;
    }

function skip(target_video, value) {
        var video = document.getElementById(target_video);
        video.currentTime += value;
    }

function progressBar(target_video, target_canvas) {
        var video = document.getElementById(target_video);
                //get current time in seconds
        var elapsedTime = Math.round(video.currentTime);
                //update the progress bar
		var canvas = document.getElementById(target_canvas);
        if (canvas.getContext) {
            var ctx = canvas.getContext("2d");
                    //clear canvas before painting
                 ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
                 ctx.fillStyle = "rgb(255,0,0)";
                 var fWidth = (elapsedTime / video.duration) * (canvas.clientWidth);
                    if (fWidth > 0) {
                        ctx.fillRect(0, 0, fWidth, canvas.clientHeight);
                    }
        }
   }

function initEvents(target_video, target_canvas) {
//	alert(target_video);
	var video = document.getElementById(target_video);
	video.addEventListener("timeupdate", function(){progressBar(target_video, target_canvas)}, false);
	}

window.addEventListener("DOMContentLoaded", function(){initEvents("video1","canvas1");initEvents("video2","canvas2");}, false);
