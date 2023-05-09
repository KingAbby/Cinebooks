import "../MovieDesc/Movie.css";
import AVATARPOT from '../Images/avatarpot.jpg'

const Avatar2 = () => {
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
            <img src={AVATARPOT} style={{width:"100%"}} />
            <h3>Avatar: The Way of Water</h3>
            <h5>Movie</h5>
            <h6>2022</h6>
        </div>
        <div class="desc">
            <div class="movie-overview">
                <iframe id="overview" width="800" height="800" src="https://www.youtube.com/embed/d9MyW72ELq0"></iframe>
            </div>
            <h4>Synopsis</h4>
            <h5>Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their home.</h5>
            <table>
                <tr>
                    <td>Producer</td>
                    <td>: James Cameroon, Jon Landau </td>
                </tr>
                <tr>
                    <td>Director</td>
                    <td>: James Cameroon</td>
                </tr>
                <tr>
                    <td>Writer</td>
                    <td>: James Cameroon, Rick Jaffa, Amanda Silver</td>
                </tr>
                <tr>
                    <td>Casts</td>
                    <td>: Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang, Kate Winslet, Cliff Curtis, Joel David Moore, </td>
                </tr>
                <tr>
                    <td></td>
                    <td>CCH Pounder, Edie Falco, Brendan Cowell, Jermaine Clement, Jamie FLatters, Britain Dalton, Trinity Jo-Li Bliss, Jack Champion, Bailey Bass, Filip Geljo, Duane Evans Jr</td>
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
        <a href="../Genres/Fantasy.html">Fantasy</a>
    </div>
        </>
    );
};

export default Avatar2;