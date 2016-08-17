(function() {
    'use strict';

    angular.module('pop')
        .directive('modal', Modal);

    function Modal() {

        return {
            restrict: 'E',
            templateUrl: '/js/modal.template.html',
            transclude: true,
            scope: {
                title: '=modalTitle'
            }
        };

    }
})();
