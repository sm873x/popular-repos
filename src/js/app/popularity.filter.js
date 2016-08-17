(function() {
    'use strict';

    angular.module('pop')
        .filter('popularity', PopularityFilter);

    function PopularityFilter() {
        return function popularity(repos, reverse) {
            var newRepos = [].concat(repos);

            return newRepos.sort(function popular(repo1, repo2) {
                var diff = repo2.popularity - repo1.popularity;
                if (diff === 0) {
                    diff = new Date(repo2.create_at) - new Date(repo1.create_at);
                }

                if (reverse) {
                    return diff * -1;
                }
                return diff;
            });
        };
    }
})();
