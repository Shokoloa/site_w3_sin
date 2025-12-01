export const Konami = () => {
    if (window.location < 767) return;
    let zeptoScript = document.createElement('script');
    zeptoScript.src = 'https://zeptojs.com/zepto.min.js';
    zeptoScript.type = 'text/javascript';
    zeptoScript.onload = function () {
        let konamiCode = '1000001111001011100101101111111011110101011110000O1000001111001011100101101111111011110101011110000O100000111100101110010110111111101111000100110111111101111101110O100000111100101110010110111111101111000100110111111101111101110O100000111100101110010110111111101111001100110010111001101110100O1000001111001011100101101111111011110100101101001110011111010001110100O100000111100101110010110111111101111001100110010111001101110100O1000001111001011100101101111111011110100101101001110011111010001110100O1100010O1100001'.split('O');
        let decoder = new TextDecoder(), konamiCodePosition = 0;

        $(document).keydown(function (e) {

            if (e.key === decoder.decode(new Uint8Array(konamiCode[konamiCodePosition].match(/.{1,7}/g).map((c) => parseInt(c, 2))))) {
                konamiCodePosition++;

                if (konamiCodePosition === konamiCode.length) {
                    //console.log("Konami Code Enabled");
                    konamiCodePosition = 0;

                    window.location.href = '/secret';
                }
            } else konamiCodePosition = 0;
        });
    };

    document.head.appendChild(zeptoScript);
}