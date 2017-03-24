var app = angular.module('testApp', []);

app.controller('TestCtrl', ['$scope', function ($scope) {

    var ctrl = this;

    ctrl.data = [
        {
            id: 'node1',
            name: "Node 1",
            nodes: [
                {
                    id: 'node4',
                    name: "Node 4",
                    nodes: []
                },
                {
                    id: 'node5',
                    name: "Node 5",
                    nodes: [
                        {
                            id: 'node10',
                            name: "Node 10",
                            nodes: []
                        },
                        {
                            id: 'node11',
                            name: "Node 11",
                            nodes: []
                        }
                    ]
                }
            ]
        },
        {
            id: 'node2',
            name: "Node 2",
            nodes: [
                {
                    id: 'node6',
                    name: "Node 6",
                    nodes: []
                },
                {
                    id: 'node7',
                    name: "Node 7",
                    nodes: []
                }
            ]
        },
        {
            id: 'node3',
            name: "Node 3",
            nodes: [
                {
                    id: 'node8',
                    name: "Node 8",
                    nodes: []
                },
                {
                    id: 'node9',
                    name: "Node 9",
                    nodes: []
                }
            ]
        }
    ];
}]);