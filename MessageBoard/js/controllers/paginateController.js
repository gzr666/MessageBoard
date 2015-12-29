homeindex.controller("paginateController", function ($scope, $http, dataService,$location,$anchorScroll) {

    $scope.topics = [];
    $scope.offset = 0;

    var x = 0;


    $scope.gotoBottom = function () {
        // set the location.hash to the id of
        // the element you wish to scroll to.
        $location.hash('tops');

        // call $anchorScroll()
        $anchorScroll();
    };



    var loadMe = function (x) {
       
        dataService.paginate(x).then(
             function (result) {

                 $scope.pageCount = result.data.totalPages;


                 if ($scope.topics.length > 0) {
                    
                     angular.forEach(result.data.topics, function (item) {
                         $scope.topics.push(item);
                     });

                     

                 }
                 else {
                     angular.copy(result.data.topics, $scope.topics);
                 }


             },
             function () {

                 alert("Some error happened");

             }).then(function () {



             });
    };

    loadMe($scope.offset);

    $scope.loadMore = function () {

       
        $scope.offset++;
        loadMe($scope.offset);


    };


});