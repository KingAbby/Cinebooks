import "../MovieDesc/Movie.css";
import THELASTOFUSPOT from '../Images/thelastofuspot.jpg';

const thelastofus = () => {
    return (
        <>
        <div>
        <ul id="nav">
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
    <h2>Series Information</h2>
</div>
    
    <section id="info">
        <div class="movie">
            <img src={THELASTOFUSPOT} style={{width:"100%"}} />
            <h5>TV Series</h5>
            <h6>2023</h6>
        </div>
        <div class="desc">
            <div class="movie-overview">
              <iframe id="overview" width="800" height="800" src="https://www.youtube.com/embed/uLtkt8BonwM"></iframe>
            </div>
            <h4>Synopsis</h4>
            <h5>After a global pandemic destroys civilization, a hardened survivor takes charge of a 14-year-old girl who may be humanity's last hope.</h5>
            <table>
                <tr>
                    <td>Producer</td>
                    <td>: Greg Spence, Cecil O'Connor</td>
                </tr>
                <tr>
                    <td>Director</td>
                    <td>: Ali Abbasi, Jeremy Webb, Neil Druckmann, Peter Hoar, Liza Johnson, Craig Mazin, Jasmilla Zbanic</td>
                </tr>
                <tr>
                    <td>Writer</td>
                    <td>: Craig Mazin, Neil Druckmann</td>
                </tr>
                <tr>
                    <td>Casts</td>
                    <td>: Pedro Pascal, Bella Ramsey, Anna Torv, Lamar Johnson, Melanie Lynskey, Nico Parker, Merle Dandrige, </td>
                </tr>
                <tr>
                    <td></td>
                    <td>Keivonn Woodard, Jeffrey Pierce, John Getz, Gabriel Luna, Samuel Hoeksema, Olivier Ross-Parent, Storm Reid, Scott Shepherd, Ashley Johnson, Nick Offerman, Troy Baker</td>
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
    </div>
        </>
    );
}

export default thelastofus;