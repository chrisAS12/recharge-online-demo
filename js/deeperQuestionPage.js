const faceSet = { goodMood: "😄", neutralMood: "😐", badMood: "😫" };

function getSelectedMood() {
    var mood = location.search.split("mood=")[1];
    document.getElementById("face").innerHTML =
        "Kādēļ Jūs izvēlējāties " + faceSet[mood] + "?";
    console.log(mood);
    return mood;
}

function submitReason() {
    let reason = document.querySelector("textarea").value;
    let url =
        "analytics.html?mood=" +
        encodeURIComponent(getSelectedMood()) +
        "&reason=" +
        encodeURIComponent(reason);
    console.log(reason);
    document.location.href = url;
}