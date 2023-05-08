import "../MovieDesc/Movie.css";
import BPPOT from '../Images/bppot.jpeg'

const BP2 = () => {
    return (
        <>
        <div>
        <ul id="nav">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <li><a href="/">Home</a></li>
            <li><a href="Index.js">Halaman Utama</a></li>
            <li>
                <select>
                    <option>Genre</option>
                    <option>Action</option>
                    <option>Adventure</option>
                    <option>Biography</option>
                    <option>Comedy</option>
                    <option>Crime</option>
                    <option>Drama</option>
                    <option>Fantasy</option>
                    <option>Horror</option>
                    <option>Mystery</option>
                    <option>Romance</option>
                    <option>Sci-Fi</option>
                    <option>Sport</option>
                    <option>Thriller</option>
                </select>
            </li>
        </ul>
    </div>
<div class="title">
    <h2>Movie Information</h2>
</div>
    
    <section id="info">
        
        <div class="movie">
            <img src={BPPOT} style={{width:"100%"}} />
            <h3>Black Panther: Wakanda Forever</h3>
            <h5>Movie</h5>
            <h6>2022</h6>
        </div>
        <div class="desc">
            <div class="movie-overview">
                <iframe id="overview" width="800" height="800" src="https://www.youtube.com/embed/RlOB3UALvrQ"></iframe>
            </div>
            <h4>Synopsis</h4>
            <h5>Queen Ramonda, Shuri, M'Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T'Challa's death. As the Wakandans strive to embrace their next chapter, the heroes must band together with Nakia and Everett Ross to forge a new path for their beloved kingdom.</h5>
            <table>
                <tr>
                    <td>Producer</td>
                    <td>: Kevin Fiege, Nate Moore</td>
                </tr>
                <tr>
                    <td>Director</td>
                    <td>: Ryan Coogler</td>
                </tr>
                <tr>
                    <td>Writer</td>
                    <td>: Ryan Coogler, Joe Robert Cole, Stan Lee</td>
                </tr>
                <tr>
                    <td>Casts</td>
                    <td>: Letitia Wright, Lupita Nyong'o, Danai Gurira, Winston Duke, Agenla Bassett, Tenoch Huerta, Martin Freeman, </td>
                </tr>
                <tr>
                    <td></td>
                    <td> Julia Louis-Dreyfus, Dominique Thorne, Florence Kasumba, Michaela Coel, Alex Livinalli, Mabel Cadena, Michael B. Jordan</td>
                </tr>
            </table>
        </div>
    </section>
    <div class="title">
        <h4>Genre:</h4>
    </div>
    <div class="genre">
        <a href="../Genres/Action.html">Action</a>
        <a href="../Genres/Adventure.html">Adventure</a>
        <a href="../Genres/Drama.html">Drama</a>
        <a href="../Genres/Sci-Fi.html">Sci-Fi</a>
    </div>
        </>
    );
};

export default BP2;