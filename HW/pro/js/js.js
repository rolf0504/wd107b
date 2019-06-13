$(function () {
    var count = 0;
    var index = ["<a href=\"project.html\"><img src=\"images/project.png\" id=\"projPNG\"></a><p>畢業專題</p>", 
                "<a href=\"study.html\"><img src=\"images/study.png\" id=\"studPNG\"></a><p>論文發表</p>",
                "<a href=\"prizes.html\"><img src=\"images/prize.png\" id=\"prizPNG\"></a><p>論文發表</p>",
                "<a href=\"intro.html\"><img src=\"images/intro.png\" id=\"introPNG\"></a><p>實驗室簡介</p>",
                "<a href=\"member.html\"><img src=\"images/member.png\" id=\"membPNG\"></a><p>成員介紹</p>"]

    $("#btn").click(changeImg);

    function changeImg() {
        console.log(index[count]);
        $("#btnP").html(index[count]);
        if(count >= 4) {
            count = 0;
        } else {
            count++;
        }
    }
})