import ImageBackgroundFavourite from "../atoms/ImageBackgroundFavourite/ImageBackgroundFavourite"
import FavouriteList from "../organisms/FavouriteList/FavouriteList"
import NavBar from "../organisms/Navbar/Navbar"
import AppTemplate from "../templates/AppTemplate"

const FavouritePage = () => {
    return (
        <>
            <NavBar active={true} />
            <ImageBackgroundFavourite />
            <AppTemplate>
                <FavouriteList />
            </AppTemplate>
        </>
    )
}

export default FavouritePage