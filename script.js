let dice=document.getElementById("dice")
let btn=document.querySelector("Button")

btn.addEventListener("click",()=>{
  gsap.from("#dice",  { 
    rotation: 0,
    y:-120,  
    rotation:360, duration: 0.9, ease: "bounce.Out",
    display:"none"
  })
  // random value generator
  let randomValues=Math.floor((Math.random()*6) + 1)

  document.getElementById("mainDice").style.display="none"


  for(let i=1;i<=6;i++){
    document.getElementById(`dice-${i}`).style.display="none"
  }

  let currentDice=document.getElementById(`dice-${randomValues}`)
   currentDice.style.display = "block";

    // Update result text
  document.getElementById("result").textContent = `You rolled a ${randomValues}!`;
})


