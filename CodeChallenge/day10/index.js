const clockTitle = document.querySelector(".js-clock");

const getClock = () => {
  const today = new Date();
  const christmasEve = new Date(today.getFullYear(), 11, 25); //월은 0부터 시작

  const dDayTotalMS = christmasEve - today;
  const dDayTotalSec = Math.floor(dDayTotalMS / 1000);
  const dDayTotalMin = Math.floor(dDayTotalSec / 60);
  const dDayTotalHour = Math.floor(dDayTotalMin / 60);
  const dDayTotalDate = Math.floor(dDayTotalHour / 24);

  const dDaySec = String(dDayTotalSec - dDayTotalMin * 60).padStart(2, "0");
  const dDayMin = String(dDayTotalMin - dDayTotalHour * 60).padStart(2, "0");
  const dDayHour = String(dDayTotalHour - dDayTotalDate * 24).padStart(2, "0");
  const dDayDate = String(dDayTotalDate).padStart(2, "0");

  clockTitle.innerText = `${dDayDate}d : ${dDayHour}h : ${dDayMin}m : ${dDaySec}s`;
};

getClock();
setInterval(getClock, 1000);
