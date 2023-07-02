const photoMain = document.querySelector('.photo');
const form = document.querySelector("form");


let sum = 0;

document.querySelector('.plus').addEventListener('click', (ev) => {
    ev.preventDefault();
    sum ++;
    //console.log(amount);
    document.querySelector('.amount').innerHTML = `<input type="hidden" id="amount" name="amount" value="${sum}" />`+ sum;
});
document.querySelector('.minus').addEventListener('click', (ev) => {
    ev.preventDefault();
    sum --;
    //console.log(amount);
    if(sum < 0){
        sum = 0;
    } 
     document.querySelector('.amount').innerHTML = `<input type="hidden" id="amount" name="amount" value="${sum}" />`+ sum;
});

form.addEventListener("submit", async(ev) => {
    ev.preventDefault();
    const formData = new FormData(ev.target);
    
    const result = await axios.post('/add-order',  formData);
    //console.log(result.data);

    const photo = formData.get('photo');
    const reader = new FileReader();

    const readFile = await new Promise((resolve) => {
        reader.onload = (ev) => {
            const {result} = ev.target;
            resolve(result);
        }
        reader.readAsDataURL(photo);
    });
    photoMain.src = readFile;
 
});




