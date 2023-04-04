const ageVerify = document.getElementById( "age-verify" );
const yes = document.querySelector( ".yes" );
const no = document.querySelector( ".no" );

no.addEventListener( "click", ()=>{
    ageVerify.classList.add( 'under' );
    sessionStorage.setItem('age', 'false');
    window.location.href = "https://www.tiktok.com/en/";
} )

yes.addEventListener( "click", ()=>{
    sessionStorage.setItem('age', 'true');
    window.location.href = "\profile.html";
} )