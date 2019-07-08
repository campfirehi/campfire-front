document.addEventListener("DOMContentLoaded", event => {
    console.log('loaded');
});

function googleLogin() {
    console.log('test');
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)

        .then(result => {
            const user = result.user;
            document.write(`Hello ${user.displayName}`);
            console.log(user);
        })
        .catch(console.log);
}