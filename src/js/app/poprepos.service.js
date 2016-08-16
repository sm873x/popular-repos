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
            console.log('getting into getRepos');
            return $http({
                url: 'https://api.github.com/users/' + username +'/repos',
                get: 'get',
                headers: {
                    'Authorization': 'token ' + token
                },
                dataType: 'json'
            });
        }
    }

})();
