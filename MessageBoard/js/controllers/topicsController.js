homeindex.controller("topicsController", function($scope, $http,dataService) {
    $scope.count = 0;
    $scope.topics = [];
    $scope.dropdown = [];
    $scope.replies = [];
    $scope.dropdown = [];
    $scope.isBusy = true;
    $scope.topicID = 0;
    $scope.onlyTopics = true;
    $scope.onlyReplies = false;
    $scope.hideBtn = false;



    //calling service

    dataService.getTopics().then(
        function (result) {
            angular.copy(result.data.topics, $scope.topics);
            angular.copy(result.data.topics, $scope.dropdown);
            
            $scope.count = result.data.topics.length;
        },
        function () {

            alert("Some error happened");

        }).then(function () {

                    $scope.isBusy = false;
                   
         });
        

    $scope.getAll = function () {

        dataService.getTopics().then(
        function (result) {
            angular.copy(result.data.topics, $scope.topics);
            angular.copy(result.data.topics, $scope.dropdown);

            $scope.count = result.data.topics.length;
        },
        function () {

            alert("Some error happened");

        }).then(function () {

            $scope.isBusy = false;

        });


    };

    $scope.menuChange = function (topic) {

        if (topic.id = 0) {

            $scope.isBusy = true;


            dataService.getTopics().then(
        function (result) {
            angular.copy(result.data.topics, $scope.topics);
            angular.copy(result.data.topics, $scope.dropdown);

            $scope.replies = [];
            $scope.count = result.data.topics.length;
            $scope.onlyReplies = false;
            $scope.onlyTopics = true;
            $scope.hideBtn = false;
        },
        function () {

            alert("Some error happened");

        }).then(function () {

            $scope.isBusy = false;

        });

        }
        else {

        dataService.getReplies(topic.id).then(
            function (result) {

                angular.copy(result.data, $scope.replies);
                $scope.topics = [];
                $scope.count = result.data.length;
                $scope.topicID = topic.id;
                $scope.onlyReplies = true;
                $scope.onlyTopics = false;
                $scope.hideBtn = true;

            }, function () {

                alert("Error fetching....")


            }).then(function () {

                $scope.isBusy = false;

            });



        }


    };



    $scope.myDropDown = function (topic) {
        if (topic == null) {

            $scope.isBusy = true;


            dataService.getTopics().then(
        function (result) {
            angular.copy(result.data.topics, $scope.topics);
            angular.copy(result.data.topics, $scope.dropdown);

            $scope.replies = [];
            $scope.count = result.data.topics.length;
            $scope.onlyReplies = false;
            $scope.onlyTopics = true;
            $scope.hideBtn = false;
        },
        function () {

            alert("Some error happened");

        }).then(function () {

            $scope.isBusy = false;

        });

        }
        else {

            dataService.getReplies(topic).then(
                function (result) {

                    angular.copy(result.data, $scope.replies);
                    $scope.topics = [];
                    $scope.count = result.data.length;
                    $scope.topicID = topic;
                    $scope.onlyReplies = true;
                    $scope.onlyTopics = false;
                    $scope.hideBtn = true;

                }, function () {

                    alert("Error fetching....")


                }).then(function () {

                    $scope.isBusy = false;

                });



        }
    };

});