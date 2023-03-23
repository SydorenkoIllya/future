import ImageBackground from "../atoms/ImageBackgroundMain/ImageBackgroundMain"
import NavBar from "../organisms/Navbar/Navbar"
import Tours from "../organisms/Tours/Tours"
import AppTemplate from "../templates/AppTemplate"

const MainPage = () => {
    return (
        <>
            <div style={{ minHeight: '740px' }}>
                <ImageBackground />
                <NavBar />
            </div>
            <AppTemplate>
                <Tours />
            </AppTemplate>
        </>
    )
}

export default MainPage;