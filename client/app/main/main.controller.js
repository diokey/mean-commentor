'use strict';

angular.module('meanCommentorApp')
  .controller('MainCtrl', function ($scope, $http, socket, Auth) {
    $scope.newComment = '';
    $scope.submitButton = 'Post';
    $scope.user = Auth.getCurrentUser();
    $scope.editing = false;
    
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

       if ( ! $scope.editing) { 
           $http.post('/api/comments',{content : $scope.newComment});
       }else {
           $http.put('api/comments/'+$scope.editedComment._id,{content : $scope.newComment});
       }

       $scope.newComment = '';
       delete $scope.editedComment;
       $scope.submitButton = 'Post';
       $scope.editing = false;
    };

    $scope.removeComment = function (comment) {
        $http.delete('api/comments/'+comment._id);
        socket.syncUpdates('comment');
    };

    $scope.editComment = function (comment) {
       $scope.newComment = comment.content;
       $scope.editedComment = comment;
       $scope.editing = true;
       $scope.submitButton = 'Update';
    };

  });
