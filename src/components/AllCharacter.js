import React, { Component } from 'react'
import * as STYLED from './style'
// Importing styled-componets elements
import './global.css'
// Importing css file
const variants = {
    allShow: {
        opacity: 1,
    },
    hideAll: {
        opacity: 0,
    }
}

const infoVariant = {
    hide: {
        height: 0,
        opacity: 0
    },
    show: {
        height: "67vh",
        opacity: 1,
    }
}

class AllCharacter extends Component {
    constructor() {
        super()

        this.state = {
            loading: false,
            allCharacter: [],
            searchCharacter: '',
            filterCharacter: [],
            showOneCharacter: false,
            selectedChar: '',
            opacityDelay: true,
        }
    }

    componentDidMount() {
        for (let index = 1; index < 10; index++) {
            this.fetchAllPages(index)
        }

    }
    fetchAllPages(index) {
        // Fetching one page at a time
        const allArray = this.state.allCharacter
        const filterArray = this.state.filterCharacter
        fetch(`http://swapi.dev/api/people/?page=${index}`).then(response => response.json())
            .then(data => {
                allArray.push(...data.results)
                filterArray.push(...data.results)
                if (index === 9) {
                    this.setState({ allCharacter: allArray, filterCharacter: filterArray, loading: true })
                } else {
                    this.setState({ allCharacter: allArray, filterCharacter: filterArray })
                }

            })
    }


    onChangeSearch = e => {
        // Real time Search Function
        const textValue = e.target.value
        const filterName = this.state.allCharacter.filter(character => character.name.toLowerCase().search(textValue) !== -1)
        this.setState({ filterCharacter: filterName })

    }
    onShowOneCharacter = id => {
        //Showing one selected sharacter and hiding the UL list
        document.getElementById("scroll").scrollTo({ top: 0, behavior: "smooth" }) // Scroll to top
        const oneCharacter = this.state.filterCharacter[id]
        const boolTest = !this.state.showOneCharacter
        this.setState({ showOneCharacter: boolTest, selectedChar: oneCharacter })
        // Set timeout for Opacity transition
        setTimeout(() => this.setState({ opacityDelay: false }), 550)
    }
    onCancelOneCharacter = () => {
        // Clearing Selected Character and showing the UL list
        const boolTest = !this.state.showOneCharacter
        this.setState({ showOneCharacter: boolTest, selectedChar: '', opacityDelay: true })
    }
    render() {
        const { loading, filterCharacter, showOneCharacter, selectedChar, opacityDelay } = this.state
        const showOverFlow = showOneCharacter ? "hidden" : "auto" // Show overflow
        const opacityHide = opacityDelay ? "0" : "1" // Show opacity
        return (
            <STYLED.FullPage style={{ overflow: showOverFlow }} id="scroll">
                <STYLED.TitlePage>Star Wars Characters</STYLED.TitlePage>
                {loading ? <>
                    <STYLED.SearchDiv>
                        <STYLED.StyledInput type="text" onChange={this.onChangeSearch} placeholder="Search Character" />
                        <STYLED.SearchSpan onClick={this.onSearchClick}>
                            <STYLED.SeachSymbol />
                        </STYLED.SearchSpan>
                    </STYLED.SearchDiv>
                    <STYLED.AboveDiv>
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
                                        <STYLED.CancelButton onClick={this.onCancelOneCharacter}>
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
                    </STYLED.AboveDiv>
                    <STYLED.AllCharactersUL
                        animate={showOneCharacter ? "hideAll" : "allShow"}
                        variants={variants}
                        transition={{ duration: 0.5 }}
                    >
                        {filterCharacter.map((character, key) => (
                            <STYLED.OneCharacterLI key={key}>
                                <STYLED.CharacterNameLI>
                                    {character.name}
                                </STYLED.CharacterNameLI>
                                <STYLED.InfoButton onClick={() => this.onShowOneCharacter(key)} disabled={showOneCharacter}>
                                    <STYLED.InfoSymbol />
                                </STYLED.InfoButton>
                            </STYLED.OneCharacterLI>
                        ))}
                    </STYLED.AllCharactersUL>
                </> : <STYLED.LoadingScreen />}
            </STYLED.FullPage>
        )
    }
}

export default AllCharacter
