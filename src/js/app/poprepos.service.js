(function() {
    'use strict';

    angular.module('pop')
        .factory('poprepos', PopReposService);

    PopReposService.$inject = ['$http'];

    function PopReposService($http) {
        return {
            getRepos: getRepos
        };

        function getRepos(username) {
            return $http({
                url: 'https://api.github.com/' + username +'/repos',
                get: 'get',
                headers: {
                    'Authorization': 'token ' + 'aaf389171c17d11fce443d30e3c090f734639681'
                },
                dataType: 'json'
            });
        }
    }
    
})();
