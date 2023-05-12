import "../MovieDesc/Movie.css";
import CONJURINGPOT from '../Images/conjuringpot.jpg';

const conjuring = () => {
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
    <h2>Movie Information</h2>
</div>
    
    <section id="info">
        <div class="movie">
            <img src={CONJURINGPOT} style={{width:"100%"}} />
            <h3>The Conjuring</h3>
            <h5>Movie</h5>
            <h6>2013</h6>
        </div>
        <div class="desc">
            <div class="movie-overview">
              <iframe id="overview" width="800" height="800" src="https://www.youtube.com/embed/k10ETZ41q5o"></iframe>
            </div>
            <h4>Synopsis</h4>
            <h5>Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.</h5>
            <table>
                <tr>
                    <td>Producer</td>
                    <td>: Tony DeRosa-Grund, Peter Safran, Rob Cowan</td>
                </tr>
                <tr>
                    <td>Director</td>
                    <td>: James Wan</td>
                </tr>
                <tr>
                    <td>Writer</td>
                    <td>: Chad Hayes, Carey W. Hayes</td>
                </tr>
                <tr>
                    <td>Casts</td>
                    <td>: Patrick Wilson, Vera Farmiga, Ron Livingston, Lili Taylor, Shanley Caswell, Hayley McFarland, Joey King, </td>
                </tr>
                <tr>
                    <td></td>
                    <td>Mackenzie Foy, Kyla Deaver, Shannon Kook, John Brotherton, Sterling Jerins, Marion Guyot, Morganna Bridgers, Amy Tipton, Kymoura Kennedy, Sean Flynn, Ashley White</td>
                </tr>
            </table>
        </div>
    </section>
    <div class="title">
        <h4>Genre:</h4>
    </div>
    <div class="genre">
        <a href="../Genres/Horror.html">Horror</a>
        <a href="../Genres/Mystery.html">Mystery</a>
        <a href="../Genres/Thriller.html">Thriller</a>
    </div>
        </>
    );
}

export default conjuring;