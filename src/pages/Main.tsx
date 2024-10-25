import BookComponent from "../components/BookComponent"
import NavigationBar from "../components/Layout/navBar/NavigationBar"
import DaumPost from "../api/DaumPost"

export default function Main() {
    return (
        <>
            <BookComponent />
            <DaumPost />
            <NavigationBar />
        </>
    )
}
