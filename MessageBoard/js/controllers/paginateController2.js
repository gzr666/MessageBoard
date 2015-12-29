homeindex.controller("paginateController2", function ($scope, $http, dataService,$location,$anchorScroll) {

    $scope.topics = [];
    
    $scope.totalItems = 0;
    $scope.currentPage = 0;
    $scope.pageSize = 2;

    $scope.setPage = function (pageNo) {
        $scope.currentPage = pageNo;
    };

    $scope.pageChanged = function () {
        getResultsPage($scope.currentPage-1);
    };

    //$scope.maxSize = 6;
    //$scope.bigTotalItems = 17;
    //$scope.bigCurrentPage = 1;




    
    getResultsPage(0);

    $scope.gotoBottom = function () {
        // set the location.hash to the id of
        // the element you wish to scroll to.
        $location.hash('tops');

        // call $anchorScroll()
        $anchorScroll();
    };


    

   



    function getResultsPage(pageNumber) {
        
        dataService.paginate(pageNumber).then(
            function (result) {

                $scope.totalItems = result.data.totalcount;
                $scope.pageSize = result.data.PageSize;
                
                angular.copy(result.data.topics, $scope.topics);

                
                
                  
               


            },
            function () {

                alert("Some error happened");

            }).then(function () {



            });

    }


    


});