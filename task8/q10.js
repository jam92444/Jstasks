// finding  past days in minutes

function pastMin(date){
    const now = new Date();
    const userDate = new Date(date);
    const diff = now.getDate() - userDate.getDate();
    if(diff <= 0 && months <=0){
        return;
    }
    const minutes = diff * (24 * 60);
    console.log(minutes); 
}
pastMin('2025-04-20')