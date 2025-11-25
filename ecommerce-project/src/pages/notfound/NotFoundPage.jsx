import Header from "../../components/Header";
import './NotFoundPage.css';
function NotFoundPage(){
    return (
        <>
            <title>404 Not Found</title>
            <link rel="icon" type="image/svg+xml" href="./public/home-favicon.png" />
            <Header cart={[]} />
            <div className="_404">404</div>
            <div className="not-found-page">
                Page not found
            </div>      
        </>
    );
}
export default NotFoundPage;