'use strict';

angular.module('meanCommentorApp')
  .controller('MainCtrl', function ($scope, $http, socket) {
    $scope.newComment = '';

    $http.get('/api/comments').success(function(comments) {
        $scope.comments = comments;

        socket.syncUpdates('comment',$scope.comments, function(){
            comments.sort(function(a,b) {
                a = new Date(a.date);
                b = new Date(b.date);
                return a > b ? - 1 : a < b ? 1 : 0;
            }); 
        });
    });
   
    //clelan up listeneres when controller is destroyed
    $scope.$on('$destroy',function(){
        socket.unsyncUpdates('comment');
    });

    //use our rest api to post new Comments
    $scope.addComment = function () {
       $http.post('/api/comments',{content : $scope.newComment});

       $scope.newComment = '';
    };

    $scope.removeComment = function (comment) {
        $http.delete('api/comments/'+comment._id);
        socket.syncUpdates('comment');
    };

  });
