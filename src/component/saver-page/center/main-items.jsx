import blueFilm from "../../../assets/blue_film.png";
import blueSeries from "../../../assets/blue_series.png";
import blueAnime from "../../../assets/blue_anime.png";
import blueMult from "../../../assets/blue_mult.png";
import blueGame from "../../../assets/blue_game.png";
import pinkFilm from "../../../assets/pink_film.png";
import pinkSeries from "../../../assets/pink_film.png";
import pinkAnime from "../../../assets/pink_film.png";
import pinkMult from "../../../assets/pink_film.png";
import pinkGame from "../../../assets/pink_film.png";
import Card from "./card";
import "../../global/global.scss";

const MainItems = () => {
    // TODO
    // this is a temporary imitation of the database
    const dataBase = {
        film: {
            imgBlue: blueFilm,
            imgPink: pinkFilm,
            altBlue: "Blue Img for Film",
            altPink: "Pink Img for Film",
            description:
                "Сохрани любимые фильмы и возвращайся к ним, когда захочешь! Все твои впечатления — в одном месте.",
        },
        Series: {
            imgBlue: blueSeries,
            imgPink: pinkAnime,
            altBlue: "Blue Img for Series",
            altPink: "Pink Img for Series",
            description:
                "Залипли на сериал? Сохраняйте его в вашей коллекции и возвращайтесь за новыми впечатлениями!",
        },
        Anime: {
            imgBlue: blueAnime,
            imgPink: pinkSeries,
            altBlue: "Blue Img for Anime",
            altPink: "Pink Img for Anime",
            description:
                "Наслаждаетесь аниме? Сохраняйте в коллекцию и исследуйте новые горизонты!",
        },
        Cartoon: {
            imgBlue: blueMult,
            imgPink: pinkMult,
            altBlue: "Blue Img for Cartoon",
            altPink: "Pink Img for Cartoon",
            description:
                "Сохраняйте любимые мультфильмы и создавайте свою уникальную коллекцию!",
        },
        Game: {
            imgBlue: blueGame,
            imgPink: pinkGame,
            altBlue: "Blue Img for Game",
            altPink: "Pink Img for Game",
            description:
                "Сохраняйте свои любимые игры и получайте максимум удовольствия!",
        },
    };

    return (
        <section className="column">
            {Object.keys(dataBase).map((key) => (
                <Card
                    key={key}
                    imgBlue={dataBase[key].imgBlue}
                    // imgPink={dataBase[key].imgPink}
                    altBlue={dataBase[key].altBlue}
                    // altPink={dataBase[key].altPink}
                    description={dataBase[key].description}
                />
            ))}
        </section>
    );
};

export default MainItems;
