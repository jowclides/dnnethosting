(function () {
    document.addEventListener("deviceready", function () {
        var app = new kendo.mobile.Application(document.body, { skin: "nova" });
        $("#images").kendoMobileListView({
            dataSource: ["images/Ryan-001.jpeg", "images/Ryan-01.jpg", "images/Ryan-02.jpeg", "images/Ryan-03.jpeg", "images/Ryan-04.jpeg", "images/Ryan-05.jpeg", "images/Ryan-06.jpeg", "images/Ryan-07.jpeg", "images/Ryan-08.jpeg", "images/Ryan-09.jpeg", "images/Ryan-10.jpeg", "images/Ryan-11.jpeg"],
            template: "<img src='#: data #'>"
        });
        navigator.splashscreen.hide();
    });
} ());