(function(){
  function SongPlayer(Fixtures) {
       var SongPlayer = {};
       /**
       * @desc stores album information
       * @type {object}
       */
       var currentAlbum = Fixtures.getAlbum();
       /**
       * @desc Buzz object audio file
       * @type {object}
       */
       var currentBuzzObject = null;
       /**
       * @function getSongIndex
       * @desc gets the index of the song
       * @param {object} song
       */
       var getSongIndex = function(song){
         return currentAlbum.songs.indexOf(song);
       };

       /**
       * @desc Active song object from the list of songs
       * @type {object}
       */
        SongPlayer.currentSong = null;

        /**
        * @function setSong
        * @desc Stops currently playing song and loads new audio file as currentBuzzObject
        * @param {object} song
        */
       var setSong = function(song){
         if (currentBuzzObject){
           currentBuzzObject.stop();
           SongPlayer.currentSong.playing = null;
         }

         currentBuzzObject= new buzz.sound(song.audioUrl,{
           formats: ['mp3'],
           preload: true
         });
         SongPlayer.currentSong = song;
       };
       /**
       * @function playSong
       * @desc plays the current Buzz object and set the property of the object to true
       * @param {object} song
       */
       var playSong = function(song){
           currentBuzzObject.play();
           song.playing = true;
       };

       SongPlayer.play = function(song) {
         song = song || SongPlayer.currentSong;
         if (SongPlayer.currentSong !== song){
           setSong(song);
           playSong(song);

         } else if(SongPlayer.currentSong === song){
            if (currentBuzzObject.isPaused()){
              currentBuzzObject.play();
              song.playing = true;
           }
         }
       };
       /**
       * @function stopSong
       * @desc stops the current buzz object and sets the playing property to null
       * @param {object} song
       */


       var stopSong = function(song){
         currentBuzzObject.stop();
         song.playing = null;
       };

       SongPlayer.pause = function(song){
         song = song || SongPlayer.currentSong;
         currentBuzzObject.pause();
         song.playing = false;
       };
       /**
       * @function songplayer.previous
       * @desc grabs index of the current song playing from the function getSongIndex and sets the current song index to the previous one
       * @param {object}
       */
       SongPlayer.previous = function(){
         var currentSongIndex = getSongIndex(SongPlayer.currentSong);
         currentSongIndex--;

         if(currentSongIndex <0){
           stopSong(song);
         }else{
           var song = currentAlbum.songs[currentSongIndex];
            setSong(song);
            playSong(song);
         }
       }

       /**
       * @function songplayer.next
       * @desc grabs index of the current song playing from the function getSongIndex and sets the current song index to the next one
       * @param {object}
       */
       SongPlayer.next = function(){
         var currentSongIndex = getSongIndex(SongPlayer.currentSong);
         currentSongIndex++;

         if(currentSongIndex >= currentAlbum.songs.length){
           stopSong(song);
          }else{
            var song = currentAlbum.songs[currentSongIndex];
            setSong(song);
            playSong(song);
          }
     }



    return SongPlayer;
  }

  angular
    .module('blocJams')
    .factory('SongPlayer', ['Fixtures',SongPlayer]);

})();
