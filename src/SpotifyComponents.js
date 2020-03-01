import React from 'react';
import { Button } from 'semantic-ui-react';

export class SpotifyAPI extends React.Component {




    async get_access() {
        // client_id = 0b31f7826c1a401dad7163147471caf5;
        // client_secret = a13f86b705d7470c8a472e2e04692804;

        const pre_request = {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-url-encoded',
                'Authorization': 'Basic MGIzMWY3ODI2YzFhNDAxZGFkNzE2MzE0NzQ3MWNhZjU6YTEzZjg2YjcwNWQ3NDcwYzhhNDcyZTJlMDQ2OTI4MDQ=',
            }
        };
        pre_request.body = "grant_type=client_credentials";
        let access_token = "";
        await fetch('https://accounts.spotify.com/api/token', pre_request).then((response) => response.json()).then((responseData) => {access_token=responseData['access_token']});
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


