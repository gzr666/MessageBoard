homeindex.controller("newReplyController", function ($scope, $http, $window,$routeParams) {

    $scope.newReply = {};

    $scope.save = function () {

        var id = $routeParams.id;
        $http.post("/api/topics/" + id +"/replies", $scope.newReply).then(
        function (result) {

            var newTopic = result.data;
            $window.location = "#/";

        },
        function () {


        });

    };


});