import './Navbar.css'

function Navbar ( { onShuffleClick } ) {
    return (
        <div className="navbar">
            <button onClick={ onShuffleClick }>Shuffle Rangers</button>
        </div>
    );
}

export default Navbar;