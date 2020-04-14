import * as React from 'react';
import { IUserProfile } from '../models/userProfile';
import MiniProfile from './MiniProfile';
import { Grid } from 'semantic-ui-react';

export interface ISectionWithLoopRenderingProps {
}

interface ISectionWithLoopRenderingState {
    userProfiles: IUserProfile[];
}

export default class SectionWithLoopRendering extends React.Component<ISectionWithLoopRenderingProps, ISectionWithLoopRenderingState> {
    
    constructor(props: ISectionWithLoopRenderingProps) {
        super(props);
        
        this.state = {
            userProfiles: [
                {
                    username: "alpha",
                    name: "Anna Apple",
                    height: "165 cm",
                    hairColour: "black"
                },
                {
                    username: "beta",
                    name: "Bob Bell",
                    height: "175 cm",
                    hairColour: "brown"
                },
                {
                    username: "delta",
                    name: "Chris Corner",
                    height: "170 cm",
                    hairColour: "blond"
                }
            ]
        }
    }



    public render() {
        const { userProfiles } = this.state;
        
        return (
            <Grid>
                {
                    userProfiles.map(individualProfile => (
                        <Grid.Row centered>
                        <MiniProfile user={individualProfile} />
                        </Grid.Row>
                    ))};
        
            </Grid>
        );
    }




}
