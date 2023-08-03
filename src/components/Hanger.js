export default function Hanger({mistakes}) {
    return ( 
        <div className={`hanger ${mistakes >= 1 ? 'dark' : ''}`}>
        {mistakes >=2 &&
            <div className="hanger__moon">
                <div class="moon-spot moon-spot-1"></div>
                <div class="moon-spot moon-spot-2"></div>
                <div class="moon-spot moon-spot-3"></div>
                <div class="moon-spot moon-spot-4"></div>
                <div class="moon-spot moon-spot-5"></div>
            </div>
        }
        {mistakes >= 3 &&
            <div className="hanger__tree">
                <div className="branch branch1"></div>
                <div className="branch branch2"></div>
                <div className="branch branch3"></div>
                <div className="branch branch4"></div>
                <div className="branch branch5"></div>
            </div>
        }
        {mistakes >= 4 &&
            <div className="hanger__loop">
                <div className="loop loop1"></div>
                <div className="loop loop2"></div>
                <div className="loop loop3"></div>
                <div className="loop loop4"></div>
                <div className="loop loop5"></div>
                <div className="loop loop6"></div>
            </div>
        }
        {mistakes >= 5 &&
            <div className="hanger__prisoner">
                <div className="prisoner prisoner1"></div>
                <div className="prisoner prisoner2">+</div>
                <div className="prisoner prisoner3">+</div>
                <div className="prisoner prisoner4"></div>
                <div className="prisoner prisoner5"></div>
                <div className="prisoner prisoner6"></div>
                <div className="prisoner prisoner7"></div>
                <div className="prisoner prisoner8"></div>
                <div className="prisoner prisoner9"></div>
                <div className="prisoner prisoner10"></div>
                <div className="prisoner prisoner11"></div>
                <div className="prisoner prisoner12"></div>
            </div>
        }
    </div>
    )
}