export default function Hanger({mistakes}) {
    return ( 
        <div className={`hanger ${mistakes >= 1 ? 'dark' : ''}`}>   
            <div className="landscape">             
                <div className="sun"></div>
                <div class="cartoon hb">
                        <div class="minar-top minar-top-2"></div>
                        <div class="minar-top"></div>
                        <div class="minar ha"></div>
                        <div class="main-roof-behind"></div>
                        <div class="main-roof ha"></div>
                        <div class="main-top"></div>
                        <div class="flag flag-4"></div>
                        <div class="main-tower-roof"></div>
                        <div class="main-tower"></div>
                        <div class="room-1"></div>
                        <div class="room-2"></div>
                        <div class="room-3 ha"></div>
                        <div class="window-curved"></div>
                        <div class="flag-pole-top"></div>
                    </div>
                    <div className="mountain mountain1"></div>
                    <div className="mountain mountain2"></div>
                    <div className="mountain mountain3"></div>
                    <div className="mountain mountain4"></div>
                
            </div>
            {mistakes >= 1 &&
                <div className="fog__container">
                    <div className="fog__img fog__img--first"></div>
                    <div className="fog__img fog__img--second"></div>
                </div>
            }
            {mistakes >=2 &&
                <div className="hanger__moon">
                    <div className="moon-spot moon-spot-1"></div>
                    <div className="moon-spot moon-spot-2"></div>
                    <div className="moon-spot moon-spot-3"></div>
                    <div className="moon-spot moon-spot-4"></div>
                    <div className="moon-spot moon-spot-5"></div>
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
                    <svg viewBox="190 120 60 140" width="50" height="140">
                        <path className="path" fill="none" stroke="black" strokeWidth="6" 
                            d="M 217.402 104.366 C 217.402 104.366 216.74693458493556 122.46719184273911 217.007 132.799 
                            C 217.31925771889007 145.20428982447092 222.46962698512175 163.11106748129066 219.638 173.709 
                            C 217.55700674893546 181.49753505866113 210.59937202058626 185.70912710735968 207.386 192.151 
                            C 204.2805231782892 198.37657451435462 200.9478984438548 205.02772272798416 200.509 211.653 
                            C 200.06986030389626 218.281919032574 200.84564107946403 226.881774162771 204.758 231.914 
                            C 208.89490500159997 237.23504560395526 219.00638975418426 242.2657024253784 225.541 242.103 
                            C 231.51894164415575 241.95415782461586 238.9424067849984 237.51537179617247 242.488 232.721 
                            C 246.14350910569897 227.7779992962359 247.1747405060578 219.1029574013845 246.747 212.576 
                            C 246.32782510280356 206.17974652625995 243.22387155951176 199.33505344009538 240.167 193.929 
                            C 237.3627231092663 188.96965825567347 234.00916181493685 183.75185192433196 229.574 181.095 
                            C 225.23527117611061 178.49591556838288 213.92872302301853 178.78221631189945 213.962 177.952 
                            C 213.99468516067697 177.13654871768537 229.15790586184715 177.08205682086947 229.218 176.135   
                            C 229.28108226839052 175.14085157901283 212.790045464574 173.33314165109593 212.795 172.024 
                            C 212.79966615366365 170.79105773873263 227.38721351456988 169.68197806610792 227.389 168.488 
                            C 227.39081085911428 167.27773204774647 212.3347839441396 165.5475908798723 212.405 164.81 
                            C 212.47405624518723 164.08459245575392 227.06538321095982 165.28965448590426 227.309 164.051 
                            C 227.57606019084443 162.69314898858502 211.078 156.424 211.078 156.424" 
                            data-bx-d="M 217.402 104.366 R 217.007 132.799 R 219.638 173.709 R 207.386 192.151 
                            R 200.509 211.653 R 204.758 231.914 R 225.541 242.103 R 242.488 232.721 R 246.747 212.576 
                            R 240.167 193.929 R 229.574 181.095 R 213.962 177.952 R 229.218 176.135 R 212.795 172.024 
                            R 227.389 168.488 R 212.405 164.81 R 227.309 164.051 R 211.078 156.424 1@73b6db69" 
                            transform="matrix(1, 0, 0, 1, 0, 7.105427357601002e-15)">
                        </path>
                    </svg>
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