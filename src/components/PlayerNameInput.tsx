interface PlayerNameInputProps {
    label?: string;
    value?: string;
}

export const PlayerNameInput = (props: PlayerNameInputProps) => {
    const {label, value} = props;

    return (
        <>
            <label htmlFor="playerNameInput" data-testid="playerLabel">{label}</label>
            <input type="text" id="playerNameInput" role="input" />
        </>
    );
}