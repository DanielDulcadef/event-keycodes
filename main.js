window.addEventListener("keydown", (e) => {
    document.getElementById("insert").innerHTML = `
    <div class=keypress >
    <div class=minikeys>
    <div class=miniletter>event.key</div>
    <div class=keysall >${e.key}</div>
    </div>
    <div class=minikeys>
    <div class=miniletter>event.key.code</div>
    <div class=keysall > ${e.keyCode}</div>
    </div>
    <div class=minikeys>
    <div class=miniletter>event.code</div>
    <div class=keysall >${e.code}</div>
    </div>
    </div>
    `;
});

