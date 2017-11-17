(function(){
  function AlbumCtrl(){
    this.album = angular.copy(albumPicasso);
    //this.album.push();
    /*this.songs = [];
    for (var i=0;i<5;i++){
      this.songs.push(angular.copy(albumPicasso.songs[i]));
    }*/

  }
  angular
    .module('blocJams')
    .controller('AlbumCtrl', AlbumCtrl);

})();
