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
        this.reverse = false;
        this.chosenRepo = null;

        this.getUserRepos = function getUserRepos() {
            poprepos.getRepos(that.username, that.token)
                .then(function(repos) {
                    console.log(repos);
                    repos.data.forEach(function popularity(repo) {
                        repo.popularity = calcPopularity(repo);
                    });

                    that.allRepos = repos.data;
                    console.log(repos.data);
                });
        };

        /**
         * Calculate popularity index for each repo
         * @param  {Object} repo Repo object with properties of stargazers_count,
         *                       forks_count and open_issues_count
         * @return {Number}      The popularity index
         */
        function calcPopularity(repo) {
            return repo.stargazers_count +
                (repo.forks_count * 2) +
                (repo.open_issues_count/2);
        }

        this.chooseRepo = function chooseRepo(repo) {
            that.chosenRepo = repo;
            console.log('chosen repo', that.chosenRepo);
        };



    }
})();
