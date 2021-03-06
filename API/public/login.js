(function () {

  firebase.initializeApp(config);

  login.addEventListener('click', e =>{

    const email = document.getElementById('email').value;
    const pass = document.getElementById('pass').value;
    const auth = firebase.auth();

    //Log in
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));

  });

  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser){
      console.log('Logged in');
      window.location.href = "/cms/";
    } else {
      console.log('Not logged in');
      if(config.apiKey == "<your-apikey>"){
        window.location.href = "/cms/setup/";
      }


    }
  });


}());
