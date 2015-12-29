/// <reference path="angular.min.js" />
//home-index.js

var homeindex = angular.module("homeindex", ["ngRoute", 'mgcrea.ngStrap', 'ui.bootstrap']);


homeindex.config(function ($routeProvider) {

    $routeProvider.when("/", {

        controller: "topicsController",
        templateUrl:"/js/views/list.html"


    });

    $routeProvider.when("/newTopic", {


        controller: "newTopicController",
        templateUrl: "/js/views/newTopic.html"

    });

    $routeProvider.when("/newReply/:id", {


        controller: "newReplyController",
        templateUrl: "/js/views/newReply.html"

    });



    $routeProvider.when("/paginate", {


        controller: "paginateController",
        templateUrl: "/js/views/pagination.html"

    });

    $routeProvider.when("/paginate2", {


        controller: "paginateController2",
        templateUrl: "/js/views/pagination2.html"

    });


    $routeProvider.otherwise({

        redirectTo:"/"
    });


});



