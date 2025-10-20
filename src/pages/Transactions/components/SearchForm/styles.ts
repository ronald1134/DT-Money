import styled from 'styled-components'

export const SearchFormContainer = styled.form`
    display: flex;
    gap: 1rem;

    input{
        flex: 1;
        border-radius: 6px;
        border: none;
        background: ${props => props.theme['gray-900']};
        color: ${props => props.theme['gray-300']};
        padding: 1rem;

        &::placeholder {
            color: ${props => props.theme['gray-500']};
        }


                &:-webkit-autofill,
        &:-webkit-autofill:hover,
        &:-webkit-autofill:focus,
        &:-webkit-autofill:active {
            -webkit-box-shadow: 0 0 0 1000px ${(props) => props.theme["gray-900"]} inset !important;
            caret-color: ${(props) => props.theme["gray-300"]};
            transition: background-color 5000s ease-in-out 0s;
        }
        

    }



    button {
        display: flex;
            align-items: center;
            gap: 0.75rem;

            border: none;
            padding: 1rem;
            background-color: transparent;
            border: 1px solid ${props => props.theme['green-300']};
            color: ${props => props.theme['white']};
            font-weight: bold;
            border-radius: 6px;
            cursor: pointer;

            &:disabled{
                opacity: 0.6;
                cursor: not-allowed;
            }

            &:not(:disabled):hover{
                background-color: ${props => props.theme['green-500']};
                border-color: ${props => props.theme['green-500']};
                color: ${props => props.theme.white};
                transition: background-color 0.2s, color 0.2s, border-color 0.2s;
            }
        }    
    
`