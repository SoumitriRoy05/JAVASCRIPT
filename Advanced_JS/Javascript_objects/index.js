// var houseKeeper1=
// {
//     yearsofExperience: 12,
//     name: "May",
//     cleaningRepertoire: ["bathroom", "lobby","bedroom"];
// }

function houseKeeper2(yearsOfExperience, name, cleaningRepertoire)
{
    this.yearsOfExperience=yearsOfExperience;
    this.name=name;
    this.cleaningRepertoire=cleaningRepertoire;
    this.clean=function()
    {
        alert("Cleaning in progress...!");
    }
}