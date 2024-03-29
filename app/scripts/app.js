(function () {
	var everlive = new Everlive("qlqpx3y807z3qiwb");
	document.addEventListener("deviceready", function () {
		window.listview = kendo.observable({
			addImage: function () {
				var success = function (data) {
					everlive.Files.create({
						Filename: Math.random().toString(36).substring(2, 15) + ".jpg",
						ContentType: "image/jpeg",
						base64: data
					}).then(loadPhotos,
						function (err) {
							alert("Could not upload image" + err.message);
						});
				};
				var error = function () {
					navigator.notification.alert("Unfortunately we could not add the image");
				};
				var config = {
					destinationType: Camera.DestinationType.DATA_URL,
					targetHeight: 400,
					targetWidth: 400
				};
				navigator.camera.getPicture(success, error, config);
			}
		});
		var app = new kendo.mobile.Application(document.body, { skin: "nova" });
		
		function loadPhotos() {
    everlive.Files.get().then(function(data) {
        var files = [];
        for (var i = data.result.length - 1; i >= 0; i--) {
            var image = data.result[i];
            files.push(image.Uri);
        }
        $("#images").kendoMobileListView({
            dataSource: files,
            template: "<img src='#: data #'>"
        });
    },
    function (err) {
        alert("Could not fetch images: " + err.message);

    });
}
loadPhotos();

		

		navigator.splashscreen.hide();
	});
} ());