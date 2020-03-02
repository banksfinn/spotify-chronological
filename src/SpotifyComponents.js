import React from 'react';
import {Button} from 'semantic-ui-react';

async function formQuery(type, auth, url, query) {
    const pre_request = {
        method: type,
        headers: {'Authorization': 'Bearer ' + auth, 'Content-Type': 'application/json'}
    };
    let q_response = "";
    await fetch(url + query, pre_request).then((response) => response.json()).then((responseData) => q_response=responseData);
    console.log(q_response);
    return q_response;
}

async function getTracks(type, auth, url, query) {
    const pre_request = {
        method: type,
        headers: {'Authorization': 'Bearer ' + auth, 'Content-Type': 'application/json'}
    };
    let q_response = "";
    await fetch(url + query, pre_request).then((response) => response.json()).then((responseData) => q_response=responseData['items']);
    console.log(q_response);
    console.log(typeof(q_response));
    let tracks = [];
    for (let i = 0; i < q_response.length; i++) {
        tracks.push({'link': q_response[i]['external_urls']['spotify'], 'date': q_response[i]['release_date']});
    }
    return tracks;
}

function createCopyList(data) {
    console.log(typeof(data));
}

export class SpotifyAPI extends React.Component {

    constructor(props) {
        super(props);
        this.access_token = "";
        this.state = {
            message: 'Default content'
        }
    }

    async get_tracks(id) {
        if (this.access_token === "")
            await this.get_access();
        let i = 0;
        let tracks = await getTracks("GET", this.access_token, "https://api.spotify.com/v1/artists/" + id + "/albums", "?offset=0&limit=50&include_groups=album,single,appears_on,compilation&market=US");
        while (tracks.length / (i + 1) === 50) {
            let new_tracks = await getTracks("GET", this.access_token, "https://api.spotify.com/v1/artists/" + id + "/albums", "?offset=" + i + "&limit=50&include_groups=album,single,appears_on,compilation&market=US");
            tracks.push(new_tracks)
        }
        console.log(tracks);
        createCopyList(tracks);
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
        await fetch('https://accounts.spotify.com/api/token', pre_request).then((response) => response.json()).then((responseData) => {access_token=responseData['access_token']});
        this.access_token = access_token;
    }

    async get_song() {
        if (this.access_token === "")
            await this.get_access();
        let resp = await formQuery('GET', this.access_token, 'https://api.spotify.com/v1/search', '?q=illenium&type=artist');
        this.setState({message: resp})
    }

    render() {
        return (
            <div>
            <Button style={{margin: '2% 10% 2% 10%'}} onClick={() => {
                this.get_access()
            }}>
                <Button.Content>Send Request</Button.Content>
            </Button>
                <Button style={{margin: '2% 10% 2% 10%'}} onClick={() => {
                    this.get_tracks("45eNHdiiabvmbp4erw26rg")
                }}>
                    <Button.Content>Send Request</Button.Content>
                </Button>
                <div>{ this.state.message } </div>
            </div>
        )
    }
}


