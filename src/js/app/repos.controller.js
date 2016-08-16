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
                    that.allRepos = repos.data;
                });
        };

    }
})();
