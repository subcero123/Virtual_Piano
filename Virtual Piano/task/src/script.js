document.addEventListener("keypress", function (event) {
    if (event.code == "KeyA"){
        let audio = new Audio("A.mp3");
        audio.play();
    }
    else if (event.code == "KeyS"){
        let audio2 = new Audio("D.mp3");
        audio2.play();
    }
    else if (event.code == "KeyD"){
        let audio3 = new Audio("F.mp3");
        audio3.play();
    }
    else if (event.code == "KeyF"){
        let audio4 = new Audio("G.mp3");
        audio4.play();
    }
    else if (event.code == "KeyG"){
        let audio5 = new Audio("H.mp3");
        audio5.play();
    }
    else if (event.code == "KeyH"){
        let audio6 = new Audio("J.mp3");
        audio6.play();
    }
    else if (event.code == "KeyJ"){
        let audio7 = new Audio("S.mp3");
        audio7.play();
    }
    else if (event.code == "KeyW"){
        let audio8 = new Audio("W.mp3");
        audio8.play();
    }
    else if (event.code == "KeyE"){
        let audio9 = new Audio("E.mp3");
        audio9.play();
    }
    else if (event.code == "KeyT"){
        let audio10 = new Audio("T.mp3");
        audio10.play();
    }
    else if (event.code == "KeyY"){
        let audio11 = new Audio("Y.mp3");
        audio11.play();
    }
    else if (event.code == "KeyU"){
        let audio12 = new Audio("U.mp3");
        audio12.play();
    }
    else{
        console.log("Warning");
    }
})