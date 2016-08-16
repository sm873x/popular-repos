(function() {
    'use strict';

    angular.module('pop')
        .factory('poprepos', PopReposService);

    PopReposService.$inject = ['$http'];

    function PopReposService($http) {
        return {
            getRepos: getRepos
        };

        function getRepos(username, token) {
            return $http({
                url: 'https://api.github.com/' + username +'/repos',
                get: 'get',
                headers: {
                    'Authorization': 'token ' + token
                },
                dataType: 'json'
            });
        }
    }

})();
