"use strict";
(function (angular) {

        function multiLevelDropdownMenuCtrl($scope, $timeout) {
            var ctrl = this;
            console.log('data: ' + JSON.stringify($scope.data, null, 4));

            $scope.select = function (node) {
                $timeout(function() {
                    $scope.selected = node;
                })
            }
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
                    data: "="
                },
                controller: multiLevelDropdownMenuCtrl,
                controllerAs: 'ctrl'
            };
        }

        angular.module("testApp")
            .directive("multiLevelDropdownMenu", multiLevelDropdownMenuDirective);

    }(angular)
);
