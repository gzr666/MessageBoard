/// <reference path="angular.min.js" />
//creating service for fetching data

homeindex.factory("dataService", function ($http,$q) {

    
    var _paginate = function(pageNumber)
    {
        
        var deffered = $q.defer();
        $http({ method: 'GET', url: '/api/topics?page=' + pageNumber }).then(
    function (result) {

        //angular.copy(result.data, _topics);
        //angular.copy(result.data, $scope.dropdown);
        // $scope.count = result.data.length;
        deffered.resolve(result);

    }, function (result) {

        deffered.reject();

    });

        return deffered.promise;

    };
    

    //var _topics = [];

    var _getTopics = function () {
        var deffered = $q.defer();
        $http({ method: 'GET', url: '/api/topics?pageSize=100' }).then(
    function (result) {

        //angular.copy(result.data, _topics);
        //angular.copy(result.data, $scope.dropdown);
        // $scope.count = result.data.length;
        deffered.resolve(result);

    }, function (result) {

        deffered.reject();

    });

        return deffered.promise;
    };


    var _getReplies = function (topicId) {

        var deffered2 = $q.defer();

        $http({ method: 'GET', url: '/api/topics/' + topicId + '/replies ' }).then(function (result) {

            deffered2.resolve(result);


        }, function (result) {

            deffered2.reject();

        });

        return deffered2.promise;

    };



    return {

        
        getTopics: _getTopics,
        getReplies: _getReplies,
        paginate:_paginate
            

    };


});
