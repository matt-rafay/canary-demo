var ref;

function checkRefresh() {
    const refresh = document.cookie.split('; ').find(row => row.startsWith('refresh='));
    if ( typeof refresh !== "undefined" ) {
        document.getElementById("check").checked = true;
        ref = setTimeout( function() { location.reload(); }, 1000 );
    }
}

function changeCookie() {
    if ( document.getElementById("check").checked ) {
        document.cookie = "refresh=1";
        ref = setTimeout( function() { location.reload(); }, 1000 );
    } else {
        document.cookie = "refresh=0";
        clearTimeout(ref);
    }
}
