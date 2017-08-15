angular.module('ms.tree', [])
.directive('msTreeHtml', function () {
    return {

        template: '<ul ng-if="node.ChildNodes.length>0" class="ms-tree-node-invisible">' +
        '<li id="ms-tree-node-{{attr}}-{{node.NodeId}}" class="ms-tree-node" data="{{node}}" ng-repeat="node in node.ChildNodes">' +
        '<div ng-if="node.ChildNodes.length==0" class="ms-tree-node-region node-single" ng-click="msTreeNodeToggle($event)"></div>' +
        '<div ng-if="node.ChildNodes.length>0" class="ms-tree-node-region collapsible" ng-click="msTreeNodeToggle($event)"></div>' +
        '<label>{{node.Name}}</label>'+
        '<div ng-if="node.ChildNodes.length>0" ms-tree-html class="ms-tree-sub-node"></div>' +
        '</li >' +
        '</ul >'
    }
})
.directive('msTree', function ($compile) {
    return {
        restrict: 'A',
        scope: {
            msTree: '=',
        },
        link: function ($scope, el, attrs, $watch) {
            $scope.$watch('msTree', function (treeOption) {
                debugger;
                var defaultObj = {
                    showRoot: true,
                    data: {}
                };
                var customObj = angular.extend(defaultObj, treeOption);

                if (defaultObj.data.hasOwnProperty('NodeId')) {

                    $scope.attr = attrs.msTree;
                    $scope[attrs.msTree] = customObj.data;

                    var html =
                        '<ul>' +
                        '<li id="ms-tree-node-{{attr}}-{{node.NodeId}}" class="ms-tree-node" ng-repeat="node in ' + attrs.msTree + '.ChildNodes" >' +
                        '<div ng-if="node.ChildNodes.length==0" class="ms-tree-node-region node-single" ng-click="msTreeNodeToggle($event)"></div>' +
                        '<div ng-if="node.ChildNodes.length>0" class="ms-tree-node-region collapsible" ng-click="msTreeNodeToggle($event)"></div>' +
                        '<label>{{node.Name}}</label>' +
                        '<div ng-if="node.ChildNodes.length>0" ms-tree-html class="ms-tree-sub-node"></div>' +
                        '</li>' +
                        '</ul>';


                    if (customObj.showRoot) {

                        html = '<ul>' +
                            '<li id="ms-tree-node-{{attr}}-{{' + attrs.msTree + '.NodeId}}" class="ms-tree-node ms-tree-node-invisible">' +
                            '<div class="ms-tree-node-region node-single"></div><label>{{' + attrs.msTree + '.Name}}</label>' +
                                html +
                            '</li>' +
                            '</ul>';
                    }


                    angular.element(html);
                    el.append($compile(html)($scope));
                }

            });
        },
        controller: function ($scope) {
            $scope.msTreeNodeToggle = function (event) {
                debugger;
                var parentEl = document.getElementById(event.target.parentNode.id);

                var elements = parentEl.getElementsByClassName('ms-tree-sub-node');
                if (elements.length > 0) {
                    var selectorNode = parentEl.getElementsByClassName('ms-tree-node-region')[0];
                    var nodes = elements[0].getElementsByTagName('ul');
                    if (nodes.length > 0) {
                        if (nodes[0].classList.contains("ms-tree-node-invisible")) {
                            nodes[0].className = nodes[0].className.replace("ms-tree-node-invisible", "");
                            event.currentTarget.className = event.currentTarget.className.replace('collapsible', '');
                            event.currentTarget.classList.add('node-single');
                        }
                        else {
                            nodes[0].classList.add("ms-tree-node-invisible");
                            event.currentTarget.className = event.currentTarget.className.replace('node-single', '');
                            event.currentTarget.classList.add('collapsible');
                        }
                    }
                }
            }
        }
    }
});
