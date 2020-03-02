import React from 'react';
import {Button, Input, Form} from 'semantic-ui-react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

async function formQuery(type, auth, url, query) {
    const pre_request = {
        method: type,
        headers: {'Authorization': 'Bearer ' + auth, 'Content-Type': 'application/json', 'Accept': 'application/json'}
    };
    let q_response = "";
    await fetch(url + query, pre_request).then((response) => response.json()).then((responseData) => q_response=responseData);
    return q_response;
}

async function getSongsFromAlbum(album_id, date, auth) {
    let songs = [];
    let items = await formQuery("GET", auth, 'https://api.spotify.com/v1/albums/' + album_id + "/tracks", "");

    let i = 0;
    for (let item of items['items']) {
        songs.push({'uri': item['uri'], 'name': item['name'], 'date': date, 'order': i});
        i += 1;
    }
    return songs;
}

async function getTracks(type, auth, url, query) {
    const pre_request = {
        method: type,
        headers: {'Authorization': 'Bearer ' + auth, 'Content-Type': 'application/json'}
    };
    let q_response = "";
    await fetch(url + query, pre_request).then((response) => response.json()).then((responseData) => q_response=responseData['items']);
    let tracks = [];
    for (let i = 0; i < q_response.length; i++) {
        tracks.push({'id': q_response[i.toString()]['id'], 'date': q_response[i.toString()]['release_date']});
    }
    return tracks;
}

function removeDuplicateSongs(data) {
    let new_data = [];
    let repeats = 0;
    let songs = {};
    for (let song of data) {
        if (song['name'] in songs) {
            repeats += 1;
        } else {
            new_data.push(song);
            songs[song['name']] = 1
        }
    }
    console.log('There been ' + repeats + ' songs removed after trimming');
    return new_data
}

function createSingleList(data, key) {
    let string = "";
    for (let track of data) {
        string += track[key];
        string += "\n";
    }
    return string;
}

export class SpotifyAPI extends React.Component {

    constructor(props) {
        super(props);
        this.access_token = "";
        this.artist = "";
        this.state = {
            message: 'Default content',
            copy_value: '',
            count: "There are 0 songs (so far)",
            albums_incl: false,
            singles_incl: false,
            appears_on: false,
            compilation: false
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    async get_tracks(id) {
        if (this.access_token === "")
            await this.get_access();
        let i = 0;
        let criteria = 'include_groups=';
        criteria += this.state.albums_incl ? "album," : "";
        criteria += this.state.singles_incl ? "single," : "";
        criteria += this.state.appears_on ? "appears_on," : "";
        criteria += this.state.compilation ? "compilation," : "";
        criteria = criteria.slice(0, -1);
        let albums = await getTracks("GET",
            this.access_token, "https://api.spotify.com/v1/artists/" + id + "/albums",
            "?offset=0&limit=50&" + criteria + "&market=US");
        while (albums.length / (i + 1) === 50) {
            let new_albums = await getTracks("GET", this.access_token, "https://api.spotify.com/v1/artists/" + id + "/albums", "?offset=" + i + "&limit=50&" + criteria + "&market=US");
            albums = albums.concat(new_albums);
            i += 1;
        }
        let tracks = [];
        for (let j = 0; j < albums.length; j++) {
            let new_tracks = await getSongsFromAlbum(albums[j]['id'], albums[j]['date'], this.access_token);
            tracks = tracks.concat(new_tracks)
        }
        tracks = removeDuplicateSongs(tracks);
        this.setState({count: "There are " + tracks.length + " songs."});
        this.setState({copy_value: createSingleList(tracks, 'uri')});
        this.setState({message: createSingleList(tracks, 'name')});
    }

    async get_artist(artist) {
        if (this.access_token === "")
            await this.get_access();
        artist = encodeURIComponent(artist.trim());
        let artists = await formQuery("GET", this.access_token, "https://api.spotify.com/v1/search", "?q=" + artist + "&type=artist");
        let artist_id = artists['artists']['items'][0]['id'];
        this.get_tracks(artist_id)
    }

    async get_access() {
        let auth = 'Basic ' + process.env.REACT_APP_AUTH + '=';
        const pre_request = {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': auth,
            }
        };
        pre_request.body = "grant_type=client_credentials";
        let access_token = "";
        await fetch('https://accounts.spotify.com/api/token',
            pre_request).then((response) => response.json()).then((responseData) => {access_token=responseData['access_token']});
        this.access_token = access_token;
    }

    async get_song() {
        if (this.access_token === "")
            await this.get_access();
        let resp = await formQuery('GET', this.access_token, 'https://api.spotify.com/v1/search', '?q=illenium&type=artist');
        this.setState({message: resp})
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div>
                <div>{ this.state.count } </div>
                <Form.Field>
                    <input
                        name="albums_incl"
                        type="checkbox"
                        checked={this.state.albums_incl}
                        onChange={this.handleInputChange}/>
                    <input
                        name="singles_incl"
                        type="checkbox"
                        checked={this.state.singles_incl}
                        onChange={this.handleInputChange}/>
                    <input
                        name="appears_on"
                        type="checkbox"
                        checked={this.state.appears_on}
                        onChange={this.handleInputChange}/>
                    <input
                        name="compilation"
                        type="checkbox"
                        checked={this.state.compilation}
                        onChange={this.handleInputChange}/>
                    <Input type='text' id="artist_id" placeholder="insert artist name here"
                           onChange={()=>{this.artist = document.getElementById('artist_id').value}}/>
                    <Button onClick={()=> this.get_artist(this.artist)}>Look up Artist</Button>
                </Form.Field>
                <CopyToClipboard text={this.state.copy_value}>
                    <button>Copy to clipboard with button, paste into a new album!</button>
                </CopyToClipboard>
                <div>{ this.state.message } </div>
            </div>
        )
    }
}


