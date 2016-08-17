(function() {
    'use strict';

    angular.module('pop')
        .filter('popularity', PopularityFilter);

    function PopularityFilter() {
        return function popularity(repos, byDate, reverse) {
            var newRepos;

            newRepos = repos.sort(function popular(repo1, repo2) {
                return (repo1.popularity - repo2.popularity) * -1;
            }) ;

            if (byDate) {
                newRepos= newRepos.sort(function (repo1, repo2) {
                    if (repo1.popularity === repo2.popularity) {
                        return (new Date(repo1.created_at) - new Date(repo2.created_at)) * -1;
                    }
                });
            }

            if (reverse) {
                newRepos = newRepos.reverse(); 
            }

            return newRepos;
        };
    }
})();
