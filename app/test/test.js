var app = angular.module('testApp', []);

app.controller('TestCtrl', ['$scope', function ($scope) {

    var ctrl = this;

    //ctrl.testVar = {id: 'leaf1111', name: 'Leaf 1111'};

    ctrl.data = [
        {
            id: 'node1',
            name: "Node 1",
            nodes: [
                {
                    id: 'node11',
                    name: "Node 11",
                    nodes: [
                        {
                            id: 'node111',
                            name: "Node 111",
                            nodes: [
                                {
                                    id: 'leaf1111',
                                    name: "Leaf 1111",
                                    nodes: []
                                },
                                {
                                    id: 'leaf1112',
                                    name: "Leaf 1112",
                                    nodes: []
                                }
                            ]
                        },
                        {
                            id: 'node112',
                            name: "Node 112",
                            nodes: [
                                {
                                    id: 'leaf1121',
                                    name: "Leaf 1121",
                                    nodes: []
                                },
                                {
                                    id: 'leaf1122',
                                    name: "Leaf 1122",
                                    nodes: []
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'node12',
                    name: "Node 12",
                    nodes: [
                        {
                            id: 'node121',
                            name: "Node 121",
                            nodes: [
                                {
                                    id: 'leaf1211',
                                    name: "Leaf 1211",
                                    nodes: []
                                },
                                {
                                    id: 'leaf1212',
                                    name: "Leaf 1212",
                                    nodes: []
                                }
                            ]
                        },
                        {
                            id: 'node122',
                            name: "Node 122",
                            nodes: [
                                {
                                    id: 'leaf1221',
                                    name: "Leaf 1221",
                                    nodes: []
                                },
                                {
                                    id: 'leaf 1222',
                                    name: "Leaf 1222",
                                    nodes: []
                                }
                            ]
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
                    id: 'node21',
                    name: "Node 21",
                    nodes: [
                        {
                            id: 'leaf211',
                            name: "Leaf 211",
                            nodes: []
                        },
                        {
                            id: 'leaf212',
                            name: "Leaf 212",
                            nodes: []
                        }
                    ]
                },
                {
                    id: 'node22',
                    name: "Node 22",
                    nodes: [
                        {
                            id: 'leaf221',
                            name: "Leaf 221",
                            nodes: []
                        },
                        {
                            id: 'leaf222',
                            name: "Leaf 222",
                            nodes: []
                        }
                    ]
                }
            ]
        },
        {
            id: 'node3',
            name: "Node 3",
            nodes: [
                {
                    id: 'leaf31',
                    name: "Leaf 31",
                    nodes: []
                },
                {
                    id: 'leaf32',
                    name: "Leaf 32",
                    nodes: []
                }
            ]
        }
    ];
}]);