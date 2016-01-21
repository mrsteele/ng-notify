/**
 * Wraps a popover object to the handler (using the angular bootstrap "popover" directive).
 * @param {String=} empty-text - The text to display if the list is empty (defaults to global set in provider).
 * @see https://angular-ui.github.io/bootstrap/#/popover
*/
angular.module('ngAlerts').directive('ngAlertsPopover', [
    'ngAlertsEvent',
    '$compile',
    '$timeout',
    '$sce',
    function (ngAlertsEvent, $compile, $timeout, $sce) {
        'use strict';
        
        return {
            restrict: 'A',
            terminal: true,
            priority: 1000,
            link: function ($scope, $element, $attrs) {
                
                $element.attr('uib-popover-template', 'templateUrl');
                $element.attr('popover-is-open', 'isOpen');
                $element.removeAttr('ng-alerts-popover');
                
                // @todo - Update this to not close when clicking on the window...
//                if (!$attrs.popoverTrigger) {
//                    $element.attr('popover-trigger', 'outsideClick');
//                }
                
                // Custom classes not available yet
                $element.attr('popover-class', 'ng-alerts-popover-list');
                
                $scope.templateUrl = 'template/ng-alerts/sub/popover-list.html';
                $scope.emptyText = $attrs.emptyText;
                
                $scope.isOpen = false;
                $scope.closePopover = function () {
                    $scope.isOpen = false;
                };
                
                $compile($element)($scope);
                
            }
        };
    }
]);