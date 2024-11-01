import { useState } from "react"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"

import { useSearch } from "../../../context/SearchContext"

import { ReactComponent as Searchsvg } from "../../../assets/icon/search-svgrepo-com.svg"

import FadeIn from "../../Login/components/FadeIn"

const SearchWrapper = styled.div`
    display: flex;
    width: calc(100% - 92px);
    border-radius: 26.5px;
    justify-content: space-between;
    background-color: rgba(229, 229, 229, 1);
    border: 2px solid rgba(235, 172, 100, 1);
    margin: 20px 20px 0;
    padding: 0 20px;
    align-items: center;
`
const Input = styled.input`
    width: 100%;
    border-radius: 26.5px;
    background-color: rgba(229, 229, 229, 1);
    font-size: 20px;
    color: #333;
    font-weight: bold;
    margin: 12px 0;
    &::placeholder {
        color: #afafaf;
    }

    &:focus {
        outline: none;
        border-color: rgba(235, 172, 100, 1);
    }
`
const SearchIcon = styled(Searchsvg)`
    color: rgba(205, 61, 63, 1);
    cursor: pointer;
    flex-shrink: 0;
    width: 40px;
    height: 40px;
`
export default function Search() {
    const [serachText, setSearchText] = useState("")
    const { setSearchTerm } = useSearch()
    const navigate = useNavigate()

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value)
    }
    const handleSearch = () => {
        setSearchTerm(serachText)
        setSearchText("")
        navigate("/main/search")
    }
    return (
        <FadeIn>
            <SearchWrapper>
                <Input
                    placeholder="지금 읽고 싶은 책이 있나요?"
                    onChange={onChange}
                    value={serachText}
                    onKeyPress={e => {
                        if (e.key === "Enter") handleSearch()
                    }}
                />
                <SearchIcon onClick={handleSearch} />
            </SearchWrapper>
        </FadeIn>
    )
}
