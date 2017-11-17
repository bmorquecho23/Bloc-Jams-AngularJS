(function(){
  function AlbumCtrl(){
    this.album =[];
    this.album.push(angular.copy(albumPicasso));
    /*this.songs = [];
    for (var i=0;i<5;i++){
      this.songs.push(angular.copy(albumPicasso.songs[i]));
    }*/

  }
  angular
    .module('blocJams')
    .controller('AlbumCtrl', AlbumCtrl);

})();
