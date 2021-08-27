$(window).load(() => {
    $("button.MuiFab-root:contains('Fill')").click(() => {
        console.log(data);
        localStorage.setItem('data', JSON.stringify(data))
        alert("No filling introduced yet");
    })
})
