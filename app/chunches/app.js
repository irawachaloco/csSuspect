(function (angular) {
    'use strict';

    angular.module('wPage').controller('chunches/app', [
        '$scope',
        function ($scope) {
            $scope.chunches = [
                {
                    title:'item1',
                    html:'app/chunches/gradientes.html'
                },
                {
                    title:'item2',
                    html:'app/chunches/gradiente2.html'
                },
                {
                    title:'item3',
                    html:'app/chunches/gradientes.html'
                }
            ];
        }
    ]);
}(angular));