import Letter from "./letter";

export default function ({word}) {
    let letters = word
                .split('')
                .map(letter => (
                    <Letter 
                    value={letter}
                    isShown = {true}
                    />
                ));

    return (
        <div>
            {letters}
        </div>
    );
}