"use strict";
(function (angular) {

        function multiLevelDropdownMenuCtrl($scope, $timeout) {

            $scope.selected = $scope.model || {id: null, name: 'select...'};

            $scope.select = function (node) {
                $timeout(function() {
                    $scope.selected = node;
                })
            };

            $scope.$watch('selected', function (newValue) {
                $scope.model = newValue;
            });

            $scope.$watch('model', function (newValue) {
                $scope.selected = newValue;
            });
        }

        /**
         * @ngdoc directive
         * @name multiLevelDropdownMenu
         * @description
         * # multi level dropdown menu for angular 1
         */
        var multiLevelDropdownMenuDirective = function () {
            return {
                templateUrl: "../views/multi-level-dropdown-menu.html",
                restrict: "E",
                scope: {
                    data: "=",
                    model: '='
                },
                controller: multiLevelDropdownMenuCtrl,
                controllerAs: 'ctrl'
            };
        }

        angular.module("testApp")
            .directive("multiLevelDropdownMenu", multiLevelDropdownMenuDirective);

    }(angular)
);
