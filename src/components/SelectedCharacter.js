import React from 'react'
import * as STYLED from './style'
const SelectedCharacter = ({ showOneCharacter, infoVariant, selectedChar, opacityHide, onCancelOneCharacter }) => (
    <STYLED.SelectedCharDiv
        animate={showOneCharacter ? "show" : "hide"}
        variants={infoVariant}
        transition={{ duration: 0.5 }}
    >
        {showOneCharacter ?
            <>
                <STYLED.NameAndButtonDiv
                    style={{ opacity: opacityHide }}
                >
                    <STYLED.SelectedCharName>
                        {selectedChar.name}
                    </STYLED.SelectedCharName>
                    <STYLED.CancelButton onClick={onCancelOneCharacter}>
                        <STYLED.CancelSymbol />
                    </STYLED.CancelButton>
                </STYLED.NameAndButtonDiv>
                <STYLED.InfoTextDiv
                    style={{ opacity: opacityHide }}
                >
                    <STYLED.InfoText>Birth Year : {selectedChar.birth_year}</STYLED.InfoText>
                    <STYLED.InfoText>Eye Color : {selectedChar.eye_color}</STYLED.InfoText>
                    <STYLED.InfoText>Gender : {selectedChar.gender}</STYLED.InfoText>
                    <STYLED.InfoText>Hair Color : {selectedChar.hair_color}</STYLED.InfoText>
                    <STYLED.InfoText>Height : {selectedChar.height}</STYLED.InfoText>
                    <STYLED.InfoText>Mass : {selectedChar.mass}</STYLED.InfoText>
                    <STYLED.InfoText>Skin Color : {selectedChar.skin_color}</STYLED.InfoText>
                </STYLED.InfoTextDiv>
            </>
            : null}
    </STYLED.SelectedCharDiv>
)

export default SelectedCharacter
