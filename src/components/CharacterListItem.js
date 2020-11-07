import React from 'react'
import * as STYLED from './style'
const CharacterListItem = ({ character, index, onShowOneCharacter, showOneCharacter }) => (
    <STYLED.OneCharacterLI>
        <STYLED.CharacterNameLI>
            {character.name}
        </STYLED.CharacterNameLI>
        <STYLED.InfoButton onClick={() => onShowOneCharacter(index)} disabled={showOneCharacter}>
            <STYLED.InfoSymbol />
        </STYLED.InfoButton>
    </STYLED.OneCharacterLI>
)

export default CharacterListItem
