import * as React from 'react';
import { IUserProfile } from '../models/userProfile';
import { Grid } from 'semantic-ui-react';

export interface IMiniProfileProps {
    user: IUserProfile;
}

export default class MiniProfile extends React.Component<IMiniProfileProps> {
    public render() {
        const { username, name, height, hairColour } = this.props.user;

        return (
            <Grid>
                <Grid.Row>
                    <h1>{username}</h1>
                </Grid.Row>
                <Grid.Row>
                    <h1>{name}</h1>
                </Grid.Row>
                <Grid.Row>
                    <h1>{height}</h1>
                </Grid.Row>
                <Grid.Row>
                    <h1>{hairColour}</h1>
                </Grid.Row>
            </Grid>
        );
    }
}
