import { ProxyState } from "../AppState.js";

export default class Song {
  constructor(data) {
    this.title = data.trackName || data.title;
    this.albumArt =
      data.albumArt || data.artworkUrl100.replace(/100x100/g, "300x300");
    this.artist = data.artistName || data.artist;
    this.album = data.collectionName || data.album;
    this.price = data.trackPrice || data.price;
    this.preview = data.previewUrl || data.preview;
    this._id = data.trackId || data._id;
  }

  get Template() {
    return /*html*/`
<div class="col-5 text-center m-3 shadow-lg bg-light text-dark">
<h5>${this.artist} - ${this.title}</h5>
<p>${this.album}</p>
<img src="${this.albumArt}" class="img-fluid" alt=""/>
<audio controls class="mt-1 border border-dark rounded shadow">
<source src="${this.preview}" type=""/>
</audio>
<button onclick="app.songsController.addSong('${this._id}')" class="btn my-1 btn-primary rounded">$${this.price}</button>


</div>
`;
  }

  // {/*  */}

  get PlaylistTemplate() {
    return /*html*/`
    <div class="col-5 text-center m-3 shadow-lg bg-light">
<h5>${this.artist} - ${this.title}</h5>
<p>${this.album}</p>
<img src="${this.albumArt}" class="img-fluid" alt=""/>
<audio controls class="mt-1 border border-dark rounded shadow">
<source src="${this.preview}" type=""/>
</audio>
<button onclick="app.songsController.removeSong('${this._id}')" class="btn my-1 btn-danger rounded">Delete</button>


</div>

        `;
  }

}



// Song
// album: "1989"
// albumArt: "https://is5-ssl.mzstatic.com/image/thumb/Music128/v4/9c/91/83/9c918303-e0a4-2d4b-97d6-f986b9fba604/source/300x300bb.jpg"
// artist: "Taylor Swift"
// preview: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview118/v4/4d/80/bb/4d80bb0d-5b66-7c09-056c-4dbae131e0c4/mzaf_6323814923022681502.plus.aac.p.m4a"
// price: 1.29
// title: "Shake It Off"
// _id: 1440936016