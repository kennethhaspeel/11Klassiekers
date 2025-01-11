import { format} from "date-fns";

const GetDatumFromDate = (datum:Date)=>{
  return datum.setHours(0,0,0,0)
}
export const DatumVoorbij = (datum:string) => {
    const dat = new Date(datum);
    const vandaag = new Date();
    return GetDatumFromDate(dat) < GetDatumFromDate(vandaag) ? true : false;
  };

  export const DateToDDMMYYYY = (datum:Date, metTijd = false) => { 
    //const d = toZonedTime(datum,"Europe/Brussels")
    return metTijd ? format(datum,"dd/MM/yyyy HH:mm"): format(datum, "dd/MM/yyyy");
  };

