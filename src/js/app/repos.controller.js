(function() {
    'use strict';

    angular.module('pop')
        .controller('ReposController', ReposController);

    ReposController.$inject = ['poprepos'];

    function ReposController(poprepos) {
        var that = this;
        this.allRepos = [];
        this.username = null;
        this.token = null;

        this.getUserRepos = function getUserRepos() {
            poprepos.getRepos(that.username, that.token)
                .then(function(repos) {
                    console.log(repos);
                    repos.data.forEach(function popularity(repo) {
                        repo.popularity =
                            repo.stargazers_count +
                            (repo.forks_count * 2) +
                            (repo.open_issues_count/2);
                    });

                    that.allRepos = repos.data;
                    console.log(repos.data);
                });
        };



    }
})();
