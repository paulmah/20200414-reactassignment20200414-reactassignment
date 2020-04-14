import * as React from 'react';
import { Input, Button } from 'semantic-ui-react';

export interface ISpecialInputSectionProps {
    onClickUserNameSetButton: (input: string) => void;
}

interface IState {
    userName: string;
}

export default class SpecialInputSection extends React.Component<ISpecialInputSectionProps, IState> {
    constructor(props: ISpecialInputSectionProps) {
        super(props);
        this.state = {
            userName: ""
        }
    }

    private onInputFieldChange = (e: React.FormEvent<HTMLInputElement>) => {
        this.setState({ userName: e.currentTarget.value })
    }

    public render() {
        const { onClickUserNameSetButton } = this.props;
        const { userName } = this.state;
        return (
            <section>
                <Input placeholder='username' onChange={this.onInputFieldChange} />
                <Input placeholder='password' onChange={this.onInputFieldChange} />
                    <Button content="Submit New Username" color="green" onClick={() => onClickUserNameSetButton(userName)} />
            </section>
        );
    }
}
