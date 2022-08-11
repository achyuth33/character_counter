import {Component} from 'react'
import {v4} from 'uuid'
import UserInput from '../UserInput'

import {
  BgContainer,
  YellowBgContainer,
  Image,
  AddButton,
  Input,
  InputContainer,
  CharacterHeading,
  CharacterCountContainer,
  CharacterInfoContainer,
  Heading,
  UserInputsList,
} from './styledComponents'

class CharacterCounter extends Component {
  state = {
    userInputsList: [],
    userInput: '',
  }

  onChangeUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  onAddUserInput = event => {
    event.preventDefault()
    const {userInput} = this.state
    const newUserInput = {
      id: v4(),
      userEnteredText: userInput,
      textLength: userInput.length,
    }
    this.setState(prevState => ({
      userInputsList: [...prevState.userInputsList, newUserInput],
      userInput: '',
    }))
  }

  renderUserInputs = () => {
    const {userInputsList} = this.state
    return userInputsList.length === 0 ? (
      <Image
        src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
        alt="no user inputs"
      />
    ) : (
      userInputsList.map(eachItem => (
        <UserInput key={eachItem.id} userInputDetails={eachItem} />
      ))
    )
  }

  render() {
    const {userInput} = this.state
    return (
      <BgContainer>
        <YellowBgContainer>
          <CharacterInfoContainer>
            <Heading>
              Count the characters like a <br />
              Boss...
            </Heading>
          </CharacterInfoContainer>
          <UserInputsList>{this.renderUserInputs()}</UserInputsList>
        </YellowBgContainer>
        <CharacterCountContainer>
          <CharacterHeading>Character Counter</CharacterHeading>
          <InputContainer onSubmit={this.onAddUserInput}>
            <Input
              type="text"
              value={userInput}
              onChange={this.onChangeUserInput}
              placeholder="Enter the characters here"
            />
            <AddButton>Add</AddButton>
          </InputContainer>
        </CharacterCountContainer>
      </BgContainer>
    )
  }
}

export default CharacterCounter
