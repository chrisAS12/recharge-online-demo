function chooseMood(id) {
    let url = "deeperQuestion.html?mood=" + encodeURIComponent(id);
    document.location.href = url;
}