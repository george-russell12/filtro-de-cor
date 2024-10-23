cor = "white"


function setup() {
    canvas = createCanvas(640, 480)
    video = createCapture(VIDEO)
    video.hide()
}

function draw() {
    background("blue")
    image(video, 0, 0, 640, 480)
    tint(cor)
}

function tirarfoto() {
    save("foto.png")

}

function mudarcor() {
    cor = document.getElementById("input").value


}
