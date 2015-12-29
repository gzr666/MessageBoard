angular.module("selectBox", []).directive('selectBox', function () {
    return {
        restrict: 'E',
        link: function () {
            return $(window).bind("load", function () {
                //this will make all your select elements use bootstrap-select
                return $('select').selectpicker();
            });
        }
    };
});