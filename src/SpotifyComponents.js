import React from 'react';
import { Button } from 'semantic-ui-react';
import * as ConstClass from 'Constants.js';

export class SpotifyAPI extends React.Component {




    async get_access() {
        const pre_request = {
            method: "POST",
            headers: {
                'Authorization': ConstClass.AUTHORIZATION,
            }
        };
        pre_request.body = "grant_type=client_credentials";
        let access_token = "";
        await fetch('https://accounts.spotify.com/api/token', pre_request).then((response) => console.log(response.json()));//.then((responseData) => {access_token=responseData['access_token']});
        console.log(access_token);
    }

    render() {
        return (
            <Button style={{margin: '2% 10% 2% 10%'}} onClick={() => {this.get_access()}}>
                <Button.Content>Send Request</Button.Content>
            </Button>
        )
    }
}


