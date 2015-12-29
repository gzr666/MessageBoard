homeindex.controller("newTopicController", function ($scope,$http,$window) {

    $scope.newTopic = {};

    $scope.save = function () {

        $http.post("/api/topics/", $scope.newTopic).then(
        function (result) {

            var newTopic = result.data;
            $window.location = "#/";

        },
        function ()
        {


        });

    };


});