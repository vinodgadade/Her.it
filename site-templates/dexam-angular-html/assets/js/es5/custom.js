$( document ).ready(function() {
    var url = new URL(window.location.href);
    const id = url.searchParams.get("t");
    $(`#${id}`).show();
})